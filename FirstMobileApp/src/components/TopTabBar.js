import React from 'react';
import { Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OnMeetingScreen } from '../meetings/OnMeetingScreen';
import { MyMeetingScreen } from '../meetings/MyMeetingsScreen';
import { CreateMeetingScreen } from '../meetings/CreateMeetingScreen';


const Tab = createMaterialTopTabNavigator();

const StringOnMeetingScreen = "OnMeetingScreen"
const StringMyMeetingScreen = "MyMeetingScreen"
const StringCreateMeetingScreen = "CreateMeetingScreen"


export const TopTabBar = () => {
    return (
        <Tab.Navigator
        initialRouteName='OnMeetingScreen'
            screenOptions={{
                tabBarStyle: {
                    height: '0%',
                    backgroundColor: 'gray',
                },
            }}
            headerShown= {false}
        >
            <Tab.Screen
                name="OnMeetingScreen"
                component={OnMeetingScreen}
            />
            <Tab.Screen
                name="MyMeetingScreen"
                component={MyMeetingScreen}
            />
            <Tab.Screen
                name="CreateMeetingScreen"
                component={CreateMeetingScreen}
            />
        </Tab.Navigator>
    );
}