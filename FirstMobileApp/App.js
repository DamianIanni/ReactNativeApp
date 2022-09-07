/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Login } from './src/auth/Login';
import { ForgotPassword } from './src/auth/ForgotPassword';
import { SingUp } from './src/auth/SingUp';
import { HomeScreen } from './src/home/HomeScreen'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: '5%',
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: 'gray',
            position: 'absolute',
            borderTopWidth: 0,
          },
          headerShown: false,
          tabBarActiveTintColor: '#F4E201',
          tabBarInactiveTintColor: 'white'
        }} >
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='ForgotPassword' component={ForgotPassword} />
        <Tab.Screen name='SingUp' component={SingUp} />
        <Tab.Screen name='HomeScreen' component={HomeScreen} />
      </Tab.Navigator>
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
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;