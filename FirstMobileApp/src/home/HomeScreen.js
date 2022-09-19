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
            paddingBottom: '4%',
            // marginTop: 
        },
        forgot_password: {
            color: '#F4E201',
            marginBottom: -10,
            fontSize: 38,
            justifyContent: 'flex-start',
            fontWeight: "bold",
        },
        weather_component: {
            alignItems: 'flex-start', 
            height: '44%',
            width: '96%', 
            marginBottom: '2%',
            // marginTop: '6%',
            paddingTop: -10,
            // backgroundColor: 'red'
        }
    }

    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F4E201' translucent={false} />
                    <View 
                    style={styles.weather_component}
                    >
                        <Text style={[styles.forgot_password,{padding: '2%'}]}>
                            .Actual wheather
                        </Text>
                        <ActualWeather />
                    </View>
                    <View
                    style={styles.weather_component}
                    >
                        <Text style={[styles.forgot_password,{padding: '2%'}]}>
                           .Wheather in 1 hour
                        </Text>
                        <FutureWeather />
                    </View>
        </View >
    )
}