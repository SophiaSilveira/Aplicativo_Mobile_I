/**
 * Exercicio Dois: Imagem ocupando a tela intera, status bar escondida
 */

import React from 'react';
import { StatusBar, View, Image, StyleSheet } from 'react-native';

const PerfectImage = () => {
  return (
    <View>
      <StatusBar hidden />
      <Image
        style={styles.oneImage}
        source={require('./img/perfect_image.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  oneImage: {
    width: 410,
    height: 685,
  },

});

export default PerfectImage;
