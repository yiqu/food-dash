import * as  fromCartActions from './CartActions';

export const cartInitialState = {
  apiLoading: false,
  mealsAvailable: [],
  totalItemsCount: 0,
  totalMealsCost: 0,

  isMenuLoading: false,
  menuError: undefined,

  isCartAddLoading: false,
  cartAddError: undefined,

  isCartGetLoading: false,
  cartGetLastFetch: 0,
  itemsInCart2: [],
  cartGetError: undefined
};

export const cartReducer = (state, action) => {
  if (action.type === fromCartActions.MEAL_ADD_START) {

    return {
      ...state,
      isCartAddLoading: true
    };
  };

  if (action.type === fromCartActions.MEAL_ADD_SUCCESS) {
    return {
      ...state,
      isCartAddLoading: false
    };
  }

  if (action.type === fromCartActions.MEAL_ADD_ERROR) {
    return {
      ...state,
      isCartAddLoading: false,
      cartAddError: action.payload
    };
  }

  if (action.type === fromCartActions.MEAL_DELETE_START) {
    // const mealsInCartResult = JSON.parse(JSON.stringify(state.itemsInCart));
    // const indexOfMeal = state.itemsInCart.findIndex((meal) => {
    //   return meal.id === action.payload.meal.id;
    // });
    // if (indexOfMeal > -1 && ((+mealsInCartResult[indexOfMeal].countInCart) > 0)) {
    //   mealsInCartResult[indexOfMeal].countInCart--;
    //   if (mealsInCartResult[indexOfMeal].countInCart === 0) {
    //     mealsInCartResult.splice(indexOfMeal, 1);
    //   }
    // }
    // const totalCount = (+state.totalItemsCount) - (+action.payload.amount);
    // const totalCost = mealsInCartResult.reduce((prev, curr) => {
    //   let cost = (prev) + (curr.price * curr.countInCart);
    //   return cost;
    // }, 0);
    return {
      ...state
    };
  };

  if (action.type === fromCartActions.MEAL_DELETE_SUCCESS) {
    return {
      ...state
    };
  }

  if (action.type === fromCartActions.MEAL_DELETE_FAILED) {
    return {
      ...state
    };
  }

  if (action.type === fromCartActions.REFRESH_MENU_START) {
    const newMenu = [...state.mealsAvailable];
    newMenu.unshift({
      id: Math.random() + '',
      name: new Date().getTime(),
      description: 'Random meal name',
      price: 24,
    });
    return {
      ...state,
      mealsAvailable: newMenu
    };
  };

  if (action.type === fromCartActions.GET_ALL_MENU) { 
    return {
      ...state,
      isMenuLoading: true
    };
  };

  if (action.type === fromCartActions.GET_ALL_MENU_SUCCESS) { 
    return {
      ...state,
      isMenuLoading: false,
      mealsAvailable: action.payload
    };
  };

  if (action.type === fromCartActions.GET_ALL_MENU_FAILED) { 
    return {
      ...state,
      isMenuLoading: false,
      menuError: action.payload
    };
  };

  if (action.type === fromCartActions.GET_CART_START) { 
    return {
      ...state,
      isCartGetLoading: true,
      cartGetLastFetch: new Date().getTime()
    };
  };

  if (action.type === fromCartActions.GET_CART_SUCCESS) { 
    let totalItemsInCart = 0;
    let totalCost = 0;
    const mealsInCartResult= [];
    const mealsInCartResultObj = {};

    action.payload.forEach((mealItem) => {
      totalItemsInCart = totalItemsInCart + mealItem.amount;
      totalCost = totalCost + ((+mealItem.amount) * (+mealItem.meal.price));
      
      const exist = !!mealsInCartResultObj[mealItem.meal.id];
      if (exist) {
        mealsInCartResultObj[mealItem.meal.id].countInCart = mealsInCartResultObj[mealItem.meal.id].countInCart + mealItem.amount;
      } else {
        mealsInCartResultObj[mealItem.meal.id] = {
          ...mealItem.meal,
          countInCart: (+mealItem.amount)
        };
      }
    });

    for (const property in mealsInCartResultObj) {
      mealsInCartResult.push(mealsInCartResultObj[property]);
    }
    return {
      ...state,
      isCartGetLoading: false,
      itemsInCart2: mealsInCartResult,
      totalItemsCount: totalItemsInCart,
      totalMealsCost: totalCost
    };
  };

  if (action.type === fromCartActions.GET_CART_ERROR) { 
    return {
      ...state,
      isCartGetLoading: false,
      cartGetError: action.payload
    };
  };

  return {
    ...state
  };
};;