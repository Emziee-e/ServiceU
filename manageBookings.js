import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';

const ManageBookings = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Ongoing');
  const [activeNav, setActiveNav] = useState('Jobs');
  const [expandedCategory, setExpandedCategory] = useState('Hardware');

  const jobs = {
    Incoming: [
      { id: 1, title: 'Replace Component', client: 'Tristan Mirano' },
      { id: 2, title: 'Device Repair', client: 'Brent Pagcaliwagan' },
      { id: 3, title: 'Hardware Restoration', client: 'Kenn Philip Silang' }
    ],
    Ongoing: [
      { id: 4, category: 'Hardware', client: 'Vin Perez', date: '10 Dec 2025, 09:00 AM', amount: 320.00 },
    ],
    Cancelled: [
      { id: 6, category: 'Plumbing', client: 'Ashley Alday', date: '08 Dec 2025, 07:20 AM', amount: 220.00 }
    ],
    Completed: [
      { id: 7, category: 'Hardware', client: 'Vin Perez', date: '10 Dec 2025, 09:00 AM', amount: 320.00 },
    ]
  };

  const tabs = ['Incoming', 'Ongoing', 'Cancelled', 'Completed'];

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const getCategoryName = () => {
    if (activeTab === 'Cancelled') return 'Plumbing';
    return 'Hardware';
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Manage Job Requests</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tab,
                activeTab === tab ? styles.tabActive : styles.tabInactive
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab ? styles.tabTextActive : styles.tabTextInactive
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Job List */}
      <ScrollView style={styles.jobList}>
        {jobs[activeTab].length > 0 ? (
          activeTab === 'Incoming' ? (
            // Incoming tab with original format
            jobs[activeTab].map(job => (
              <TouchableOpacity key={job.id} style={styles.jobCardOriginal}>
                <View style={styles.jobCardContent}>
                  <View style={styles.iconContainerOriginal}>
                    <Image source={require('./assets/chip_1.png')} />
                  </View>
                  <View style={styles.jobInfo}>
                    <Text style={styles.jobTitle}>{job.title}</Text>
                    <Text style={styles.jobClientOriginal}>{job.client}</Text>
                  </View>
                </View>
                <Text style={styles.chevron}>›</Text>
              </TouchableOpacity>
            ))
          ) : (
            // Ongoing, Cancelled, and Completed tabs with category dropdown
            <View>
              {/* Category Header */}
              <TouchableOpacity 
                style={styles.categoryHeader}
                onPress={() => toggleCategory(getCategoryName())}
              >
                <Text style={styles.categoryText}>{getCategoryName()}</Text>
                <Text style={[
                  styles.chevronCategory,
                  expandedCategory === getCategoryName() && styles.chevronExpanded
                ]}>
                  ›
                </Text>
              </TouchableOpacity>

              {/* Jobs under category */}
              {expandedCategory === getCategoryName() && jobs[activeTab].map(job => (
                <View key={job.id} style={styles.jobCard}>
                  <View style={styles.jobCardHeader}>
                    <View style={styles.iconContainer}>
                      <Image source={require('./assets/chip_1.png')} style={styles.chipIcon} />
                    </View>
                    <View style={styles.jobInfo}>
                      <Text style={styles.jobClient}>{job.client}</Text>
                      <Text style={styles.jobDate}>{job.date}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                      <Text style={[
                        styles.priceText,
                        activeTab === 'Cancelled' && styles.priceTextCancelled
                      ]}>
                        ₱ {job.amount.toFixed(2)}
                      </Text>
                    </View>
                  </View>
                  
                  {/* Complete Button - only for Ongoing tab */}
                  {activeTab === 'Ongoing' && (
                    <TouchableOpacity style={styles.completeButton}>
                      <Text style={styles.completeButtonText}>Complete</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          )
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No {activeTab.toLowerCase()} jobs</Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          activeOpacity={0.7}
          onPress={() => navigation.navigate("repairerDashboard")}
        >
          <Image source={require('./assets/home1.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={require('./assets/jobs1.png')} style={styles.navIcon} />
          <Text style={styles.navTextActive}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={require('./assets/earnings.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={require('./assets/settings.png')} style={styles.navIcon} />
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
  tabsContainer: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 5,
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
  },
  jobCardOriginal: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  jobCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainerOriginal: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  jobClientOriginal: {
    fontSize: 15,
    color: '#6b7280',
  },
  chevron: {
    fontSize: 54,
    color: '#137594',
    marginLeft: 8,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#137594',
  },
  chevronCategory: {
    fontSize: 24,
    color: '#137594',
    transform: [{ rotate: '90deg' }],
  },
  chevronExpanded: {
    transform: [{ rotate: '270deg' }],
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
  jobCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f59e0b',
  },
  priceTextCancelled: {
    textDecorationLine: 'line-through',
    color: '#6b7280',
  },
  completeButton: {
    backgroundColor: '#10b981',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  completeButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 14,
    color: '#9ca3af',
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

export default ManageBookings;