/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Iconn = () => {
    const [username, setUsername] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#000" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        borderWidth: 1,
        borderColor: '#772727',
        padding: 10,
        borderRadius: 5,
        color: 'black',

    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
});

export default Iconn;
