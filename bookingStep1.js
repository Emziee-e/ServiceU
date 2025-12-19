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

const CategoryCard = ({ icon, title, description, selected, onPress }) => (
  <TouchableOpacity 
    style={[styles.categoryCard, selected && styles.categoryCardSelected]} 
    onPress={onPress}
  >
    <View style={styles.categoryContent}>
      <Image source={icon} style={styles.categoryIcon} />
      <View style={styles.categoryText}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Text style={styles.categoryDescription}>{description}</Text>
      </View>
    </View>
    <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
      {selected && <View style={styles.radioButtonInner} />}
    </View>
  </TouchableOpacity>
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

export default function BookingStep1({navigation}) {
  const [selectedCategory, setSelectedCategory] = useState('Hardware');

  const categories = [
    {
      id: 'Hardware',
      icon: require('./assets/hardware.png'),
      title: 'Hardware',
      description: 'Troubleshooting, installing, and computer repairs',
    },
    {
      id: 'Plumbing',
      icon: require('./assets/plumbing.png'),
      title: 'Plumbing',
      description: 'Leaks, installations, and pipe repairs',
    },
    {
      id: 'Electrical',
      icon: require('./assets/electrical.png'),
      title: 'Electrical',
      description: 'Wiring, outlets, and fixture installations',
    },
  ];

  const handleContinue = () => {
    console.log('Selected category:', selectedCategory);
    navigation.navigate('bookingRepairer');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booking</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Select category:</Text>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
              selected={selectedCategory === category.id}
              onPress={() => setSelectedCategory(category.id)}
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <NavButton 
          icon={require('./assets/home1.png')} 
          label="Home" 
          active={false} 
          onPress={() => navigation.navigate('loggedinUser')}
        />
        <NavButton 
          icon={require('./assets/activity.png')} 
          label="Activity" 
          active={false}
          onPress={() => navigation.navigate("activityScreen1")}
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
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 27,
    fontWeight: '600',
    color: '#000',
    marginTop: 24,
    marginBottom: 20,
    textAlign: 'center',
    paddingTop: 35,
  },
  categoriesContainer: {
    gap: 16,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#0891b2',
    borderRadius: 20,
    padding: 20,
    marginBottom: 5,
  },
  categoryCardSelected: {
    backgroundColor: '#e0f2f1',
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  categoryText: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 16,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0891b2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  radioButtonSelected: {
    borderColor: '#0891b2',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0891b2',
  },
  continueButton: {
    backgroundColor: '#0891b2',
    paddingVertical: 16,
    borderRadius: 12,
    margin: 10,
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 100,
  },
  continueButtonText: {
    fontSize: 16,
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