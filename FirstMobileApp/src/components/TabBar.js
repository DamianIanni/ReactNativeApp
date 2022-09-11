import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../home/HomeScreen';
import { Login } from '../auth/Login';
import { MyProfile } from '../home/MyProfile';
import { Meetings } from '../home/Meetings';
const Tab = createBottomTabNavigator();

export const TabBar = ({ navigation }) => {
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
                name="Home"
                component={HomeScreen}
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
                name="Meetings"
                component={Meetings}
                options={{
                    tabBarBadge: 2,
                    title: 'Meetings',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: focused ? 28 : size, height: focused ? 28 : size, tintColor: focused ? '#F4E201' : 'white' }}
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
                            style={{ width: focused ? 28 : size, height: focused ? 28 : size, tintColor: focused ? '#F4E201' : 'white' }}
                            source={require("../assets/profile_icon.png")}
                        />
                    );
                },
            }}
            />
        </Tab.Navigator>
    );
}