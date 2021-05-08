import {StyleSheet} from 'react-native';
import COLOR from '../../utils/Color'
const styles = StyleSheet.create({

    container:{
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        // backgroundColor: '#F5FCFF',  
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
      },
      loginContainer:{
          height:450,
          width:'100%', 
          paddingHorizontal:20,
          paddingVertical:20,
          backgroundColor:COLOR.WHITE,
          borderRadius:12
      },
      welcomeText:{
        fontSize: 32, marginTop: 0, marginBottom: 8
      },
      infoText:{
          fontSize:14,
          color:COLOR.DARK_GRAY,
          marginBottom:12
      },
      btnName: {
        fontWeight: 'bold',
        fontSize: 16,
        color:COLOR.WHITE,
         paddingRight:50
      },
      btnPrimary: {
        flexDirection:'row',
        backgroundColor: COLOR.DARK_MODERATE_BLUE,
        height: 50,
        width:325,
        borderRadius: 14,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        
      },
      
      btnImage: {
        width: 25,
        height: 20,
        marginLeft: 0,
      },
     
});

export default styles;
