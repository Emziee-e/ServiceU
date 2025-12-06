import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';

const ManageBookings = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Incoming');
  const [activeNav, setActiveNav] = useState('Jobs');

  const NavButton = ({ imageSource, label, active }) => (
  <TouchableOpacity style={styles.navButton}>
    <Image 
      source={imageSource} 
      style={[styles.navIcon, active && styles.navIconActive]} 
    />
    <Text style={[styles.navLabel, active && styles.navLabelActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

  const jobs = {
    Incoming: [
      { id: 1, title: 'Replace Component', client: 'Tristan Mirano' },
      { id: 2, title: 'Device Repair', client: 'Brent Pagcaliwagan' },
      { id: 3, title: 'Hardware Restoration', client: 'Kenn Philip Silang' }
    ],
    Ongoing: [
      { id: 4, title: 'System Upgrade', client: 'Maria Santos' },
      { id: 5, title: 'Network Setup', client: 'John Doe' }
    ],
    Cancelled: [
      { id: 6, title: 'Monitor Repair', client: 'Jane Smith' }
    ],
    Completed: [
      { id: 7, title: 'Laptop Cleaning', client: 'Robert Chen' },
      { id: 8, title: 'Data Recovery', client: 'Sarah Johnson' }
    ]
  };

  const tabs = ['Incoming', 'Ongoing', 'Cancelled', 'Completed'];

  const Icon = ({ name, color, size = 24 }) => (
    <View style={[styles.iconPlaceholder, { width: size, height: size }]}>
      <Text style={{ color, fontSize: size * 0.5 }}>
        {name === 'wrench' ? '🔧' : name === 'home' ? '🏠' : name === 'users' ? '👥' : '⚙️'}
      </Text>
    </View>
  );

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
          jobs[activeTab].map(job => (
            <TouchableOpacity key={job.id} style={styles.jobCard}>
              <View style={styles.jobCardContent}>
                <View style={styles.iconContainer}>
                  <Image source={require('./assets/chip_1.png')} />
                </View>
                <View style={styles.jobInfo}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.jobClient}>{job.client}</Text>
                </View>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No {activeTab.toLowerCase()} jobs</Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavButton imageSource={require('./assets/splash-icon.png')} label="Home" active={true} />
        <NavButton imageSource={require('./assets/icon.png')} label="Jobs" active={false} />
        <NavButton imageSource={require('./assets/favicon.png')} label="Book" active={false} />
        <NavButton imageSource={require('./assets/check.png')} label="Settings" active={false} />
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
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    jobCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
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
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    jobInfo: {
        flex: 1,
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
    },
    jobClient: {
        fontSize: 17,
        color: '#6b7280',
    },
    chevron: {
        fontSize: 54,
        color: '#137594',
        marginLeft: 8,
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

export default ManageBookings;