/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import LoginPage from './Components/auth/LoginPage';

function App() {
  return (

    <View style={Styles.container} >
      <LoginPage />
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
export default App;
