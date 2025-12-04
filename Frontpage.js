import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Frontpage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('./assets/ServiceU Logo.png')}
                    style={styles.logo}
                />

                <Text style={styles.logoText}>
                    <Text style={styles.logoYellow}>SERVICE - </Text>
                    <Text style={styles.logoBlack}>U</Text>
                </Text>

                <Text style={styles.subtitle}>
                    Book Trusted Repairers anywhere effortlessly
                </Text>
            </View>

            <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 70,
    },

    logo: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },

    logoText: {
        fontSize: 40,
        fontWeight: '800',
    },

    logoYellow: {
        color: '#FDB913',
    },

    logoBlack: {
        color: '#000',
    },

    subtitle: {
        fontSize: 20,
        color: '#000',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '400',
    },

    startButton: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#137594',
        borderRadius: 15,
        width: 250,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },

    startButtonText: {
        color: '#137594',
        fontSize: 20,
        fontWeight: '600',
    },
});

export default Frontpage;
