import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Alert} from 'react-native';

const CustomerSignUp3 = ({navigation, route}) => {
    const { customer_fullName, customer_phoneNum, customer_gender, customer_email, customer_password } = route.params;
    const [address, setAddress] = useState('');
    const [completeModal, setCompleteModal] = useState(false);

     const handleComplete = async () => {
    if (!address) {
        Alert.alert("Error", "Please enter your address");
        return;
    }

    try {
        const response = await fetch('http://192.168.1.58/ServiceU/api/customer_register.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customer_fullName,
                customer_phoneNum,
                customer_gender,
                customer_email,
                customer_password,
                customer_address: address
            })
        });

        const data = await response.json();
        if (data.success) {
            setCompleteModal(true);
        } else {
            Alert.alert("Error", data.message || "Registration failed");
        }
    } catch (error) {
        Alert.alert("Error", "Cannot connect to server");
    }
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
                            <View style={styles.progressCircle}>
                                <Text style={styles.progressNumber}>3</Text>
                            </View>
                        </View>
                    </View>
                
                    <View style={styles.progressLabelsRow}>
                        <Text style={styles.progressLabelActive}>Info</Text>
                        <Text style={styles.progressLabelActive}>A/C Info</Text>
                        <Text style={styles.progressLabel}>Address</Text>
                        </View>
                </View>

                {/* Form Header */}
                <Text style={styles.formHeader}>Finally, Where can we find you?</Text>

                {/* Form Fields */}
                <View style={styles.formContainer}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput style={styles.input}
                            placeholder="Enter your address"
                            value={address}
                            onChangeText={setAddress}
                            placeholderTextColor="#999"
                            multiline
                            numberOfLines={3}
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.previousButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.previousButtonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={handleComplete}>
                        <Text style={styles.nextButtonText}>Complete</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal visible={completeModal} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Image source={require('./assets/check.png')} style={styles.imageModal} />
                        <Text style={styles.modalTitle}>Thank you for Signing up!</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => {
                            setCompleteModal(false);
                            navigation.navigate('customerLogin');
                        }}>
                            <Text style={styles.modalButtonText}>Got it</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    progressActive1: {
        borderColor: '#137594',
        backgroundColor: '#137594',
    },
    progressActive: {
        borderColor: '#137594',
        backgroundColor: '#FFFFFF',
    },
    checkmark: {
        color: '#FFFFFF',
        fontSize: 16,  
        fontWeight: 'bold',
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
    progressLineFinish: {
        width: 60,
        height: 2,
        backgroundColor: '#137594',
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
        fontWeight: '600',
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
        marginTop: 220,
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
    },
    previousButtonText: {
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },
    imageModal: {
        marginTop: 10,
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000ff',
        fontFamily: 'Inter',
    },
    modalButton: {
        backgroundColor: '#137594',
        paddingVertical: 10,
        paddingHorizontal: 90,
        borderRadius: 15,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomerSignUp3;