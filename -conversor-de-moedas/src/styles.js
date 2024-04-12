import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#edffd1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8ebf9d',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333333',
    backgroundColor: 'white'
  },
  slider: {
    marginTop: 10

  },
  valor: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    color: '#0066FF',
  },
  
  confirmar: {
    marginBottom: 20,
    backgroundColor: '#3399FF',
    borderRadius: 5,
    paddingVertical: 10,
  },
  exibirDadosContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  exibirDados: {
    fontSize: 16,
    color: '#333333',
  },
});

export {styles}