
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../assets/colors.json';
import Dimensions from '../assets/dimensions.json';

const styles = StyleSheet.create({

  container: {
    padding: Dimensions.small
  },

  username: {
    fontWeight: 'bold',
    fontSize: Dimensions.xLarge,
    marginBottom: Dimensions.large,
  },

  fullNameContainer: {
    marginBottom: Dimensions.xxLarge
  },

  input: {
    borderWidth: 1,
    padding: Dimensions.xSmall,
    fontSize: Dimensions.medium,
    borderRadius: Dimensions.xSmall,
    borderColor: Colors.colorPrimary,
    marginBottom: Dimensions.small,
  },

  saveButton: {
    padding: Dimensions.xSmall,
    borderRadius: Dimensions.xSmall,
    backgroundColor: Colors.colorPrimary
  },

  saveButtonText: {
    textAlign: 'center',
    color: Colors.colorOnPrimary
  },

  contactsHeading: {
    fontWeight: 'bold',
    fontSize: Dimensions.large,
    marginBottom: Dimensions.large
  },

  contactFormButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },

  contactFormRemoveButton: {
    flexGrow: 1,
    marginRight: Dimensions.xSmall,
    backgroundColor: Colors.colorGray
  },

  contactFormSaveButton: {
    flexGrow: 1
  }

});

const AccountScreen = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.username}>@thelp</Text>

      <View style={styles.fullNameContainer}>
        <TextInput style={styles.input} placeholder="Full name" />
        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </Pressable>
      </View>  

      <Text style={styles.contactsHeading}>Emergency contacts</Text>

      <View>
        <TextInput style={styles.input} placeholder="Full name" />
        <TextInput style={styles.input} placeholder="Phone number" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Twitter username" keyboardType="email-address" />
        <View style={styles.contactFormButtons}>
          <Pressable style={[styles.saveButton, styles.contactFormRemoveButton]}>
            <Text style={styles.saveButtonText}>Remove</Text>
          </Pressable>
          <Pressable style={[styles.saveButton, styles.contactFormSaveButton]}>
            <Text style={styles.saveButtonText}>Save</Text>
          </Pressable>
        </View>
      </View>

    </View>
  );
}

export default AccountScreen;
