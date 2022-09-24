import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useReducer } from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import * as fromCartReducer from './CartReducer';
import * as fromCartActions from './CartActions';


const MealsContext = React.createContext({
  mealsAvailable: [],
  mealsInCart: [],
  totalMealsCount: 0,
  totalMealsCost: 0,
  addMealToCart: () => {},
  deleteMealFromCart: () => {}
});

export const MealsProvider = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [cartState, dispatchCartAction] = useReducer(fromCartReducer.cartReducer,
    fromCartReducer.cartInitialState);
  
  const addMealsToCartHandler = (payload) => {
    dispatchCartAction({ type: fromCartActions.MEAL_ADD_START, payload: payload });
  };

  const deleteMealsFromCartHandler = (payload) => {
    dispatchCartAction({ type: fromCartActions.MEAL_DELETE_START, payload: payload });
  };

  return (
    <MealsContext.Provider 
      value={ {
        mealsAvailable: cartState.mealsAvailable,
        mealsInCart: cartState.itemsInCart,
        totalMealsCount: cartState.totalItemsCount,
        totalMealsCost: cartState.totalMealsCost,
        addMealToCart: addMealsToCartHandler,
        deleteMealFromCart: deleteMealsFromCartHandler
      } } >
      { props.children }
    </MealsContext.Provider>
  );

};


export default MealsContext;