import React from "react";
import { View, Text } from "react-native";

export const HeaderForScreen = (prop) => {

    const styles = {
        main_container: {
            display: 'flex',
            height: 40,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F4E201',
            elevation: 10,
        },
    }

    const getLabel = (prop) => {
        if (prop.props.route.name === 'OnMeetingScreen') {
            return 'Meetings'
        } else if (prop.props.route.name === 'MyMeetingScreen') {
            return 'My meetings'
        } else if (prop.props.route.name === 'CreateMeetingScreen') {
            return 'Create a meeting'
        }
    }

    return (
        <View style={styles.main_container}>
            <View>
                <Text style={{ color: 'gray', fontSize: 25, fontWeight: 'bold' }}>
                    {getLabel(prop)}
                </Text>
            </View>
        </View>
    )
}