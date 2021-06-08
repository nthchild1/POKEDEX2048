import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import TabsNavigation from './TabsNavigation';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="TabsNavigation"
        options={{title: 'Pokedex'}}
        component={TabsNavigation}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
