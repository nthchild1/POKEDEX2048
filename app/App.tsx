import React, {useEffect} from 'react';
import buildStore from './store';
import AppNavigator from './routes/AppNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const Initializer: () => React$Node = () => {
  const {store, persistor} = buildStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Provider {...{store}}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default Initializer;
