import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Moment from 'moment'

Moment.locale('br')

const CriptoCard = (props) => {
      return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <View styles={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>{props.name}</Text>
                </View>
                <View style={styles.cardSymbolContainer}>
                    <Text style={styles.cardSymbol}>{props.symbol}</Text>
                </View>
            </View>
            <View style={styles.cardBottom}>
                <View style={styles.cardDateContainer}>
                    <Text style={styles.cardDate}>{Moment(props.last_updated).format('DD MMM YYYY')}</Text>
                </View>
                <View style={styles.cardPriceContainer}>
                    <Text style={styles.cardPrice}>USD {props.price}</Text>
                </View>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    card: {
        margin: 7,
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
    	    width: 0,
	        height: 9,
        },
        shadowOpacity: 0.90,
        shadowRadius: 8.95,
        elevation: 18,
        borderRadius: 10
    },

    // CARD TOP

    cardTop:{
        flexDirection: 'row',
        flex: 1
    },

    cardTitle: {
      fontSize: 19,
      fontWeight: 'bold',
      margin: 10,
      color: '#34a34e',
      textAlign: 'left'
    },
    
    cardSymbol: {
        fontSize: 22,
        textAlign: 'right',
        fontWeight: '900',
        color: '#ffc005'
    },
    
    cardTitleContainer: {
        flex: 30
    }, 
    
    cardSymbolContainer: {
        flex: 1
    },

    // CARD BOTTOM

    cardBottom:{
        flex: 1,
        flexDirection: 'row'
    },

    cardDate: {

    },

    cardPrice: {
        textAlign: 'right',
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: '900'
    },

    cardDateContainer: {

        flex: 1
    },

    cardPriceContainer: {

        flex: 1
    }



  });

export default CriptoCard