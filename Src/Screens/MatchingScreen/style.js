import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontNames , typography} from "../../Theme";
const width = Dimensions.get('screen').width
import { verticalScale,scale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        alignItems: "center",
        backgroundColor:colors.secondaryBlue,
        paddingHorizontal:10
    },
 
    buttonView:{
        flex:0.6, 
        width:"100%", 
        alignItems:"center",
        // justifyContent:"space-evenly"
    },
    registerButton: {
        height: verticalScale(50),
        width: '85%',
        borderRadius: verticalScale(50) / 2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        borderColor:'gray',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        // paddingLeft: spacing.PADDING_20,
        // paddingRight: spacing.PADDING_10,
    },
    signInText: {
        color: "#000000",
    //    fontFamily:fontNames.regularFont,
       fontSize:typography.FONT_SIZE_16
    },
    itemView:{
        flex: 0.25, 
        width:"100%",
        justifyContent:"center", 
        alignItems:"center",
    },
    heading:{
        fontSize:typography.FONT_SIZE_40, 
        fontWeight:'bold', 
        color:colors.white, 
        textAlign:"center"
    },
    matchedWith:{
        fontSize:typography.FONT_SIZE_20, 
        fontWeight:'bold', 
        color:colors.white, 
        textAlign:"center",
        marginBottom:10
    },
    matchDesc:{
        fontSize:typography.FONT_SIZE_16, 
        fontWeight:'normal', 
        color:colors.white, 
        textAlign:"center",
        paddingHorizontal:scale(53),
    },
    imageStyle:{ 
        height: verticalScale(140),
        borderWidth:5,
        borderColor:"white", 
        width: scale(140), 
        borderRadius: verticalScale(140) / 2 
    }

  

})
export default styles;
