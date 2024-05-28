/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import LoginPage from './Components/auth/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage from './Components/auth/SignupPage';
import Home from './Components/Home/Home';

const Stack = createStackNavigator();


function App() {

  return (
    // <View style={Styles.container} >
    //   <LoginPage />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignupPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
export default App;
