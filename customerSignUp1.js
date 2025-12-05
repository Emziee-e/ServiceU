import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';

const CustomerSignUp = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [showGenderPicker, setShowGenderPicker] = useState(false);

    const genderOptions = ['Male', 'Female', 'Other'];

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setShowGenderPicker(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
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

                {/* Progress Indicator */}
                <View style={styles.progressContainer}>
                    <View style={styles.progressTopRow}>
                        <View style={styles.circleWrapper}>
                            <View style={[styles.progressCircle, styles.progressActive]}>
                                <Text style={styles.progressNumberActive}>1</Text>
                            </View>
                        </View>

                        <View style={styles.progressLine} />

                        <View style={styles.circleWrapper}>
                            <View style={styles.progressCircle}>
                                <Text style={styles.progressNumber}>2</Text>
                            </View>
                        </View>

                        <View style={styles.progressLine} />

                        <View style={styles.circleWrapper}>
                            <View style={styles.progressCircle}>
                                <Text style={styles.progressNumber}>3</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.progressLabelsRow}>
                        <Text style={styles.progressLabelActive}>Info</Text>
                        <Text style={styles.progressLabel}>A/C Info</Text>
                        <Text style={styles.progressLabel}>Address</Text>
                    </View>
                </View>

                {/* Form Header */}
                <Text style={styles.formHeader}>Let's get to know you!</Text>

                {/* Form Fields */}
                <View style={styles.formContainer}>
                    {/* Full Name */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your full name"
                            value={fullName}
                            onChangeText={setFullName}
                            placeholderTextColor="#999"
                        />
                    </View>

                    {/* Phone Number */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                            placeholderTextColor="#999"
                        />
                    </View>

                    {/* Gender */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Gender</Text>
                        <TouchableOpacity 
                            style={styles.pickerButton}
                            onPress={() => setShowGenderPicker(!showGenderPicker)}
                        >
                            <Text style={[styles.pickerButtonText, !gender && styles.placeholderText]}>
                                {gender || 'Select your gender'}
                            </Text>
                            <Text style={styles.dropdownIcon}>▼</Text>
                        </TouchableOpacity>
                        
                        {showGenderPicker && (
                            <View style={styles.pickerDropdown}>
                                {genderOptions.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.pickerOption}
                                        onPress={() => handleGenderSelect(option)}
                                    >
                                        <Text style={styles.pickerOptionText}>{option}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.nextButton}
                        onPress={() => navigation.navigate('customerSignUp2')}
                    >
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                {/* Terms and Privacy */}
                <Text style={styles.termsText}>
                    By continuing, you agree to our{' '}
                    <Text style={styles.termsLink}>Terms of Service</Text>
                    {' '}and{' '}
                    <Text style={styles.termsLink}>Privacy Policy</Text>
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 300,
        height: 187,
        resizeMode: 'contain',
        marginBottom: 15,
    },
    logoText: {
        fontSize: 50,
        fontFamily: 'Inter-ExtraBold',
    },
    logoYellow: {
        color: '#FDB913',
    },
    logoBlack: {
        color: '#000',
    },
    progressContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    progressTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleWrapper: {
        alignItems: 'center',
    },
    progressCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#D1D5DB',
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressActive: {
        borderColor: '#137594',
        backgroundColor: '#FFFFFF',
    },
    progressNumber: {
        color: '#6B7280',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    progressNumberActive: {
        color: '#137594',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    progressLine: {
        width: 60,
        height: 2,
        backgroundColor: '#D1D5DB',
        marginHorizontal: 8,
    },
    progressLabelsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 277,
        marginTop: 8,
    },
    progressLabel: {
        fontSize: 14,
        color: '#9CA3AF',
        fontFamily: 'Inter',
        textAlign: 'center',
        width: 60,
    },
    progressLabelActive: {
        fontSize: 14,
        color: '#137594',
        fontFamily: 'Inter',
        textAlign: 'center',
        width: 60,
    },
    formHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        color: '#000',
        fontFamily: 'Inter',
    },
    formContainer: {
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#374151',
        marginBottom: 8,
        marginLeft: 5,
        fontFamily: 'Inter',
    },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#fff',
        fontFamily: 'Inter',
    },
    pickerButton: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    pickerButtonText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Inter',
    },
    placeholderText: {
        color: '#999',
    },
    dropdownIcon: {
        fontSize: 10,
        color: '#6B7280',
    },
    pickerDropdown: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        marginTop: 5,
        backgroundColor: '#fff',
    },
    pickerOption: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    pickerOptionText: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Inter',
    },
    buttonContainer: {
        marginBottom: 5,
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#137594',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
        width: 300,
        height: 50,
        marginBottom: 5,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    cancelButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    cancelButtonText: {
        color: '#137594',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    termsText: {
        fontSize: 13,
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Inter',
    },
    termsLink: {
        color: '#137594',
    },
});

export default CustomerSignUp;