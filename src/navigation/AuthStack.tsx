import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup} from '../screens/index';
import {AuthStackParams} from '../types';

const AuthStack = createStackNavigator<AuthStackParams>();


function AuthNavigator() {

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Signup' component={Signup} />
      <AuthStack.Screen name='Login' component={Login} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator;