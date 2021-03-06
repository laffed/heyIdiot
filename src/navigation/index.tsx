import React from 'react';
import {useOvermind} from '../overmind';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthStack';
import AppNavigator from './AppStack';

function RootNav() {
  const {isLoggedIn} = useOvermind().state.user;

  return (
    <NavigationContainer>
      {!isLoggedIn && <AuthNavigator />}
      {isLoggedIn && <AppNavigator />}
    </NavigationContainer>
  )
}

export default RootNav;