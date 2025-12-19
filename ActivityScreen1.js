import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categoryIcons = {
  Hardware: require('./assets/icon/Hardware.png'),
  Plumbing: require('./assets/icon/Plumbing.png'),
  Electrical: require('./assets/icon/Electrical.png'),
};

const navIcons = {
  home: require('./assets/icon/Home.png'),
  activity: require('./assets/icon/Activity.png'),
  book: require('./assets/icon/Book.png'),
  settings: require('./assets/icon/Setting.png'),
};

const ActivityScreen1 = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [activities, setActivities] = useState([
    {
      id: '1',
      category: 'Hardware',
      repairerName: 'Luis Fernando',
      date: '7 Nov 2025, 05:26 PM',
      price: '₱320.00',
      statusType: 'ongoing',
    },
    {
      id: '2',
      category: 'Plumbing',
      repairerName: 'Jose Mari',
      date: '7 Nov 2025, 05:20 PM',
      price: '₱320.00',
      statusType: 'cancelled',
    },
    {
      id: '3',
      category: 'Electrical',
      repairerName: 'Juan Dela Cruz',
      date: '7 Nov 2025, 05:02 PM',
      price: '₱320.00',
      statusType: 'completed',
    },
    
  ]);

  const tabs = ['All', 'Ongoing', 'Cancelled', 'Completed'];
    const getFilteredActivities = () => {
    if (selectedTab === 'All') {
      return activities; 
    } else if (selectedTab === 'Ongoing') {
      return activities.filter(a => a.statusType === 'ongoing');
    } else if (selectedTab === 'Cancelled') {
      return activities.filter(a => a.statusType === 'cancelled');
    } else if (selectedTab === 'Completed') {
      return activities.filter(a => a.statusType === 'completed');
    }
    return [];
  };

  const handleStatusButton = (activity, buttonText) => {
    if (buttonText === 'Rate') {
      navigation.navigate('ratingReview');
    } else if (buttonText === 'Rebook') {
      console.log('Rebook:', activity.repairerName);
    } else if (buttonText === 'Cancel') {
      const updated = activities.map(a =>
        a.id === activity.id ? { ...a, statusType: 'cancelled' } : a
      );
      setActivities(updated);
    }
  };

  const renderActivityItem = ({ item }) => {
    const iconSource = categoryIcons[item.category];
    const showCancel = item.repairerName === 'Luis Fernando' && item.statusType === 'ongoing';
    const showRebook = item.repairerName === 'Juan Dela Cruz' && item.statusType === 'completed';
    const showRate = item.repairerName === 'Juan Dela Cruz' && item.statusType === 'completed';

    return (
      <View style={styles.jobCard}>
        <View style={styles.cardHeader}>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryLabel}>{item.category}</Text>
          </View>
        </View>

        <View style={styles.jobCardHeader}>
          <View style={styles.iconContainer}>
            {iconSource ? (
              <Image source={iconSource} style={styles.chipIcon} resizeMode="contain" />
            ) : (
              <Text style={styles.serviceIconPlaceholder}>?</Text>
            )}
          </View>

          <View style={styles.jobInfo}>
            <Text style={styles.jobClient}>{item.repairerName}</Text>
            <Text style={styles.jobDate}>{item.date}</Text>

            {showRate && (
              <TouchableOpacity
                style={[styles.rateButton, { marginTop: 4 }]}
                onPress={() => handleStatusButton(item, 'Rate')}
              >
                <Text style={styles.rateButtonText}>Rate</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.priceContainer}>
            <Text
              style={
                item.statusType === 'cancelled' ? styles.priceTextCancelled : styles.priceText
              }
            >
              {item.price}
            </Text>

            {showCancel && (
              <TouchableOpacity
                style={[styles.statusButton, styles.cancelButton]}
                onPress={() => handleStatusButton(item, 'Cancel')}
              >
                <Text style={styles.statusButtonText}>Cancel</Text>
              </TouchableOpacity>
            )}
            {showRebook && (
              <TouchableOpacity
                style={[styles.statusButton, styles.rebookButton, { marginTop: 4 }]}
                onPress={() => handleStatusButton(item, 'Rebook')}
              >
                <Text style={styles.statusButtonText}>Rebook</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#173d49ff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab ? styles.tabActive : styles.tabInactive]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab ? styles.tabTextActive : styles.tabTextInactive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={getFilteredActivities()}
        renderItem={renderActivityItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.jobList}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('loggedinUser')}>
          <Image source={navIcons.home} style={styles.navIcon} resizeMode="contain" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={navIcons.activity} style={styles.navIcon} resizeMode="contain" />
          <Text style={styles.navTextActive}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('bookingStep1')}>
          <Image source={navIcons.book} style={styles.navIcon} resizeMode="contain" />
          <Text style={styles.navText}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={navIcons.settings} style={styles.navIcon} resizeMode="contain" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#137594',
    paddingTop: 80,
    paddingVertical: 20,
    paddingHorizontal: 20,
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
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#ffffff',
    flex: 1,
  },
  placeholder: {
    width: 30,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
    marginRight: 10,
  },
  tabActive: {
    backgroundColor: '#137594',
  },
  tabInactive: {
    backgroundColor: '#f3f4f6',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
  },
  tabTextInactive: {
    color: '#6b7280',
  },
  jobList: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 100,
  },
  jobCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 4,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: {
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#137594',
  },
  jobCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  chipIcon: {
    width: 40,
    height: 40,
  },
  serviceIconPlaceholder: {
    fontSize: 24,
    color: '#137594',
  },
  jobInfo: {
    flex: 1,
  },
  jobClient: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  jobDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusButton: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
    minWidth: 70,
    alignItems: 'center',
    marginTop: 4,
  },
  rebookButton: {
    backgroundColor: '#137594',
  },
  cancelButton: {
    backgroundColor: '#EF4444',
  },
  rateButton: {
    backgroundColor: '#f39c12',
    borderRadius: 10,   
    paddingHorizontal: 13, 
    paddingVertical: 5,   
    alignSelf: 'flex-start', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  rateButtonText: {
    fontSize: 14,
    fontWeight: '600',  
    color: '#fff',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffb808',
    marginBottom: 8,
  },
  priceTextCancelled: {
    fontSize: 16,
    fontWeight: '600',
    color: '#72706c',
    textDecorationLine: 'line-through',
    marginBottom: 8,
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
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 28,
    height: 28,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#999',
  },
  navTextActive: {
    fontSize: 12,
    color: '#137594',
    fontWeight: '600',
  },
});

export default ActivityScreen1;