import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./navigation/Login";
import Home from "./navigation/Home";
const Stack = createNativeStackNavigator();
//https://stackoverflow.com/questions/72755476/invariant-violation-viewproptypes-has-been-removed-from-react-native-migrate-t
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerBackButtonMenuEnabled: false, headerBackVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;