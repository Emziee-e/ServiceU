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

export default function BookingDetails({navigation}) {

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
  const userAddress = 'Kumintang Ibaba, Batangas City';

  const handleBack = () => {
    console.log('Go back');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="chevron-back" size={28} color="#173d49ff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Details</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View>
            <View style={styles.detailsContent}>
                <View style={styles.detailRow}>
                    <Image source={require('./assets/problem.png')} style={styles.detailIcon} />
                    <View style={styles.detailTexts}>
                    <Text style={styles.detailLabel}>Problem</Text>
                    <Text style={styles.detailValue}>{selectedService}</Text>
                    </View>
                </View>

                <View style={styles.detailRow}>
                    <Image source={require('./assets/technician.png')} style={styles.detailIcon} />
                    <View style={styles.detailTexts}>
                    <Text style={styles.detailLabel}>Repairer</Text>
                    <Text style={styles.detailValue}>{technician.name}</Text>
                    </View>
                </View>

                <View style={styles.detailRow}>
                    <Image source={require('./assets/calendar.png')} style={styles.detailIcon} />
                    <View style={styles.detailTexts}>
                    <Text style={styles.detailLabel}>Date & Time</Text>
                    <Text style={styles.detailValue}> Wed, Dec 10, 2025 - 2:00 PM </Text>
                    </View>
                </View>

                <View style={styles.detailRow}>
                    <Image source={require('./assets/address.png')} style={styles.detailIcon} />
                    <View style={styles.detailTexts}>
                    <Text style={styles.detailLabel}>Address</Text>
                    <Text style={styles.detailValue}>{userAddress}</Text>
                    </View>
                </View>

                <View style={styles.detailRow}>
                    <Image source={require('./assets/cash.png')} style={styles.detailIcon} />
                    <View style={styles.detailTexts}>
                    <Text style={styles.detailLabel}>Payment</Text>
                    <Text style={styles.detailValue}>{selectedPayment}</Text>
                    </View>
                </View>

                <View style={styles.detailRow}>
                    <Image source={require('./assets/status.png')} style={styles.detailIcon} />
                    <View style={styles.detailTexts}>
                    <Text style={styles.detailLabel}>Status</Text>
                    <Text style={[styles.detailValue, ]}>Pending</Text>
                    </View>
                </View>
            </View>
        </View>
      </ScrollView>
    </View>
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
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
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
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    confirmSection: {
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200,
    },
    detailsContent: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 22,
    },
    detailIcon: {
        width: 28,
        height: 28,
        marginRight: 15,
        marginTop: 4,
    },
    detailTexts: {
        flex: 1,
    },
    detailLabel: {
        fontSize: 14,
        color: '#94a3b8',
        marginBottom: 2,
    },
    detailValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
});