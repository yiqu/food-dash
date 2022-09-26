import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useReducer } from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import * as fromCartReducer from './CartReducer';
import * as fromCartActions from './CartActions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { menuRef } from '../api/MenuApi';

const MealsContext = React.createContext({
  mealsAvailable: [],
  mealsInCart: [],
  totalMealsCount: 0,
  totalMealsCost: 0,
  menuLoaded: false,
  menuError: false,
  addMealToCart: () => {},
  deleteMealFromCart: () => {},
  refreshMenu: () => {}
});

export const MealsProvider = (props) => {

  const [menuItems, menuLoading, menuError] = useCollection(menuRef, {});

  useEffect(() => {
    if (menuItems) {
      const result = menuItems.docs.map((res) => {
        return {
          ...res.data(),
          id: res.id
        };
      });
      dispatchCartAction({ type: fromCartActions.GET_ALL_MENU, payload: result });
    }
  }, [menuItems]);

  // eslint-disable-next-line no-unused-vars 
  const [cartState, dispatchCartAction] = useReducer(fromCartReducer.cartReducer,
    fromCartReducer.cartInitialState);
  
  const addMealsToCartHandler = (payload) => {
    dispatchCartAction({ type: fromCartActions.MEAL_ADD_START, payload: payload });
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
        menuLoaded: !menuLoading,
        menuError: menuError,
        mealsInCart: cartState.itemsInCart,
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