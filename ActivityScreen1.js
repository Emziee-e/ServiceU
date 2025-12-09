
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';

const FilterTab = ({ label, active, onPress }) => (
  <TouchableOpacity 
    style={[styles.filterTab, active && styles.filterTabActive]} 
    onPress={onPress}
  >
    <Text style={[styles.filterTabText, active && styles.filterTabTextActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const ActivityItem = ({ activity }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Rebook':
        return { backgroundColor: '#0891b2', text: 'Rebook' };
      case 'Cancel':
        return { backgroundColor: '#ef4444', text: 'Cancel' };
      default:
        return null;
    }
  };

  const statusStyle = getStatusStyle(activity.status);
  const showRateButton = activity.filterStatus === 'Completed' || activity.showRate;

  return (
    <View style={styles.activityItem}>
      <View style={styles.activityLeft}>
        <Image 
          source={
            activity.category === 'Hardware' ? require('./assets/hardware.png') :
            activity.category === 'Plumbing' ? require('./assets/plumbing.png') :
            require('./assets/electrical.png')
          } 
          style={styles.activityIcon}
        />
        <View style={styles.activityInfo}>
          <Text style={styles.activityName}>{activity.repairerName}</Text>
          <Text style={styles.activityDate}>{activity.date}</Text>
          {showRateButton && (
            <TouchableOpacity style={styles.rateButtonInline}>
              <Text style={styles.rateButtonText}>Rate →</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.activityRight}>
        {activity.price && (
          <Text style={styles.activityPrice}>₱{activity.price}</Text>
        )}
        {statusStyle && (
          <TouchableOpacity 
            style={[styles.statusButton, { backgroundColor: statusStyle.backgroundColor }]}
          >
            <Text style={styles.statusButtonText}>{statusStyle.text}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const CategorySection = ({ category, activities, expanded, onToggle }) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'Hardware':
        return require('./assets/hardware.png');
      case 'Plumbing':
        return require('./assets/plumbing.png');
      case 'Electrical':
        return require('./assets/electrical.png');
      default:
        return require('./assets/hardware.png');
    }
  };

  return (
    <View style={styles.categorySection}>
      <TouchableOpacity 
        style={styles.categoryHeader}
        onPress={onToggle}
      >
        <View style={styles.categoryLeft}>
          <Image source={getCategoryIcon()} style={styles.categoryIcon} />
          <Text style={styles.categoryTitle}>{category}</Text>
        </View>
        <Text style={styles.expandIcon}>{expanded ? '︿' : '﹀'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.activitiesContainer}>
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </View>
      )}
    </View>
  );
};

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

export default function CustomerActivityScreen() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [expandedCategories, setExpandedCategories] = useState({
    Hardware: true,
    Plumbing: true,
    Electrical: true,
  });

  const allActivities = [
    {
      id: '1',
      category: 'Hardware',
      repairerName: 'Luis Fernando',
      date: '7 Nov 2025, 05:26 PM',
      price: '350.00',
      status: 'Cancel',
      filterStatus: 'Ongoing',
    },
    {
      id: '2',
      category: 'Plumbing',
      repairerName: 'Jose Mari',
      date: '7 Nov 2025, 05:26 PM',
      price: '350.00',
      status: null,
      filterStatus: 'Cancelled',
    },
    {
      id: '3',
      category: 'Electrical',
      repairerName: 'Juan Dela Cruz',
      date: '7 Nov 2025, 05:26 PM',
      price: '350.00',
      status: 'Rebook',
      filterStatus: 'Completed',
    },
  ];

  const handleBack = () => {
    console.log('Go back');
  };

  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category],
    });
  };

  // Filter activities based on selected tab
  const filteredActivities = selectedFilter === 'All' 
    ? allActivities 
    : allActivities.filter(activity => activity.filterStatus === selectedFilter);

  // Group activities by category
  const groupedActivities = filteredActivities.reduce((acc, activity) => {
    if (!acc[activity.category]) {
      acc[activity.category] = [];
    }
    acc[activity.category].push(activity);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity</Text>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filtersContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContent}
        >
          <FilterTab 
            label="All" 
            active={selectedFilter === 'All'}
            onPress={() => setSelectedFilter('All')}
          />
          <FilterTab 
            label="Ongoing" 
            active={selectedFilter === 'Ongoing'}
            onPress={() => setSelectedFilter('Ongoing')}
          />
          <FilterTab 
            label="Cancelled" 
            active={selectedFilter === 'Cancelled'}
            onPress={() => setSelectedFilter('Cancelled')}
          />
          <FilterTab 
            label="Completed" 
            active={selectedFilter === 'Completed'}
            onPress={() => setSelectedFilter('Completed')}
          />
        </ScrollView>
      </View>

      {/* Activities List */}
      <ScrollView 
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {Object.keys(groupedActivities).map((category) => (
          <CategorySection
            key={category}
            category={category}
            activities={groupedActivities[category]}
            expanded={expandedCategories[category]}
            onToggle={() => toggleCategory(category)}
          />
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavButton 
          icon={require('./assets/home.png')} 
          label="Home" 
          active={false} 
        />
        <NavButton 
          icon={require('./assets/activity.png')} 
          label="Activity" 
          active={true} 
        />
        <NavButton 
          icon={require('./assets/book.png')} 
          label="Book" 
          active={false} 
        />
        <NavButton 
          icon={require('./assets/settings.png')} 
          label="Settings" 
          active={false} 
        />
      </View>
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
    paddingHorizontal: 16,
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
    marginRight: 16,
  },
  backArrow: {
    fontSize: 20,
    color: '#0891b2',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  filtersContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  filtersContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterTab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e5e7eb',
  },
  filterTabActive: {
    backgroundColor: '#0891b2',
  },
  filterTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  filterTabTextActive: {
    color: '#fff',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  categorySection: {
    backgroundColor: '#e0f2f7',
    borderRadius: 12,
    marginBottom: 16,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0891b2',
  },
  expandIcon: {
    fontSize: 16,
    color: '#64748b',
  },
  activitiesContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  activityIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  activityDate: {
    fontSize: 11,
    color: '#94a3b8',
    marginBottom: 4,
  },
  rateButtonInline: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  rateButtonText: {
    fontSize: 12,
    color: '#000000ff',
    fontWeight: '600',
    backgroundColor: '#FFB808',
    opacity: 90,
    padding: 3,
  },
  activityRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  activityPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f59e0b',
  },
  statusButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusButtonText: {
    fontSize: 12,
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
    paddingBottom: 20,
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