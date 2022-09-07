import React from "react";
import { SafeAreaView, View, StatusBar, TextInput, Text, TouchableOpacity } from "react-native";

export const ForgotPassword = () => {

    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'gray',
            color: 'black',
            height: '100%'
        },
        btn_login: {
            marginTop: '20%',
            display: 'flex',
            backgroundColor: '#F4E201',
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            height: 60,
            borderRadius: 100
        },
        forgot_password: {
            color: '#F4E201',
            marginTop: '40%',
            marginBottom: '3%',
            fontSize: 17,
            width: '65%',
            alignContent: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            color: 'gray',
            fontSize: 25
        },
        img: {
            display: 'flex',
            marginTop: '10%',
            paddingTop: '30%',
            marginBottom: '5%'
        },
        icon_login: {
            display: 'flex',
            height: 20,
            width: 20,
            tintColor: '#F4E201',
            marginLeft: 50
        },
        input: {
            display: 'flex',
            flexDirection: 'row',
            borderColor: '#F4E201',
            borderWidth: 2,
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            height: 50,
            borderRadius: 30,
            marginBottom: '50%',
        },
        sing_up_container: {
            display: 'flex',
            flexDirection: 'row'
        },
        sing_up: {
            color: '#F4E201',
            marginLeft: 3,
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="gray" translucent={false} />
                    <Text style={styles.forgot_password}>
                        Type your Email to recive the link for recover your password
                    </Text>
                <View style={styles.input}>
                    <TextInput
                        cursorColor='#F4E201'
                        autoCorrect={false}
                        autoCapitalize="none"
                        style={{ marginLeft: '3%', width: '95%' }}
                        placeholder="Email"
                    />
                </View>
                <TouchableOpacity
                style={styles.btn_login}
                // onPress={() => navigation.navigate('SingUp')}
                >
                    <Text style={styles.text}>
                       Recover
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}