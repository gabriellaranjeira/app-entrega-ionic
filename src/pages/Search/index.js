import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, View
} from 'react-native';
import { DatePickerCustom } from '../../components/DatePickerCustom/DatePickerCustom.js';
import { CardView } from '../../components/CardView/CardView.js';
import { ScrollView } from 'react-native-gesture-handler';


getPercentHeight = (value) => {
  return Dimensions.get("window").height * (value / 100)
}

getPercentWidth = (value) => {
  return Dimensions.get("window").width * (value / 100)
}
const BackText = "<"; 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  containerHeader:{
    flex:0.07,
    justifyContent:"flex-start",
    width: Dimensions.get('window').width,
  },
  containerCards: {
    flex:0.5,
    overflow: "scroll",
    width: Dimensions.get('window').width,
  },
  containerBody:{
    justifyContent:"flex-start",
    flex: 0.6,
  },
  HeaderText:{
    color: "#312DA4",
    fontSize: getPercentHeight(4),
    paddingLeft: getPercentHeight(2),
    fontFamily: "Poppins-SemiBold",
  },
  BodyHeaderText:{
    color: "#F38000",
    padding:getPercentHeight(1),
    textAlign:'left',
    marginLeft: getPercentHeight(0),
    fontSize: getPercentHeight(3.3),
    fontFamily: "Poppins-SemiBold",
  },
  BodyContentText:{
    padding:getPercentHeight(1),
    marginLeft: getPercentHeight(2),
    color:"#888888",
    fontSize: getPercentHeight(2),
    fontFamily: "Poppins-SemiBold",
    lineHeight:getPercentHeight(2.7)
  }
});

const Search = () => (
  <ImageBackground
    source={require('../../assets/images/background.png')}
    style={styles.container}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <View style={styles.containerHeader}>
      <Text style={styles.HeaderText}>lista de entrega concluída</Text>
    </View>
    <View style={styles.containerBody}>
      <Text style={styles.BodyHeaderText}>Controle de entregas</Text>
      <Text style={styles.BodyContentText}>Você pode filtrar as entregas concluídas no sistema por data, basta selecionar a data para controle de entrega</Text>
      <DatePickerCustom /> 
    <Text style={styles.BodyHeaderText}>Lista de entrega realizada</Text>
    </View> 
    
    
    <ScrollView style={styles.containerCards}>
    <CardView />
    <CardView />
    <CardView />
    <CardView />
    <CardView />
    </ScrollView>
  </ImageBackground>
);

export default Search;
