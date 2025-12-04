import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';

const RepairerSignUp3 = ({navigation}) => {
    const [address, setAddress] = useState('');
    
   
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('./assets/ServiceU_Logo.png')}
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
                            <View style={[styles.progressCircle, styles.progressActive1]}>
                                <Text style={styles.checkmark}>✓</Text>
                            </View>
                        </View>

                        <View style={styles.progressLineFinish} />

                        <View style={styles.circleWrapper}>
                            <View style={[styles.progressCircle, styles.progressActive1]}>
                                 <Text style={styles.checkmark}>✓</Text>
                            </View>
                        </View>

                        <View style={styles.progressLineFinish} />

                        <View style={styles.circleWrapper}>
                                <View style={[styles.progressCircle, styles.progressActive]}>
                                <Text style={styles.progressNumberActive}>3</Text>
                            </View>
                        </View>

                        <View style={styles.progressLine} />

                        <View style={styles.circleWrapper}>
                            <View style={styles.progressCircle}>
                                <Text style={styles.progressNumber}>4</Text>
                            </View>
                        </View>

                        <View style={styles.progressLine} />

                        <View style={styles.circleWrapper}>
                            <View style={styles.progressCircle}>
                                <Text style={styles.progressNumber}>5</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.progressLabelsRow}>
                        <Text style={styles.progressLabelActive}>Info</Text>
                        <Text style={styles.progressLabelActive}>A/C Info</Text>
                        <Text style={styles.progressLabelActive}>Address</Text>
                        <Text style={styles.progressLabel}>Expertise</Text>
                        <Text style={styles.progressLabel}>Verify</Text>
                    </View>
                </View>

                {/* Form Header */}
                <Text style={styles.formHeader}>Where can we find you?</Text>

                {/* Form Fields */}
                <View style={styles.formContainer}>

                    {/* Address */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your address"
                            value={address}
                            onChangeText={setAddress}
                            placeholderTextColor="#999"
                        />
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.previousButton}>
                        <Text style={styles.previousButtonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton}
                         onPress={() => navigation.navigate('repairerSignUp4')}
                     >
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>

                

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
        fontWeight: 'extra-bold',
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
    progressActive1: {
        borderColor: '#137594',
        backgroundColor: '#137594',
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
        width: 30,
        height: 2,
        backgroundColor: '#D1D5DB',
        marginHorizontal: 8,
    },
    progressLineFinish: {
        width: 30,
        height: 2,
        backgroundColor: '#137594',
        marginHorizontal: 8,
    },
    progressLabelsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 370,
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
        fontSize: 30,
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
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#374151',
        marginBottom: 8,
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
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    nextButton: {
        backgroundColor: '#137594',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
        width: 140,
        height: 50,
        marginBottom: 12,
         marginTop: 210,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    previousButton: {
        backgroundColor: '#A9A9A9',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
        width: 140,
        height: 50,
        marginBottom: 12,
        marginTop: 210,
    },
    previousButtonText: {
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});
    

export default RepairerSignUp3;
