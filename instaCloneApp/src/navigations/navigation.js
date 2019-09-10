import React from 'react';
import { Image } from 'react-native';
import config from "../config/index"
import { createBottomTabNavigator } from 'react-navigation';

import instaHome from '../instaHome';
import instaClone from '../InstaClone';
import instaSearch from '../instaSearch';
import instaAdd from '../instaAdd';
import instaLike from '../instaLike';

export default createBottomTabNavigator(
  {

    instaHome: {
      screen: instaHome, navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ height: 30, width: 30 }}
            source={{ uri: "https://cdn3.iconfinder.com/data/icons/instagram-18/512/197_Home_Instagram_Interface-512.png" }} />
        )
      }
    },
    instaSearch: {
      screen: instaSearch, navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ height: 30, width: 30 }}
            source={config.images.searchIcon} />
        )
      }
    },
    instaAdd: {
      screen: instaAdd, navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ height: 30, width: 30 }}
            source={config.images.addIcon} />
        )
      }
    },
    instaLike: {
      screen: instaLike, navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ height: 30, width: 30 }}
            source={config.images.heartIcon} />
        )
      }
    },
    instaClone: {
      screen: instaClone, navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ height: 30, width: 30, borderRadius: 15, overflow: "hidden" }}
            source={{ uri: "https://media.licdn.com/dms/image/C5603AQGgC6Rg0o1x2w/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=VVMiFlu-endytob8rgMXW9UJkyYxozjOAaQm4Uv9ruU" }} />
        )
      }
    },

  },
  {
    initialRouteName: "instaClone",
  }
);
