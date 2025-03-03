// screens/AddContactScreen.js
import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ContactsContext } from '../context/ContactsContext';

const AddContactScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { addContact } = useContext(ContactsContext);

  const handleSave = () => {
    if (name && phone) {
      addContact(name, phone); // Добавляем новый контакт
      navigation.navigate('Contacts'); // Переходим на экран контактов
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Имя"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Телефон"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button style={styles.button} mode="contained" onPress={handleSave}>
        Сохранить
      </Button>
    </View>
  );
};

export default AddContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#c255c2',
  },
});