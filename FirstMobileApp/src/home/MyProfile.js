import React, { useState } from "react";
import { View, StatusBar, Text, Image, TouchableOpacity, Modal, Pressable } from "react-native";

export const MyProfile = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [initialLanguage, setInitialLanguage] = useState('English')

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            backgroundColor: 'gray',
            color: 'black',
            flex: 1,
        },
        profile_image: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 500,
            marginTop: '12%',
            marginBottom: '15%',
            // elevation: 15,
            // backgroundColor: 'red'
        },
        forgot_password: {
            color: '#F4E201',
            fontSize: 40,
            justifyContent: 'center'
        },
        camera_container: {
            height: 55,
            width: 55,
            borderRadius: 60,
            backgroundColor: '#a9a9a9ce',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: -55,
            marginTop: '40%'
        },
        userEmail_container: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: '82%',
            height: '5%',
            justifyContent: 'flex-start',
            marginTop: '20%',
        },
        btn_login: {
            marginTop: '20%',
            display: 'flex',
            backgroundColor: '#F4E201',
            width: '65%',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            height: 60,
            borderRadius: 100
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            color: 'gray',
            fontSize: 25
        }
    }

    const styles_1 = {
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.712)",
            paddingTop: '35%'
        },
        modalView: {
            margin: 20,
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            borderRadius: 20,
            padding: 10,
        },
        buttonOpen: {
            backgroundColor: "black",
        },
        buttonClose: {
        },
        textStyle: {
            color: "gray",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 20
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        }
    };

    const returnLanguage = (num) => {
        if (num === 1) {
            setInitialLanguage('English')
        } else {
            setInitialLanguage('Spanish')
        }
        setModalVisible(!modalVisible)
    }

    return (
        <View style={[styles.main_container, { backgroundColor: 'gray' }]} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor={modalVisible ? 'rgba(0, 0, 0, 0.712)' : "gray"} translucent={false} />
            <View style={[styles.profile_image]}>
                <Image
                    style={{ height: 260, width: 260, tintColor: '#F4E201' }}
                    source={require("../assets/user_profile.png")}
                />
                <TouchableOpacity style={styles.camera_container}>
                    <Image
                        style={{ height: 40, width: 40, tintColor: 'white', marginBottom: 2 }}
                        source={require("../assets/camera.png")}
                    />
                </TouchableOpacity>
            </View>
            <Text style={[styles.forgot_password, { borderColor: '#F4E201', borderBottomWidth: 2, borderTopWidth: 2 }]}>
                RODRIGO VALENZUELA
            </Text>
            <View style={styles.userEmail_container}>
                <Image
                    style={{ height: 30, width: 30, tintColor: '#F4E201', marginRight: '5%' }}
                    source={require("../assets/mail.png")}
                />
                <Text style={{ fontSize: 17 }}>
                    rodrigo_maskpo@gmail.com
                </Text>
            </View>
            <View style={[styles.userEmail_container, {}]}>
                <Image
                    style={{ height: 33, width: 33, tintColor: '#F4E201', marginRight: '5%' }}
                    source={require("../assets/language.png")}
                />
                <TouchableOpacity
                    style={{ fontSize: 17, width: '60%', height: '80%', justifyContent: 'center' }}
                    onPress={() => setModalVisible(true)}
                >
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                    >
                        <View style={styles_1.centeredView}>
                            <View style={[styles_1.button, styles_1.buttonClose]}>
                                <TouchableOpacity
                                    style={{ margin: 20, width: 200, height: '16%', backgroundColor: '#F4E201', justifyContent: 'center', borderRadius: 50 }}
                                    onPress={() => returnLanguage(1)}
                                >
                                    <Text style={styles_1.textStyle}>ENGLISH</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ margin: 20, width: 200, height: '16%', backgroundColor: '#F4E201', justifyContent: 'center', borderRadius: 50 }}
                                    onPress={() => returnLanguage(2)}
                                >
                                    <Text style={styles_1.textStyle}>SPANISH</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <Image
                        style={{ height: 18, width: 18, tintColor: '#F4E201', marginLeft: '70%'}}
                        source={require("../assets/sort.png")}
                    />
                    <Text style={{ fontSize: 17, marginTop: -20 }}>
                        {initialLanguage} 
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.btn_login}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.text}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}


