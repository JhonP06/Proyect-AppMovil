import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import * as React from 'react'
import {ReactLocation,Router,useMatch} from "react-location";
import MapView ,{Marker, Polyline } from 'react-native-maps';
import { Directions } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../supabase/Config';

export default function GeneraScreen() {

//Perfil
  const [nombre, setNombre] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [edad, setEdad] = React.useState('')
  const [cedula, setcedula] = React.useState('')

  async function leerUsuario(){
      const { data :{user} } = await supabase.auth.getUser()
      //console.log();
      
    }

    

//Modal
  const [modal, setmodal] = React.useState(false)  

//Mapa
  const [origin, setorigin] = React.useState({
    latitude: -0.187310,
    longitude: -78.487671
  })

  const [destination, setdestination] = React.useState({
    latitude: -0.189073, 
    longitude: -78.482982
  })



  return (
    <View >
      <MapView 
        style={styles.mapa} 
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.03
        }}
      >
        <Marker
          draggable
          coordinate={origin}
          onDragEnd={(direction) => setorigin(direction.nativeEvent.coordinate ) }
        />

        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(direction)=> setdestination(direction.nativeEvent.coordinate) }
        />
        <Polyline coordinates={[origin,destination]}    
          strokeColor='#028d09'
          strokeWidth={7}    
        />
      </MapView>

      <TouchableOpacity style = {styles.bottonModal} 
      onPress={()=> setmodal(true)}
      >
          <Text style={styles.ModalText} >
            <MaterialIcons name='person' size={70} color='#fafafa' style={styles.Icon} />
            
          </Text>
        </TouchableOpacity>

        <Modal
        
        visible={modal}
        transparent={true}
        animationType='slide'
        >
          <View style={styles.containerModal}>
            <View style={styles.Modal} >
              
                <View style={styles.container}>
                    <Text style={{alignSelf:'center',fontSize:22,
                    fontWeight:'bold',color:'#ffe72ede'}}>Perfil</Text>
                    <MaterialIcons name='person' size={300} color='black' />
                    
                    <Text style={styles.text}>Nombre: {nombre}</Text>
                    <Text style={styles.text} >Cédula: {cedula}</Text>
                    <Text style={styles.text}>Email: {email}</Text>
                    <Text style={styles.text}>Edad: {edad}</Text>
                  </View>

              <TouchableOpacity
              onPress={()=> setmodal(false)}
              >
              <Text style={styles.ModalText}>
                Cerrar Modal
              </Text>
            </TouchableOpacity>

            </View>
          </View>
        </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  mapa:{
    width:'100%',
    height:'90%'
  },
  bottonModal:{
  height:80,
  width:80,
  borderRadius: 50 ,
  backgroundColor:'#529aff',
  alignItems:'center'

},
  ModalText:{
    fontSize:22,
    fontWeight:'bold',
    color:'white'
  },
  Icon:{
    alignContent:'center',
    justifyContent:'center',
  },
  containerModal:{
    flex:0.7,
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor:'#bc6610b0',
    borderRadius:50
  },
  Modal:{
    backgroundColor:'#74affbc4',
    padding:30,
    borderRadius:70,
    justifyContent:'center',
    alignItems:'center',
    
  }
,
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#2eff3f73',
    borderRadius:40,
    padding:10,
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

})

