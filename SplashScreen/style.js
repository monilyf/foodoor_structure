import {StyleSheet} from 'react-native'
const styles = StyleSheet.create(
    {
      SplashScreen_RootView:
      {
        justifyContent: 'center',
        flex: 1,
        // marginTop: 60,  
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor:'#fff',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
      },
      SplashScreen_ChildView:  
      {  
          justifyContent: 'center',  
          alignItems: 'center',  
          backgroundColor: '#00BCD4',  
          flex:1,  
      },  
      logo: {
        height:200,
        width:'80%',
        // marginTop:40,
        // marginLeft:30,
        alignItems:'center'
  
      },
     footer:{
       position:'absolute',
   
       bottom:50,
       
     },
     footerText:{
     
      color: '#6f6e92',
   
     }
    });  
export default styles;