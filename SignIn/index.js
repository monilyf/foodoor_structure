import React, {Component} from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, View,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import OrSection from '../../component/OrSection'
import InputContainer from '../../component/InputContainer';
import COLOR from '../../utils/Color'
import SubmitButton from '../../component/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }
  check_IsNull = () => {
    const {email} = this.state;
    if (email == '') {
      alert('please fill email ');
      return false;
    }
    login_data = 'login';
    AsyncStorage.setItem('login_data', JSON.stringify(login_data));
    // alert('login  Successfully!', login_data);
    console.log('login_data from :', login_data);

    this.props.navigation.navigate('Auth', {email: this.state.email});
    return true;
  };

  render(props) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[COLOR.PALE_VIOLET, COLOR.LIGHT_ORANGE]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View>
              <View style={styles.loginContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <Text style={styles.infoText}>
                  Enter your email id to proceed
                </Text>

                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  onChangeText={text => this.setState({email: text})}
                />
                {this.state.isEmailvalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.emailError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>{this.state.emailError}</Text>
                )}

                <SubmitButton
                  onPress={() => {
                    this.check_IsNull();
                  }}
                  buttonText="Login"
                />
                <OrSection/>
             
                  <TouchableOpacity style={styles.btnPrimary}>
                    <Image style={styles.btnImage} source={require('../../assets/images/facebook.png')}/>
                    <Text style={styles.btnName}>Sign In with FaceBook</Text>
                  </TouchableOpacity>
                  <View style={{margin:5}}></View>
                  <TouchableOpacity style={styles.btnPrimary}>
                    <Image style={styles.btnImage} source={require('../../assets/images/google.png')}/>
                    <Text style={styles.btnName}>Sign In with Google</Text>
                  </TouchableOpacity>
              
              </View>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default SignIn;
