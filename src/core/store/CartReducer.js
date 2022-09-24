import * as  fromCartActions from './CartActions';
import DUMMY_MEALS from './DUMMY_MEALS';

export const cartInitialState = {
  apiLoading: false,
  mealsAvailable: [...DUMMY_MEALS],
  itemsInCart: [],
  totalItemsCount: 0,
  totalMealsCost: 0
};

export const cartReducer = (state, action) => {
  if (action.type === fromCartActions.MEAL_ADD_START) {

    const indexOfMealToAdd = state.itemsInCart.findIndex((meal) => {
      return meal.id === action.payload.meal.id;
    });
    const mealsInCartResult = JSON.parse(JSON.stringify(state.itemsInCart));

    if (indexOfMealToAdd > -1) {
      mealsInCartResult[indexOfMealToAdd].countInCart = mealsInCartResult[indexOfMealToAdd].countInCart + action.payload.amount;
    } else {
      const newMeal = {
        ...action.payload.meal,
        countInCart: action.payload.amount
      };
      mealsInCartResult.unshift(newMeal);
    }

    const totalCount = (+state.totalItemsCount) + (+action.payload.amount);
    const totalCost = mealsInCartResult.reduce((prev, curr) => {
      let cost = (prev) + (curr.price * curr.countInCart);
      return cost;
    }, 0);
    return {
      ...state,
      itemsInCart: mealsInCartResult,
      totalItemsCount: totalCount,
      totalMealsCost: totalCost
    };
  }
  if (action.type === fromCartActions.MEAL_DELETE_START) {
    const mealsInCartResult = JSON.parse(JSON.stringify(state.itemsInCart));
    const indexOfMeal = state.itemsInCart.findIndex((meal) => {
      return meal.id === action.payload.meal.id;
    });
    if (indexOfMeal > -1 && ((+mealsInCartResult[indexOfMeal].countInCart) > 0)) {
      mealsInCartResult[indexOfMeal].countInCart--;
      if (mealsInCartResult[indexOfMeal].countInCart === 0) {
        mealsInCartResult.splice(indexOfMeal, 1);
      }
    }
    const totalCount = (+state.totalItemsCount) - (+action.payload.amount);
    const totalCost = mealsInCartResult.reduce((prev, curr) => {
      let cost = (prev) + (curr.price * curr.countInCart);
      return cost;
    }, 0);
    return {
      ...state,
      itemsInCart: mealsInCartResult,
      totalItemsCount: totalCount,
      totalMealsCost: totalCost
    };
  }
  return {
    ...state
  };
};;