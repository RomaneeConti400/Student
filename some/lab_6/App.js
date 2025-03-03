import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  { id: 0, title: 'Ruins of Love', description: 'Amidst the chaos, love finds its way.', image: require('./assets/1.jpg') },
  { id: 1, title: 'Eternal Flames', description: 'Burning passion in a dying world.', image: require('./assets/2.jpg') },
  { id: 2, title: 'Fading Memories', description: 'What remains when all is lost?', image: require('./assets/3.jpg') },
  { id: 3, title: 'Ashes of Hope', description: 'From the ashes, new beginnings rise.', image: require('./assets/4.jpg') },
  { id: 4, title: 'Last Embrace', description: 'Hold me close before the end.', image: require('./assets/5.jpg') },
];

export default function App() {
  const [showLaunchScreen, setShowLaunchScreen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first slide
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [loadingDots, setLoadingDots] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    if (showLaunchScreen) {
      const interval = setInterval(() => {
        setLoadingDots((prev) => (prev < 3 ? prev + 1 : 1));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [showLaunchScreen]);

  useEffect(() => {
    if (showLaunchScreen) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => setShowLaunchScreen(false), 3000);
      });
    }
  }, [showLaunchScreen]);

  const startSlideTimer = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(slideInterval.current);
  }, [activeIndex]);

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: -activeIndex * width,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startSlideTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    startSlideTimer();
  };

  if (showLaunchScreen) {
    return (
      <SafeAreaView style={styles.launchScreen}>
        <Animated.Text style={[styles.launchText, { opacity: fadeAnim }]}>Welcome to the Apocalypse</Animated.Text>
        <View style={styles.loadingDotsContainer}>
          {[...Array(3)].map((_, i) => (
            <Text key={i} style={styles.loadingDot}>{loadingDots > i ? '•' : ' '}</Text>
          ))}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.slider, { transform: [{ translateX: slideAnim }] }]}>
        {slides.slice(0, slides.length ).map((slide) => (
  <View key={slide.id} style={styles.slide}>
    <Image source={slide.image} style={styles.slideImage} />
    <Text style={styles.slideTitle}>{slide.title}</Text>
    <Text style={styles.slideDescription}>{slide.description}</Text>
  </View>
))}
      </Animated.View>
      <View style={styles.pagination}>
        {slides.slice(0, slides.length-2 ).map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
      <View style={styles.arrows}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}><Text style={styles.arrowText}>◄</Text></TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}><Text style={styles.arrowText}>►</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  launchScreen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1c1c1c' },
  launchText: { fontSize: 28, fontWeight: 'bold', color: '#e74c3c', fontFamily: 'serif' },
  loadingDotsContainer: { flexDirection: 'row', marginTop: 20 },
  loadingDot: { fontSize: 24, color: '#e74c3c', marginHorizontal: 5 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1c1c1c' },
  slider: { flexDirection: 'row', width: width * slides.length },
  slide: { width, justifyContent: 'center', alignItems: 'center', padding: 20 },
  slideImage: { width: width * 0.8, height: width * 0.8, borderRadius: 10, borderWidth: 2, borderColor: '#e74c3c' },
  slideTitle: { fontSize: 24, fontWeight: 'bold', marginTop: 20, color: '#e74c3c', fontFamily: 'serif' },
  slideDescription: { fontSize: 16, marginTop: 10, color: '#fff', fontFamily: 'serif', textAlign: 'center' },
  pagination: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  paginationDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#555', marginHorizontal: 5 },
  paginationDotActive: { backgroundColor: '#e74c3c' },
  arrows: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginTop: 20 },
  arrowButton: { padding: 10, backgroundColor: '#333', borderRadius: 50 },
  arrowText: { fontSize: 24, color: '#e74c3c' },
});