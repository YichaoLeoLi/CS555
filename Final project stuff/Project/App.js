/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//May 23 2019
//choate calendar
//Description: This is a calendar built using react native, and it is a calendar specified for choate students. After the student enters the schedule, the app automatically adds the schedule to the calendar for the year 2018-2019. 
//Honor code: On my honor, I have neither given nor received any unauthorized aid.
/*Sources: https://facebook.github.io/react-native/
https://github.com/wix/react-native-calendars
https://github.com/react-native-community/react-native-async-storage
https://facebook.github.io/react-native/docs/asyncstorage
*/

import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Button,TextInput, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from "react-native-calendars";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AsyncStorage from '@react-native-community/async-storage';


var classes = [];

    _retrieveData = async () => {
    try{
      console.log('executed');
      classes[0] = await AsyncStorage.getItem('A_Block');
      classes[1] = await AsyncStorage.getItem('B_Block');
      classes[2] = await AsyncStorage.getItem('C_Block');
      classes[3] = await AsyncStorage.getItem('D_Block');
      classes[4] = await AsyncStorage.getItem('E_Block');
      classes[5] = await AsyncStorage.getItem('F_Block');
      classes[6] = await AsyncStorage.getItem('G_Block');
      classes[7] = await AsyncStorage.getItem('After_School');
    } catch (error){
      //Error retrieving data
      alert(error);
    }
  }

  _storeData = async() =>{
        try{
          console.log('executed');
          await AsyncStorage.setItem('A_Block', classes[0]);
          await AsyncStorage.setItem('B_Block', classes[1]);
          await AsyncStorage.setItem('C_Block', classes[2]);
          await AsyncStorage.setItem('D_Block', classes[3]);
          await AsyncStorage.setItem('E_Block', classes[4]);
          await AsyncStorage.setItem('F_Block', classes[5]);
          await AsyncStorage.setItem('G_Block', classes[6]);
          await AsyncStorage.setItem('After_School', classes[7]);
        } catch(error){
          //Error saving data
          alert(error);
        }
      }




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
  },
    item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
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
    <TouchableOpacity
    onPress={_storeData}
    style = {styles.Buttons}
    >
    <Text style = {styles.white}> Save Data </Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={_retrieveData}
    style = {styles.Buttons}
    >
    <Text style = {styles.white}> Retreive Data </Text>
    </TouchableOpacity>

		</View>
			);
	}

}


class CalendarScreen extends Component{
	constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2018-09-10'}
        minDate={'2018-09-10'}
        maxDate={'2019-05-23'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = 0; i < 260; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          if ((i%7)==0){
          this.state.items[strTime].push({
            name: classes[0] +' 8:00-9:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[1] +' 9:40-10:50',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[2] +' 11:00-12:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[3] +' 12:50-2:00',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[4] +' 2:10-3:20',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[7] +' 4:00-6:00',
            height: 50,
          })
          }
          if ((i%7)==1){
          this.state.items[strTime].push({
            name: classes[5] +' 8:00-9:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'School Meeting 10:00-10:50',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[6] +' 11:00-12:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[0] +' 12:50-2:00',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[1] +' 2:10-3:20',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[7] +' 4:00-6:00',
            height: 50,
          })
          }
          if ((i%7)==2){
          this.state.items[strTime].push({
            name: classes[4] +' 8:00-9:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'form/advisor meeting 9:40-10:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[2] +' 10:20-11:30',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[3] +' 11:40-12:50',
            height: 50,
          })
          }
          if ((i%7)==3){
          this.state.items[strTime].push({
            name: 'Sleep-in 8:00-9:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[6] +' 9:40-10:50',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[5] +' 11:00-12:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[1] +' 12:50-2:00',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[0] +' 2:10-3:20',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[7] +' 4:00-6:00',
            height: 50,
          })
          }
          if ((i%7)==4){
          this.state.items[strTime].push({
            name: classes[3] +' 8:00-9:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[2] +' 9:40-10:50',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[4] +' 11:00-12:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[5] +' 12:50-2:00',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[6] +' 2:10-3:20',
            height: 50,
          })
          this.state.items[strTime].push({
            name: classes[7] +' 4:00-6:00',
            height: 50,
          })
        }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}



class EnteringScreen extends Component {
   constructor(props) {
    super(props);
    this.state={text:''};
  }

  onFocusChangeA = () => {
    let A = this.state.textA;
    classes[0]=(A);
    console.log(A);
    console.log(classes);
  }

