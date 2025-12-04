import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function InitialLogin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>SERVICE-<Text style={{color: 'black'}}>U</Text></Text>
        <Text style={styles.label}>Login</Text>
      </View>


      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
      />

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot Password</Text>
      <View style={{alignSelf: 'center', marginTop: 50}}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }}>
          <Text style={styles.New}>New to Service-U?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("customerSignUp")}>
            <Text style={styles.Signup}> Sign-Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("AdminLogin")}>
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
  },
  New:{
    color: '#A9A9A9',
    marginTop: 10,
    fontSize: 17,
  },
  Signup:{
    color: '#137594',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 9,
  }, 
  admin:{
    alignSelf: 'center',
    color: '#A9A9A9',
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  }, 
});
