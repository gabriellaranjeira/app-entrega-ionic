import React, {Component} from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, View, TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-datepicker';
export class DatePickerCustom extends Component{
    constructor(props){
        super(props);
        this.state = {date: ''};
    }

    selectDate = (date) => {
        this.setState({date: date});
        
    }

    getDateNow = () => {
        const date = new Date();
        return date.getDay() + '-' + date.getMonth() + 1 + '-' + date.getFullYear();
    }
    render(){ 
        return(
            <View>
                <DatePicker
          style={{width: 150,marginLeft:85}}
          date={this.state.date}
          format="DD/MM/YYYY"
          minDate="01-01-2017"
          maxDate={this.getDateNow()}
          customStyles={{
            dateIcon: {
            width:0,
            height:0,
            },
            dateInput: {
                borderRadius:10,
                backgroundColor:"#F38000",
                borderWidth: 0
            },
            dateText:{
                color: "#FFFFFF",
                fontFamily: "Poppins-SemiBold",
            }
            }}
          onDateChange={this.selectDate}
        /> 
            </View>   
        )
    };
}
