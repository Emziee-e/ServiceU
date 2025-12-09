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

const CustomerCard = ({ id, initials, name, email, lastOnline, status, onMenuPress, showMenu, onEditPress }) => (
  <View style={styles.customerCard}>
    <View style={styles.avatarContainer}>
      <Text style={styles.avatarText}>{initials}</Text>
    </View>
    <View style={styles.customerInfo}>
      <View style={styles.customerHeader}>
        <Text style={styles.customerName}>{name}</Text>
      </View>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.lastOnline}>Last Online: {lastOnline}</Text>
    </View>
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
    <View>
          <TouchableOpacity 
            style={styles.menuButton} 
            onPress={() => onMenuPress(id, name)}
          >
            <Text style={styles.menuIcon}>⋮</Text>
          </TouchableOpacity>
          
          {showMenu && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity 
                style={styles.dropdownItem}
                onPress={() => onEditPress(id, name)}
              >
                <Image source={require('./assets/pencil.png')} style={styles.pencil}/>
                <Text style={styles.dropdownText}>Edit Information</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
  </View>
);

export default function manageCustomers({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [openMenuId, setOpenMenuId] = useState(null);

  const customers = [
    {
      id: '1',
      initials: 'TM',
      name: 'Tristan Mirano',
      email: 'tristan.mirano@email.com',
      lastOnline: '25/10/2025 - 3:00 PM',
      status: 'Inactive',
    },
    {
      id: '2',
      initials: 'AA',
      name: 'Ashley Alday',
      email: 'ashley.alday@email.com',
      lastOnline: '25/11/2025 - 5:00 PM',
      status: 'Active',
    },
    {
      id: '3',
      initials: 'BV',
      name: 'Bryan Villalon',
      email: 'bryan.villalon@email.com',
      lastOnline: '25/11/2025 - 8:00 PM',
      status: 'Active',
    },
  ];

  const handleBack = () => {
    console.log('Go back');
    // Navigate back to previous screen
  };

  const handleMenuPress = (customerId, customerName) => {
    if (openMenuId === customerId) {
      setOpenMenuId(null); // Close menu if already open
    } else {
      setOpenMenuId(customerId); // Open menu for this customer
    }
  };

  const handleEditPress = (customerId, customerName) => {
    console.log('Edit information for:', customerId, customerName);
    setOpenMenuId(null); 
    navigation.navigate('editCustomer', { id: customerId, name: customerName });
  };

  // Filter customers based on selected filter
  const filteredCustomers = customers.filter(customer => {
    if (selectedFilter === 'All') return true;
    return customer.status === selectedFilter;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Ionicons name="chevron-back" size={28} color="#173d49ff" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Customer</Text>
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
            label="All" 
            active={selectedFilter === 'All'}
            onPress={() => setSelectedFilter('All')}
          />
          <FilterButton 
            label="Active" 
            active={selectedFilter === 'Active'}
            onPress={() => setSelectedFilter('Active')}
          />
          <FilterButton 
            label="Inactive" 
            active={selectedFilter === 'Inactive'}
            onPress={() => setSelectedFilter('Inactive')}
          />
        </ScrollView>
      </View>

      {/* Customer List */}
      <ScrollView 
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredCustomers.map((customer) => (
          <CustomerCard
            key={customer.id}
            id={customer.id}
            initials={customer.initials}
            name={customer.name}
            email={customer.email}
            lastOnline={customer.lastOnline}
            status={customer.status}
            onMenuPress={handleMenuPress}
            showMenu={openMenuId === customer.id}
            onEditPress={handleEditPress}
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
    backgroundColor: '#0891b2',
    paddingVertical: 16,
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
    fontSize: 18,
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
    margin: 15,
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
    paddingHorizontal: 24,
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
  customerCard: {
    flexDirection: 'row',
    backgroundColor: '#e0f2f1',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 0.1,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#5da5b8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  customerInfo: {
    flex: 1,
  },
  customerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  menuButton: {
    padding: 4,
    position: 'relative',
    paddingBottom: 75,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
  email: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 4,
  },
  lastOnline: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    marginLeft: 8,
    marginTop: 75,
  },
  statusActive: {
    backgroundColor: '#d1fae5',
  },
  statusInactive: {
    backgroundColor: '#fecdd3',
  },
  statusText: {
    fontSize: 12,
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