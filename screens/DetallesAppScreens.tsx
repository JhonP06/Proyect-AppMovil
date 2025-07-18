import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DetallesAppScreens() {
  return (
    <View>
      
      
      <Text style={styles.contText} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis ipsum dignissimos. Corrupti cupiditate vero eaque aliquam rem in labore, provident voluptate officiis ipsum cumque, natus consectetur a consequatur quasi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta velit iusto dolorum sunt neque earum voluptate quidem eius voluptatem ipsam quas praesentium, ipsum corporis nostrum ratione, dignissimos adipisci recusandae? Quaerat!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contText:{
    textAlign:'justify',
    backgroundColor:'black'
  }
})