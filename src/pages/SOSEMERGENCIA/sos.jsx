import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import {  Image, TextInput } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 16,
    color: '#999',
  },
  locationButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  locationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const AlertScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alerta</Text>
      </View>

      <Text style={styles.title}>SOS Emergência</Text>

      <View style={styles.contacts}>
        <Text style={styles.contactTitle}>Adicionar novo contato</Text>
        <Text style={styles.contactInfo}>Máximo 3 contatos</Text>

        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Mãe</Text>
          <Text style={styles.contactNumber}> (81)996789054</Text>
        </View>

        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Pai</Text>
          <Text style={styles.contactNumber}> (81)992345671</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar contato</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.locationButton}>
        <Text style={styles.locationButtonText}>Compartilhar localização</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SOSEmergencyScreen = () => {
  const [contacts, setContacts] = useState([
    { name: 'Mãe', number:'(81)99678-9054' },
    { name: 'Pai', number:'(81)9923-45671' },
  ]);

  const addContact = () => {
    // logica para adicionar novo contato 
  };

  const shareLocation = () => {
    // ligar logica para compartilhar localização
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alerta</Text>
      </View>

      <Text style={styles.title}>SOS Emergência</Text>

      <View style={styles.contactsContainer}>
        {contacts.map((contact, index) => (
          <View style={styles.contactItem} key={index}>
            <Text style={styles.contactName}>{contact.name}</Text>
            <Text style={styles.contactNumber}>{contact.number}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.addContactButton} onPress={addContact}>
          <Text style={styles.addContactButtonText}>+ Adicionar novo contato</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.shareLocationButton} onPress={shareLocation}>
        <Text style={styles.shareLocationButtonText}>Compartilhar localização</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  contactsContainer: {
    marginTop: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 16,
    marginLeft: 10,
  },
  addContactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
  },
  addContactButtonText: {
    fontSize: 16,
  },
  addContactButtonIcon: {
    marginLeft: 10,
  },
  shareLocationButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  shareLocationButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SOSEmergencyScreen;