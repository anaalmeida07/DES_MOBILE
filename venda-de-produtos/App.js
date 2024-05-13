import { View } from 'react-native'
import Anuncios from './src/pages/anuncios/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Vermais from './src/pages/programador/index2';


const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="VAGAS DE EMPREGO"
          component={Anuncios}
          options={{
            headerStyle: { backgroundColor: '#ffffff' },
            headerTintColor: '#141b57',
            headerTitleAlign: 'center',
             
          }}
        />
        <Stack.Screen name="Vermais" component={Vermais} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
