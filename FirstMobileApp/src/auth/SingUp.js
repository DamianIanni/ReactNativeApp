import React, {useState} from "react";
import { SafeAreaView, View, StatusBar, Text, TextInput, TouchableOpacity, Image } from "react-native";

export const SingUp = () => {
    const styles = {
        main_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            color: 'black',
            height: '100%'
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
        forgot_password: {
            color: '#F4E201',
            // marginTop: '5%',
            marginBottom: '10%',
            fontSize: 50
        },
        text_2: {
            color: '#F4E201',
            // marginTop: '5%',
            marginBottom: '10%',
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
            marginBottom: '5%'
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

    const [box, setBox] = useState(false)

    const changeBox = () => {
       if (box === false) {
        setBox(true)
       } else {
        setBox(false)
       }
    }

    return (
        <SafeAreaView>
            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="gray" translucent={false} />
                <View>
                    <Text style={styles.forgot_password}>
                        Create new{"\n"}account
                    </Text>
                </View>
                <View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={user => setUser(user)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={{ marginLeft: '3%', width: '95%' }}
                            placeholder="Name"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={user => setUser(user)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={{ marginLeft: '3%', width: '95%' }}
                            placeholder="Last name"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={user => setUser(user)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={{ marginLeft: '3%', width: '95%' }}
                            placeholder="User name"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={user => setUser(user)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={{ marginLeft: '3%', width: '95%' }}
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
                            style={{ marginLeft: '3%', width: '95%' }}
                            placeholder="Password"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={password => setPassword(password)}
                            cursorColor='#F4E201'
                            autoCorrect={false}
                            autoCapitalize="none"
                            secureTextEntry
                            style={{ marginLeft: '3%', width: '95%' }}
                            placeholder="Repeat password"
                        />
                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                    onPress={changeBox}
                    >
                      { box === false ? <Image
                            style={[styles.icon_login, { marginRight: '2%' }]}
                            source={require("../assets/square.png")}
                        /> : <Image
                        style={[styles.icon_login, { marginRight: '2%' }]}
                        source={require("../assets/square_fill.png")}
                    />}
                    </TouchableOpacity>
                    <Text style={{ marginRight: '0.5%' }}>
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
                    // onPress={validateData}
                    style={styles.btn_login}>
                    <Text style={styles.text}>
                        Sing up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}