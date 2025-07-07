import { View, Text, Button, ImageBackground , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'

export default function HomeScreen({ navigation }: any) {
  return (
    
    <ImageBackground style={styles.container}
    source={{uri:'https://i0.wp.com/www.negociosmagazine.com/wp-content/uploads/2017/01/Uber.jpg?fit=800%2C600&ssl=1'}}
    >
        <Text style={styles.textoComponent}>
        Welcome to
        <Text style={styles.text2}> UBER</Text>
      </Text>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("Login") }>
                    <Text style={styles.buttonText}> 
                        Iniciar Sesión
                    </Text>
                </TouchableOpacity>

        <TouchableOpacity style={styles.button} 
            onPress={() => navigation.navigate("Empezar") }
            >
                <Text style={styles.buttonText}> 
                    Empezar
                </Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },

    buttonContainer: {
        position: 'absolute',
        top: '72%',
        left: '22%',
        bottom: 10,
        
    },
    
    button: {
    //flex:1,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    margin: 20,
    borderWidth: 6,
    width: 200,
    backgroundColor: '#0626c694',
    borderColor: '#0a0a0ba6',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  textoComponent:{
    fontSize: 40,
    color: '#1302cfeb',
    textAlign: 'center',
    fontFamily: '',
    marginTop: 20,
    fontWeight: 'black',
  },
  text2: {
    fontSize: 40,
    color: '#0a016f',
    textAlign: 'center',
    fontFamily: '',
    marginTop: 20,
    fontWeight: 'bold',
  },
})