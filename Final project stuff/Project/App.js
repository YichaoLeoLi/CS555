/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';




const styles = StyleSheet.create({
	ABlock: {
	backgroundColor: 'rgb(161, 203, 133)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 166.75,
	},
	BBlock: {
	backgroundColor: 'rgb(172, 194, 239)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 166.75,
	position: 'absolute', 
	right: 0,
	top: 0,
	},
	CBlock: {
	backgroundColor: 'rgb(245, 164, 157)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 166.75,
	},
	DBlock: {
	backgroundColor: 'rgb(255, 253, 116)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 166.75,
	position: 'absolute', 
	right: 0,
	top: 166.75,
	},
	EBlock: {
	backgroundColor: 'rgb(203, 156, 252)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 166.75,
	},
	FBlock: {
	backgroundColor: 'rgb(219, 219, 219)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 166.75,
	position: 'absolute', 
	right: 0,
	top: 333.5,
	},
	GBlock: {
	backgroundColor: 'rgb(174, 170, 170)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 166.75,
	},
	Afterschool: {
	backgroundColor: 'rgb(74, 137, 255)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 166.75,
	position: 'absolute', 
	right: 0,
	top: 500.25,
	}


});



export default class App extends Component {
  render() {
    return (
      <ScrollView>
      <StatusBar hidden />
      <Text style={styles.ABlock}> A Block</Text>
      <Text style={styles.BBlock}> B Block</Text>
      <Text style={styles.CBlock}> C Block</Text>
      <Text style={styles.DBlock}> D Block</Text>
      <Text style={styles.EBlock}> E Block</Text>
      <Text style={styles.FBlock}> F Block</Text>
      <Text style={styles.GBlock}> G Block</Text>
      <Text style={styles.Afterschool}> Sport </Text>
      </ScrollView>
    );
  }
}

