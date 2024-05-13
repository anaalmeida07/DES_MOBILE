import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'Impact, fantasy',
    color: '#141b57',
    marginBottom: 15,
    margin: 25,
  },
  botaoVerMais: {
    marginTop: 10, // Margem superior para separar dos anúncios
    alignSelf: 'center', // Alinha o botão no centro
  },
});

export { styles };