  onFocusChangeB = () => {
    let B = this.state.textB;
    classes[1]=(B);
    console.log(B);
    console.log(classes);
  }

  onFocusChangeC = () => {
    let C = this.state.textC;
    classes[2]=(C);
    console.log(C);
    console.log(classes);
  }

  onFocusChangeD = () => {
    let D = this.state.textD;
    classes[3]=(D);
    console.log(D);
    console.log(classes);
  }

  onFocusChangeE = () => {
    let E = this.state.textE;
    classes[4]=(E);
    console.log(E);
    console.log(classes);
  }

  onFocusChangeF = () => {
    let F = this.state.textF;
    classes[5]=(F);
    console.log(F);
    console.log(classes);
  }

  onFocusChangeG = () => {
    let G = this.state.textG;
    classes[6]=(G);
    console.log(G);
    console.log(classes);
  }

  onFocusChangeAfterSchool = () => {
    let AfterSchool = this.state.textH;
    classes[7]=(AfterSchool);
    console.log(AfterSchool);
    console.log(classes);
  }

  render() {
    return (
      <ScrollView>
      <StatusBar hidden />
      <Text style={styles.ABlock}> A Block</Text>
      <TextInput
        ref ={(el)=>{this.textA=el;}}
        style={{height: 40, width: 187.5, borderWidth: 1, borderColor: 'rgb(161, 203, 133)' ,backgroundColor: "rgb(161, 203, 133)"}}
        onChangeText={(textA) => this.setState({textA})}
        value = {this.state.textA}
        onEndEditing={this.onFocusChangeA}
      />

      <Text style={styles.BBlock}> B Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, left: 187.5, top:-40, borderWidth: 1, borderColor: 'rgb(172, 194, 239)' ,backgroundColor: "rgb(172, 194, 239)"}}
        onChangeText={(textB) => this.setState({textB})}
        ref ={(el)=>{this.textB=el;}}
        value = {this.state.textB}
        onEndEditing={this.onFocusChangeB}
      />
      <Text style={styles.CBlock}> C Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, top:-40, borderWidth: 1, borderColor: 'rgb(245, 164, 157)' ,backgroundColor: "rgb(245, 164, 156)"}}
        onChangeText={(textC) => this.setState({textC})}
        ref ={(el)=>{this.textC=el;}}
        value = {this.state.textCtextC}
        onEndEditing={this.onFocusChangeC}
      />
      <Text style={styles.DBlock}> D Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, left: 187.5, top:-80, borderWidth: 1, borderColor: 'rgb(255, 253, 116)' ,backgroundColor: "rgb(255, 253, 116)"}}
        onChangeText={(textD) => this.setState({textD})}
        ref ={(el)=>{this.textD=el;}}
        value = {this.state.textD}
        onEndEditing={this.onFocusChangeD}
      />
      <Text style={styles.EBlock}> E Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, top:-80,  borderWidth: 1, borderColor: 'rgb(203, 156, 252)' ,backgroundColor: "rgb(203, 156, 252)"}}
        onChangeText={(textE) => this.setState({textE})}
        ref ={(el)=>{this.textE=el;}}
        value = {this.state.textE}
        onEndEditing={this.onFocusChangeE}
      />
      <Text style={styles.FBlock}> F Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, left: 187.5, top:-120, borderWidth: 1, borderColor: 'rgb(219, 219, 219)' ,backgroundColor: "rgb(219, 219, 219)"}}
        onChangeText={(textF) => this.setState({textF})}
        ref ={(el)=>{this.textF=el;}}
        value = {this.state.textF}
        onEndEditing={this.onFocusChangeF}
      />
      <Text style={styles.GBlock}> G Block</Text>
      <TextInput
        style={{height: 40, width: 187.5, top:-120, borderWidth: 1, borderColor: 'rgb(174, 170, 170)' ,backgroundColor: "rgb(174, 170, 170)"}}
        onChangeText={(textG) => this.setState({textG})}
        ref ={(el)=>{this.textG=el;}}
        value = {this.state.textG}
        onEndEditing={this.onFocusChangeG}
      />
      <Text style={styles.Afterschool}> Sport </Text>
      <TextInput
        style={{height: 40, width: 187.5, left: 187.5, top:-160, borderWidth: 1, borderColor: 'rgb(74, 137, 255)' ,backgroundColor: "rgb(74, 137, 255)"}}
        onChangeText={(textH) => this.setState({textH})}
        ref ={(el)=>{this.textH=el;}}
        value = {this.state.textH}
        onEndEditing={this.onFocusChangeAfterSchool}
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

