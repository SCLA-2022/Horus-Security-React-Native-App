import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput  } from 'react-native'

export default function LoginScreen ( {navigation} )  {
  const [username, setUsername] = useState('Admin')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(true)
  const [error, setError] = useState(null)

  let keyboardSize = new Animated.Value(0)

  const login = () => {
    if (username.toLocaleLowerCase() == 'admin' && password.toLocaleLowerCase() == 'admin') {
      navigation.navigate('Main', {title : 'Projects'})
    } else {
      setError('E-mail and/or Password is wrong')
      setTimeout(() => {
        setError(null)
      }, 3000);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.content} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={{flex: 1, backgroundColor: 'black', flexDirection:'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 90}}>
        {/* <TextInput
          containerStyle={{width: '75%'}}
          style={{color: '#aaa'}}
          placeholder='email@yourdomain.com'
          labelStyle={{color: '#ccc', fontWeight: '200', fontSize: 11}}
          label="Your E-mail address"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          containerStyle={{width: '75%'}}
          style={{color: '#aaa'}}
          placeholder='Password is Admin'
          labelStyle={{color: '#ccc', fontWeight: '200', fontSize: 11}}
          label="Password"
          secureTextEntry={showPwd}
          onChangeText={setPassword}
          value={password}
        /> */}
        {
          !error ?
            <TouchableOpacity
              containerStyle={{width: '60%'}}
              buttonStyle={{backgroundColor: '#555'}}
              title="Login"
              onPress={login}
            />
          :
            <View style={{backgroundColor: 'red', padding: 30, marginBottom: 50, borderRadius: 5}}>
              <Text style={{color: 'white'}}>{error}</Text>
            </View>
        }
        {/*       <Button title="Login" onPress={() => navigation.navigate('Main')}/> */}
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    width: '70%',
    height: 30,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    padding: 2,
  }
})

