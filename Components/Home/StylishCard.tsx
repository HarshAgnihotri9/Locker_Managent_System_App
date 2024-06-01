/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const StylishCard = () => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.-DmQMEiFpVzfgP_WybRnKwHaEo&pid=Api&P=0&h=180' }}
                style={styles.image}
            />
            <LinearGradient
                colors={['#FFA500', '#FF4500']}
                style={styles.gradient}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Stylish Card</Text>
                    <Text style={styles.description}>
                        This is a stylish card with an image and an orange gradient background.
                    </Text>
                </View>
            </LinearGradient>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        width: 200,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
    },
    gradient: {
        padding: 15,
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
});

export default StylishCard;
