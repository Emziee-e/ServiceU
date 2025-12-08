import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Platform,
} from 'react-native';


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

  const activities = [
    {
      id: '1',
      category: 'Hardware',
      repairerName: 'Luis Fernando',
      date: '7 Nov 2025, 05:26 PM',
      price: '₱320.00',
      status: 'Rate',
      statusType: 'ongoing' 
    },
    {
      id: '2',
      category: 'Plumbing',
      repairerName: 'Jose Mari',
      date: '7 Nov 2025, 05:20 PM',
      price: '₱320.00',
      statusType: 'ongoing'
    },
    {
      id: '3',
      category: 'Electrical',
      repairerName: 'Juan Dela Cruz',
      date: '7 Nov 2025, 05:02 PM',
      price: '₱320.00',
      statusType: 'completed' 
    },
    {
      id: '4',
      category: 'Plumbing',
      repairerName: 'Jose Mari',
      date: '7 Nov 2025, 05:26 PM',
      price: '₱320.00',
      statusType: 'cancelled' 
    },
    {
        id: '5',
        category: 'Hardware',
        repairerName: 'Extra Completed',
        date: '7 Nov 2025, 05:26 PM',
        price: '₱320.00',
        status: 'Rate', 
        statusType: 'completed'
    },
  ];

  const tabs = ['All', 'Ongoing', 'Cancelled', 'Completed'];

  const getFilteredActivities = () => {
    let filtered = [];

    if (selectedTab === 'All') {
      filtered = activities.filter(activity => ['1', '2', '3'].includes(activity.id));
    } else if (selectedTab === 'Ongoing') {
      filtered = activities.filter(activity => activity.id === '1').map(activity => {
        return { ...activity, status: 'Cancel', showRateInOngoing: false };
      });
    } else if (selectedTab === 'Cancelled') {
      filtered = activities.filter(activity => activity.id === '4');
    } else if (selectedTab === 'Completed') {
      filtered = activities.filter(activity => activity.id === '3').map(activity => {
        return { ...activity, status: 'Rebook' };
      });
    }
    return filtered;
  };

  const handleStatusButton = (activity, buttonText) => {
    if (buttonText === 'Rate') {
      console.log('Navigate to RatingReview for:', activity.repairerName);
      navigation.navigate("ratingReview")
    } else if (buttonText === 'Rebook') {
      console.log('Rebook:', activity.repairerName);
    } else if (buttonText === 'Cancel') {
      console.log('Cancel:', activity.repairerName);
    }
  };

  const renderActivityItem = ({ item }) => {
    let buttonText = item.status;
    let showRateLink = false;
    let showButton = false;
    
    if (item.status === 'Rate' && item.showRateInOngoing !== false) {
        showRateLink = true;
        buttonText = 'Rebook';
        showButton = true;
    } 
    else if (item.status === 'Cancel') {
        buttonText = 'Cancel';
        showButton = true;
    }
    else if (item.status === 'Rebook') {
        buttonText = 'Rebook';
        showButton = true;
    }

    if (item.statusType === 'cancelled') {
        showButton = false;
    }

    const iconSource = categoryIcons[item.category];
    
    const buttonStyle = 
        (buttonText === 'Cancel') ? styles.cancelButton : 
        styles.rebookButton;

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
              <Image
                source={iconSource}
                style={styles.chipIcon}
                resizeMode="contain"
              />
            ) : (
              <Text style={styles.serviceIconPlaceholder}>?</Text>
            )}
          </View>

          <View style={styles.jobInfo}>
            <Text style={styles.jobClient}>{item.repairerName}</Text>
            <Text style={styles.jobDate}>{item.date}</Text>
            {showRateLink && ( 
                <TouchableOpacity style={styles.rateLink} onPress={() => handleStatusButton(item, 'Rate')}>
                    <Text style={styles.rateLinkText}>Rate</Text>
                    <Text style={styles.rateLinkArrow}>→</Text>
                </TouchableOpacity>
            )}
          </View>

          <View style={styles.priceContainer}>
            <Text style={item.statusType === 'cancelled' ? styles.priceTextCancelled : styles.priceText}>
                {item.price}
            </Text>
            {showButton && (
              <TouchableOpacity
                style={[
                  styles.statusButton,
                  buttonStyle
                ]}
                onPress={() => handleStatusButton(item, buttonText)}
              >
                <Text style={styles.statusButtonText}>
                  {buttonText}
                </Text>
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
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab ? styles.tabActive : styles.tabInactive
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[
              styles.tabText,
              selectedTab === tab ? styles.tabTextActive : styles.tabTextInactive
            ]}>
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
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("loggedinUser")}>
          <Image
            source={navIcons.home}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={navIcons.activity}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navTextActive}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("bookingStep1")}>
          <Image
            source={navIcons.book}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={navIcons.settings}
            style={styles.navIcon}
            resizeMode="contain"
          />
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
    paddingVertical: 20,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    flex: 1,
  },
  placeholder: {
    width: 30,
  },

  tabsContainer: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
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
    color: '#ffffff',
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
    backgroundColor: '#ffffff',
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
    backgroundColor: '#e0f2f7',
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

  rateLink: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f39c12',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  rateLinkText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#f39c12',
    marginRight: 3,
  },
  rateLinkArrow: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffb808',
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
    color: '#ffb808',
    textDecorationLine: 'line-through',
    marginBottom: 8,
  },
  statusButton: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 4,
    minWidth: 70,
    alignItems: 'center',
  },
  rebookButton: {
    backgroundColor: '#137594',
  },
  cancelButton: {
    backgroundColor: '#EF4444',
  },
  statusButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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