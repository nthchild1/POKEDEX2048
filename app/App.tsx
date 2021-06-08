import React, {useEffect} from 'react';
import AppNavigator from './routes/AppNavigator';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const Initializer: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default Initializer;
