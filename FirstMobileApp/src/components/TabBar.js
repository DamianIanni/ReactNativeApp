import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../home/HomeScreen';
import { MyProfile } from '../home/MyProfile';
import { Meetings } from '../home/Meetings';
import { TopTabBar } from './TopTabBar';
const Tab = createBottomTabNavigator();

export const TabBar = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: '6%',
                    paddingHorizontal: 6,
                    paddingTop: 0,
                    paddingBottom: 4,
                    backgroundColor: 'gray',
                    position: 'absolute',
                    borderTopWidth: 2,
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
                                style={{ width: focused ? 22 : 18, height: focused ? 22 : 18, tintColor: focused ? '#F4E201' : 'white' }}
                                source={require("../assets/home.png")}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="TopTabBar"
                component={TopTabBar}
                options={{
                    tabBarBadge: 4,
                    title: 'Meetings',
                    tabBarBadgeStyle: { backgroundColor: '#F4E201', height: 16, fontSize:14, textAlignVertical: 'center',color: 'gray'},
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: focused ? 22 : 18, height: focused ? 22 : 18, tintColor: focused ? '#F4E201' : 'white' }}
                                source={require("../assets/beer.png")}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="My profile"
                component={MyProfile}
                options={{
                    title: 'My profile',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: focused ? 22 : 18, height: focused ? 22 : 18, tintColor: focused ? '#F4E201' : 'white' }}
                                source={require("../assets/profile_icon.png")}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}