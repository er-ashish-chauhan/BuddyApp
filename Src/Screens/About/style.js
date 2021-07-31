import { StyleSheet, Dimensions } from 'react-native';
import {  moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { colors, fontNames , typography} from "../../Theme";

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
   
    headingView: {
        flex: 0.17,
        flexDirection: "row",
        backgroundColor: colors.white,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    headingText: {
        fontSize: typography.FONT_SIZE_20,
        color: colors.black,
        fontWeight: "bold",
        marginTop: moderateScale(5),
    },
    dogIconViewpage2: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconStylePage2: {
        height: verticalScale(70),
        width: scale(70),
        marginTop:moderateScale(10)
    },
    inputHeadingText: {
        alignSelf: "flex-start",
        paddingLeft: 35,
        color: colors.secondaryBlue,
        marginBottom: 5,
    },
    inputViewPage2:{ 
        flex: 0.5, 
        justifyContent:"center", 
        alignItems:"center" , 
        
    },
    dropDownView:{
        flex: 0.5, 
        justifyContent:"center", 
        alignItems:"flex-start",
      width:'95%',borderWidth:2
    },
    buttonPage2: {
        height: 50,
        width: '95%',
        borderRadius: 50 / 2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:8
    },
    buttonTextPage2:{
        color:colors.white, 
        fontWeight:"bold", 
        fontSize:15
    },
    privacyPolicyView:{
        paddingHorizontal:35, 
        justifyContent:"center", 
        alignItems:"center"
    },
    privacyPolicyText:{
        fontSize:14, 
        marginTop:10, 
        textAlign:"center"
    },
    header: {
        flex: 0.08,
        backgroundColor: colors.white,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    headerLeftIcon: {
        height: 30,
        width: 30,
        left: 15,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        fontSize: 22,
    },

})
export default styles;
