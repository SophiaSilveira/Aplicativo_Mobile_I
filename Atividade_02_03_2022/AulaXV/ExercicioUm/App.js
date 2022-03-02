/**
 * Exercício Um
 */

import React, { Component } from 'react'
import { View, Text, StatusBar,  Image } from 'react-native'



const App = () => {
  return (
    <View style = {{ flex: 1}}>
      <StatusBar barStyle = 'dark-content' hidden = {false} backgroundColor = '#4169E1' translucent = {true}/>
         <View style= {{ flex: 1, backgroundColor: '#4169E1'}}>
          <Text
            style = {{
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 42,}}
         > Câmera </Text>
         <Text style = {{
            marginBottom: -17,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'right',
            marginTop: -40,
            marginRight: 25,
            }}> . </Text>
         <Text style = {{
            marginBottom: -17,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'right',
            marginRight: 25,
            }}> . </Text>
            <Text style = {{
            marginBottom: 5,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'right',
            marginRight: 25,
            }}> . </Text>
        </View>
        <View style= {{ flex: 6}}>
         <Image
          source = {require('./img/IconeCamera.jpeg')}
          style = {{
          margin: 300,
          marginTop: 500}}/>
        </View>
    </View>
    );
}
export default App;



