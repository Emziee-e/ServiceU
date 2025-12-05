import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChooseProfile = ({ navigation }) => {
    const handleCustomerSignUp = () => {
        navigation.navigate('customerSignUp1');
    };

    const handleRepairerSignUp = () => {
        navigation.navigate('repairerSignUp1');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>

            {/* Logo */}
            <View style={styles.logoContainer}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Ionicons name="chevron-back" size={28} color="#173d49ff" />
                </TouchableOpacity>
                <Image 
                    source={require('./assets/ServiceU Logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.logoText}>
                    <Text style={styles.logoYellow}>SERVICE - </Text>
                    <Text style={styles.logoBlack}>U</Text>
                </Text>
            </View>

            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Choose Your Profile</Text>
                <Text style={styles.headerSubtitle}>
                    Select the type of account that you want.
                </Text>
            </View>

            {/* Customer Card */}
            <View style={styles.profileCard}>
                <View style={styles.cardHeader}>
                    <View style={styles.iconContainer}>
                        <Image 
                            source={require('./assets/Customer.png')}
                            style={styles.iconImage}
                        />
                    </View>
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.profileTitle}>Customer</Text>
                    </View>
                </View>
                <Text style={styles.profileDescription}>
                            Hire services and find technicians in your area.
                        </Text>
                <TouchableOpacity 
                    style={styles.signUpButton}
                    onPress={handleCustomerSignUp}
                >
                    <Text style={styles.signUpButtonText}>Sign Up as Customer</Text>
                </TouchableOpacity>
            </View>

            {/* Repairer Card */}
            <View style={styles.profileCard}>
                <View style={styles.cardHeader}>
                    <View style={styles.iconContainer}>
                        <Image 
                            source={require('./assets/Repairer.png')}
                            style={styles.iconImage}
                        />
                    </View>
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.profileTitle}>Repairer</Text>
                    </View>
                </View>
                <Text style={styles.profileDescription}>
                            Offer your services and find bookings
                        </Text>
                <TouchableOpacity 
                    style={styles.signUpButton}
                    onPress={handleRepairerSignUp}
                >
                    <Text style={styles.signUpButtonText}>Sign Up as Repairer</Text>
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
        paddingTop: 80,
    },
    backButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E0F2FE',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        paddingTop: 25,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    logoText: {
        fontSize: 40,
        fontFamily: 'Inter-ExtraBold',
    },
    logoYellow: {
        color: '#FDB913',
    },
    logoBlack: {
        color: '#000',
    },
    headerContainer: {
        marginBottom: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        fontFamily: 'Inter',
        textAlign: 'center',
    },
    profileCard: {
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderRadius: 30,
        padding: 20,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    cardHeader: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    iconContainer: {
        width: 100,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'transparent', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        tintColor: '#1F2937',
    },
    cardTextContainer: {
        flex: 1,
    },
    profileTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#137594',
        marginBottom: 4,
        fontFamily: 'Inter-Bold',
        marginTop: 1,
    },
    titleImage: {
        width: 120,
        height: 30,
        resizeMode: 'contain',
        marginBottom: 6,
    },
    profileDescription: {
        fontSize: 15,
        color: '#6B7280',
        fontFamily: 'Inter',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 8,
    },
    signUpButton: {
        backgroundColor: '#FDB913',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    signUpButtonText: {
        color: '#1F2937',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Inter-SemiBold',
    },
});
export default ChooseProfile;