import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontNames , typography} from "../../Theme";
const width = Dimensions.get('screen').width
import { verticalScale,scale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        alignItems: "center"
    },
    headingView:{
        flexDirection:"row", 
        top:80
    },
    headingText:{
        fontSize:35, 
        fontWeight:"bold", 
        color:"#ffffff",
    },
    logoView: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",

    },
    logo:{ 
        height:verticalScale(260), 
        width:scale(260), 
        bottom:-moderateScale(80), 
        marginLeft:moderateScale(20), 
    },
    bottomView:{ 
        flex: 0.65, 
        width: "100%", 
        alignItems: "center", 
        paddingTop: 25 
    },
    bottomTextView:{ 
        paddingHorizontal: 30, 
        flex: 0.4, 
        marginTop: 50 
    },
    text1: {
        color: "black",
        textAlign: "center",
        fontSize: typography.FONT_SIZE_14,
        // marginVertical: 15,
        color: "#5B5B5B",
        marginBottom: moderateScale(10),
        color: "black",
        // fontFamily:fontNames.regularFont

    },
    buttonView:{
        flex:0.6, 
        width:"100%", 
        alignItems:"center",
        // justifyContent:"space-evenly"
    },
    registerButton: {
        height: 50,
        width: '85%',
        borderRadius: 50 / 2,
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
    serviceBUtton: {
        height: 50,
        width: '70%',
        borderRadius: 50 / 2,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#DB6400",
        justifyContent: "center",
        alignItems: "center"
    },
    signInText: {
        color: colors.primaryBlue,
    //    fontFamily:fontNames.regularFont,
       fontSize:typography.FONT_SIZE_16
    },
    forgotPwd: {
        position: 'absolute',
        bottom: 30,
        // alignItems: "center",
        borderColor: "#DB6400",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    welcomeText: {
        color: "black",
        textAlign: "center",
        fontSize: typography.FONT_SIZE_20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 15,
        color: "black"
    },
    appLogoView:{
        flex: 0.4, 
        backgroundColor: "#0090e6" , 
        width:"100%",
        alignItems:"center", 
        justifyContent:"flex-end"
    }

})
export default styles;
