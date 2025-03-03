// Импорт необходимых библиотек
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Импорт экранов
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const Stack = createStackNavigator();

// Основной компонент приложения с навигацией
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen 
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'Регистрация', // Заголовок хедера
            headerStyle: {
              backgroundColor: '#f4511e', // Цвет хедера
            },
            headerTintColor: '#fff', // Цвет текста хедера
            headerTitleStyle: {
              fontWeight: 'bold', // Стиль текста хедера
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Приветствие', // Заголовок хедера
            headerStyle: {
              backgroundColor: '#f4511e', // Цвет хедера
            },
            headerTintColor: '#fff', // Цвет текста хедера
            headerTitleStyle: {
              fontWeight: 'bold', // Стиль текста хедера
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;