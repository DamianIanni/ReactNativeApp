import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../home/HomeScreen';
import { Login } from '../auth/Login';
const Tab = createBottomTabNavigator();

export const TabBar = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: '5.2%',
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    paddingBottom: 4,
                    backgroundColor: 'gray',
                    position: 'absolute',
                    borderTopWidth: 0,
                    borderTopColor: '#F4E201',
                },
                headerShown: false,
                tabBarActiveTintColor: '#F4E201',
                tabBarInactiveTintColor: 'white'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: focused ? 30 : size, height: focused ? 30 : size, tintColor: focused ? '#F4E201' : 'white' }}
                                source={require("../assets/home.png")}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Meetings"
                component={Login}
                options={{
                    title: 'Meetings',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: focused ? 30 : size, height: focused ? 30 : size, tintColor: focused ? '#F4E201' : 'white' }}
                                source={require("../assets/beer.png")}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen 
            name="My profile" 
            component={Login} 
            options={{
                title: 'My profile',
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image
                            style={{ width: focused ? 30 : size, height: focused ? 30 : size, tintColor: focused ? '#F4E201' : 'white' }}
                            source={require("../assets/profile_icon.png")}
                        />
                    );
                },
            }}
            />
        </Tab.Navigator>
    );
}