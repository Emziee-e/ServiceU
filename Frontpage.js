import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Frontpage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
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
            </View>

            <View style={styles.bottomButton}>
                <TouchableOpacity style={styles.startButton}
                    onPress={() => navigation.navigate('initialDashboard')}
                >
                    <Text style={styles.startButtonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },

    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoContainer: {
        alignItems: 'center',
    },

    bottomButton: {
        alignItems: 'center',
        paddingBottom: 40,
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
        fontSize: 14,
        color: '#000',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '700',
    },


    startButton: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#137594',
        borderRadius: 25,
        width: 250,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },

    startButtonText: {
        color: '#137594',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default Frontpage;
