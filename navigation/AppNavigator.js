import React from 'react';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TabBarComponent = ({ navigation }) => {
  const onSelect = index => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
        <BottomNavigationTab title="HOME" />
        <BottomNavigationTab title="LINKS" />
        <BottomNavigationTab title="SETTINGS" />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Links: LinksScreen,
    Settings: SettingsScreen
  },
  {
    tabBarComponent: TabBarComponent
  }
);

const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;
