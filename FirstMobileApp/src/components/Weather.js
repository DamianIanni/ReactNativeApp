import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

export const ActualWeather = () => {
    // useEffect (() => {

    // },[])


    const styles = {
        main_container: {
            display: 'flex',
            height: '70%',
            width: '96%',
            padding: '2%',
            backgroundColor: 'black',
            margin: '2%',
            borderRadius: 15,
            alignContent: 'center',
        },
        container_2: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -15,
            justifyContent: 'space-between'
        },
        text_temperature: {
            fontSize: 55
        },
        temperature_container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        text_city: {
            fontSize: 35,
            paddingLeft: '6.5%'
        }
    }

    return (
        <View style={[styles.main_container, { elevation: 20 }]}>
            <View style={{ justifyItems: 'center', marginTop: '5.58%' }}>
                <View style={styles.container_2}>
                    <Image
                        style={{ width: 120, height: 120, tintColor: '#F4E201' }}
                        source={require("../assets/sun.png")}
                    />
                    <View style={styles.temperature_container}>
                    <Image
                        style={{ width: 60, height: 60, marginTop: 5, tintColor: '#F4E201' }}
                        source={require("../assets/thermometer_static.png")}
                    />
                        <Text style={[styles.text_temperature, { marginRight: '10%' }]}>24°C</Text>
                    </View>
                </View>
                <Text style={styles.text_city}>Lanus</Text>
                <Text style={{fontSize: 16, paddingLeft: '7%'}}>Description based on temperature and wheather</Text>
            </View>
        </View>
    )
}

export const FutureWeather = () => {

    const styles = {
        main_container: {
            display: 'flex',
            height: '70%',
            width: '96%',
            padding: '2%',
            backgroundColor: 'black',
            margin: '2%',
            borderRadius: 15,
            alignContent: 'center',
        },
        container_2: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -15,
            justifyContent: 'space-between'
        },
        text_temperature: {
            fontSize: 55
        },
        temperature_container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        text_city: {
            fontSize: 35,
            paddingLeft: '6.5%'
        }
    }

    return (
        <View style={[styles.main_container, { elevation: 20 }]}>
        <View style={{ justifyItems: 'center', marginTop: '5.58%' }}>
            <View style={styles.container_2}>
                <Image
                    style={{ width: 120, height: 120, tintColor: '#F4E201' }}
                    source={require("../assets/cloud_wind.png")}
                />
                <View style={styles.temperature_container}>
                <Image
                    style={{ width: 60, height: 60, marginTop: 5, tintColor: '#F4E201' }}
                    source={require("../assets/thermometer_down.png")}
                />
                    <Text style={[styles.text_temperature, { marginRight: '10%' }]}>18°C</Text>
                </View>
            </View>
            <Text style={styles.text_city}>Lanus</Text>
            <Text style={{fontSize: 16, paddingLeft: '7%'}}>Description based on temperature and wheather</Text>
        </View>
    </View>
    )
}