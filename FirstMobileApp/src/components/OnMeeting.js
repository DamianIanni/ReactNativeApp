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
            // flex:1,
            // width: '92.5%',
            width: 340,
            borderRadius: 15,
            marginBottom: '6%',
            marginTop: '6%'
        },
        name_container: {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '4%'
        },
        date_hour_container: {
            width: '94%',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '4%',
            flexDirection: 'row'
        },
        text_inivited_container: {
            paddingLeft: '2%',
            paddingRight: '2%',
            marginTop: '2%', 
            alignItems: 'center'
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
            height: 35,
            backgroundColor: '#F4E201',
            justifyContent: 'center',
            borderRadius: 50,
            alignItems: 'center',
            marginLeft: '3%',
            marginBottom: '4%'
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
                <View style={[styles.profile_image]}>
                    <Image
                        style={{ height: 100, width: 100, tintColor: '#F4E201', marginTop: props.data.item.sent ? 20: 0}}
                        source={require("../assets/user_profile.png")}
                    />
                </View>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {props.data.item.name}
                </Text>
            </View>
            <View style={{ display: 'flex', justifyContent: 'flex-start', width: '94%', flexDirection: 'row'}}>
                <Image
                    style={{ width: 25, height: 25, tintColor: '#F4E201', marginRight: '2%', marginLeft: -3 }}
                    source={require("../assets/beer_meeting.png")}
                />
                <Text style={{ fontSize: 17 }}>
                    Birra at {props.data.item.locate}
                </Text>
            </View>
            <View style={styles.date_hour_container}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Image
                        style={{ width: 20, height: 20, tintColor: '#F4E201', marginRight: '5%' }}
                        source={require("../assets/calendar.png")}
                    />
                    <Text style={{ fontSize: 17 }}>
                        {props.data.item.date}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
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
            {props.data.item.sent === true ?
                <View style={[styles.text_inivited_container,{paddingTop:20}]}>
                    <Text style={{ fontSize: 27, fontWeight: "bold", textAlign: 'center' }}>
                        {props.data.item.meetingStatus}
                    </Text>
                    <Text>
                    </Text>
                </View>
                :
                <View style={{display: 'flex', justifyContent: 'center', height: 150, marginTop: -50, paddingTop:'10%', alignItems: 'center'}}>
                    <View style={styles.text_inivited_container}>
                        <Text style={{ fontSize: 27, fontWeight: "bold", textAlign: 'center' }}>
                            You have a meeting invitation
                        </Text>
                    </View>
                    <View style={styles.buttons_container}>
                        <TouchableOpacity style={styles.button_confirm_decline}>
                            <Text style={{ color: 'gray', fontSize: 17, fontWeight: "bold" }}>
                                CONFIRM
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button_confirm_decline}>
                            <Text style={{ color: 'gray', fontSize: 17, fontWeight: "bold" }}>
                                DECLINE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }


        </View>
    )
}