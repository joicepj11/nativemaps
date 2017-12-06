import React, { Component } from 'react';
import { StyleSheet, View ,Text,Image,Button  }from 'react-native';
export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home Screen',
      };
    
      constructor(props) {
        super(props);
      }

      render() { 
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                <Image source= {require('./image/logo.jpeg')} style = {styles.imageItem}/>               
                </View>
                <View style={styles.textImageContainer}>
                <Image source={require('./image/curbside.jpg')} style = {styles.imageItemone}/>
                <Text style = {styles.textItem}>curbside </Text>
                </View>
                <View style={styles.textContainer}>
                <Text style = {styles.textItem}>DEMO - NEW </Text>
                <Text style = {styles.textItem}>Innovations In</Text>
                <Text style = {styles.textItem}>click and Collect </Text>
                </View>
                <View style={styles.buttonContainer}>
                <Button style={styles.buttonItem}title = "Getting Started" onPress = {()=>{
                this.props.navigation.state = {key:'screen1'}
                this.props.navigation.navigate('Order', { })
                }}/>
                </View>
            </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor:'white',
       justifyContent:'center'
    },
    imageContainer:{
        flex:25,
        margin:20,
        marginTop:60
    },
    textImageContainer:{
        margin:20,
        flex:25,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    textContainer:{
        margin:20,
        flex:25,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonContainer:{
        margin:20,
        flex:25,
        padding:20
    },
    imageItem:{
        width:300,
        height:90
    },
    imageItemone:{
        width :120,
        height:90
    },
    textItem:{
        fontSize:30,
        color:'black'
    },
    buttonItem:{
        fontSize:30,
        borderRadius:30,
        padding:30,
        backgroundColor:'blue',
        borderWidth:1
    }
});