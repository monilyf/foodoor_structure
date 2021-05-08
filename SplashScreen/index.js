// Splash Screen

import { CommonActions } from '@react-navigation/routers';
import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text,
  Image,
} from 'react-native';
import Routes from '../../router/routes';
import styles from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends Component  {

 

  // Navigate to authenticated route
  resetToAuth = CommonActions.reset({
    index:0,
    routes:[
      {name:Routes.Authenticated},
    ],
  })

  // Navigate to NotAuthenticated route
  resetToNotAuth = CommonActions.reset({
    index:0,
    routes:[
      {name:Routes.NotAuthenticated},
    ],
  })

  componentDidMount() {
    console.log('Splash didMount');
    this.checkAuthentication();
  }

  checkAuthentication = async () => {
    let authenticated = await AsyncStorage.getItem('registered_data');
    console.log('checkAuth Authenticated val - ', authenticated);
    if (authenticated != null) {
      // this.setState({ isAuthenticated: true });
      this.goTo(true);
    } else {
      // this.setState({ isAuthenticated: false });
      this.goTo(false);
    }
  };

  goTo = (value) => {
    if (value) {
        setTimeout(() => {
            this.props.navigation.dispatch(this.resetToAuth);
        }, 3000);
    } else {
        setTimeout(() => {
            this.props.navigation.dispatch(this.resetToNotAuth);
        }, 3000);
    }
}
render(){
    return (
      <View style={styles.SplashScreen_RootView}>
       
         <Image source={require('../../assets/images/food_loader.gif')} style={styles.logo}/>
         
         {/* <View style={styles.SplashScreen_ChildView}>
          <Image source={require('../assests/images/splashScreen1.gif')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View> */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>By Team{"\n"}Foodoorer</Text>
        </View>
       
      </View>
    );
  }
}
export default SplashScreen;