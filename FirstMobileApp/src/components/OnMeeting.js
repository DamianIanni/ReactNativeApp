import React from "react";
import { View, StatusBar, Text, Image, TouchableOpacity } from "react-native";

export const OnMeeting = (props) => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            height: 400,
            width: '95%',
            borderRadius: 15,
            marginBottom: '6%',
            marginTop: '6%'
        },
        name_container: {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '3%'
        },
        date_hour_container: {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: '3%',
            flexDirection: 'row'
        },
        text_inivited_container: {
            marginTop: '3%'
        },
        buttons_container: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '7%',
            marginBottom: -30,
            height: '15%',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '90%'
        },
        button_confirm_decline: {
            width: '40%',
            height: '70%',
            backgroundColor: '#F4E201',
            justifyContent: 'center',
            borderRadius: 50,
            alignItems: 'center',
        },
        profile_image: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 500,
            marginTop: -35,
            marginBottom: '2%',
        }
    }

    return (
        <View style={styles.main_container} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="gray" translucent={false} />
            <View style={styles.name_container}>
                {console.log("PROPS", props)}
                <View style={[styles.profile_image]}>
                    <Image
                        style={{ height: 100, width: 100, tintColor: '#F4E201' }}
                        source={require("../assets/user_profile.png")}
                    />
                </View>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {props.data.item.meetingFrom}
                </Text>
            </View>
            <View style={{ display: 'flex', alignItems: 'flex-start', width: '90%', flexDirection: 'row' }}>
                <Image
                    style={{ width: 25, height: 25, tintColor: '#F4E201', marginLeft: -10, marginRight: '1.5%' }}
                    source={require("../assets/beer_meeting.png")}
                />
                <Text style={{ fontSize: 17 }}>
                    Birra at {props.data.item.locate}
                </Text>
            </View>
            <View style={styles.date_hour_container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ width: 20, height: 20, tintColor: '#F4E201', marginRight: '5%' }}
                        source={require("../assets/calendar.png")}
                    />
                    <Text style={{ fontSize: 17 }}>
                        {props.data.item.date}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: '30.5%' }}>
                    <Image
                        style={{ width: 20, height: 20, tintColor: '#F4E201', marginRight: '5%' }}
                        source={require("../assets/hour.png")}
                    />
                    <Text style={{ fontSize: 17 }}>
                        {props.data.item.hour} {props.data.item.time}
                    </Text>
                </View>
            </View>
            <View style={{
                borderColor: '#F4E201', borderWidth: 2, width: '95%',
                borderRadius: 5,
                marginBottom: '3%', marginTop: '3%'
            }}></View>
            <View style={styles.text_inivited_container}>
                <Text style={{ fontSize: 27, fontWeight: "bold", }}>
                    YOU ARE INIVITED
                </Text>
            </View>
            <View style={styles.buttons_container}>
                <TouchableOpacity style={styles.button_confirm_decline}>
                    <Text style={{ color: 'gray', fontSize: 17 }}>
                        CONFIRM
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_confirm_decline}>
                    <Text style={{ color: 'gray', fontSize: 17 }}>
                        DECLINE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}