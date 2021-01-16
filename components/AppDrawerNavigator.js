import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import SettingsScreen from "../screens/SettingsScreen";
import MyDonationsScreen from "../screens/MyDonationsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Donations: {
      screen: MyDonationsScreen,
    },
    Notification: {
      screen: NotificationsScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
