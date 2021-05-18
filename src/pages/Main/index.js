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

const Main = () => (
  <ImageBackground
    source={require('../../assets/images/background.png')}
    style={styles.container}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <View style={styles.containerHeader}>
      <Text style={styles.HeaderText}>Lista de entrega</Text>
    </View>
    <View style={styles.containerBody}>
      <Text style={styles.BodyHeaderText}>Sistema Inteligente</Text>
      <Text style={styles.BodyContentText}>O sistema inteligente de rotas faz um controle de entrega para auxiliar dentro das proximidade, siga a lista de entrega</Text>
    <Text style={styles.BodyHeaderText}>Lista de entrega</Text>
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

export default Main;
