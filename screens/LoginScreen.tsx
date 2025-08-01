import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../supabase/Config';

export default function LoginScreen({ navigation }: any) {

    const [correo, setcorreo] = useState('')
    const [contrasenia, setcontrasenia] = useState('')

    async function ingreso(){
        const { data, error } = await supabase.auth.signInWithPassword({
  email: correo,
  password: contrasenia,
})

//console.log(data); 
//console.log(error);


if (data.user !== null) {
    navigation.navigate('Empezar');
  }else {
    Alert.alert('Error', error?.message);
  }

    }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTszc2mVM09cCQCiku8-cIYE4b7dKUrCqmnA&s' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>¡Bienvenido a DiDi!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Correo Electrónico'
          placeholderTextColor="#555"
          onChangeText={setcorreo}
        />
        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor="#555"
          secureTextEntry
          onChangeText={setcontrasenia}
        />
        
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => ingreso() } style={styles.loginButton}>
          <Text style={styles.loginText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registrarse')}>
          <Text style={styles.registerText}>¿Aún no tienes cuenta? Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ce6f1ccc', // Color tomate
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 180,
    height: 80,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 4,
  },
  loginText: {
    color: '#ff6347',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
