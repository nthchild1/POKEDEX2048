import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Categories from './Categories/Categories';
import Pokedex from './Pokedex/Pokedex';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          // You can return any component that you like here!
          return (
            <Image
              style={{width: 20, height: 20}}
              source={{
                uri:
                  route.name === 'Pokedex'
                    ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png'
                    : 'https://img.icons8.com/fluent/452/pokemon.png',
              }}
            />
          );
        },
      })}
      initialRouteName="Pokedex">
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
}

export default TabsNavigation;
