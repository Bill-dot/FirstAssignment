import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {Header} from 'react-native-elements'

export default class App extends Component{
  constructor(){
    super()
    this.state={
      title: 'NOTHING TO SAY'
    }

  }

  render(){
    return(
      <View style={styles.mainContainer}>
        <Header
         centerComponent={{text:'HOME', style:styles.headerCenterComponent}} 
        />
        <View style={styles.secondView}>
          <TextInput
           placeholder="Type here"
           onChangeText={(input)=>this.setState({input})}
           style={{ margin: 20}}
          />
        <Button
         title="Please Press" style={styles.buttonStyle} onPress={()=>
           this.setState({title:this.state.input})
         }
         />
         <Text>{this.state.title}</Text>
         </View>
      </View>
    );
  }


}

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e6ffe6'
  },
  headerCenterComponent:{
    fontSize: 20,
    color: 'white',
    margin: 10
  },
  buttonStyle:{
    alignSelf:'center',
    marginTop: 5,
  },
  secondView:{
    flex:1,
    justifyContent:'center',
    padding:10


  }
})