import React from "react";
import { View, StatusBar, Text, FlatList, Button, TouchableOpacity, Image } from "react-native";
import users from "../../mocks/users";
import RNPickerSelect from "react-native-picker-select";


import { OnMeeting } from "../components/OnMeeting";
import { HeaderForScreen } from "../components/HeaderForScreen";

export const CreateMeetingScreen = (props, { navigation }) => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: 'gray',
            // color: 'black',
            flex: 1,
            // height: '100%'
        }
    }
    /// recibir usuario al momento del Login para despues saber que DATA usar ///
    const meetingRecived = users[6].meetingSend





    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F4E201' translucent={false} />
            <HeaderForScreen props={props} />
            <View>
                <TouchableOpacity>
                    <Image
                        style={{ height: 100, width: 100, tintColor: '#F4E201' }}
                        source={require("../assets/user_profile.png")}
                    />
                </TouchableOpacity>



            </View>
        </View>
    )
}