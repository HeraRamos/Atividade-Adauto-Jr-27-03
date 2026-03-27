import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Contato({ nome, telefone, idade, cidade }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text>Telefone: {telefone}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Cidade: {cidade}</Text>

      <Button title="Ver contato" onPress={() => alert(telefone)} color="#66f705"/> 
    
        
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  }
});