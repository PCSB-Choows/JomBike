import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./navigation/Login";
import Home from "./navigation/Home";
import RentDetail from  './navigation/RentDetail';
import NearestParkingPoint from "./navigation/NearestParkingPoint";
import Profile from "./navigation/Profile";
import WhereToPark from './navigation/WhereToPark';
import IntroPage from './navigation/IntroPage';
const Stack = createNativeStackNavigator();
//https://stackoverflow.com/questions/72755476/invariant-violation-viewproptypes-has-been-removed-from-react-native-migrate-t
function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#5642C2'}, headerTitleAlign:'center'}}>
        <Stack.Screen name='IntroPage' component={IntroPage} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerBackButtonMenuEnabled: false, headerBackVisible: false, title:'FIND A BICYCLE' }} />
        <Stack.Screen name='RentDetail' component={RentDetail} options={({ route }) => ({ title: route.params.header })}/>
        <Stack.Screen name='NearestParkingPoint' component={NearestParkingPoint} options={{title:"PARKING POINT"}}/>
        <Stack.Screen name='Profile' component={Profile} options={{title:"PROFILE"}}/>
        <Stack.Screen name='WhereToPark' component={WhereToPark} options={{title:"PARKING POINT"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;