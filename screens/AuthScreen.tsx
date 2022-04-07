
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../App';
import Colors from '../assets/colors.json';
import Dimensions from '../assets/dimensions.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.colorPrimary
  },

  text: {
    fontSize: 100,
    color: Colors.colorOnPrimary,
    marginBottom: Dimensions.xxLarge,
    fontFamily: 'RubikMoonrocks-Regular'
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Dimensions.large,
    borderRadius: Dimensions.small,
  },

  buttonActive: {
    backgroundColor: Colors.colorLightGray
  },

  buttonInactive: {
    backgroundColor: Colors.colorOnPrimary
  },

  buttonText: {
    fontWeight: 'bold',
    color: Colors.colorPrimary,
  },

  buttonIcon: {
    color: Colors.colorPrimary,
    fontSize: Dimensions.xxLarge,
    marginRight: Dimensions.xSmall
  }
});

const AuthScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Auth'>>();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(
    () => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }
      ).start();
    }, 
    [fadeAnim]
  );

  return (
    <View style={styles.container}>
      <Animated.Text style={{ ...styles.text, opacity: fadeAnim }}>Thelp</Animated.Text>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Pressable 
          onPress={()=> navigation.navigate('Main', { screen: 'Home' })} 
          style={({ pressed })=> [
            styles.button,
            pressed ? styles.buttonActive : styles.buttonInactive
          ]}
          >
          <Icon name="logo-twitter" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>SIGN IN WITH TWITTER</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default AuthScreen;
