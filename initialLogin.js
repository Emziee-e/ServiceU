import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import { login } from './authentication';

export default function InitialLogin({ navigation }) {
  const [customer_email, setEmail] = useState('');
  const [customer_password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
  if (!customer_email || !customer_password) {
    Alert.alert("Error", "Please fill in all fields");
    return;
  }

  setLoading(true);
  try {
    const response = await login(customer_email, customer_password);

    if (response.success) {
      if (response.userType === "customer") {
        navigation.navigate("loggedinUser", { user: response.user });
      } else if (response.userType === "repairer") {
        navigation.navigate("repairerDashboard", { repairer: response.user });
      } else {
        Alert.alert("Error", "Unknown user type");
      }
    } else {
      Alert.alert("Error", response.message || "Login failed");
    }
  } catch (error) {
    Alert.alert("Error", error.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <View style={styles.container}>

      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>SERVICE-<Text style={{ color: 'black' }}>U</Text></Text>
        <Text style={styles.label}>Login</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={customer_email}
        onChangeText={setEmail}
        editable={!loading}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Password"
          placeholderTextColor="#9ca3af"
          value={customer_password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity 
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
        <Image source={require('./assets/eye.png')} style={styles.eye}/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Log in</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot Password</Text>

      <View style={{ alignSelf: 'center', marginTop: 50 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.New}>New to Service-U?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("chooseProfile")}>
            <Text style={styles.Signup}> Sign-Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("adminLogin")}>
          <Text style={styles.admin}>Login as Administrator</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  logo: {
    marginTop: -115,
    width: 300,
    height: 187,
    resizeMode: 'contain',
    marginBottom: '15',
  },
  title: {
    alignSelf: 'center',
    fontSize: 52,
    fontWeight: 'extra-bold',
    marginBottom: 50,
    fontFamily: 'Inter-ExtraBold',
    color: '#FFB808',
  },
  label: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Inter-Bold',
  },
  titleContainer: {
    width: 300,
    alignItems: 'flex-start',
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#137594',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  forgotPassword: {
    color: 'black',
    marginTop: 10,
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 32,
  },
  New: {
    color: '#A9A9A9',
    marginTop: 10,
    fontSize: 17,
  },
  Signup: {
    color: '#137594',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 9,
  },
  admin: {
    alignSelf: 'center',
    color: '#A9A9A9',
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  eye: {
    height: 20,
    width: 25,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 12,
    padding: 4,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  passwordInput: {
    paddingRight: 50,
  },
});
