import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

import Anuncio1 from './src/anuncio1/index'
import Anuncio2 from './src/anuncio2/index'
import Anuncio3 from './src/anuncio3/index'
import Anuncio4 from './src/anuncio4/index'
import Texto from './src/text/index'
function App(){


  return( 
     <View>
     <Texto/>
      <ScrollView horizontal={true}>

      <Anuncio1/>
      <Anuncio2/>
      <Anuncio3/>
      <Anuncio4/>
      
      </ScrollView>
    </View>
  )
}


export default App;
