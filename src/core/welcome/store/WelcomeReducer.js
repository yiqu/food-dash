import * as  fromWelcomeActions from './WelcomeActions';

export const welcomeInitialState = {
};

export const welcomeReducer = (state, action) => {
  console.log(action);
  if (action.type === fromWelcomeActions.GET_WELCOME_MESSAGE_START) {

    return {
      ...state,
    };
  };

  if (action.type === fromWelcomeActions.GET_WELCOME_MESSAGE_SUCCESS) {

    return {
      ...state,
    };
  };

  if (action.type === fromWelcomeActions.GET_WELCOME_MESSAGE_FAILED) {

    return {
      ...state,
    };
  };

  if (action.type === fromWelcomeActions.UPDATE_WELCOME_MESSAGE_START) {

    return {
      ...state
    };
  };

  if (action.type === fromWelcomeActions.UPDATE_WELCOME_MESSAGE_SUCCESS) {

    return {
      ...state
    };
  };

  if (action.type === fromWelcomeActions.UPDATE_WELCOME_MESSAGE_FAILED) {

    return {
      ...state
    };
  };

  return {
    ...state
  };
};;