import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, StatusBar } from "react-native";
import users from "../../mocks/users";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Login = ({ navigation }) => {
    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'gray',
            color: 'black',
            // height: '100%'
            flex: 1
        },
        btn_login: {
            marginTop: '30%',
            display: 'flex',
            backgroundColor: '#F4E201',
            width: '64%',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            height: 60,
            borderRadius: 100
        },
        forgot_password: {
            color: '#F4E201',
            marginTop: '8%',
            marginBottom: '2%',
            fontSize: 17
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            color: 'gray',
            fontSize: 25,
            fontWeight: "bold",
        },
        img: {
            display: 'flex',
            marginTop: '10%',
            paddingTop: '30%',
            marginBottom: '6%'
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
            width: '64%',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            height: 50,
            borderRadius: 30,
            marginBottom: '4%'
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

    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

    const validateData = () => {
        const valueNeeded = users.filter((item,index) => {
            if (user == item.user && password == item.password) {
                return (item)
            } else return
        })
        checkForLoginData(valueNeeded)
    }
    
    const checkForLoginData = (value) => {
        if (value.length > 0) {
            navigation.navigate('TabBar')
        } else {
            alert("User/Password incorrect")
        }
    }

    return (
        <View style={styles.main_container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F4E201' translucent={false} />
            <Image
                style={styles.img}
                source={require("../assets/ic_launcher_round.png")}
            />
            <Text style={{ marginBottom: '30%', fontWeight: "bold", }}>
                PicardiasTM official app
            </Text>
            <View style={styles.input}>
                <Image
                    style={styles.icon_login}
                    source={require("../assets/user.png")}
                />
                <TextInput
                    onChangeText={user => setUser(user)}
                    cursorColor='#F4E201'
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={{ marginLeft: '4%', width: '96%' }}
                    placeholder="User"
                />
            </View>
            <View style={styles.input}>
                <Image
                    style={styles.icon_login}
                    source={require("../assets/lock.png")}
                />
                <TextInput
                    onChangeText={password => setPassword(password)}
                    cursorColor='#F4E201'
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry
                    style={{ marginLeft: '4%', width: '96%' }}
                    placeholder="Password"
                />
            </View>
            <TouchableOpacity
                onPress={validateData}
                style={styles.btn_login}>
                <Text style={styles.text}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
            >
                <Text style={styles.forgot_password}>
                    Forgot password
                </Text>
            </TouchableOpacity>
            <View style={styles.sing_up_container}>
                <Text>
                    Don't have an account yet?
                </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('SingUp')}
                >
                    <Text style={styles.sing_up}>
                        Sing up here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}