// screens/FavoritesScreen.js
import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ContactItem from '../components/ContactItem';
import { ContactsContext } from '../context/ContactsContext';

const FavoritesScreen = ({ navigation }) => {
  const { contacts } = useContext(ContactsContext);
  const favoriteContacts = contacts.filter((contact) => contact.isFavorite);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            item={item}
            onPress={() => navigation.navigate('Details', { contact: item })}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
});