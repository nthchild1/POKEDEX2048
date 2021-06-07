import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import reducer from './reducers/index';

const buildStore = () => {
  const persistedReducer = reducer;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [thunk];
  const composedMiddleware = applyMiddleware(...middleware);
  const initialState = {};
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(composedMiddleware),
  );
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default buildStore;
