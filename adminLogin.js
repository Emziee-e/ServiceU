import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

export default function adminLogin({navigation}) {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!phoneOrEmail.trim()) {
      Alert.alert('Error', 'Please enter your phone number or email');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    console.log('Login attempt:', { phoneOrEmail, password });
    navigation.navigate("adminDashboard");
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
    // Navigate to forgot password screen
  };

  const handleGoBackToMain = () => {
    console.log('Go back to main login page');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image 
              source={require('./assets/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

      <Text style={styles.service}>
        <Text style={styles.yellow}>
          SERVICE -{' '}
        </Text>
        <Text style={styles.black}>
          U
        </Text>
      </Text>

          {/* Title */}
          <Text style={styles.title}>Admin Portal</Text>

          {/* Phone/Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number / Email"
              placeholderTextColor="#9ca3af"
              value={phoneOrEmail}
              onChangeText={setPhoneOrEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Password"
              placeholderTextColor="#9ca3af"
              value={password}
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

          {/* Login Button */}
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <TouchableOpacity 
            style={styles.forgotPasswordButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>

          {/* Go Back Link */}
          <TouchableOpacity 
            style={styles.goBackButton}
            onPress={handleGoBackToMain}
          >
            <Text style={styles.goBackText}>
              Go back to the main login page
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
    paddingBottom: 70,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 1,
    paddingTop: 10,
  },
  logo: {
    width: 190,
    height: 190,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 15,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 17,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    color: '#000',
    borderWidth: 1, 
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 12,
    padding: 4,
  },
  eyeIconText: {
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: '#137594',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#000',
  },
  goBackButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  goBackText: {
    fontSize: 13,
    color: '#64748b',
  },
  eye: {
    height: 20,
    width: 25,
  },
  service: {
    fontSize: 50,
    fontWeight: '900',
    paddingBottom: 20,
    textAlign: 'center',
  },
  yellow: {
    color: '#FFB808',
  },
});