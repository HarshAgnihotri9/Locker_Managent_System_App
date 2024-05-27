/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
// import axiosInstance from '../../asstes/axiosInstance';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, seterr] = useState('');

    const handleClick = async () => {
        console.log(email, password);
        await axios.post('http://192.168.4.4:3001/user/login', { email: email, password: password }).then(response => {
            console.log(response.data); seterr(response.data.message);
            setTimeout(() => { seterr(''); }, 3000);
        }).catch((error) => {
            console.log(error);
            seterr(error);
            setTimeout(() => { seterr(''); }, 3000);

        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
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
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
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
