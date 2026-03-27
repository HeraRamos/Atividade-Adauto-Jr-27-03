import React from 'react';
import { View, StyleSheet } from 'react-native';
import Contato from './components/Contato';

export default function App() {
  return (
    <View style={style.container}>
      <Contato nome="Hera" telefone="98888-1111" idade={24} cidade="Jaú" />
      <Contato nome="Maria" telefone="99999-2222" idade={30} cidade="Bauru"/>
      <Contato nome="Lais" telefone="97777-3333" idade={28} cidade="Herculandia"/>
      <Contato nome="Joana" telefone="96666-4444" idade={28} cidade="Marilia"/>
      <Contato nome="Larissa" telefone= "95555-5555" idade={30} cidade="Tupã"/>
    </View>
  );
}


 

const style = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginTop: 10,
    borderRadius: 8
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

