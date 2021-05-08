import { StyleSheet } from "react-native";
import {colors  } from "../../consts/color";
export const styles=StyleSheet.create({
   
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    logo:{
       width:200  ,
       height:200 
    },
    footer:{
     position:'absolute',
     bottom:'5%'
    },
    label:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#002b5b'
        
    },
    subLabel:{
        fontSize:15,
        marginTop:5,
        color:'#707070'
    },

    slide:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems: 'center',
    },
    text:{
        textAlign:'center',
        width:'100%',
        color:'#707070',
        marginVertical:'20%',
        fontSize:35,
        fontWeight:'bold',
        bottom:120,
        textShadowColor: '#000000',
       textShadowOffset: { width: 1, height: 4 },
       textShadowRadius: 3
    },
    flexOne: {
        flex: 1,
      },
      flatList: {
        flex: 1,
        // flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
      },
      paginationContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        justifyContent: 'center',
      },
      paginationDots: {
        height: 16,
        margin: 16,
        // flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
      },
      leftButtonContainer: {
        position: 'absolute',
        left: 0,
      },
      rightButtonContainer: {
        position: 'absolute',
        right: 0,
      },
      bottomButton: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      transparentBottomButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        padding: 12,
      },
})