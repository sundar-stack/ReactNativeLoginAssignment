import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import ResetPassword from '../screens/ResetPassword';
import CreateProfile from '../screens/Register/CreateProfile';
import { BG_COLOR, BTN_PRIMARY_COLOR, BTN_SECONDARY_COLOR } from '../constants';
import PersonalDetails from '../screens/Register/PersonalDetails';
import TNC from '../screens/TNC';


const LoginStack = createStackNavigator();

export const LoginStackNavigator = ()=> {
        return (
            <LoginStack.Navigator
            initialRouteName="Login"
            headerMode="screen"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: BTN_PRIMARY_COLOR },
    }}
            >
            <LoginStack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <LoginStack.Screen name="ResetPassword" component={ResetPassword}/>
            <LoginStack.Screen name="Register" component={RegisterStackNavigator} options={{ headerShown: false }}/>
          </LoginStack.Navigator>
        )
}

const RegisterStack = createStackNavigator();

const RegisterStackNavigator = () =>{
           return(
            <RegisterStack.Navigator
            initialRouteName="CreateProfile"
            headerMode="float"
          screenOptions={{
          headerTintColor: 'white',
           headerStyle: { backgroundColor: BTN_SECONDARY_COLOR },
            }}
            >
            <RegisterStack.Screen name="CreateProfile" component={CreateProfile} />
            <RegisterStack.Screen name="TNC" component={TNC} />
            <RegisterStack.Screen name="PersonalDetails" component={PersonalDetails}/>
             </RegisterStack.Navigator>
           )
}

