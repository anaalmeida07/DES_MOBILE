import { View} from 'react-native'
import Banco from './srcc/index'
import ExibirDadosScreen from './srcc/pages/dados/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function App(){
      const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Banco" component={Banco} />
        <Stack.Screen name="ExibirDados" component={ExibirDadosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
