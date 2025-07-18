import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { supabase } from '../supabase/Config'

import * as ImagePicker from 'expo-image-picker';

export default function PerfilScreen() {
  //imagenes

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

//UseStates

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [edad, setEdad] = useState('')
  const [cedula, setCedula] = useState('')

  async function leerUsuario(){
    const { data :{user} } = await supabase.auth.getUser()
    //console.log();
    obtenerDatosUsuario(user?.id)
    
  }

  async function obtenerDatosUsuario(uid: any) {
    const { data, error } = await supabase
  .from('Usuario')
  .select()
  .eq('id', uid)

  setEdad(data![0].edad)
  setEmail(data![0].correo)
  setNombre(data![0].nombre)
  setCedula(data![0].cedula)
  

  }
  async function cerrarSesion() {
    const { error } = await supabase.auth.signOut()

    /*if (error != null) {
      navigator.navigate('Home')
  }*/}

  useEffect(()=>{
    leerUsuario()
  },[])

  return (
    <View style={styles.container}>
      <View>
          
        <View style={styles.container}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={styles.imagecol} />}
        </View>

        <Text style={styles.text}>Nombre: {nombre}</Text>
        <Text style={styles.text}>Cédula: {cedula} </Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Edad: {edad}</Text>

        <TouchableOpacity onPress={() => cerrarSesion()} style={styles.button}>
          <Text style={styles.textButton}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#748ccb',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  image: {
    width: 200,
    height: 200,
    resizeMode:'contain'
  },
  containerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecol: {
    width: 200,
    height: 200,
  },
})