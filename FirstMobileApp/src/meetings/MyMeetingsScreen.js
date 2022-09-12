import React from "react";
import { View, StatusBar, Text, FlatList, Button } from "react-native";
import users from "../../mocks/users";


import { OnMeeting } from "../components/OnMeeting";
import { HeaderForScreen } from "../components/HeaderForScreen";

export const MyMeetingScreen = (props,{navigation}) => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            // color: 'black',
            flex: 1,
            // height: '100%'
        }
    }
    /// recibir usuario al momento del Login para despues saber que DATA usar ///
    const meetingRecived = users[6].meetingRecived

   



    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F4E201' translucent={false} />
            <HeaderForScreen props={props}/>
            {console.log(3)}
            <View style={{
                width: '100%',
                paddingLeft: '4%',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                justifyItems: 'center',
                flex: 1,
            }}>
                <FlatList
                    data={meetingRecived}
                    renderItem={(item, index) => (<OnMeeting data={item} />)}
                    keyExtractor={(item) => item.meetingFrom}
                />
                <View style={{ height: '6%' }}></View>
            </View>
        </View>
    )
}