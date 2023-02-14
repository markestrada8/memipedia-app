import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import AccountScreen from "../screens/AccountScreen"
import FeedScreen from "../screens/FeedScreen"
import PostFormScreen from "../screens/PostFormScreen"
import SearchScreen from "../screens/SearchScreen"
import HeaderLogo from "../components/images/HeaderLogo"
import AuthScreen from "../screens/auth/AuthScreen"
import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";

import { colors } from '../styles/colors'


const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      header: () => false
    }
  }
)

const AppStack = createStackNavigator(
  {
    // navigation.navigate is being passed automatically by createStackNavigator as props
    Feed: FeedScreen,
    Search: SearchScreen,
    Account: AccountScreen,
    PostForm: PostFormScreen
  },
  {
    initialRouteName: 'Feed',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.dark,
      },
      headerTintColor: '#fff',
      headerTitle: () => <HeaderLogo />
    }
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)