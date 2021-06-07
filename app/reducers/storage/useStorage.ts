import {useDispatch, useSelector} from 'react-redux';
import storageActions from './storage.actions';

export function useStorage() {
  const StoreDispatch = useDispatch();
  const writeToStorage = (path, value, spread) => {
    StoreDispatch(storageActions.persistValue(path, value, spread));
  };

  const useGetFromStorage = (selector: Function) => {
    return useSelector(selector);
  };

  const dispatch = (args) => Promise.resolve(StoreDispatch(args));

  return {
    writeToStorage,
    getFromStorage: useGetFromStorage,
    dispatch,
  };
}
