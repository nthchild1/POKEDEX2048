import actionTypes from './storage.actionTypes';

const initialState = {};

const storageReducer = (state, action) => {
  let newState = {...state};

  switch (action.type) {
    case actionTypes.SET_STATE: {
      newState = {...newState, [action.payload.key]: action.payload.value};
      break;
    }
    default:
      break;
  }

  return newState;
};

export default storageReducer;
