import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import TabsNavigation from './TabsNavigation';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Text>Drawer Content</Text>}>
      <Drawer.Screen name="TabsNavigation" component={TabsNavigation} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
