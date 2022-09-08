import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Weather = () => {
    // useEffect (() => {

    // },[])


    const styles = {
        main_container: {
            display: 'flex',
            // flex: 10,
            height: '30%',
            width: '90%',
            padding: '2%',
            backgroundColor: 'gray',
            margin: '2%',
            borderRadius: 5,
            alignContent: 'center',
            // alignItems: 'center',
            // justiftyContent: 'center',
            // justiftyItems: 'center'
        }
    }

    return (
        <View style={[styles.main_container, { elevation: 10 }]}>
            <View style={{ justifyItems: 'center', marginTop: '5.58%' }}>
                <Image
                    style={{width:100, height:100}}
                    source={require("../assets/sun.png")}
                />
                <Text>Lanus</Text>
                <Text>Temperature: 20°C</Text>
                <Text>description based on temperature and weather</Text>
            </View>
        </View>
    )
}