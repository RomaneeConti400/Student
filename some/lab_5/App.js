// App.js
import React from 'react';
import NavigationContainer from './components/NavigationContainer';
import BottomTabNavigator from './components/BottomTabNavigator';
import HomeScreen from './screens/HomeScreen';
import AddContactScreen from './screens/AddContactScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { ContactsProvider } from './context/ContactsContext';

export default function App() {
  return (
    <ContactsProvider>
      <NavigationContainer>
        <BottomTabNavigator
          screens={[
            { name: 'Contacts', component: HomeScreen },
            { name: 'Add Contact', component: AddContactScreen },
            { name: 'Favorites', component: FavoritesScreen },
          ]}
        />
      </NavigationContainer>
    </ContactsProvider>
  );
}