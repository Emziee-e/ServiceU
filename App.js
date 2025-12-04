import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RepairerSignUp from './repairerSignUp1';



export default function App() {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <RepairerSignUp />

        <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});