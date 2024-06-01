/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StylishCard from './StylishCard';

function Home() {
    return (
        <View style={Styles.cont}>

            <Text style={Styles.root}> Welcome to Locker Management System</Text>
            <View style={Styles.container}>
                <StylishCard />
                <StylishCard />

            </View>


        </View>
    );
}
const Styles = StyleSheet.create({
    root: {
        color: 'white',
        backgroundColor: '#e3571b',
        height: 40,
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 15,

    },
    cont: {
        display: 'flex',
        // flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        // flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
});
export default Home;
