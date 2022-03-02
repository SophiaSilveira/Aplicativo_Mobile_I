
/**
 *Ecercicio Quatro, usar: View, ScrollView, Image, Text, Campos de texto e Button Animado
 */

import React,{ useRef, useEffect} from "react";
import { StatusBar,
         Dimensions,
         ImageBackground,
         StyleSheet,
         View,
         ScrollView,
         Text,
         TextInput,
         TouchableOpacity,
         Animated} from "react-native";

const App = () => {
 return(
   <View>
     <StatusBar hidden />
     <ImageBackground
      style={[styles.fixed, styles.containter, {zIndex: -1}]}
      source={require('./img/the_bridgertons.png')}
             />
     <ScrollView style={[styles.scrollview]}>
      <View style = {[styles.container]}>
        <Text style={[styles.text]}>The Bridgertons Club</Text>
         <TextInput
           style={styles.input}
           placeholder='Nome Completo: '
           clearButtonMode='always'/>
         <TextInput
           style={styles.input}
           placeholder="Digite sua senha: "
           keyboardType={'numeric'}
           clearButtonMode="always"/>
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Registrar</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cancelar</Text>
           </TouchableOpacity>
      </View>
      </ScrollView>
   </View>
 );
}

const styles = StyleSheet.create({
  containter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
 scrollview: {
   backgroundColor: 'transparent',

 },
 container: {
   backgroundColor: '#F8F8FF',
   width: 325,
   height: 270,
   marginLeft: '12%',
   marginTop: '190%',
   marginBottom: 15,
   borderRadius: 20,
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'row',
   flexWrap: 'wrap',
 },
 text: {
   fontWeight: 'bold',
   color: '#4B0082',
   fontSize: 30,
   marginTop: 35,
  },
  input: {
    width: 290,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
    marginTop: 10,
    opacity: 0.8,
   },
   button:{
   width: '40%',
   height: 35,
   backgroundColor: '#4B0082',
   margin: 10,
   marginTop: 30,
   borderRadius: 20,
   },
   buttonText:{
    fontWeight: 'bold',
    fontSize: 25,
    color: '#F8F8FF',
    textAlign: 'center',
   }
});

export default App;