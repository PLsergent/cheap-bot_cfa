import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import{ HomeStack, SearchStack, StatsStack, BotStack } from './NavigationStack';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search1" />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsStack}
        options={{
          title: 'Stats',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="barschart" />,
        }}
      />
      <BottomTab.Screen
        name="Bot"
        component={BotStack}
        options={{
          title: 'Bot',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="android1" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
