import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InfoField = ({ label, value, editable = false, onPress }) => (
  <View style={styles.infoField}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={styles.fieldValueContainer}>
      <Text style={styles.fieldValue}>{value}</Text>
      {editable && (
        <TouchableOpacity onPress={onPress} style={styles.editIcon}>
          <Image source={require('./assets/pencil.png')} />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default function EditCustomerScreen({navigation}) {
  const [customerData, setCustomerData] = useState({
    name: 'Tristan Jay Mirano',
    emoji: require('./assets/male.png'),
    email: 'tristan.mirano@gmail.com',
    phone: '09653216532',
    address: 'Kumintang Ibaba, Batangas City',
    gender: 'Male',
  });

   const getGenderIcon = () => {
    if (customerData.gender === 'Male') {
      return require('./assets/male.png');
    } else if (customerData.gender === 'Female') {
      return require('./assets/male.png');
    } else {
      return require('./assets/male.png');
    }
  };

  const handleBack = () => {
    console.log('Go back');
    navigation.goBack();
  };

  const handleEditPhoto = () => {
    console.log('Edit profile photo');
  };

  const handleEditAddress = () => {
    console.log('Edit address');
  };

  const handleEditGender = () => {
    console.log('Edit gender');
  };

  const handleSaveChanges = () => {
    Alert.alert(
      'Save Changes',
      'Are you sure you want to save these changes?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Save', 
          onPress: () => {
            console.log('Saving changes:', customerData);
            Alert.alert('Success', 'Changes saved successfully!');
          }
        },
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete this account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            console.log('Deleting account');
          }
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
     
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="chevron-back" size={28} color="#173d49ff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Customer</Text>
      </View>

      <View style={styles.headerExtension} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Photo */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={require('./assets/tristan.jpg')} 
              style={styles.profileImage}
            />
            <TouchableOpacity 
              style={styles.editPhotoButton} 
              onPress={handleEditPhoto}
            >
              <Image source={require('./assets/pencil1.png')} style={styles.pencil}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.customerName}>
            {customerData.name} <Image source={getGenderIcon()} style={styles.genderIcon} />
          </Text>
        </View>

        {/* Contact Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <InfoField label="Email" value={customerData.email} />
          <InfoField label="Phone Number" value={customerData.phone} />
        </View>

        {/* Personal Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <InfoField 
            label="Address" 
            value={customerData.address} 
            editable 
            onPress={handleEditAddress}
          />
          <InfoField 
            label="Gender" 
            value={customerData.gender} 
            editable 
            onPress={handleEditGender}
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.saveButton} 
            onPress={handleSaveChanges}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.deleteButton} 
            onPress={handleDeleteAccount}
          >
            <Text style={styles.deleteButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#137594',
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  backArrow: {
    fontSize: 20,
    color: '#137594',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 72,
  },
  headerExtension: {
    backgroundColor: '#137594',
    height: 65,
  },
  content: {
    flex: 1,
    marginTop: -80,
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 24,
    backgroundColor: 'transparent',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
  },
  editPhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0891b2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editPhotoIcon: {
    fontSize: 16,
  },
  customerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 35,
    padding: 15,
    borderWidth: 0.25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  infoField: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 15,
    color: '#43484eff',
    marginBottom: 4,
  },
  fieldValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7ebff',
  },
  fieldValue: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  editIcon: {
    padding: 4,
  },
  editIconText: {
    fontSize: 16,
    color: '#64748b',
  },
  buttonsContainer: {
    marginTop: 24,
    marginBottom: 32,
    paddingHorizontal: 100,
    gap: 12,
  },
  saveButton: {
    backgroundColor: '#0891b2',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  pencil: {
    width: 19,
    height: 19,
  }
});