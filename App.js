import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from './components/TelaInical';
import TelaHospedagem from './components/TelaHospedagem';
import TelaRestaurante from './components/TelaRestaurante';
import TelaPasseios from './components/TelaPasseios';


const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Tela Inicial" component= {TelaInicial}/>
        <Stack.Screen name= "Tela Hospedagem" component= {TelaHospedagem}/>
        <Stack.Screen name= "Tela Restaurante" component= {TelaRestaurante} />
        <Stack.Screen name= "Tela Passeios" component= {TelaPasseios}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}