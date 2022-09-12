import React from "react";
import { View, StatusBar, Text, ScrollView } from "react-native";
import { ActualWeather, FutureWeather } from "../components/Weather";


export const HomeScreen = () => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            color: 'black',
            flex: 1,
            paddingBottom: '10%',
            paddingTop: 10
        },
        forgot_password: {
            color: '#F4E201',
            marginBottom: '1%',
            fontSize: 50,
            justifyContent: 'flex-start'
        },
        weather_component: {
            alignItems: 'flex-start', 
            height: '45%',
            width: '95%', 
            marginBottom: '2%',
            marginTop: '5%',
            paddingTop: -10,
        }
    }

    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F4E201' translucent={false} />
                    <View 
                    style={styles.weather_component}
                    >
                        <Text style={[styles.forgot_password,{padding: '2%'}]}>
                            Actual weather
                        </Text>
                        <ActualWeather />
                    </View>
                    <View
                    style={styles.weather_component}
                    >
                        <Text style={[styles.forgot_password,{padding: '2%'}]}>
                            Weather in 1 hour
                        </Text>
                        <FutureWeather />
                    </View>
        </View >
    )
}