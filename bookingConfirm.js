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

export default function BookingConfirm({navigation}) {
    
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
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.confirmSection}>
            <View>
                <View>
                    <Image source={require('./assets/check.png')} style={styles.check}/>
                </View>
                <Text style={styles.bookingConfirm}>Booking Confirmed!</Text>
                <Text style={styles.bookingMsg}>Your repairer is scheduled</Text>
            </View>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookDetailsButton} onPress={() => navigation.navigate('bookingDetails')} >
          <Text style={styles.bookDetailsText}>View Booking Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.GotoHomeButton} onPress={() => navigation.navigate('loggedinUser')} >
          <Text style={styles.GotoHomeText}>Go to Home Screen</Text>
        </TouchableOpacity>
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
    bookDetailsButton: {
        backgroundColor: '#0891b2',
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 40,
    },
    bookDetailsText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    GotoHomeButton: {
        backgroundColor: '#ffffffff',
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 10,
    },
    GotoHomeText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#137594',
    },
    confirmSection: {
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200,
    },
    check: {
        width: 90,
        height: 90,
        alignSelf: 'center',
        marginBottom: 15,
    },
    bookingConfirm: {
        fontSize: 30,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#137594',
        textAlign: 'center',
        marginBottom: 5,
    },
    bookingMsg: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
});