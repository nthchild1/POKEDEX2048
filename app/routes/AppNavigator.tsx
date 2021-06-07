import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {normalizePx} from '../../src/utils/utilFunctions';
import DrawerNavigation from './DrawerNavigation';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const {Navigator, Screen} = createStackNavigator();

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#d91616',
  },
  headerTitleStyle: {
    color: 'white',
  },
});

const HeaderTitle = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
      <Image
        style={{width: normalizePx(269 / 3), height: normalizePx(99 / 3)}}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png',
        }}
      />
    </TouchableOpacity>
  );
};

function AppNavigator() {
  const {headerStyle, headerTitleStyle} = styles;

  return (
    <Navigator
      screenOptions={{
        headerStyle,
        headerTitleStyle,
        headerTitle: HeaderTitle,
      }}>
      <Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Navigator>
  );
}

export default AppNavigator;
