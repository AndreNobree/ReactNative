import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {Text, View, StyleSheet} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import app from "./config/firebaseconfig";


export default function NewList(){

    return(
        <View style={styles.container}>

            <View style={styles.descricao}>
                <Text style={styles.texto}>Descreva</Text>
            </View>


            <TextInput
            style={styles.inputText}
            placeholder="oi"
            />
            <TouchableOpacity
                style={styles.buttonNewTask} 
            >
                <Text>GUARDAR</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     // paddingTop: 20,
    },
    descricao:{
        height: 40,
        alignItems: 'center',
        backgroundColor: '#4B0082',
    },
    texto: {
        color: '#fff',
        fontSize: 20,
        paddingTop: 10
    },
    buttonNewTask: {
        color: '#4B0082',
        fontSize: 20,
        fontWeight:'bold'
    }
})


/*
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {Text, View, StyleSheet} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import app from "./config/firebaseconfig";


export default function NewList(){
    const [description, setDescription] = useState(null)

    function addList(){
        app.collection("Mainview2").add({
            description: description,
            status: false
        })
        navigation.navigate("MainView2")
    }
    return(
        <View style={styles.container}>
            <Text>description</Text>
            <TextInput
            style={styles.inputText}
            placeholder="oi"
            onChangeText={setDescription}
            value={description}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={()=>{
                    addList()
                }}    
            >
                <Text>oi</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
      paddingTop: 20,
    },
})
    */