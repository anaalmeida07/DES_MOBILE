import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontFamily: 'verdana',
    color: '#5966d9',
    fontSize: 30,
    alignSelf: 'center',
    margin:30,
    marginBottom: 0,
    fontWeight: 'bold'
    
  },
    titulo2: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    color: '#5966d9',
    fontSize: 30,
    alignSelf: 'center',
    
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 5
  },
  entrada: {
    height: 45,
    width: 200,
    borderWidth: 1,
    borderColor: '#222',
    margin: 15,
    fontSize: 18,
    padding: 10,
    alignSelf: 'center',
  },
  botao: {
    height: 45,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#62e3d2',
    marginBottom: 20
  },
  textoBotao: {
    alignSelf: 'center',
    paddingTop: 5,
    fontSize: 20,
    fontFamily: 'verdana',
    margin: 5,
    color: '#ffff',
    fontWeight: 'bold'
  },
  resultado: {
    alignSelf: 'left',
    fontSize: 30,
    color: '#5966d9',
    fontFamily: 'verdana',
    fontWeight: 'bold',
    marginLeft: 15

  },
});

export default styles;
