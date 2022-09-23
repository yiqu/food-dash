import * as  fromCartActions from './CartActions';
import DUMMY_MEALS from './DUMMY_MEALS';

export const cartInitialState = {
  apiLoading: false,
  mealsAvailable: [...DUMMY_MEALS],
  itemsInCart: [],
  totalItemsCount: 0
};

export const cartReducer = (state, action) => {
  console.log(action);
  if (action.type === fromCartActions.MEAL_ADD_START) {

    const indexOfMealToAdd = state.itemsInCart.findIndex((meal) => {
      return meal.id === action.payload.meal.id;
    });
    const mealsInCartResult = JSON.parse(JSON.stringify(state.itemsInCart));

    if (indexOfMealToAdd > -1) {
      // update existing count by amount
      mealsInCartResult[indexOfMealToAdd].countInCart++;
    } else {
      // add as a new meal item
      const newMeal = {
        ...action.payload.meal,
        countInCart: 1
      };
      mealsInCartResult.unshift(newMeal);
    }

    const totalCount = (+state.totalItemsCount) + (+action.payload.amount);
console.log(mealsInCartResult);
    return {
      ...state,
      itemsInCart: mealsInCartResult,
      totalItemsCount: totalCount
    };
  }
  if (action.type === fromCartActions.MEAL_DELETE_START) {
    return {
      ...state,
    };
  }
  return {
    ...state
  };
};;