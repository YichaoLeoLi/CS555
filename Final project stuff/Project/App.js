/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Button,TextInput, TouchableOpacity,Image } from 'react-native';
import {Calendar, CalendarList, Agenda} from "react-native-calendars";
import { createStackNavigator, createAppContainer } from "react-navigation";


var classes = [];


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
	},
	Buttons: {
	backgroundColor: 'rgb(253,183,54)',
	alignItems: 'center',
  padding:10,
	marginRight: 10,
  marginLeft: 10,
  marginTop: 50
	},
	white: {
	color:'white',
	fontSize: 20
	},
  mainpage: {
  backgroundColor: 'rgb(10, 87, 148)',
  height: 677
  },
  mainpage1: {
  backgroundColor: 'rgb(10, 87, 148)',
  alignItems: 'center'
  },
  title: {
  fontSize: 30,
  fontWeight: 'bold',
  color: 'rgb(253,183,54)'
  }
});


class HomeScreen extends Component{
	render(){
		return(
		<View style = {styles.mainpage}>
    <View style = {styles.mainpage1}>
    <Text style = {styles.title}> My Choate Calendar </Text>
    </View> 
		<TouchableOpacity
		onPress={() => this.props.navigation.navigate('CalendarPage')}
		style = {styles.Buttons}
		>
		<Text style = {styles.white}> View the calendar </Text>
		</TouchableOpacity>
		<TouchableOpacity
		onPress={() => this.props.navigation.navigate('Details')}
    style = {styles.Buttons}
		>
    <Text style = {styles.white}> Enter your schedule </Text>
    </TouchableOpacity>
		</View>
			);
	}
}


class CalendarScreen extends Component{
	render(){
		return(
		<View>
		<StatusBar hidden />
    <CalendarList
  horizontal={true}
  pagingEnabled={true}
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


<Agenda
  // the list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key kas to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={{
    '2019-05-22': [{text: 'item 1 - any js object'}],
    '2019-05-23': [{text: 'item 2 - any js object'}],
    '2019-05-24': [],
    '2019-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}]
  }}
  // callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={(month) => {console.log('trigger items loading')}}
  // callback that fires when the calendar is opened or closed
  onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
  // callback that gets called on day press
  onDayPress={(day)=>{console.log('day pressed')}}
  // callback that gets called when day changes while scrolling agenda list
  onDayChange={(day)=>{console.log('day changed')}}
  // initially selected day
  selected={'2019-05-16'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2019-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2019-05-30'}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={50}
  // specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {return (<View />);}}
  // specify how each date should be rendered. day can be undefined if the item is not first in that day.
  renderDay={(day, item) => {return (<View />);}}
  // specify how empty date content with no items should be rendered
  renderEmptyDate={() => {return (<View />);}}
  // specify how agenda knob should look like
  renderKnob={() => {return (<View />);}}
  // specify what should be rendered instead of ActivityIndicator
  renderEmptyData = {() => {return (<View />);}}
  // specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // Hide knob button. Default = false
  hideKnob={true}
  // By default, agenda dates are marked if they have at least one item, but you can override this if needed
  markedDates={{
    '2019-05-16': {selected: true, marked: true},
    '2019-05-17': {marked: true},
    '2019-05-18': {disabled: true}
  }}
  // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
  onRefresh={() => console.log('refreshing...')}
  // Set this true while waiting for new data from a refresh
  refreshing={false}
  // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
  refreshControl={null}
  // agenda theme
  theme={{
    agendaDayTextColor: 'yellow',
    agendaDayNumColor: 'green',
    agendaTodayColor: 'red',
    agendaKnobColor: 'blue'
  }}
  // agenda container style
  style={{}}
/>

		</View>
			);

	}
}



class EnteringScreen extends Component {
   constructor(props) {
    super(props);
    this.state={text: ''};
  }


  render() {
    return (
      <ScrollView>
      <StatusBar hidden />
      <Text style={styles.ABlock}> A Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, borderWidth: 1, borderColor: 'rgb(161, 203, 133)' ,backgroundColor: "rgb(161, 203, 133)"}}
        onChangeText={(text) => this.setState({text})
       }
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

