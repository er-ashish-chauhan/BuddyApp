import { StyleSheet, Dimensions } from "react-native";
import { colors, fontNames, typography } from "../../Theme";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    paddingTop: "10%",
    height: height * 0.11,
    // flex: 0.08,
    backgroundColor: colors.primaryBlue,
    // width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerLeftIcon: {
    height: 30,
    width: 30,
    left: 10,
    // position:"absolute",
    alignItems: "center",
    justifyContent: "center",
    tintColor: colors.white,
  },
  headerTitle: {
    fontSize: typography.FONT_SIZE_20,
    color: colors.white,
    fontFamily: fontNames.boldFont,
  },
  imageStyle: {
    height: verticalScale(80),
    borderWidth: 5,
    borderColor: colors.primaryBlue,
    width: scale(80),
    borderRadius: verticalScale(80) / 2,
    marginLeft: 10,
  },
  listImageStyle: {
    resizeMode: "cover",
    height: verticalScale(45),
    // borderWidth: 5,
    // borderColor:colors.primaryBlue,
    width: scale(50),
    borderRadius: verticalScale(70) / 2,
    // marginLeft: 10
  },
  listHeading: {
    fontSize: 20,
    color: colors.black,
    paddingTop: 10,
    fontFamily: fontNames.boldFont,
  },
  listName: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold",
    paddingTop: 10,
    fontFamily: fontNames.boldFont,
  },
  message: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fontNames.regularFont,
  },
  expiringView: {
    paddingTop: 15,
    // flex: 0.22,
    width: "100%",
  },
  listView: {
    marginTop: 10,
    // flex: 0.78,
    width: "100%",
  },
  contentContainer: {
    height: "60%",
    width: width - 40,
    alignItems: "center",
    // paddingTop: 20
  },
  imageContainer: {
    borderRadius: verticalScale(70) / 2,
    alignItems: "center",
    borderWidth: 5,
  },
  statusImg: {
    width: 23,
    height: 23,
    position: "absolute",
    bottom: -8,
    right: 0,
  },
});

export default styles;
