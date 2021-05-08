// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Intro slider with Custom Buttons

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import AppIntroSlider to use it
// import Icon from 'react-native-ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';





const AppIntroScreen = ({navigation}) => {
    const slides = [
        {
          key: 's1',
          text: 'Best Recharge offers',
          title: 'Want to move!',
          image: require('../../assests/images/vect-images/globePointers.png'),
          backgroundColor: '#e7e7de' // '#20d2bb',
        },
        {
          key: 's2',
          title: 'Move Luggage Easily',
          text: 'Helper will pack all luggage and help to Transfer',
          image : require('../../assests/images/vect-images/withMovers.png'),
          backgroundColor: '#20d2bb',
        },
        {
          key: 's3',
          title: 'Track Your Luggage Location',
          text: 'Enjoy our all services',
          image : require('../../assests/images/vect-images/track.png')
          // backgroundColor: '#22bcb5',
        },
       
      ];
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
      {/* <Text style={{color: '#28388f',fontSize:18,marginTop:10}}>Next</Text> */}
        
        <FeatherIcon
          name="arrow-right"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{color: 'green'}}
        />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} >
      <View style={styles.buttonCircle}>
      {/* <FeatherIcon name='eye-off' size={20} style={styles.showIcon}  /> */}
      
        <FeatherIcon
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{color: 'green'}}
        />
      </View>
      </TouchableOpacity>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        null
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
        />
      )}
    </>
  );
};

export default AppIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: '100%',
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    // color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    color:'#28388f'

  },
  introTitleStyle: {
    fontSize: 25,
    // color: 'white',
    color:'#28388f',

    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  buttonCircle: {
    marginTop:4,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

