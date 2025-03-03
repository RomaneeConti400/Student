import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from './Login';
import Registration from './Registration';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login'); // Состояние для текущей страницы

  // Функция для переключения страниц
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentPage === 'login' && <Login navigateTo={navigateTo} />}
      {currentPage === 'registration' && <Registration navigateTo={navigateTo} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
});

export default App;