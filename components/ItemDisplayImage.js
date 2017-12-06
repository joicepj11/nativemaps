import React, { Component } from 'react';
import { StyleSheet, View ,Dimensions ,Image,Text }from 'react-native';
class ItemDisplayImage extends Component {
      
    constructor(props) {
        super(props);
      }

      render() { 
        return (
            <View style={styles.container}>
               <Image source = {require (this.props.image)}/>
            </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    imageItem:{
        width:45,
    }

});