import React from "react";
import { View, StatusBar, Text } from "react-native";

export const Meetings = () => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            color: 'black',
            flex: 1
        }
    }

    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="gray" translucent={false} />
            <View>
                <Text>
                    Meetings
                </Text>
            </View>
        </View>
    )
}