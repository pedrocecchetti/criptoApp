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
                    <Text style={styles.cardDate}>{Moment(props.last_updated).format('HH:MM')}</Text>
                </View>
                <View style={styles.cardPriceContainer}>
                    <Text style={styles.cardPrice}>USD {parseFloat(props.price).toFixed(4)}</Text>
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
        backgroundColor: '#444444',
        shadowColor: "#000",
        shadowOffset: {
    	    width: 0,
	        height: 9,
        },
        shadowOpacity: 0.90,
        shadowRadius: 8.95,
        elevation: 18,
        borderRadius: 10,
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
      color: '#84ff82',
      textAlign: 'left'
    },
    
    cardSymbol: {
        fontSize: 22,
        textAlign: 'right',
        fontWeight: '900',
        color: '#478dff',
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
        color: '#cdcdcd'
    },

    cardPrice: {
        textAlign: 'right',
        fontSize: 16,
        fontFamily: 'helvetica',
        fontWeight: '900',
        color: '#cdcdcd'
    },

    cardDateContainer: {

        flex: 1
    },

    cardPriceContainer: {

        flex: 1
    }



  });

export default CriptoCard