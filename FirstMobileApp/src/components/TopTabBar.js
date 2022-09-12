import React from 'react';
import { Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OnMeetingScreen } from '../meetings/OnMeetingScreen';
import { MyMeetingScreen } from '../meetings/MyMeetingsScreen';
import { CreateMeetingScreen } from '../meetings/CreateMeetingScreen';


const Tab = createMaterialTopTabNavigator();

export const TopTabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: '6%',
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    paddingBottom: 4,
                    backgroundColor: 'gray',
                    position: 'absolute',
                    borderTopWidth: 1,
                    borderTopColor: '#F4E201',
                },
                headerShown: false,
                tabBarActiveTintColor: '#F4E201',
                tabBarInactiveTintColor: 'white'
            }}
        >
            <Tab.Screen
                name="OnMeetingScreen"
                component={OnMeetingScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: focused ? 28 : size, height: focused ? 28 : size, tintColor: focused ? '#F4E201' : 'white' }}
                                source={require("../assets/home.png")}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="CreateMeetingScreen"
                component={CreateMeetingScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: focused ? 28 : size, height: focused ? 28 : size, tintColor: focused ? '#F4E201' : 'white' }}
                                source={require("../assets/home.png")}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen name="MyMeetingScreen"
                component={MyMeetingScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: focused ? 28 : size, height: focused ? 28 : size, tintColor: focused ? '#F4E201' : 'white' }}
                                source={require("../assets/home.png")}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}