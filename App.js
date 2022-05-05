import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/views/MainView";
import Home2 from "./src/views/MainView2";
//import NewList from './src/views/NewList';
//import Details from './src/views/details'


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
       
          <Stack.Screen
            name="Home" 
            component={Home} 
            options={{
              title: '',
              headerStyle: {backgroundColor: '#111'},
            }}
          />
        
 
          <Stack.Screen 
            name="Home2" 
            component={Home2}
          />


        </Stack.Navigator>  

      </NavigationContainer>
  );
}

//HOME - TELA INICIAL
//HOME2- TELA PRINCIPAL
//NEWLIST - TELA DE CRIAÇÃO DE LISTA
/*

          <Stack.Screen 
            name="Details" 
            component={Details}
          />
*/
