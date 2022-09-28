import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useReducer } from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import * as fromCartReducer from './CartReducer';
import * as fromCartActions from './CartActions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { menuRef } from '../../shared/rest/fire-rest';
import { convertDataToCollection, mapToDataWithId } from './firebase-utils';
import { axiosPost, axiosGet } from '../../shared/rest/axios-rest';
import { useUpdateEffect, useEffectOnce } from 'react-use';

const MealsContext = React.createContext({
  mealsAvailable: [],
  mealsInCart: [],
  totalMealsCount: 0,
  totalMealsCost: 0,
  menuLoading: false,
  menuError: false,
  cartLoading: false,
  cartError: false,
  addMealToCart: () => {},
  deleteMealFromCart: () => {},
  refreshMenu: () => {}
});

export const MealsProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(fromCartReducer.cartReducer,
    fromCartReducer.cartInitialState);

  const [menuItems, menuLoading, menuError] = useCollection(menuRef, {});

  useEffect(() => {
    if (menuLoading) {
      dispatchCartAction({ type: fromCartActions.GET_ALL_MENU });
    } else {
      if (menuError) {
        dispatchCartAction({ type: fromCartActions.GET_ALL_MENU_FAILED, payload: menuError });
      } else if (menuItems) {
        const result = menuItems.docs.map((res) => mapToDataWithId(res));
        dispatchCartAction({ type: fromCartActions.GET_ALL_MENU_SUCCESS, payload: result });
      }
    }
  }, [menuItems, menuLoading, menuError]);

  useUpdateEffect(() => {
    getCartMeals();
  }, [cartState.cartGetLastFetch]);

  useEffectOnce(() => {
    dispatchCartAction({ type: fromCartActions.GET_CART_START });
  }, []);
  
  const addMealsToCartHandler = (payload) => {
    dispatchCartAction({ type: fromCartActions.MEAL_ADD_START, payload: payload });
    axiosPost('shopping-cart', null, payload)
      .then((res) => {
        if (res.status === 200) {
          dispatchCartAction({ type: fromCartActions.MEAL_ADD_SUCCESS, payload: payload });
        }
      })
      .catch((err) => {
        dispatchCartAction({ type: fromCartActions.MEAL_ADD_ERROR, payload: err });
      })
      .finally(() => {
        dispatchCartAction({ type: fromCartActions.GET_CART_START });
      });
  };

  const getCartMeals = () => {
    axiosGet('shopping-cart')
      .then((res) => {
        if (res.status === 200) {
          dispatchCartAction({ type: fromCartActions.GET_CART_SUCCESS, payload: convertDataToCollection(res.data) });
        }
      })
      .catch((err) => {
        dispatchCartAction({ type: fromCartActions.GET_CART_ERROR, payload: err });
      })
      .finally(() => {
      });
  };

  const deleteMealsFromCartHandler = (payload) => {
    dispatchCartAction({ type: fromCartActions.MEAL_DELETE_START, payload: payload });
  };

  const refreshMenuHandler = () => {
    dispatchCartAction({ type: fromCartActions.REFRESH_MENU_START });
  };

  return (
    <MealsContext.Provider 
      value={ {
        mealsAvailable: cartState.mealsAvailable,
        menuLoading: cartState.isMenuLoading,
        menuError: cartState.menuError,
        cartLoading: cartState.isCartAddLoading,
        cartError: cartState.cartAddError,
        mealsInCart: cartState.itemsInCart2,
        totalMealsCount: cartState.totalItemsCount,
        totalMealsCost: cartState.totalMealsCost,
        addMealToCart: addMealsToCartHandler,
        deleteMealFromCart: deleteMealsFromCartHandler,
        refreshMenu: refreshMenuHandler
      } } >
      { props.children }
    </MealsContext.Provider>
  );

};


export default MealsContext;