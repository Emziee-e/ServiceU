import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Alert } from 'react-native';

const RepairerSignUp5 = ({ navigation, route }) => {
    const { repairer_fullName, repairer_gender, repairer_email, repairer_password, repairer_phoneNum, repairer_address, repairer_expertise } = route.params;

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);

    const handleFileUpload = () => {
        const newFile = {
            name: `document_${uploadedFiles.length + 1}.pdf`,
            type: 'pdf'
        };
        setUploadedFiles([...uploadedFiles, newFile]);
    };

    const removeFile = (index) => {
        setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
    };

    const getFileIcon = (type) => {
        if (type === 'pdf') return require('./assets/certification.png');
        if (type === 'image') return require('./assets/license.png');
        return require('./assets/certification.png');
    };

    const submitRegistration = async () => {
        if (uploadedFiles.length === 0) {
            Alert.alert("Upload Required", "Please upload at least one document.");
            return;
        }

        try {
            const response = await fetch("http://10.0.2.2/ServiceU/api/repairer_register.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    repairer_fullName,
                    repairer_gender,
                    repairer_email,
                    repairer_password,
                    repairer_address,
                    repairer_phoneNum,
                    repairer_expertise
                }),
            });

            const data = await response.json();

            if (data.success) {
                setShowConfirmModal(false);
                setShowThankYouModal(true);
            } else {
                alert(data.message);
            }

        } catch (err) {
            alert("Connection error");
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <View style={styles.logoContainer}>
                    <Image source={require('./assets/ServiceU_Logo.png')} style={styles.logo} />
                    <Text style={styles.logoText}>
                        <Text style={styles.logoYellow}>SERVICE - </Text>
                        <Text style={styles.logoBlack}>U</Text>
                    </Text>
                </View>

                <Text style={styles.formHeader}>Upload your Documents</Text>
                <Text style={styles.formHeaderComments}>
                    Please upload your licenses or official certifications to verify your expertise
                </Text>

                {/* Upload Section */}
                <View style={styles.uploadSection}>
                    <TouchableOpacity style={styles.uploadBox} onPress={handleFileUpload}>
                        <Image source={require('./assets/upload.png')} style={styles.iconImage} />
                        <Text style={styles.uploadText}>Choose a file</Text>
                        <Text style={styles.uploadSubtext}>PDF, JPG, PNG up to 5MB</Text>
                    </TouchableOpacity>

                    {uploadedFiles.length > 0 && (
                        <View style={styles.filesContainer}>
                            {uploadedFiles.map((file, index) => (
                                <View key={index} style={styles.fileItem}>
                                    <View style={styles.fileLeft}>
                                        <Image source={getFileIcon(file.type)} style={styles.fileIconImage} />
                                        <Text style={styles.fileName}>{file.name}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => removeFile(index)}>
                                        <Image source={require('./assets/trashbin.png')} style={styles.trashIcon} />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.previousButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.previousButtonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={() => setShowConfirmModal(true)}>
                        <Text style={styles.nextCompleteText}>Complete</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Confirm Modal */}
            <Modal visible={showConfirmModal} transparent={true} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Image source={require('./assets/hourglass.png')} style={styles.hourglassIcon} />
                        <Text style={styles.modalTitle}>Confirm Sign-Up</Text>
                        <Text style={styles.modalMessage}>
                            Your application will be submitted for review. Are you sure you want to proceed?
                        </Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setShowConfirmModal(false)}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.confirmButton} onPress={submitRegistration}>
                                <Text style={styles.confirmButtonText}>Yes, Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Thank You Modal */}
            <Modal visible={showThankYouModal} transparent={true} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Image source={require('./assets/hourglass.png')} style={styles.hourglassIcon} />
                        <Text style={styles.modalTitle}>Thank you for Signing up!</Text>
                        <Text style={styles.modalMessage}>
                            We are now verifying your account. This may take a few days. You'll receive an email once approved.
                        </Text>
                        <TouchableOpacity
                            style={styles.gotItButton}
                            onPress={() => {
                                setShowThankYouModal(false);
                                navigation.navigate('initialLogin');
                            }}
                        >
                            <Text style={styles.gotItButtonText}>Got It</Text>
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
    formHeaderComments: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 25,
        color: '#A9A9A9',
        fontFamily: 'Inter',
    },
    formContainer: {
        marginBottom: 20,
    },
    uploadSection: {
        backgroundColor: '#D4E9EF',
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
    },
    uploadBox: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#A5C9D6',
        borderStyle: 'dashed',
        borderRadius: 15,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadIconContainer: {
        marginBottom: 10,
    },
    uploadIcon: {
        fontSize: 60,
        color: '#6B7280',
    },
    iconImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    uploadText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 5,
        fontFamily: 'Inter',
    },
    uploadSubtext: {
        fontSize: 14,
        color: '#9CA3AF',
        fontFamily: 'Inter',
    },
    filesContainer: {
        marginTop: 15,
    },
    fileItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    fileLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    fileIcon: {
        fontSize: 24,
        marginRight: 10,
    },
    fileIconImage: {
        width: 24,
        height: 24,
        marginRight: 10,
        resizeMode: 'contain',
    },
    fileName: {
        fontSize: 14,
        color: '#374151',
        fontFamily: 'Inter',
        flex: 1,
    },
    fileActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewButton: {
        color: '#137594',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Inter',
        marginRight: 15,
    },
    deleteIcon: {
        fontSize: 20,
    },
    trashIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
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
        width: 140,
        height: 50,
        marginBottom: 12,
        marginTop: 30,
    },
    nextCompleteText: {
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
        width: 140,
        height: 50,
        marginBottom: 12,
        marginTop: 30,
    },
    previousButtonText: {
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
  
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 30,
        width: '90%',
        maxWidth: 400,
        alignItems: 'center',
    },
    hourglassIcon: {
        width: 45,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 15,
        fontFamily: 'Inter',
        textAlign: 'center',
    },
    modalMessage: {
        fontSize: 16,
        color: '#9CA3AF',
        textAlign: 'center',
        marginBottom: 25,
        fontFamily: 'Inter',
        lineHeight: 22,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 15,
    },
    cancelButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: '#137594',
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'Inter',
    },
    confirmButton: {
        flex: 1,
        backgroundColor: '#137594',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    gotItButton: {
     backgroundColor: '#137594',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
        marginBottom: 12,
        marginTop: 2,
    },
    gotItButtonText: {
        fontWeight: '790',
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Inter',
    },

});
    

export default RepairerSignUp5;