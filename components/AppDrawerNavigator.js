import React, { Components } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import { AppTabNavigator } from './AppTabNavigator';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Settings: {
      screen: SettingScreen,
    },
  },
  { contentComponent: CustomSideBarMenu },
  { initialRouteName: 'Home' }
);
