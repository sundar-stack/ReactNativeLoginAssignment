import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import { LoginStackNavigator } from './StackNavigator';
import MyProfile from '../screens/MyProfile';
import { BG_COLOR, FONT_COLOR } from '../constants';

const DrawerStack = createDrawerNavigator();

export const MainDrawerStackNavigator = () => {
        return(
            <DrawerStack.Navigator initialRouteName="Login"
            screenOptions={{
                swipeEnabled: true
              }}
              initialRouteName="Login"
              drawerType="slide"
              drawerStyle={{
                backgroundColor: BG_COLOR,
              }}
              drawerContentOptions={{
                activeTintColor: '#000',
                labelStyle: {
                  color: 'white'
                }
              }}
            >
            <DrawerStack.Screen name="Login" component={LoginStackNavigator} options={{ headerShown: false }}/>
            <DrawerStack.Screen name="Home" component={Home}/>
            <DrawerStack.Screen name="MyProfile" component={MyProfile}/>
            <DrawerStack.Screen name="Contact" component={Contact}/>
             </DrawerStack.Navigator>
        )
}


