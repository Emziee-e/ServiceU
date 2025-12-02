import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomerSignUp from './customerSignUp1';



export default function App() {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CustomerSignUp />

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
