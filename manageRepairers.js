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
} from 'react-native';

const FilterButton = ({ label, active, onPress }) => (
  <TouchableOpacity 
    style={[styles.filterButton, active && styles.filterButtonActive]} 
    onPress={onPress}
  >
    <Text style={[styles.filterButtonText, active && styles.filterButtonTextActive]}>
      {label} ▼
    </Text>
  </TouchableOpacity>
);

const TechnicianCard = ({ id, imageSource, name, service, rating, status, onMenuPress, showMenu, menuPosition }) => (
  <View style={styles.technicianCard}>
    <Image source={imageSource} style={styles.technicianImage} />
    <View style={styles.technicianInfo}>
      <View style={styles.technicianHeader}>
        <Text style={styles.technicianName}>{name}</Text>
        <View>
          <TouchableOpacity 
            style={styles.menuButton} 
            onPress={(e) => onMenuPress(id, name, e)}
          >
            <Text style={styles.menuIcon}>⋮</Text>
          </TouchableOpacity>
          
          {showMenu && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity 
                style={styles.dropdownItem}
                onPress={() => handleEditPress(id, name)}
              >
                <Image source={require('./assets/pencil.png')} style={styles.pencil}/>
                <Text style={styles.dropdownText}>Edit Information</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <Text style={styles.technicianService}>{service}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.technicianRating}>Rate: {rating}</Text>
        <View style={[
          styles.statusBadge, 
          status === 'Active' ? styles.statusActive : styles.statusInactive
        ]}>
          <Text style={[
            styles.statusText,
            status === 'Active' ? styles.statusTextActive : styles.statusTextInactive
          ]}>
            {status}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default function RepairerManagementScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Expertise');
  const [openMenuId, setOpenMenuId] = useState(null);

  const technicians = [
    {
      id: '1',
      name: 'Juan Dela Cruz',
      service: 'Hardware',
      rating: '4.5',
      status: 'Inactive',
      imageSource: require('./assets/repairer1.png'),
    },
    {
      id: '2',
      name: 'Jose Mari',
      service: 'Hardware',
      rating: '4.0',
      status: 'Active',
      imageSource: require('./assets/repairer2.png'),
    },
    {
      id: '3',
      name: 'Luis Fernando',
      service: 'Hardware',
      rating: '4.0',
      status: 'Active',
      imageSource: require('./assets/repairer3.jpg'),
    },
  ];

  const handleBack = () => {
    console.log('Go back');
    // Navigate back to previous screen
  };

  const handleMenuPress = (technicianId, technicianName) => {
    if (openMenuId === technicianId) {
      setOpenMenuId(null); // Close menu if already open
    } else {
      setOpenMenuId(technicianId); // Open menu for this technician
    }
  };

  const handleEditPress = (technicianId, technicianName) => {
    console.log('Edit information for:', technicianId, technicianName);
    setOpenMenuId(null); // Close menu after action
    // Navigate to edit screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Image source={require('./assets/back.png')} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Repairer</Text>
            <Text style={styles.headerTitle}>Management</Text>
          </View>
        </View>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Image source={require('./assets/search.png')} />
        </View>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filtersContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContent}
        >
          <FilterButton 
            label="Expertise" 
            active={selectedFilter === 'Expertise'}
            onPress={() => setSelectedFilter('Expertise')}
          />
          <FilterButton 
            label="Status" 
            active={selectedFilter === 'Status'}
            onPress={() => setSelectedFilter('Status')}
          />
          <FilterButton 
            label="Rating" 
            active={selectedFilter === 'Rating'}
            onPress={() => setSelectedFilter('Rating')}
          />
        </ScrollView>
      </View>

      {/* Technician List */}
      <ScrollView 
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {technicians.map((tech) => (
          <TechnicianCard
            key={tech.id}
            id={tech.id}
            imageSource={tech.imageSource}
            name={tech.name}
            service={tech.service}
            rating={tech.rating}
            status={tech.status}
            onMenuPress={handleMenuPress}
            showMenu={openMenuId === tech.id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#137594',
    paddingVertical: 20,
    paddingLeft: 15,
    paddingTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    width: 120,
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  searchIcon: {
    fontSize: 16,
    marginLeft: 4,
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
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  technicianCard: {
    flexDirection: 'row',
    backgroundColor: '#e0f2f1',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 0.1,
  },
  technicianImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  technicianInfo: {
    flex: 1,
  },
  technicianHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  technicianName: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  menuButton: {
    padding: 4,
    position: 'relative',
  },
  menuIcon: {
    fontSize: 20,
    color: '#64748b',
    fontWeight: 'bold',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 28,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    minWidth: 160,
    zIndex: 1000,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  dropdownIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  dropdownText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  technicianService: {
    fontSize: 25,
    color: '#64748b',
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  technicianRating: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f59e0b',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusActive: {
    backgroundColor: '#d1fae5',
    borderRadius: 50,
  },
  statusInactive: {
    backgroundColor: '#fecdd3',
    borderRadius: 50,
  },
  statusText: {
    fontSize: 15,
    fontWeight: '600',
  },
  statusTextActive: {
    color: '#059669',
  },
  statusTextInactive: {
    color: '#dc2626',
  },
  pencil: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});