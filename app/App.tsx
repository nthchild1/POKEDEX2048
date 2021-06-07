import React, {useEffect} from 'react';
import buildStore from './store';
import AppNavigator from './routes/AppNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const Initializer: () => React$Node = () => {
  const {store, persistor} = buildStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <NavigationContainer>
      <Provider {...{store}}>
        <PersistGate persistor={persistor}>
          <ApolloProvider client={client}>
            <SafeAreaProvider>
              <AppNavigator />
            </SafeAreaProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default Initializer;
