/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';
// import axiosInstance from '../../asstes/axiosInstance';
import axios from 'axios';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, seterr] = useState('');
    // const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // const [img, setimg] = useState('https://tse3.mm.bing.net/th?id=OIP.qRR7p-IbVm-DO4OkFBbJRwHaHa&pid=Api&P=0&h=180');
    const [img, setimg] = useState('https://tse1.mm.bing.net/th?id=OIP.LOn1bbMBlxHaYZYTGfiQLgHaHa&pid=Api&P=0&h=180');

    useEffect(() => {
        const backAction = () => {
            Alert.alert(
                'Confirm',
                'Do you Want to leave?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'Yes', onPress: () => handleLogout() },
                ],
                { cancelable: false }
            );
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const handleLogout = () => {
        // Add your logout logic here
        BackHandler.exitApp();
        // For example, navigate to the login screen or clear the authentication token
        console.log('Logout');
    };


    const handleimage = () => {
        setShowPassword(!showPassword);
        if (img === 'https://tse1.mm.bing.net/th?id=OIP.LOn1bbMBlxHaYZYTGfiQLgHaHa&pid=Api&P=0&h=180') {
            setimg('https://tse3.mm.bing.net/th?id=OIP.qRR7p-IbVm-DO4OkFBbJRwHaHa&pid=Api&P=0&h=180');
        }
        else {
            setimg('https://tse1.mm.bing.net/th?id=OIP.LOn1bbMBlxHaYZYTGfiQLgHaHa&pid=Api&P=0&h=180');
        }
    };

    const handleClick = async () => {
        console.log(email, password);
        await axios.post('http://192.168.4.4:3001/user/login', { email: email, password: password }).then(response => {
            console.log(response.data);
            if (response.data.message === 'Logged in sucessfully') { navigation.navigate('Home'); }
            seterr(response.data.message);
            setTimeout(() => { seterr(''); }, 3000);
        }).catch((error) => {
            console.log(error);
            seterr(error);
            setTimeout(() => { seterr(''); }, 3000);

        });
    };

    return (

        <View style={styles.container}>
            {/* <PasswordInput /> */}
            <Text style={styles.title}>Login Here</Text>
            <View style={styles.inputContainer}>
                {/* <Icon name="user" size={20} color="#000" style={styles.icon} /> */}
                <Image src={'https://tse1.mm.bing.net/th?id=OIP.2_5Gqun0VPY0b8V0AngGLgHaHa&pid=Api&P=0&h=180'} style={styles.img} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputContainer}>
                {/* <Icon name="lock" size={20} color="#000" style={styles.icon} /> */}
                <Image src={'https://tse3.mm.bing.net/th?id=OIP.7brgm5QsB1_1evbf7eFczgHaHa&pid=Api&P=0&h=180'} style={styles.img} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={handleimage}>

                    <Image src={img} style={{ ...styles.img, width: 30, height: 20, marginRight: 10 }} />
                </TouchableOpacity>


            </View>
            <View >
                <Text style={styles.err}>
                    {err}
                </Text>
            </View>
            <View style={{ ...styles.buttonContainer }}>
                <Button title="Login" onPress={handleClick} color="#e3571b" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: -30, marginLeft: 120, }}>
                <Text style={styles.txt}> Don't have a acoount.....?  </Text>
                <Text style={styles.txtt} onPress={() => {
                    console.log('hii');
                    navigation.navigate('SignUp');

                }}>Register</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
        fontFamily: 'Georgia',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        marginLeft: 10,
        flex: 1,
        color: '#000',
    },
    buttonContainer: {
        width: '100%',
        height: 80,
        borderRadius: 30,
        // backgroundColor: 'orange',
        // marginTop: 20,
    },
    err: {
        color: 'black',
        // marginRight: 250,
    },
    txt: {
        color: 'black',
    },
    txtt: {
        color: '#e3571b',

    },
    img: {
        width: 30,
        height: 20,
    },
});

export default LoginPage;
