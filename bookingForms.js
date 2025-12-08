import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';

export default function BookingFormScreen() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [problem, setProblem] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('Cash');
  const [modalVisible, setModalVisible] = useState(false);

  const technician = {
    name: 'Luis Fernando',
    service: 'Hardware',
    rating: '4.0',
    imageSource: require('./assets/repairer3.jpg'),
  };

  const selectedService = 'Component Replacement';
  
  // User's address from profile/signup (would come from context or props in real app)
  const userAddress = 'Kumintang Ibaba, Batangas City';

  const handleBack = () => {
    console.log('Go back');
    // Navigate back to previous screen
  };

  const validateInputs = () => {
    if (!date.trim()) {
      Alert.alert('Error', 'Please enter a date');
      return false;
    }
    if (!time.trim()) {
      Alert.alert('Error', 'Please enter a time');
      return false;
    }
    if (!problem.trim()) {
      Alert.alert('Error', 'Please describe the problem');
      return false;
    }
    return true;
  };

  const handleBookNow = () => {
    if (validateInputs()) {
      setModalVisible(true);
    }
  };

  const handleConfirmBooking = () => {
    setModalVisible(false);
    console.log('Booking confirmed!');
    // Navigate to success screen or perform booking API call
  };

  const handleCancelBooking = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Image source={require('./assets/back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Technician Info */}
        <View style={styles.technicianCard}>
          <Image source={technician.imageSource} style={styles.technicianImage} />
          <View style={styles.technicianInfo}>
            <Text style={styles.technicianName}>{technician.name}</Text>
            <Text style={styles.technicianService}>{technician.service}</Text>
            <Text style={styles.technicianRating}>Rate: {technician.rating}</Text>
          </View>
        </View>

        {/* Select Date */}
        <Text style={styles.label}>Select Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM / DD / YYYY"
          placeholderTextColor="#9ca3af"
          value={date}
          onChangeText={setDate}
        />

        {/* Select Time */}
        <Text style={styles.label}>Select Time</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:MM AM/PM"
          placeholderTextColor="#9ca3af"
          value={time}
          onChangeText={setTime}
        />
        <Text style={styles.hint}>Please enter a valid time (HH:MM AM/PM)</Text>

        {/* Problem */}
        <Text style={styles.label}>Problem</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe the problem..."
          placeholderTextColor="#9ca3af"
          value={problem}
          onChangeText={setProblem}
          multiline
          numberOfLines={4}
        />

        {/* Payment Method */}
        <Text style={styles.label}>Payment upon completion</Text>
        <View style={styles.paymentContainer}>
          <TouchableOpacity
            style={[
              styles.paymentButton,
              selectedPayment === 'Cash' && styles.paymentButtonActive,
            ]}
            onPress={() => setSelectedPayment('Cash')}
          >
            <Image source={require('./assets/cash.png')}/>
            <Text style={styles.paymentText}>Cash</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentButton,
              selectedPayment === 'GCash' && styles.paymentButtonActive,
            ]}
            onPress={() => setSelectedPayment('GCash')}
          >
            <Image 
              source={require('./assets/gcash.png')} 
              style={styles.paymentImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentButton,
              selectedPayment === 'Maya' && styles.paymentButtonActive,
            ]}
            onPress={() => setSelectedPayment('Maya')}
          >
            
          <Image source={require('./assets/maya.png')} style={styles.mayaButton}/>
          </TouchableOpacity>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookNowButton} onPress={handleBookNow}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancelBooking}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm your booking</Text>

            <View style={styles.confirmationItem}>
              <View style={styles.iconContainer}>
                <Image source={require('./assets/problem.png')} />
              </View>
              <View style={styles.confirmationText}>
                <Text style={styles.confirmationLabel}>Problem</Text>
                <Text style={styles.confirmationValue}>{selectedService}</Text>
              </View>
            </View>

            <View style={styles.confirmationItem}>
              <View style={styles.iconContainer}>
                <Image source={require('./assets/technician.png')} />
              </View>
              <View style={styles.confirmationText}>
                <Text style={styles.confirmationLabel}>Technician</Text>
                <Text style={styles.confirmationValue}>{technician.name}</Text>
              </View>
            </View>

            <View style={styles.confirmationItem}>
              <View style={styles.iconContainer}>
                <Image source={require('./assets/calendar.png')} />
              </View>
              <View style={styles.confirmationText}>
                <Text style={styles.confirmationLabel}>Date & Time</Text>
                <Text style={styles.confirmationValue}>{date} - {time}</Text>
              </View>
            </View>

            <View style={styles.confirmationItem}>
              <View style={styles.iconContainer}>
                <Image source={require('./assets/address.png')} />
              </View>
              <View style={styles.confirmationText}>
                <Text style={styles.confirmationLabel}>Address</Text>
                <Text style={styles.confirmationValue}>{userAddress}</Text>
              </View>
            </View>

            <View style={styles.confirmationItem}>
              <View style={styles.iconContainer}>
                <Image source={require('./assets/cash.png')} />
              </View>
              <View style={styles.confirmationText}>
                <Text style={styles.confirmationLabel}>Payment</Text>
                <Text style={styles.confirmationValue}>{selectedPayment}</Text>
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancelBooking}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.yesButton}
                onPress={handleConfirmBooking}
              >
                <Text style={styles.yesButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0891b2',
    paddingVertical: 20,
    paddingLeft: 15,
    paddingTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backArrow: {
    fontSize: 20,
    color: '#0891b2',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 100,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  technicianCard: {
    flexDirection: 'row',
    backgroundColor: '#e0f2f1',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  technicianImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
  },
  technicianInfo: {
    flex: 1,
  },
  technicianName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  technicianService: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  technicianRating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f59e0b',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  hint: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 8,
  },
  paymentContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  paymentButton: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    width: 107,
    height: 60,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    paddingTop: 5,
  },
  paymentButtonActive: {
    borderColor: '#0891b2',
    backgroundColor: '#e0f2f1',
  },
  paymentIcon: {
    fontSize: 24,
    paddingTop: 10,
  },
  paymentText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  gcashButton: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gcashText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  mayaButton: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mayaText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  bookNowButton: {
    backgroundColor: '#0891b2',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 40,
  },
  bookNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  confirmationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  confirmationText: {
    flex: 1,
  },
  confirmationLabel: {
    fontSize: 15,
    color: '#94a3b8',
    marginBottom: 2,
  },
  confirmationValue: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 5,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingVertical: 3,
    borderRadius: 30,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#64748b',
  },
  yesButton: {
    flex: 1,
    backgroundColor: '#0891b2',
    paddingVertical: 3,
    borderRadius: 30,
    alignItems: 'center',
  },
  yesButtonText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
});