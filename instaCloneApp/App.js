import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
//import InstaClone from './src/InstaClone.js'
import Navigation from './src/navigations/navigation'
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

export default createAppContainer(Navigation)

