import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import StackNavigation from './StackNavigation';

export default function App() {
  return (
    <>
      <StackNavigation />
      <StatusBar style="auto" />
    </>
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
