import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Calendar, CalendarList, Agenda} from "react-native-calendars";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        
      <Calendar/>

      </View>
    );
  }
}