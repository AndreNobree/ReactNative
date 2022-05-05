import React, {useState} from "react";
import { SafeAreaView, StyleSheet,  View, Text, StatusBar, FlatList, Modal, TouchableOpacity, TextInput } from "react-native";
import { useHandler } from "react-native-reanimated";

const DATA = [
  {id: 1, text: 'Item 1'},
  {id: 2, text: 'Item 2'},
  {id: 3, text: 'Item 3'},
  {id: 4, text: 'Item 4'}
]

const MainView2 = () => {
  const [data, setdata] = useState(DATA)
  const [isRender, setisRender] = useState(false)
  const [isModalVisible, setisModalVisible]= useState(false)
  const [inputText, setinputText]= useState()
  const [editItem, seteditItem]= useState()

  const onPressItem = (item) =>{
    setisModalVisible(true)
    setinputText(item.text)
    seteditItem(item.id)
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(item)}
        >
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  const handleEditItem = (editItem) => {
    const newData = data.map(item => {
      if (item.id == editItem){
        item.text = inputText;
        return item;
      }
      return item;
    })
    setdata(newData);
    setisRender(!isRender)
  }

  const onPressSaveEdit = () => {
    handleEditItem(editItem)
    setisModalVisible(false)
  }

  return(
    <SafeAreaView style={StyleSheet.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        extraData={isRender}
      />
      <Modal
        animationType= 'fade'
        visible={isModalVisible}
        onRequestClose= {() => setisModalVisible(false)}>
          <View style={styles.modalView}>
            <Text style={styles.text}>Change</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setinputText(text)}
              defaultValue={inputText}
              editable={true}
              multiline={false}
              maxLength={200}
            />

            <TouchableOpacity
            onPress={() => onPressSaveEdit()}
            style={styles.touchableSave}
            >
              <Text style={styles.text}>Save</Text>

            </TouchableOpacity>

          </View>
      </Modal>
    </SafeAreaView>
  )
}
export default MainView2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  item: {
    borderBottomWidth:1,
    borderBottomColor: 'yellow',
    alignItems: 'flex-start'
  },
  text: {
    marginVertical:30,
    fontSize:25,
    fontWeight: 'bold',
    marginLeft:10
  },
  textInput: {
    width: '90%',
    height: 70,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize:25
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchableSave:{
    backgroundColor: 'orange',
    paddingHorizontal: 100,
    alignItems: 'center',
    marginTop: 20
  }
})
/*
import React, { Component } from "react";
import {  Text, Button, StyleSheet, View, FlatList } from "react-native";

export default class MainView2 extends Component{
  constructor(props){
    super(props);
    this.state={
      lista: [
        {task: 'Estudar o ERP'},
        {task: 'Estudar JS'},
        {task: 'Estudar SQL'}
      ]
    }
  }
  render(){
    return(
      <View style={styles.container}>

        <FlatList
          data = {this.state.lista}
          renderItem={({ item }) =>
            <View style={styles.containerTaks}>
              <Text>{item.task}</Text>
              
            </View>
          }
        />

      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  containerTaks: {
    backgroundColor: '#4B0082',
    height:40,
    margin: 15,
    borderRadius: 25,
    textAlign: 'center'
  }
})
*/
/*
import {  Text, Button, StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';
import app from './config/firebaseconfig';
import { doc, collection, query, where, onSnapshot } from "firebase/firestore";
import { FontAwesome } from '@expo/vector-icons'

export default function MainView2({navigation}){
  const [ mainview2, setMainView2 ] = useState([])

  function deleteList(id){
    app.collection("PurpleList").doc(id).delete()
  }

  useEffect(()=>{
    const q =(collection(app, "PurpleList"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      const list = []
      querySnapshot.forEach((doc) => {
        list.push({...doc.data(), id: doc.id})
      })
      setMainView2(list)
    })
  }, [])

    return (
        <View style={styles.container2}>

          <FlatList
            showsVerticalScrollIndicator = { false }
            data = {mainview2}
            renderItem = {( {item} )=>{

              return(
                
                <View style={styles.Lista}>
                  
                  <TouchableOpacity style={styles.deleteList} onPress={() =>{deleteList(item.id)}}> 
                  
                  <FontAwesome
                    name = "star"
                    size = {23}
                    color = "#4B0082"
                  >

                  </FontAwesome>

                  </TouchableOpacity>

                  <Text style={styles.descriptionlist}  
                    onPress={() => {navigation.navigate("Details", { id: item.id, description: item.description})}}
                  >

                    {item.description}

                  </Text>

                </View>
              )
            }}
          />


          <TouchableOpacity style={styles.buttonNewTask}  onPress={() => navigation.navigate("NewList")}> 

            <Text style={styles.iconButton}>+</Text>

          </TouchableOpacity>


          <StatusBar style="dark" hidden={true} />
        </View>
    );
} 




const styles = StyleSheet.create({
    container2: {
      flex: 1,
      backgroundColor: '#111',
      paddingTop: 20,
    },

    Lista:{
      width: "100%",
      flexDirection: "row",
      justifyContent: 'space-between',
      marginTop: 5,
    },

    deleteList: {
      justifyContent: 'center',
      paddingLeft: 150,
    },

    descriptionlist: {
      width: "75%",
      alignContent:"flex-start",
      backgroundColor:'#f5f5f5cf',
      padding: 12,
      paddingHorizontal: 20,
      borderRadius: 50,
      marginBottom: 5,
      marginRight: 15,
      color: '#282b2db5',
    },

    iconButton:{
      color: '#fff',
      fontSize: 20,
      fontWeight:'bold'
    },

    buttonNewTask:{
      width: 60,
      height:60,
      position: 'absolute',
      bottom: 30,
      left:20,
      backgroundColor: '#4B0082',
      borderRadius:50,
      justifyContent:'center',
      alignItems: 'center'
    },
    
  });
    */