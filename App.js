import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomerSignUp from './customerSignUp1';
import DefaultSignUp from './defaultSignUp';



export default function App() {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CustomerSignUp />
        <DefaultSignUp />
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
