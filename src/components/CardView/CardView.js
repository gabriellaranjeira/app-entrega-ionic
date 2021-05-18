import React, {Component} from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, View, TouchableOpacity
} from 'react-native';

export class CardView extends Component{
    constructor(props){
        super(props);
    }

    getPercentHeight = (value) => {
        return Dimensions.get("window").height * (value / 100)
    }

    getPercentWidth = (value) => {
        return Dimensions.get("window").width * (value / 100)
    }

    styles = StyleSheet.create({
        Card:{
            flex:0.1,
            flexDirection:'flex-start', 
            width:getPercentWidth(100),
            flexDirection:'row',
            paddingLeft:30,
            paddingBottom:30
        },
        CardContent:{
            flexDirection:'row',
            backgroundColor:"white",
            padding:15,
            shadowRadius:20,
            borderRadius:20,
            elevation: 1
        },
        CardFirstIcon:{
            width : getPercentWidth(20),
            height:getPercentHeight(11)
        },
        CardBody:{
            width : getPercentWidth(50),
            height:getPercentHeight(10)
        },
        CardLastIcon:{
            width : getPercentWidth(6),
            height:getPercentHeight(6),
            marginTop:getPercentHeight(2.7)
        },
        CardTitle:{ 
            paddingLeft: getPercentWidth(3),
            fontFamily: "Poppins-SemiBold",
            color: '#000',
            fontSize:getPercentWidth(4)
        },
        CardSubTitle:{
            paddingLeft: getPercentWidth(3),
            fontFamily: "Poppins-SemiBold",
            color: '#9EA1A7',
            fontSize:getPercentWidth(3)
        }
    });
    render(){ 
        return(
            <TouchableOpacity >
            <View style={this.styles.Card}>
                <View style={this.styles.CardContent}>
                <ImageBackground style={this.styles.CardFirstIcon} source={require('../../assets/images/map.png')} resizeMode="cover"></ImageBackground>
                <View style={this.styles.CardBody}>
                    <Text style={this.styles.CardTitle}>Bairro: {this.props.bairro}</Text>
                    <Text style={this.styles.CardSubTitle}>Nome: {this.props.nome}</Text>
                    <Text style={this.styles.CardSubTitle}>Volume: {this.props.volume} caixas</Text>
                    <Text style={this.styles.CardSubTitle}>Tempo estimado: {this.props.tempo} min</Text>  
                </View>
                <ImageBackground style={this.styles.CardLastIcon} source={require('../../assets/images/left-arrow.png')} resizeMode="cover"></ImageBackground>
                </View>
            </View>
          </TouchableOpacity>
        )
    };
}
