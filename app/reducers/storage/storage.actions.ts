import actionTypes from './storage.actionTypes';

export const persistValue = (path, value, spread) => (dispatch, getState) => {
  const key = path.split('.')[0];

  const lastKey = path.split('.').reverse()[0];

  const oldState = getState().storage;

  const newState = {...oldState};

  if (!(key in newState)) {
    newState[key] = {};
  }

  if (spread) {
    newState[key] = {
      ...newState[key],
      ...{
        [lastKey]: value,
      },
    };
  } else {
    newState[key] = value;
  }

  return dispatch({
    type: actionTypes.SET_STATE,
    payload: {
      key,
      value: newState[key],
    },
  });
};

export const removeValue = (key, value) => async (dispatch, getState) =>
  dispatch({
    type: actionTypes.REMOVE_STATE,
    payload: {
      key,
      value,
    },
  });

export default {
  persistValue,
  removeValue,
};
