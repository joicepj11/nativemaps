import React, { Component } from 'react';
import { StyleSheet, View ,TouchableOpacity ,Text }from 'react-native';
import PropTypes from 'prop-types';
class OrderButton extends Component {
    
    static PropTypes ={
        text: PropTypes.string,
        colorValue:PropTypes.string,
        onPress:PropTypes.func,
        id:PropTypes.number
    }

    handlePress = ()=>{
        this.props.onPress(this.props.id)
    }

      render() { 
        return (      
            <TouchableOpacity style = {[styles.button]} onPress = {this.handlePress} >
                <Text style = {styles.textItem}> {this.props.text} </Text>
            </TouchableOpacity>
        );
      }
}
const styles = StyleSheet.create({
    button:{
        width :150,
        height:70,
        borderRadius:30,
        flexDirection:'column',
        flexWrap:'wrap',
        margin:5,
        backgroundColor:'blue'
    },
    textItem :{
        textAlign: 'center',
        padding:15,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        fontSize:15,
        color: 'white'
    }
    
});
export default OrderButton;