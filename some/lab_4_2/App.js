import { Text, SafeAreaView, StyleSheet, Image, TextInput, View, Button, Animated } from 'react-native';
import { useState, useRef } from 'react';

const companies = [
  {
    id: 1,
    name: 'Microsoft',
    description: 'One of the largest IT companies in the world, known for Windows, Office, and Azure.',
    image: require('./assets/microsoft.png'),
  },
  {
    id: 2,
    name: 'Google',
    description: 'A leader in search technology and online services, including Android and Google Cloud.',
    image: require('./assets/google.png'),
  },
  {
    id: 3,
    name: 'Netflix',
    description: 'A global streaming platform offering a vast collection of movies, series, and documentaries.',
    image: require('./assets/netflix.png'),
  },
  {
    id: 4,
    name: 'Amazon',
    description: 'A multinational technology company focusing on e-commerce, cloud computing, and AI.',
    image: require('./assets/amazon.png'),
  },
  {
    id: 5,
    name: 'Facebook',
    description: 'A major social media company connecting billions of people worldwide through its platforms.',
    image: require('./assets/facebook.png'),
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleNext = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIndex((prevIndex) => Math.min(prevIndex + 1, companies.length - 1));
      fadeAnim.setValue(1);
    });
  };

  const handlePrevious = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      fadeAnim.setValue(1);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>  
        <Image source={companies[index].image} style={styles.image} />
        <Text style={styles.title}>{companies[index].name}</Text>
        <Text style={styles.description}>{companies[index].description}</Text>
      </Animated.View>
      <View style={styles.pagination}>
        {companies.map((_, i) => (
          <View key={i} style={[styles.dot, index === i ? styles.activeDot : null]} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={handlePrevious} disabled={index === 0} />
        <Button title="Next" onPress={handleNext} disabled={index === companies.length - 1} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '60%',
    justifyContent: 'space-between',
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
