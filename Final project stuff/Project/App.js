/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Button,TextInput } from 'react-native';
import {Calendar, CalendarList, Agenda} from "react-native-calendars";
import { createStackNavigator, createAppContainer } from "react-navigation";


const styles = StyleSheet.create({
	ABlock: {
	backgroundColor: 'rgb(161, 203, 133)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 126.75,
	},
	BBlock: {
	backgroundColor: 'rgb(172, 194, 239)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 126.75,
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
	height: 126.75,
	top:-40,
	},
	DBlock: {
	backgroundColor: 'rgb(255, 253, 116)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 126.75,
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
	height: 126.75,
	top:-80,
	},
	FBlock: {
	backgroundColor: 'rgb(219, 219, 219)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 126.75,
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
	height: 126.75,
	top:-120,
	},
	Afterschool: {
	backgroundColor: 'rgb(74, 137, 255)',
	fontWeight: 'bold',
	fontSize: 30,
	color: 'black',
	width: 187.5,
	height: 126.75,
	position: 'absolute', 
	right: 0,
	top: 500.25,
	}

});


class HomeScreen extends Component{
	render(){
		return(
		<View>
		<Button
		onPress={() => this.props.navigation.navigate('CalendarPage')}
		title="View the calendar"
		color="black"
		/>
		<Button
		onPress={() => this.props.navigation.navigate('Details')}
		title="Enter your schedule"
		color="black"
		/>
		</View>
			);
	}
}


class CalendarScreen extends Component{
	render(){
		return(
		<View>
			
<CalendarList
  // Callback which gets executed when visible months change in scroll view. Default = undefined
  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={50}
  // Enable or disable scrolling of calendar list
  scrollEnabled={true}
  // Enable or disable vertical scroll indicator. Default = false
  showScrollIndicator={true}
/>


		</View>
			);

	}
}



class EnteringScreen extends Component {
   constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }


  render() {
    return (
      <ScrollView>
      <StatusBar hidden />
      <Text style={styles.ABlock}> A Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, borderWidth: 1, borderColor: 'rgb(161, 203, 133)' ,backgroundColor: "rgb(161, 203, 133)"}}
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={styles.BBlock}> B Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, left: 187.5, top:-40, borderWidth: 1, borderColor: 'rgb(172, 194, 239)' ,backgroundColor: "rgb(172, 194, 239)"}}
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={styles.CBlock}> C Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, top:-40, borderWidth: 1, borderColor: 'rgb(245, 164, 157)' ,backgroundColor: "rgb(245, 164, 156)"}}
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={styles.DBlock}> D Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, left: 187.5, top:-80, borderWidth: 1, borderColor: 'rgb(255, 253, 116)' ,backgroundColor: "rgb(255, 253, 116)"}}
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={styles.EBlock}> E Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, top:-80,  borderWidth: 1, borderColor: 'rgb(203, 156, 252)' ,backgroundColor: "rgb(203, 156, 252)"}}
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={styles.FBlock}> F Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, left: 187.5, top:-120, borderWidth: 1, borderColor: 'rgb(219, 219, 219)' ,backgroundColor: "rgb(219, 219, 219)"}}
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={styles.GBlock}> G Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, top:-120, borderWidth: 1, borderColor: 'rgb(174, 170, 170)' ,backgroundColor: "rgb(174, 170, 170)"}}
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={styles.Afterschool}> Sport </Text>
      <TextInput
        style={{height: 40, width: 187.5, left: 187.5, top:-160, borderWidth: 1, borderColor: 'rgb(74, 137, 255)' ,backgroundColor: "rgb(74, 137, 255)"}}
        onChangeText={(text) => this.setState({text})}
      />
      </ScrollView>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CalendarPage: CalendarScreen,
    Details: EnteringScreen
  },
  {
    initialRouteName: "Home"
  }
);


export default createAppContainer(AppNavigator);

