import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Album from './src/components/Album';
import Images from './src/components/Images';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="Images" component={Images} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

