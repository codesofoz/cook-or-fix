import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens (we’ll create them next)
import HomeScreen from './screens/HomeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import CookingScreen from './screens/CookingScreen';
import LiveHelpScreen from './screens/LiveHelpScreen';
import TroubleshootScreen from './screens/TroubleshootScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailScreen} />
        <Stack.Screen name="Cooking" component={CookingScreen} />
        <Stack.Screen name="LiveHelp" component={LiveHelpScreen} />
        <Stack.Screen name="Troubleshoot" component={TroubleshootScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
