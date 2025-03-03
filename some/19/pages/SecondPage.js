import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondPage = ({ route }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Привет, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SecondPage;