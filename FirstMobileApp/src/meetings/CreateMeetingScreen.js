import React, { useState } from "react";
import { View, StatusBar, Text, FlatList, Button, TouchableOpacity, Image } from "react-native";
import users from "../../mocks/users";
import DatePicker from 'react-native-date-picker';

import { OnMeeting } from "../components/OnMeeting";
import { HeaderForScreen } from "../components/HeaderForScreen";

export const CreateMeetingScreen = (props, { navigation }) => {

    const [time, setTime] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [date_1, setDate_1] = useState(new Date())
    const [open_1, setOpen_1] = useState(false)

    const [selectDate, setSelectDate] = useState("Select date")
    const [selectTime, setSelecTime] = useState("Select time")

    const [selectLocation, setSelectLocation] = useState("Select location")

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: 'gray',
            flex: 1,
        }
    }
    /// recibir usuario al momento del Login para despues saber que DATA usar ///
    const meetingRecived = users[6].meetingSend





    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F4E201' translucent={false} />
            <HeaderForScreen props={props} />
            <View>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Image
                        style={{ height: 105, width: 105, tintColor: '#F4E201' }}
                        source={require("../assets/map.png")}
                    />
                    <Text>
                        {selectLocation}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen_1(true)}
                >
                    <Image
                        style={{ height: 100, width: 100, tintColor: '#F4E201' }}
                        source={require("../assets/calendar.png")}
                    />
                    <Text>
                        {console.log(date_1)}
                        {selectDate}
                    </Text>
                    <DatePicker
                        title={null}
                        mode={"date"}
                        textColor={'#F4E201'}
                        modal
                        open={open_1}
                        date={date_1}
                        onConfirm={(date) => {
                            setOpen_1(false)
                            setDate_1(date)
                        }}
                        onCancel={() => {
                            setOpen_1(false)
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen(true)}
                >
                    <Image
                        style={{ height: 100, width: 100, tintColor: '#F4E201' }}
                        source={require("../assets/hour.png")}
                    />
                    <Text>
                        {console.log(time)}
                        {selectTime}
                    </Text>
                    <DatePicker
                        title={null}
                        is24hourSource={'locale'}
                        mode={"time"}
                        textColor={'#F4E201'}
                        modal
                        open={open}
                        date={time}
                        onConfirm={(time) => {
                            setOpen(false)
                            setTime(time)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Image
                        style={{ height: 100, width: 100, tintColor: '#F4E201' }}
                        source={require("../assets/user_profile.png")}
                    />
                </TouchableOpacity> */}



            </View>
        </View>
    )
}