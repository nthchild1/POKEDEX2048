import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {default as app} from './app/app.reducer';
import {default as storage} from './storage/storage.reducer';

const storagePersistConfig = {
  key: 'storage',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  storage: persistReducer(storagePersistConfig, storage),
  app,
});

export default rootReducer;
