import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {View} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import Main from '~/pages/Main';
import Map from '~/pages/Map';
import Search from '~/pages/Search';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const Routes = createAppContainer(createBottomTabNavigator({ 
    Main : {
        screen: Main,
        navigationOptions: {
            header: null,
            tabBarVisible: true,
            tabBarIcon: ({ tintColor }) => {
                return (<Icon name="home" size={25} color="#4F8EF7" />);
            }      
        }

    },
    Map : {
        screen: Map,
        navigationOptions: {
            header: null,
            tabBarVisible: true,
            tabBarIcon: ({ tintColor }) => {
                return (<Icon name="map" size={25} color="#4F8EF7" />);
            }
        }    
    },
    Search : {
        screen: Search,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => {
                return (<Icon name="search" size={25} color="#4F8EF7" />);
            }
        },
    }

},
{
    initialRouteName: "Main",
    tabBarOptions: {
      style: {
       backgroundColor: '#F2F2F2'
      },
      showLabel: false,
    }
 }));

export default Routes;