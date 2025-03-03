// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ContactItem from '../components/ContactItem';
import { ContactsContext } from '../context/ContactsContext';

const HomeScreen = ({ navigation }) => {
  const { contacts, addToFavorites } = useContext(ContactsContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            item={item}
            onPress={() => navigation.navigate('Details', { contact: item })}
            onAddToFavorites={() => addToFavorites(item.id)}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
});