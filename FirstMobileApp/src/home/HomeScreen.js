import React from "react";
import { View, StatusBar, Text, ScrollView } from "react-native";
import { Weather } from "../components/Weather";


export const HomeScreen = () => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            color: 'black',
            flex: 1,
            paddingBottom: '10%'
        },
        forgot_password: {
            color: '#F4E201',
            // marginTop: '5%',
            marginBottom: '1%',
            fontSize: 50,
            justifyContent: 'flex-start'
        },
        weather_component: {
            alignItems: 'flex-start', 
            justifyContent:'center', 
            backgroundColor: 'red', 
            width: '95%', 
            margin: '2%'
        }
    }

    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="gray" translucent={false} />
                    <View 
                    style={styles.weather_component}
                    >
                        <Text style={[styles.forgot_password,{padding: '2%'}]}>
                            Actual weather
                        </Text>
                        <Weather />
                    </View>
                    <View
                    style={styles.weather_component}
                    >
                        <Text style={[styles.forgot_password,{padding: '2%'}]}>
                            Weather in 1 hour
                        </Text>
                        <Weather />
                    </View>
        </View >
    )
}