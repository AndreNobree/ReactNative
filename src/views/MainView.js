import React from "react";
import { SafeAreaView, Text, Button, StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';



export default function MainView({navigation}){
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar style="dark" hidden={true} />
          
            <Text style={styles.texto}>Bem Vindo ao:</Text>
            <Text style={styles.texto2}>PurpleList</Text>



          <View style={styles.btn}>
            <View style={{borderRadius:25, overflow:'hidden'}}>

              <Button  
                color="#4B0082"
                title='ENTRAR' 
                onPress={() => navigation.navigate("Home2")}
              />

            </View>
          </View>

            
        </SafeAreaView>
    );
}
//<StatusBar hidden={true} /> - vai tirar a barra de status

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    //paddingLeft: 40,
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  texto2: {
    color: '#4B0082',
    fontSize: 40,
    //fontStyle: 'italic'
  },
  btn: {
    flex:1,
    width: 200,
    paddingTop: 450
  }
});
