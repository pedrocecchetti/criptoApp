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

let info = [
  {
  id: 1,
  name: "Bitcoin",
  symbol: "BTC",
  last_updated: "2019-05-20T19:34:40.000Z",
  price: 7818.40729118,
  api_id: 1,
  created_at: "2019-06-15T23:43:02.674Z",
  updated_at: "2019-06-15T23:43:02.674Z"
  },
  {
  id: 2,
  name: "Ethereum",
  symbol: "ETH",
  last_updated: "2019-05-20T19:34:22.000Z",
  price: 247.525170164,
  api_id: 1027,
  created_at: "2019-06-15T23:43:02.773Z",
  updated_at: "2019-06-15T23:43:02.773Z"
  },
  {
  id: 3,
  name: "XRP",
  symbol: "XRP",
  last_updated: "2019-05-20T19:34:04.000Z",
  price: 0.392385936033,
  api_id: 52,
  created_at: "2019-06-15T23:43:02.849Z",
  updated_at: "2019-06-15T23:43:02.849Z"
  },
  {
  id: 4,
  name: "Bitcoin Cash",
  symbol: "BCH",
  last_updated: "2019-05-20T19:34:04.000Z",
  price: 402.490690909,
  api_id: 1831,
  created_at: "2019-06-15T23:43:02.926Z",
  updated_at: "2019-06-15T23:43:02.926Z"
  },
  {
  id: 5,
  name: "EOS",
  symbol: "EOS",
  last_updated: "2019-05-20T19:34:04.000Z",
  price: 6.22536249977,
  api_id: 1765,
  created_at: "2019-06-15T23:43:03.007Z",
  updated_at: "2019-06-15T23:43:03.007Z"
  },
  {
  id: 6,
  name: "Litecoin",
  symbol: "LTC",
  last_updated: "2019-05-20T19:34:03.000Z",
  price: 90.1211227891,
  api_id: 2,
  created_at: "2019-06-15T23:43:03.084Z",
  updated_at: "2019-06-15T23:43:03.084Z"
  },
  {
  id: 7,
  name: "Binance Coin",
  symbol: "BNB",
  last_updated: "2019-05-20T19:34:03.000Z",
  price: 28.706248216,
  api_id: 1839,
  created_at: "2019-06-15T23:43:03.162Z",
  updated_at: "2019-06-15T23:43:03.162Z"
  }
  ]
  
  opa = fetch("localhost:3000/api/v1/criptoinfo")
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
     loading: false,
     dataSource: responseJson
    })
  })
  .catch(error=>console.log(error))
  
criptocards = (
  <View>
    {
      info.map((cripto) =>{
      return <CriptoCard 
      name={cripto.name}
      symbol={cripto.symbol}
      price={cripto.price}
      last_updated={cripto.last_updated}/>
      })
    }
  </View>
)

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

  //  componentDidMount(){
  //   
  render() {


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
  }
});
