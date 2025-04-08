import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.15.3:5024/api/Usuario/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, senha })
      });

      if (response.ok) {
        const usuario = await response.json();
        alert("Login realizado com sucesso!");
        
        // Aqui você pode navegar para a tela principal
      } else {
        alert("Usuário ou senha inválidos.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível conectar à API.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />

      <Text style={styles.title}>MOVYN</Text>

      <View style={styles.loginBox}>
        <Text style={styles.loginText}>Login</Text>

        {/* Username */}
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#fff" style={styles.icon} />
          <TextInput
            placeholder="username"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#fff" style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <Text style={styles.profText}>Você é profissional?</Text>
      </View>

      {/* Botões */}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}


// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b7a84',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: -50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontFamily: 'NitroChargers',
    fontWeight: 'bold',
    color: '#d1d1d1',
    marginBottom: 20,
  },
  loginBox: {
    backgroundColor: '#093841',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 350,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingVertical: 8,
  },
  profText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#093841',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 8,
    minWidth: 200,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});