// vermais/styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 5,
    width: 300,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
      },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  texto:{
    textAlign: 'justfy',
    fontFamily: 'arial',
    fontSize: '11',
    margin: 5,
    marginLeft: 5,
  }
});

export { styles };
