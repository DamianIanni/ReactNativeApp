import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, Text, TextInput, TouchableOpacity, Image } from "react-native";
import * as services from '../../services/services'


export const SingUp = ({ navigation }) => {
    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            color: 'black',
            height: '100%'
            // flex: 1
        },
        btn_login: {
            marginTop: '18%',
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
            // marginTop: '5%',
            marginBottom: '10%',
            fontSize: 50,
            fontWeight: "bold",
        },
        text_2: {
            color: '#F4E201',
            // marginTop: '5%',
            marginBottom: '10%',
            fontWeight: "bold",
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
            marginBottom: '4%'
        },
        icon_login: {
            display: 'flex',
            height: 20,
            width: 20,
            tintColor: '#F4E201',
            // marginLeft: 50
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
            marginBottom: '4%'
        },
        sing_up_container: {
            display: 'flex',
            flexDirection: 'row'
        },
        sing_up: {
            color: '#F4E201',
            marginLeft: 4,
        }
    }

    const [box, setBox] = useState(false)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    

    const changeBox = () => {
        if (box === false) {
            setBox(true)
        } else {
            setBox(false)
        }
    }

    const validateData = () => {
        if (!box || name == "" || lastName == "" || userName == "" || email == "" || password == "" || password != repeatPassword) {
            alert('There is/are incompleted fields')
        } else {
            createUser()
        }
    }

    const createJSONbody = () => {
        return{
            userName: userName,
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            friendList: [],
            meetingRecived: [],
            meetingSent: []
        }
    }

    const createUser = async () => {
        const userData = createJSONbody()
        console.log(JSON.stringify(userData, null, 2))
        await services.createAccount(userData)
        // navigation.navigate('Login')
    }

    return (
        <SafeAreaView>
            <View style={styles.main_container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F4E201' translucent={false} />
                <View>
                    <Text style={styles.forgot_password}>
                        Create new{"\n"}account
                    </Text>
                </View>
                <View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={name => setName(name)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={{ marginLeft: '4%', width: '96%' }}
                            placeholder="Name"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={lastName => setLastName(lastName)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={{ marginLeft: '4%', width: '96%' }}
                            placeholder="Last name"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={userName => setUserName(userName)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={{ marginLeft: '4%', width: '96%' }}
                            placeholder="Username"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={email => setEmail(email)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={{ marginLeft: '4%', width: '96%' }}
                            placeholder="Email"
                        />
                    </View>
                    <View style={styles.input}>
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
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={repeatPassword => setRepeatPassword(repeatPassword)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            secureTextEntry
                            style={{ marginLeft: '4%', width: '96%' }}
                            placeholder="Repeat password"
                        />
                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={changeBox}
                    >
                        {box === false ? <Image
                            style={[styles.icon_login, { marginRight: '2%' }]}
                            source={require("../assets/square.png")}
                        /> : <Image
                            style={[styles.icon_login, { marginRight: '2%' }]}
                            source={require("../assets/square_fill.png")}
                        />}
                    </TouchableOpacity>
                    <Text style={{ marginRight: '1%' }}>
                        Accept
                    </Text>
                    <TouchableOpacity
                    >
                        <Text style={styles.text_2}>
                            Terms & conditions
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={validateData}
                    style={styles.btn_login}>
                    <Text style={styles.text}>
                        Sing up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}