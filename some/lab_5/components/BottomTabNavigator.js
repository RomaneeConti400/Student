// components/BottomTabNavigator.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomTabNavigator = ({ screens }) => {
  const [activeTab, setActiveTab] = useState(screens[0].name);

  const ActiveComponent = screens.find((screen) => screen.name === activeTab)?.component;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {ActiveComponent ? <ActiveComponent /> : null}
      </View>
      <View style={styles.tabBar}>
        {screens.map((screen) => (
          <TouchableOpacity
            key={screen.name}
            style={[styles.tab, activeTab === screen.name && styles.activeTab]}
            onPress={() => setActiveTab(screen.name)}
          >
            <Text style={styles.tabText}>{screen.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60, // Высота контейнера навигации
    backgroundColor: '#c255c2', // Цвет фона
  },
  tab: {
    flex: 1, // Кнопки занимают всю ширину
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#a040a0', // Цвет активной кнопки
  },
  tabText: {
    fontSize: 16,
    color: '#fff', // Цвет текста
  },
});