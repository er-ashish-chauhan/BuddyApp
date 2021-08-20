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
        color: "black",
        textAlign: "center",
        fontSize: typography.FONT_SIZE_14,
        color: "#5B5B5B",
        marginBottom: moderateScale(10),
        color: colors.black

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
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: moderateScale(5),
        color: "black"
    },
    appLogoView: {
        paddingTop: "10%",
        flex: 0.16,
        backgroundColor: colors.primaryBlue,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
        paddingHorizontal: 20,
        width: "100%",
        flex: 0.5,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    mainView: {
        flex: 1,
        width: "100%",
        // alignItems: "center",
        // alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 50
    },
    pagNumberView: {
        // flex: 1,
        marginLeft: 5,
        marginTop: 30,
        paddingBottom: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

    },
    pageNoText: {
        color: colors.white,
        fontSize: typography.FONT_SIZE_40,
        fontWeight: "bold",
        alignSelf: "flex-start",
        paddingLeft: 25,
        opacity: .5
    },
    headingView: {
        // flex: 0.17,
        paddingTop: '10%',
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
        fontFamily: fontNames.boldFont,
        // fontWeight: "bold",
        marginTop: moderateScale(5),
    },
    dogIconViewpage2: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    iconStylePage2: {
        height: verticalScale(75),
        width: scale(75),
        marginTop: 15
    },
    inputHeadingText: {
        alignSelf: "flex-start",
        paddingLeft: 35,
        color: colors.lableColor,
        fontWeight: "600",
        marginBottom: 8,
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
    buttonTextPage2: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 15
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
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
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
        height: moderateScale(58),
        width: moderateScale(58),
        borderRadius: moderateScale(58) / 2,
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
    view3: {
        flexDirection: "row",
        width: '90%',
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerLeftIcon: {
        height: 30,
        width: 30,
        left: 10,
        // position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    backImage: {
        height: 30,
        width: 30,
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width,
        alignItems: "center",
    }

})
export default styles;
