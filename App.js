/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, ActivityIndicator, View} from 'react-native';
import CriptoCard from './components/CriptoCard';

let criptocards = false
 


if (!criptocards) {
  criptocards =  "NOT ABLE TO REACH API"
}

type Props = {};
export default class App extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }
  
   componentDidMount(){
    fetch("http://localhost:3000/api/v1/criptoinfo")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson.data
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    
  render() {
    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}

    criptocards = (
      <View>
        {
          this.state.dataSource.map((cripto) =>{
          return <CriptoCard 
          name={cripto.name}
          symbol={cripto.symbol}
          price={cripto.price}
          last_updated={cripto.last_updated}
          key={cripto.api_id}/>
          })
        }
      </View>
    )

    return (
      <ScrollView style={styles.container}>
        {criptocards}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#acacac',
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
