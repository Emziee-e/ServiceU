import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ChooseProfile = ({ navigation }) => {
    const handleCustomerSignUp = () => {
        navigation.navigate('CustomerSignUp');
    };

    const handleRepairerSignUp = () => {
        navigation.navigate('RepairerSignUp');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>

            {/* Logo */}
            <View style={styles.logoContainer}>
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
                        <Text style={styles.profileDescription}>
                            Hire services and find technicians in your area.
                        </Text>
                    </View>
                </View>
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
                        <Text style={styles.profileDescription}>
                            Offer your services and find bookings locally.
                        </Text>
                    </View>
                </View>
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
        paddingTop: 50,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0F2FE',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#137594',
        fontFamily: 'Inter',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
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
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    cardHeader: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: '#1F2937',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    iconImage: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    cardTextContainer: {
        flex: 1,
    },
    titleImage: {
        width: 120,
        height: 30,
        resizeMode: 'contain',
        marginBottom: 6,
    },
    profileDescription: {
        fontSize: 14,
        color: '#6B7280',
        fontFamily: 'Inter',
    },
    signUpButton: {
        backgroundColor: '#FDB913',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpButtonText: {
        color: '#1F2937',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Inter-SemiBold',
    },
});

export default ChooseProfile;




