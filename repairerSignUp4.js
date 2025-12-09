import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert} from 'react-native';

const RepairerSignUp4 = ({navigation, route}) => {
    const { repairer_fullName, repairer_gender, repairer_email, repairer_password, repairer_phoneNum, repairer_address } = route.params;
    const [selectedExpertise, setSelectedExpertise] = useState([]);

    const toggleExpertise = (expertise) => {
        if (selectedExpertise.includes(expertise)) {
            setSelectedExpertise(selectedExpertise.filter(item => item !== expertise));
        } else {
            setSelectedExpertise([...selectedExpertise, expertise]);
        }
    };

    const handleNext = () => {
        if (selectedExpertise.length === 0) {
            Alert.alert("No Expertise Selected", "Please choose at least one expertise.");
            return;
        }

        navigation.navigate("repairerSignUp5", {
            repairer_fullName,
            repairer_gender,
            repairer_email,
            repairer_password,
            repairer_phoneNum,
            repairer_address,
            repairer_expertise: selectedExpertise.join(", ")
        });
    };
   
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
                                <View style={[styles.progressCircle, styles.progressActive1]}>
                                <Text style={styles.checkmark}>✓</Text>
                            </View>
                        </View>

                        <View style={styles.progressLineFinish} />

                        <View style={styles.circleWrapper}>
                            <View style={[styles.progressCircle, styles.progressActive]}>
                                <Text style={styles.progressNumberActive}>4</Text>
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
                        <Text style={styles.progressLabelActive}>Expertise</Text>
                        <Text style={styles.progressLabel}>Verify</Text>
                    </View>
                </View>

                {/* Form Header */}
                <Text style={styles.formHeader}>Almost there! Select your expertise</Text>

                {/* Form Fields */}
                <View style={styles.formContainer}>

                    {/* Expertise Options */}
                    <View style={styles.expertiseContainer}>

                        {/* Hardware */}
                        <TouchableOpacity 
                            style={styles.expertiseOption}
                            onPress={() => toggleExpertise('Hardware')}
                        >
                            <View style={styles.expertiseLeft}>
                                <View style={styles.iconContainer}>
                                    <Image 
                                        source={require('./assets/hardware.png')}
                                        style={styles.iconImage}
                                    />
                                </View>
                                <Text style={styles.expertiseText}>Hardware</Text>
                            </View>
                            <View style={[
                                styles.checkbox,
                                selectedExpertise.includes('Hardware') && styles.checkboxSelected
                            ]}>
                                {selectedExpertise.includes('Hardware') && (
                                    <Text style={styles.checkboxCheck}>✓</Text>
                                )}
                            </View>
                        </TouchableOpacity>

                        {/* Plumbing */}
                        <TouchableOpacity 
                            style={styles.expertiseOption}
                            onPress={() => toggleExpertise('Plumbing')}
                        >
                            <View style={styles.expertiseLeft}>
                                <View style={styles.iconContainer}>
                                    <Image 
                                        source={require('./assets/plumbing.png')}
                                        style={styles.iconImage}
                                    />
                                </View>
                                <Text style={styles.expertiseText}>Plumbing</Text>
                            </View>
                            <View style={[
                                styles.checkbox,
                                selectedExpertise.includes('Plumbing') && styles.checkboxSelected
                            ]}>
                                {selectedExpertise.includes('Plumbing') && (
                                    <Text style={styles.checkboxCheck}>✓</Text>
                                )}
                            </View>
                        </TouchableOpacity>

                        {/* Electrical */}
                        <TouchableOpacity 
                            style={styles.expertiseOption}
                            onPress={() => toggleExpertise('Electrical')}
                        >
                            <View style={styles.expertiseLeft}>
                                <View style={styles.iconContainer}>
                                    <Image 
                                        source={require('./assets/electrical.png')}
                                        style={styles.iconImage}
                                    />
                                </View>
                                <Text style={styles.expertiseText}>Electrical</Text>
                            </View>
                            <View style={[
                                styles.checkbox,
                                selectedExpertise.includes('Electrical') && styles.checkboxSelected
                            ]}>
                                {selectedExpertise.includes('Electrical') && (
                                    <Text style={styles.checkboxCheck}>✓</Text>
                                )}
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.previousButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.previousButtonText}>Previous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextButton}
                        onPress={handleNext}
                    >
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    /* ALL YOUR STYLES ARE KEPT EXACTLY AS IS — NO CHANGES MADE */
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
    expertiseContainer: {
        marginBottom: 20,
    },
    expertiseOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    expertiseLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#E5F3F7',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    iconImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    expertiseText: {
        fontSize: 16,
        color: '#374151',
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#D1D5DB',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxSelected: {
        backgroundColor: '#137594',
        borderColor: '#137594',
    },
    checkboxCheck: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
        marginTop: -20,
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
        marginTop: -20,
    },
    previousButtonText: {
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});
    
export default RepairerSignUp4;
