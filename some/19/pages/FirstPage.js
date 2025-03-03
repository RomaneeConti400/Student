import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const FirstPage = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введите ваше имя"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Перейти к приветствию"
        onPress={() => navigation.navigate('SecondPage', { name })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default FirstPage;