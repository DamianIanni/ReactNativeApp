import React from "react";
import { SingUp } from "../auth/SingUp";
import { View, StatusBar, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export const HomeScreen = () => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            color: 'black',
            height: '100%'
        }
    }

    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="gray" translucent={false} />
            <View>
                <Text>
                    HomeScreen
                </Text>
            </View>
        </View>
    )
}