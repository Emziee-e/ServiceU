import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FilterButton = ({ label, active, onPress }) => (
  <TouchableOpacity 
    style={[styles.filterButton, active && styles.filterButtonActive]} 
    onPress={onPress}
  >
    <Text style={[styles.filterButtonText, active && styles.filterButtonTextActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const TechnicianCard = ({ imageSource, name, service, rating, onBook }) => (
  <View style={styles.technicianCard}>
    <Image source={imageSource} style={styles.technicianImage} />
    <View style={styles.technicianInfo}>
      <Text style={styles.technicianName}>{name}</Text>
      <Text style={styles.technicianService}>{service}</Text>
      <Text style={styles.technicianRating}>Rate: {rating}</Text>
    </View>
    <TouchableOpacity style={styles.bookButton} onPress={onBook}>
      <Text style={styles.bookButtonText}>Book</Text>
    </TouchableOpacity>
  </View>
);

const NavButton = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress}>
    <Image 
      source={icon} 
      style={[styles.navIcon, active && styles.navIconActive]} 
    />
    <Text style={[styles.navLabel, active && styles.navLabelActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function BookingRepairer({navigation}) {
  const [selectedFilter, setSelectedFilter] = useState('Most Relevant');

  const technicians = [
    {
      id: '1',
      name: 'Juan Dela Cruz',
      service: 'Hardware',
      rating: '4.5',
      imageSource: require('./assets/repairer1.png'),
    },
    {
      id: '2',
      name: 'Jose Mari',
      service: 'Hardware',
      rating: '4.0',
      imageSource: require('./assets/repairer2.png'),
    },
    {
      id: '3',
      name: 'Luis Fernando',
      service: 'Hardware',
      rating: '4.0',
      imageSource: require('./assets/repairer3.jpg'),
    },
  ];

  const handleBook = (technicianName) => {
    console.log('Booking:', technicianName);
    navigation.navigate('bookingPricing');
  };

  const handleBack = () => {
    console.log('Go back');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="chevron-back" size={28} color="#173d49ff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking</Text>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filtersContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContent}
        >
          <FilterButton 
            label="Most Relevant" 
            active={selectedFilter === 'Most Relevant'}
            onPress={() => setSelectedFilter('Most Relevant')}
          />
          <FilterButton 
            label="Top Rated" 
            active={selectedFilter === 'Top Rated'}
            onPress={() => setSelectedFilter('Top Rated')}
          />
          <FilterButton 
            label="Available" 
            active={selectedFilter === 'Available'}
            onPress={() => setSelectedFilter('Available')}
          />
        </ScrollView>
      </View>

      {/* Technician List */}
      <FlatList
        data={technicians}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TechnicianCard
            imageSource={item.imageSource}
            name={item.name}
            service={item.service}
            rating={item.rating}
            onBook={() => handleBook(item.name)}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        <NavButton 
          icon={require('./assets/home1.png')} 
          label="Home" 
          active={false} 
        />
        <NavButton 
          icon={require('./assets/activity.png')} 
          label="Activity" 
          active={false} 
        />
        <NavButton 
          icon={require('./assets/book1.png')} 
          label="Book" 
          active={true} 
        />
        <NavButton 
          icon={require('./assets/settings.png')} 
          label="Settings" 
          active={false} 
        />
      </View>
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
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10
  },
  filtersContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  filtersContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#e5e7eb',
  },
  filterButtonActive: {
    backgroundColor: '#0891b2',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  technicianCard: {
    flexDirection: 'row',
    backgroundColor: '#e0f2f1',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  technicianImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 12,
  },
  technicianInfo: {
    flex: 1,
  },
  technicianName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  technicianService: {
    fontSize: 20,
    color: '#64748b',
    marginBottom: 6,
  },
  technicianRating: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f59e0b',
  },
  bookButton: {
    backgroundColor: '#0891b2',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 75,
  },
  bookButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingBottom: 35,
  },
  navButton: {
    alignItems: 'center',
    gap: 4,
  },
  navIcon: {
    width: 24,
    height: 24,
    opacity: 0.5,
  },
  navIconActive: {
    opacity: 1,
  },
  navLabel: {
    fontSize: 12,
    color: '#9ca3af',
  },
  navLabelActive: {
    color: '#0891b2',
    fontWeight: '500',
  },
});