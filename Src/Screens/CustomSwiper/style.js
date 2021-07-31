import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontNames, typography } from "../../Theme";
const width = Dimensions.get('screen').width
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        alignItems: "center"
    },
    headingView: {
        flexDirection: "row",
        top: 80
    },
    nopeTextStyle: {
        flex: 0.7,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: 20,
        padding: 20,
    },
    likeTextStyle: {
        flex: 0.7,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 20,
        padding: 20
    },
    card: {
        width: '100%',
        height: '85%',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 35,
        top: 5
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
    imageBackGroundView:{ 
        position: "absolute", 
        borderTopRightRadius: 35, 
        borderTopLeftRadius: 35 
    },
    swiperImageView: {
        padding: 25,
        width: "100%",
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    activityIconBlue: {
        height: moderateScale(30),
        width: moderateScale(30),
    },
    activityIcon: {
        height: moderateScale(50),
        width: moderateScale(50),
    },
    dogItemView: {
        width: "100%",
        flex: 0.2,
        alignItems: "center",
        flexDirection: "row"
    },
    socialIconCircle: {
        height: moderateScale(55),
        width: moderateScale(55),
        borderRadius: moderateScale(55) / 2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      
        marginRight: 10
    },
    socialView: {
        width: "100%",
        flex: 0.25,
        alignItems: "center",
        alignItems:"center",
        flexDirection: "row",
        bottom:0,
    },
    iconCircle: {
        height: moderateScale(55),
        width: moderateScale(55),
        borderRadius: moderateScale(55) / 2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginRight: 10
    },
    descText: {
        width: "100%",
        flex: 0.35,
        justifyContent: "center",
        alignItems:"center"
    },
    extendIcon:{ 
        width: 40, 
        height: 20, 
        alignItems: "center", 
    }

})
export default styles;
