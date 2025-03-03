import React from 'react';
import { Text, View, Button, Image } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Hello World</Text>
      <Image 
        source={{ uri: 'https://avatars.mds.yandex.net/i?id=ef7d655e435ce0b8f4106f46c64b5a02_l-6348765-images-thumbs&n=13' }} 
        style={{ width: 300, height: 300, marginBottom: 20 }} 
      />
      <Button title="Нажми меня" onPress={() => alert('Кнопка нажата!')} />
    </View>
  );
}

export default HelloWorldApp;
