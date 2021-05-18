import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, View, Picker
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
let language = "";
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
  containerBody:{
    justifyContent:"flex-start",
    flex: 0.6,
  },
  HeaderText:{
    color: "#312DA4",
    fontSize: getPercentHeight(4),
    paddingLeft: getPercentHeight(2),
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  BodyHeaderText:{
    color: "#F38000",
    padding:getPercentHeight(1),
    textAlign:'center',
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
  },
  Select:{
    width: getPercentWidth(75),
    marginLeft: getPercentWidth(5),
    borderRadius:10,
    backgroundColor:"#F38000",
    borderWidth: 0
  },
  SelectItem:{
    fontFamily: "Poppins-SemiBold",
    fontWeight: "500",
    backgroundColor:"#F38000",
  },
  FormText:{
    color: "#312DA4",
    fontSize: getPercentHeight(2.5),
    paddingLeft: getPercentHeight(2),
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
});

const Login = () => (
  <ImageBackground
    source={require('../../assets/images/backgroundLogin.png')}
    style={styles.container}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <View style={styles.containerHeader}>
      <Text style={styles.HeaderText}>App Entregas</Text>
    </View>
    <View style={styles.containerBody}>
      <Text style={styles.BodyHeaderText}>Realize o login</Text>
      <Text style={styles.FormText}>Digite a instituição: </Text>
      <Picker
    selectedValue={language}
    style={styles.Select}
    itemStyle={styles.SelectItem}
    onValueChange={(itemValue, itemIndex) =>
      {this.language = itemValue;} 
    }>
  <Picker.Item style={styles.SelectItem} label="Java" value="java" />
  <Picker.Item style={styles.SelectItem} label="JavaScript" value="js" />
</Picker>
    </View> 
    
    
    
  </ImageBackground>
);

export default Login;
