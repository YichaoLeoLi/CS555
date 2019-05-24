import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import {Agenda} from 'react-native-calendars';



// create a function that saves your data asyncronously
    
    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            alert(a);
            if (value !== null) {
                // Our data is fetched successfully
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
            alert(error);
        }
    }
    

    storeData = async () =>{
      await AsyncStorage.setItem('name', John)
    }



export default class AgendaScreen extends Component {
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
        selected={'2017-05-15'}
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
    // fetch the data back asyncronously
    // create a function that saves your data asyncronously
    
    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            alert(a);
            if (value !== null) {
                // Our data is fetched successfully
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
            alert(error);
        }
    }
    storeData();
    setTimeout(() => {
      for (let i = 0; i < 14; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          if ((i%7)==0){
          this.state.items[strTime].push({
            name: 'PH650HO 8:00-9:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'FR300 9:40-10:50',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'MA670HO 11:00-12:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'CS550HO 2:10-3:20',
            height: 50,
          })
          }
          if ((i%7)==1){
          this.state.items[strTime].push({
            name: 'EN300 11:30-12:40',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'PH650HO 12:50-2:00',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'FR300 2:10-3:20',
            height: 50,
          })
          }
          if ((i%7)==2){
          this.state.items[strTime].push({
            name: 'CS550HO 8:00-9:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'MA670HO 10:20-11:30',
            height: 50,
          })
          }
          if ((i%7)==3){
          this.state.items[strTime].push({
            name: 'EN300 9:40-10:50',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'FR300 12:50-2:00',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'PH650HO 2:10-3:20',
            height: 50,
          })
          }
          if ((i%7)==4){
          this.state.items[strTime].push({
            name: 'MA670HO 9:40-10:50',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'FR300 9:40-10:50',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'CS550HO 11:00-12:10',
            height: 50,
          })
          this.state.items[strTime].push({
            name: 'EN300 2:10-3:20',
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

const styles = StyleSheet.create({
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
