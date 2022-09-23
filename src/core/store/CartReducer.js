import * as  fromCartActions from './CartActions';

export const cartInitialState = {
  apiLoading: false,
  itemsInCart: []
};

export const cartReducer = (state, action) => {
  console.log(action);
  if (action.type === fromCartActions.MEAL_ADD_START) {
    return {
      ...state,
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
};