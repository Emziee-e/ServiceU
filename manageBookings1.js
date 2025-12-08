import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, Image, Modal } from 'react-native';

const ManageBookings1 = ({ navigation }) => {
  const [declineModalVisible, setDeclineModalVisible] = useState(false);

  const bookingData = {
    service: 'Replace Component',
    client: 'Tristan Mirano',
    problem: 'Component Replacement',
    address: 'Kumintang Ibaba, Batangas City',
    dateTime: 'December 10, 2025 at 2:00 PM',
    payment: 'GCash'
  };

  const handleDeclineBooking = () => {
    setDeclineModalVisible(true);
  };

  const handleConfirmDecline = () => {
    setDeclineModalVisible(false);
    console.log('Booking declined and confirmed');
    // Add your decline logic here (e.g., navigate back or update status)
  };

  const handleCancelDecline = () => {
    setDeclineModalVisible(false);
  };

  const handleAcceptBooking = () => {
    console.log('Booking accepted');
    navigation.navigate("repairerDashboard")
    // Add your accept logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booking Details</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Service Card */}
        <View style={styles.serviceCard}>
          <View style={styles.iconContainer}>
            <Image source={require('./assets/chip_1.png')} style={styles.serviceIcon} />
          </View>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>{bookingData.service}</Text>
            <Text style={styles.clientName}>{bookingData.client}</Text>
          </View>
        </View>

        {/* Details Section */}
        <View style={styles.detailsSection}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Problem</Text>
            <Text style={styles.detailValue}>{bookingData.problem}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>{bookingData.address}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Requested Date & Time</Text>
            <Text style={styles.detailValue}>{bookingData.dateTime}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Mode of Payment</Text>
            <Text style={styles.detailValue}>{bookingData.payment}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.declineButton}
          onPress={handleDeclineBooking}
        >
          <Text style={styles.declineButtonText}>Decline Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.acceptButton}
          onPress={handleAcceptBooking}
        >
          <Text style={styles.acceptButtonText}>Accept Booking</Text>
        </TouchableOpacity>
      </View>

      {/* Decline Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={declineModalVisible}
        onRequestClose={handleCancelDecline}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Decline Booking?</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to decline this booking?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={handleCancelDecline}
              >
                <Text style={styles.modalCancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalConfirmButton}
                onPress={handleConfirmDecline}
              >
                <Text style={styles.modalConfirmButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#137594',
    paddingVertical: 20,
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#e0f2f7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  serviceIcon: {
    width: 32,
    height: 32,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  clientName: {
    fontSize: 14,
    color: '#6b7280',
  },
  detailsSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  detailItem: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  detailValue: {
    fontSize: 15,
    color: '#000000ff',
    borderRadius: 10,
    borderColor: '#68676770',
    borderWidth: 1,
    lineHeight: 20,
    padding: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 35,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    gap: 12,
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  declineButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#137594',
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#137594',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  acceptButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    width: '85%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  modalCancelButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 12,
    borderRadius: 18,
    alignItems: 'center',
  },
  modalCancelButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6b7280',
  },
  modalConfirmButton: {
    flex: 1,
    backgroundColor: '#137594',
    paddingVertical: 12,
    borderRadius: 18,
    alignItems: 'center',
  },
  modalConfirmButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default ManageBookings1;