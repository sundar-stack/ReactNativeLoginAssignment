import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { MainDrawerStackNavigator } from './src/routes/DrawerNavigator';
import { BG_COLOR } from './src/constants';

const App = ()=>{
  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={BG_COLOR}/>
       <MainDrawerStackNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
