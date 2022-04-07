
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/colors.json';
import Dimensions from '../assets/dimensions.json';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: 250,
    height: 250,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonActive: {
    backgroundColor: Colors.colorGray,
  },

  buttonInactive: {
    backgroundColor: Colors.colorError
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: Dimensions.xLarge,
    color: Colors.colorOnPrimary
  },

  buttonIcon: {
    fontSize: 50,
    color: Colors.colorOnPrimary,
    marginBottom: Dimensions.small
  }

});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Pressable 
        onPress={()=> alert('TODO...')} 
        style={({ pressed })=> [
          styles.button,
          pressed ? styles.buttonActive : styles.buttonInactive
        ]}
        >
        <Icon name="megaphone" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>SEND SOS</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
