import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Журнал Bright.</Text>
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => Linking.openURL('https://example.com/news')}>
          <Text style={styles.link}>Новости</Text>
        </TouchableOpacity>
        <Image source={{ uri: 'https://blog.oy-li.ru/wp-content/uploads/2022/06/pexels-tima-miroshnichenko-5685851.jpg' }} style={styles.image} />
        <Text style={styles.boldText}>Превращаем стресс в своего помощника</Text>
        <Text style={styles.regularText}>Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.</Text>
        <Button mode="contained" onPress={() => Linking.openURL('https://example.com/full-article')} style={styles.button}>
          Читать далее
        </Button>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 16,
    margin: 16,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  regularText: {
    fontSize: 14,
  },
  button: {
    marginTop: 12,
  },
});