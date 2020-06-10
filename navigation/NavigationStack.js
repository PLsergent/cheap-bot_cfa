import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import StatsScreen from '../screens/SearchScreen';
import BotScreen from '../screens/BotScreen';

const HomeStackNavigator = createStackNavigator();
const SearchStackNavigator = createStackNavigator();
const StatsStackNavigator = createStackNavigator();
const BotStackNavigator = createStackNavigator();


export function HomeStack() {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Feed" component={HomeScreen} />
    </HomeStackNavigator.Navigator>
  );
}

export function SearchStack() {
  return (
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Screen name="Search" component={SearchScreen} />
    </SearchStackNavigator.Navigator>
  );
}

export function StatsStack() {
  return (
    <StatsStackNavigator.Navigator>
      <StatsStackNavigator.Screen name="Stats" component={StatsScreen} />
    </StatsStackNavigator.Navigator>
  );
}

export function BotStack() {
  return (
    <BotStackNavigator.Navigator>
      <BotStackNavigator.Screen name="Bot" component={BotScreen} />
    </BotStackNavigator.Navigator>
  );
}