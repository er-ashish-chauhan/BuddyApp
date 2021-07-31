import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontNames , typography} from "../../Theme";
const width = Dimensions.get('screen').width
import { verticalScale,scale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        alignItems: "center"
    },
    header:{
        flex: 0.08, 
        backgroundColor: colors.primaryBlue, 
        width: "100%" ,
        justifyContent:"center", 
        alignItems:"center",
        flexDirection:"row"
       },
       headerLeftIcon:{ 
        height:30, 
        width:30,
        left:15, 
        position:"absolute", 
        alignItems:"center", 
        justifyContent:"center",
        tintColor:colors.white,
    },
    headerTitle:{
        fontSize:22,
        color:colors.white
    },
    imageStyle:{ 
        height: verticalScale(80),
        borderWidth:5,
        borderColor:colors.primaryBlue, 
        width: scale(80), 
        borderRadius: verticalScale(80) / 2 ,
        marginLeft:10
    },
    listImageStyle:{ 
        height: verticalScale(70),
        borderWidth:5,
        // borderColor:colors.primaryBlue, 
        width: scale(70), 
        borderRadius: verticalScale(70) / 2 ,
        marginLeft:10
    },
    listHeading:{
        fontSize:22,
        color:colors.black,
        fontWeight: "bold",
        paddingTop:10
    },
    listName:{
        fontSize:18,
        color:colors.black,
        fontWeight: "bold",
        paddingTop:10
    },
    message:{
        fontSize:16,
        color:colors.black,
    },
    expiringView:{ 
        flex: 0.22, 
        width: "100%" ,
        paddingLeft:15
    },
    listView:{ 
        flex: 0.78, 
        width: "100%" ,
        paddingLeft:15
    }
})

export default styles;
