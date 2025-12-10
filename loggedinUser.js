import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

const ServiceCard = ({ imageSource, title, description }) => (
  <TouchableOpacity style={styles.serviceCard}>
    <Image source={imageSource} style={styles.serviceIcon} />
    <Text style={styles.serviceTitle}>{title}</Text>
    <Text style={styles.serviceDescription}>{description}</Text>
  </TouchableOpacity>
);

const RepairerCard = ({ imageSource, name, service, rating }) => (
  <TouchableOpacity style={styles.repairerCard}>
    <Image source={imageSource} style={styles.repairerImage}/>
    <Text style={styles.repairerName}>{name}</Text>
    <Text style={styles.repairerService}>{service}</Text>
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>⭐ {rating}</Text>
    </View>
  </TouchableOpacity>
);

const NavButton = ({ imageSource, label, active, onPress }) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress}>
    <Image 
      source={imageSource} 
      style={[styles.navIcon, active && styles.navIconActive]} 
    />
    <Text style={[styles.navLabel, active && styles.navLabelActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function LoggedinUser({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      imageSource: require('./assets/plumbing.png'),
      title: 'Plumbing',
      description: 'Leaky pipes, clogged drains',
    },
    {
      imageSource: require('./assets/hardware.png'),
      title: 'Hardware',
      description: 'Repair, upgrade and component replacements',
    },
    {
      imageSource: require('./assets/electrical.png'),
      title: 'Electrical',
      description: 'Wiring and Fixture Installation',
    },
  ];

  const repairers = [
    { 
      imageSource: require('./assets/repairer1.png'),
      name: 'Juan Dela Cruz', 
      service: 'Electrical', 
      rating: '4.5' },
      
    { 
      imageSource: require('./assets/repairer2.png'),
      name: 'Jose Mari', 
      service: 'Plumbing', 
      rating: '4.8' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
       <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={require('./assets/tristan.png')} 
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.greeting}>Hello, Tristan!</Text>
        </View>

        <View style={styles.searchContainer}>
          <Image source={require('./assets/search.png')} style={styles.profileImage2}/>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for services and technician"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>
          Find Your Technician Expert{'\n'}and Services
        </Text>

        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSource={service.imageSource}
              title={service.title}
              description={service.description}
            />
          ))}
        </View>

        {/* Top Rated Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Rated Repairers</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.repairersScroll}
          contentContainerStyle={styles.repairersContent}
        >
          {repairers.map((repairer, index) => (
            <RepairerCard
              key={index}
              imageSource={repairer.imageSource}
              name={repairer.name}
              service={repairer.service}
              rating={repairer.rating}
            />
          ))}
        </ScrollView>
      </ScrollView>

      <View style={styles.bottomNav}>
        <NavButton imageSource={require('./assets/home.png')} label="Home" active={true} />
        <NavButton imageSource={require('./assets/activity.png')} label="Activity" active={false} onPress={() => navigation.navigate("activityScreen1")} />
        <NavButton imageSource={require('./assets/book.png')} label="Book" active={false} onPress={() => navigation.navigate("bookingStep1")} />
        <NavButton imageSource={require('./assets/settings.png')} label="Settings" active={false} />
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
    paddingTop: 65,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 12,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileImage2: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  profileButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  profileIcon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 48,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 32,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#e0f2f1',
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
    marginBottom: 12,
  },
  serviceIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  viewAllText: {
    fontSize: 14,
    color: '#0891b2',
    fontWeight: '500',
  },
  repairersScroll: {
    marginBottom: 20,
  },
  repairersContent: {
    paddingRight: 16,
  },
  repairerCard: {
    width: 150,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 0,
    marginRight: 20,
    alignItems: 'center',
    paddingLeft: 0,
    paddingTop: 0,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#475569',
  },
  repairerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
  },
  repairerService: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 8,
  },
  ratingContainer: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#d97706',
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
  repairerImage: {
    width: 150,
    height: 150,
    marginBottom: 5,
    resizeMode: "stretch",
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});