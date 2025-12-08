import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ServiceCard = ({ title, baseFee, estimationFee, note, selected, onPress }) => (
  <TouchableOpacity 
    style={[styles.serviceCard, selected && styles.serviceCardSelected]} 
    onPress={onPress}
  >
    <Text style={styles.serviceTitle}>{title}</Text>
    <View style={styles.serviceFeeContainer}>
      <Text style={styles.serviceFeeLabel}>Base Service Fee </Text>
      <Text style={styles.serviceFeeAmount}>{baseFee}</Text>
      <Text style={styles.serviceFeeLabel}> + Estimation Fee </Text>
      <Text style={styles.serviceFeeAmount}>({estimationFee})</Text>
    </View>
    <Text style={styles.serviceNote}>{note}</Text>
  </TouchableOpacity>
);

export default function BookingPricing({navigation}) {
  const [selectedService, setSelectedService] = useState(null);

  const technician = {
    name: 'Luis Fernando',
    service: 'Hardware',
    rating: '4.0',
    imageSource: require('./assets/repairer3.jpg'),
  };

  const services = [
    {
      id: 'replace',
      title: 'Replace Component',
      baseFee: '500 PHP',
      estimationFee: '200 - 400 PHP',
      note: 'Note: Fee may vary depending on the complexity of the issue and labor hours',
    },
    {
      id: 'repair',
      title: 'Device Repair',
      baseFee: '500 PHP',
      estimationFee: '200 - 400 PHP',
      note: 'Note: Fee may vary depending on the complexity of the issue and labor hours',
    },
    {
      id: 'restoration',
      title: 'Hardware Restoration',
      baseFee: '500 PHP',
      estimationFee: '200 - 400 PHP',
      note: 'Note: Fee may vary depending on the complexity of the issue and labor hours',
    },
  ];

  const handleBack = () => {
    console.log('Go back');
    navigation.goBack();
  };

  const handleBook = () => {
    if (selectedService) {
      console.log('Booking service:', selectedService);
      navigation.navigate('bookingForms');
    } else {
      alert('Please select a service');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="chevron-back" size={28} color="#173d49ff" />
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
          <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        </View>

        {/* Base Service Fee */}
        <View style={styles.baseFeeSection}>
          <Text style={styles.baseFeeTitle}>Base Service Free</Text>
          <Text style={styles.baseFeeAmount}>500 PHP</Text>
          <Text style={styles.baseFeeDescription}>
            This is the minimum fee for any service requested
          </Text>
        </View>

        {/* Common Problems */}
        <Text style={styles.sectionTitle}>Common Problems</Text>

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            baseFee={service.baseFee}
            estimationFee={service.estimationFee}
            note={service.note}
            selected={selectedService === service.id}
            onPress={() => setSelectedService(service.id)}
          />
        ))}
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
    fontSize: 30,
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
    backgroundColor: '#fff',
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
    color: '#1E1E1E',
    marginBottom: 4,
  },
  technicianRating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f59e0b',
  },
  bookButton: {
    backgroundColor: '#0891b2',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 35,
  },
  bookButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  baseFeeSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  baseFeeTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  baseFeeAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0891b2',
    marginBottom: 8,
  },
  baseFeeDescription: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#0891b2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  serviceCardSelected: {
    backgroundColor: '#e0f2f1',
    borderColor: '#0891b2',
    borderWidth: 3,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  serviceFeeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  serviceFeeLabel: {
    fontSize: 13,
    color: '#1E1E1E',
  },
  serviceFeeAmount: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0891b2',
  },
  serviceNote: {
    fontSize: 11,
    color: '#94a3b8',
    fontStyle: 'italic',
    lineHeight: 16,
  },
});