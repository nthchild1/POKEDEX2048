import {prefixes} from '../../../src/constants';

const actionTypes = {
  SET_STATE: `${prefixes.storageReducerPrefix}SET_STATE`,
  REMOVE_STATE: `${prefixes.storageReducerPrefix}REMOVE_STATE`,
  CLEAR_STATE: `${prefixes.storageReducerPrefix}CLEAR_STATE`,
};

export default actionTypes;
