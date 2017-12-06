import React, { Component } from 'react';
import { StyleSheet, View ,Button,Text,Image }from 'react-native';
import { NavigationActions } from 'react-navigation';
import OrderButton from './components/OrderButton';

export default class OrderScreen extends Component {
    static navigationOptions = {
        title: 'Order Screen',
      };
    constructor(props) {
        super(props);  
    }

    handlePress = (value) => {
          switch (value){
          case  1 :
          this.props.navigation.state = {key:'screen2'}
          this.props.navigation.navigate('Notification', { })
          break;
          case 2 :
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home'})
            ]
          })
          this.props.navigation.dispatch(resetAction)
          break;
          }
      }
    
   
      render() { 
        return (

            <View style={styles.container}>

                <View style={styles.textContainer}>
                    <View style={styles.textContainer2}>
                    <Text > option Item</Text>
                    <Text> filter Item</Text>
                    </View>
                    <View style={styles.textContainer2}>
                    <Text style={styles.textItem}> S E P H O R A</Text>
                    </View>
                </View>

                <View style={styles.textContainer1}>
                <Text style={styles.textItem1} > some text is placed here</Text>
                </View>

                <View style={styles.imageContainer}>

                    <View style={styles.imageContainer1}>
                        <Image  style={styles.imageItem} source = {require('./image/stila.jpg')}/>
                        <Text>some text here</Text>
                    </View>

                    <View style={styles.imageContainer1}>
                        <Image style={styles.imageItem} source = {require('./image/bottle.jpg')}/>
                        <Text>some text here</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                <OrderButton text="Place Multi  Item Cosmetics Order" id = {1} onPress ={ this.handlePress }/>
                <OrderButton text="Place Single  Item Order" id = {2} onPress ={ this.handlePress } />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    textContainer:{
        flexDirection: 'column',
        flexWrap:'wrap',
        alignItems:'center',
        flex:15,
        backgroundColor:'white'
    },
    textContainer1:{
        borderTopWidth:5,
        borderTopColor:'black',
        borderBottomColor:'black',
        borderBottomWidth:5,
        flex:15,
        backgroundColor:'white'
    },
    textContainer2:{
        flex:1,
        marginTop:10,
        marginLeft:10,
        marginRight:5,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },

    imageContainer:{
        flex:50,
        flexDirection: 'row',
        backgroundColor:'white',
        alignItems:'center',
        flexWrap:'wrap'
    },

    imageContainer1:{
        flex:50,
        flexDirection: 'column',
        backgroundColor:'white',
        justifyContent:'space-around',
        alignItems:'center'
    },

    buttonContainer:{ 
        flex:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white'
    },
    textItem:{
        color: 'black',
        fontSize:30,
        marginBottom:3
    },
    textItem1:{
        marginTop:5,
        color: 'black',
        fontSize:15,
        justifyContent:'center',
        alignSelf:'center'
    },
    imageItem:{
        width:200,
        height:270,
        padding:10
    }
});