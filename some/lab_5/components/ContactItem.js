// components/ContactItem.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const ContactItem = ({ item, onPress, onAddToFavorites }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.contactInfo}>
        <Card style={{ flex: 1 }}>
          <Card.Content>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.phone}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddToFavorites} style={styles.favoriteButton}>
        <Text style={styles.favoriteButtonText}>
          {item.isFavorite ? '★' : '☆'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  contactInfo: {
    flex: 1,
  },
  favoriteButton: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c255c2',
    marginLeft: 8,
    borderRadius: 4,
  },
  favoriteButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});