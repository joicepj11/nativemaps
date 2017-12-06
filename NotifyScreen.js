import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Dimensions, Text, View, Button} from 'react-native';
import { NavigationActions } from 'react-navigation'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 12.921014;
const LONGITUDE = 77.587904;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class NotifyScreen extends React.Component {
  static navigationOptions = {
    title: 'Notification Screen',
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.textContainer}>
          <Text style={styles.textItem}>S E P H O R A</Text>
        </View>
        <View style={styles.textContainer1}>
          <Text style={styles.textItem}>Good news! your{"\n"} order is ready  {"\n"} pickup </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <Button style={styles.buttonItem} title = {"Start Navigation"} onPress={ ()=>{ 
             const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home'})
              ]
            })
            this.props.navigation.dispatch(resetAction)
          }}/>
        </View>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          />
        </View>
       
      </View>
    );
  }
}

NotifyScreen.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    top:220,
    height: 350,
    width: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'white',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer:{ 
    backgroundColor: 'white', 
    height: 100, 
    justifyContent: 'center', 
    alignItems: 'center'
    },
    textContainer1:{ 
      backgroundColor: 'white',  
      justifyContent: 'center', 
      alignItems: 'center'
      },
      ButtonContainer:{
        top:200,  
        justifyContent: 'center', 
        marginLeft:40,
        marginRight:40,
        padding:20
      },
    textItem:{
      fontSize:30,
      color:'black'
    },
    buttonItem:{
      fontSize:30,
      color:'black',
      borderRadius:60
    }
});