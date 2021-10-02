import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { colors, fontNames, typography } from "../../Theme";

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#ffffff"
        // backgroundColor: 'rgba(245,245,245,1)',
        // paddingHorizontal: (WIDTH * 5) / 100,
    },
    logoView: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
    },
    text1: {
        textAlign: "left",
        fontSize: typography.FONT_SIZE_14,
        color: "#5B5B5B",
        marginBottom: moderateScale(10),
        color: colors.darkBlue,
        fontWeight: "600",
        fontFamily: fontNames.regularFont
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
        borderWidth: 0.5,
        borderColor: 'gray',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
        // paddingLeft: spacing.PADDING_20,
        // paddingRight: spacing.PADDING_10,
    },
    welcomeText: {
        color: "black",
        textAlign: "center",
        fontSize: typography.FONT_SIZE_20,
        // fontWeight: "bold",
        
        // marginTop: 20,
        marginBottom: moderateScale(5),
        color: "black"
    },
    appLogoView: {
        // flex: 0.25,
        paddingTop: 58,
        backgroundColor: colors.primaryBlue,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: 20
    },
    activeTab: {
        width: moderateScale(10),
        height: moderateScale(10),
        backgroundColor: colors.darkBlue,
        marginLeft: moderateScale(5),
        borderRadius: 5,
    },

    inactiveTab: {
        width: moderateScale(10),
        height: moderateScale(10),
        backgroundColor: colors.white,
        marginLeft: moderateScale(5),
        borderRadius: 5,
    },
    nameText: {
        fontSize: 35,
        color: "#ffffff"
    },
    viewOne: {
        // paddingHorizontal: 20,
        width: "100%",
        marginLeft: '10%',
        flex: 0.5,
        justifyContent: "space-evenly",
        // alignItems: "center",
    },
    mainView: {
        flex: 0.85,
        width: "100%",
        alignItems: "center",
        alignItems: 'center',
        paddingTop: 25,
    },
    pagNumberView: {
        flex: 0.6,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

    },
    pageNoText: {
        color: colors.white,
        fontSize: typography.FONT_SIZE_40,
        fontWeight: "bold",
        alignSelf: "flex-start",
        paddingLeft: 25
    },
    headingView: {
        // flex: 0.17,
        flexDirection: "row",
        // backgroundColor: colors.white,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        // flexDirection: "column",
    },
    headingText: {
        fontSize: typography.FONT_SIZE_20,
        color: colors.white,
        // fontWeight: "bold",
        fontFamily: fontNames.boldFont,
        marginTop: moderateScale(0),
    },
    dogIconViewpage2: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconStylePage2: {
        height: verticalScale(70),
        width: scale(70),
        marginTop: moderateScale(10)
    },
    inputHeadingText: {
        alignSelf: "flex-start",
        paddingLeft: 35,
        color: colors.darkBlue,
        marginVertical: 5,
        fontWeight: "600",
        fontSize: typography.FONT_SIZE_12,
    },
    inputViewPage2: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",

    },
    dropDownView: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "flex-start",
        width: '95%', borderWidth: 2
    },
    buttonPage2: {
        height: 50,
        width: '95%',
        borderRadius: 50 / 2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },

    buttonChangePwd: {
        height: 40,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },

    buttonTextPage2: {
        color: colors.white,
        // fontWeight: "bold",
        fontFamily: fontNames.boldFont,
        fontSize: typography.FONT_SIZE_16
    },
    privacyPolicyView: {
        paddingHorizontal: 35,
        justifyContent: "center",
        alignItems: "center"
    },
    privacyPolicyText: {
        fontSize: 14,
        marginTop: 10,
        textAlign: "center"
    },
    buttonView: {
        // flex: 0.1, 
        position: "absolute",
        bottom: 0,
        paddingTop: 20,
        width: width,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    DropDownView: {
        height: 50,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputViewDropDown: {
        height: 40,

        borderRadius: 40 / 2,
        backgroundColor: '#ffffff',
        // alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        padding: 10,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        borderColor: 'gray',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    dropdownHeading: {
        alignSelf: "flex-start",
        paddingLeft: 20,
        color: colors.secondaryBlue,
        marginBottom: 5
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
    },
    circleView: {
        flex: 0.20,
        justifyContent: "center",
        alignItems: "center"
    },
    activityIcon: {
        height: moderateScale(60),
        width: moderateScale(60),
    },
    activityIconBlue: {
        height: moderateScale(45),
        width: moderateScale(45),
    },
    appleLogo: {
        height: verticalScale(20),
        width: scale(20),
    },
    headerLeftIcon: {
        height: 30,
        width: 30,
        left: 15,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    profilePress: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'silver',
        marginTop: 20,
        padding: 10
    },
    profile: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    view3: {
        flexDirection: "row",
        width: '90%',
        justifyContent: "space-between",
        alignItems: "center",
    },
    pImageContainer: {
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 80,
        padding: 15,
        alignItems: "center",
        borderColor: colors.white
    },
    pImage: {
        height: scale(100),
        width: scale(90),
        borderRadius: 40
    },
    cameraIcon: {
        position: "absolute",
        width: 40,
        height: 40,
        left: 35,
        top: -20
    },
    bioField: {
        paddingTop: 10,
        width: "100%",
        paddingHorizontal: 30,
        fontSize: typography.FONT_SIZE_16,
    },
    inputContainer: {
        minHeight: 100,
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        borderColor: 'gray',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        justifyContent: "flex-start",
    }

})
export default styles;
