import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Welcome to Bond Foods!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

