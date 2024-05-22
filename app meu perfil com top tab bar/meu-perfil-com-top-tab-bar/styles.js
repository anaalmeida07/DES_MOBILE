import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff', // Cor de fundo da barra de guias
    height: 60, // Altura da barra de guias
  },
  tabItem: {
    paddingVertical: 30, // Espaçamento vertical dentro de cada aba
  },
});
