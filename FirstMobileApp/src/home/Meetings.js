import React from "react";
import { View, StatusBar, Text } from "react-native";

import { OnMeeting } from "../components/OnMeeting";

export const Meetings = () => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            color: 'black',
            flex: 1,
        }
    }

    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="gray" translucent={false} />
            <View style={{width: '90%', alignItems: 'center', justifyContent: 'center',}}>
                <OnMeeting/>
            </View>
        </View>
    )
}