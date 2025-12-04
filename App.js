import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RepairerSignUp2 from './repairerSignUp2';



export default function App() {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <RepairerSignUp2 />

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