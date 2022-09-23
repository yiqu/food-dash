import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useReducer } from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import DUMMY_MEALS from "./DUMMY_MEALS";
import * as fromCartReducer from './CartReducer';


const MealsContext = React.createContext({
  mealsAvailable: [],
  mealsInCart: [],
  addMealToCart: () => {},
  deleteMealFromCart: () => {}
});

export const MealsProvider = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [mealsAvailable, setMealsAvailable] = useState(DUMMY_MEALS);

  // eslint-disable-next-line no-unused-vars
  const [cartState, dispatchCartAction] = useReducer(fromCartReducer.cartReducer,
    fromCartReducer.cartInitialState);
  
  const addMealsToCartHandler = (payload) => {
    console.log(payload);
  };

  const deleteMealsFromCartHandler = (payload) => {
    console.log(payload);
  };

  return (
    <MealsContext.Provider 
      value={ {
        mealsAvailable: mealsAvailable,
        mealsInCart: cartState.itemsInCart,
        addMealToCart: addMealsToCartHandler,
        deleteMealFromCart: deleteMealsFromCartHandler
      } } >
      { props.children }
    </MealsContext.Provider>
  );

};


export default MealsContext;