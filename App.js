import * as React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../Ficha_Tormenta/src/pages/home/index.js';


export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
