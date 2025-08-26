import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !phone || !email) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    
    Alert.alert(
      'Sucesso', 
      'Seus dados foram enviados com sucesso! O Batman entrará em contato.',
      [{ text: 'OK' }]
    );
    
    // Limpar campos após envio
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORMULÁRIO DE AJUDA</Text>
      
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          placeholderTextColor="#999"
        />
        
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Digite seu telefone"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Pressable
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>ENVIAR</Text>
        </Pressable>
      </View>
      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E5BF3C',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#E5BF3C',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#E5BF3C',
  },
});