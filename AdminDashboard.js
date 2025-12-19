import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TotalBookingsCard from './TotalBookingsCard';

const AdminDashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, Admin!</Text>
        <Ionicons name="person-circle-outline" size={40} color="white" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardRow}>
          <View style={styles.statCard}>
            <Text style={styles.cardTitle}>Total Bookings</Text>
            <Ionicons name="filter-outline" size={18} color="#137594" style={styles.filterIcon} />
            <Text style={styles.statNumber}>128</Text>
          </View>
        </View>

        <View style={styles.cardRow}>
          <View style={styles.statCard}>
            <Text style={styles.cardTitle}>Active Repairers</Text>
            <Text style={styles.statNumber}>3</Text>
          </View>
        </View>

        <View style={styles.cardRow}>
          <View style={styles.statCard}>
            <Text style={styles.cardTitle}>Pending Requests</Text>
            <Text style={styles.statNumber}>8</Text>
          </View>
        </View>

        <TotalBookingsCard />

        <Text style={styles.quickTitle}>Quick Actions</Text>

        <TouchableOpacity style={styles.actionCard} onPress={() => navigation.navigate('manageRepairers')}>
          <Image source={require('./assets/repairers.png')} style={{width: 36, height: 36}} />
          <Text style={styles.actionText}>View All Repairers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={() => navigation.navigate('manageCustomers')}>
          <Image source={require('./assets/view all customers.png')} style={{width: 36, height: 36}} />
          <Text style={styles.actionText}>View All Customers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={() => navigation.navigate('verifyRepairers')}>
          <Image source={require('./assets/pending vertifications.png')} style={{width: 36, height: 36}} />
          <Text style={styles.actionText}>Pending Verifications</Text>
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="grid-outline" size={28} color="#137594" />
          <Text style={styles.navLabelActive}>Dashboard</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="settings-outline" size={28} color="#9CA3AF" />
          <Text style={styles.navLabel}>Settings</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, backgroundColor: "#F1F7F9" 
  },
  header: {
    backgroundColor: "#137594",
    paddingTop: 80,
    paddingBottom: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { 
    fontSize: 28, fontWeight: "bold", color: "#fff" 
  },
  scrollContent: { 
    padding: 20 
  },
  cardRow: { 
    marginBottom: 15 
  },
  statCard: {
    backgroundColor: "#E7F0F3",
    padding: 20,
    borderRadius: 15,
    position: "relative",
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#000" 
  },
  subLabel: { 
    color: "#4B5563", 
    fontSize: 14 
  },
  statNumber: { 
    fontSize: 32, 
    fontWeight: "bold", 
    marginTop: 5 
  },
  filterIcon: { 
    position: "absolute", 
    top: 15, 
    right: 15 
  },
  quickTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  actionCard: {
    backgroundColor: "#DFEDF2",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  actionText: { 
    fontSize: 17, 
    fontWeight: "600" 
  },
  bottomNav: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#D1D5DB",
  },
  navItem: { 
    alignItems: "center" 
  },
  navLabelActive: { 
    color: "#137594", 
    marginTop: 3, 
    fontWeight: "600" 
  },
  navLabel: { 
    color: "#9CA3AF", 
    marginTop: 3 
  },
});

export default AdminDashboard;