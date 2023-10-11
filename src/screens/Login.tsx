import * as regex from '../constants/regex';

import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {THEME} from '../constants/theme';

interface ILogin {
  username: string;
  password: string;
}
interface ILoginValidation {
  username: boolean;
  password: boolean;
}

export default function Login() {
  const [isValid, setIsValid] = useState<ILoginValidation>({
    username: false,
    password: false,
  });
  const [login, setLogin] = useState<ILogin>({
    username: '',
    password: '',
  });

  const handleChange = useCallback(
    (value) => {
      setLogin((state) => ({...state, ...value}));
    },
    [setLogin],
  );

  const handleSignIn = useCallback(() => {
    if (!Object.values(isValid).includes(false)) {
      /** send Login data */
      console.log('handleSignIn', login);
    }
  }, [isValid, login]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.username.test(login.username),
      password: regex.password.test(login.password),
    }));
  }, [login, setIsValid]);

  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={THEME.assets.background}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={styles.row}>
            {/* <Image source={THEME.assets.logo} style={styles.brandLogo} /> */}
            <Text style={styles.brandName}>Co-op</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#000000'}
            placeholder="Email"
            onChangeText={(value) => handleChange({username: value})}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(value) => handleChange({password: value})}
          />

          <View style={styles.loginBtnWrapper}>
            <Text style={styles.loginText}>Log In</Text>
          </View>
          <Button title="Left button" onPress={() => handleSignIn()} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 10,
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
