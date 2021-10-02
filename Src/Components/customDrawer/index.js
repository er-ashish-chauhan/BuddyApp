// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Images } from '../../Theme/AppImages';
import { CommonActions, StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginAction, logoutAction } from '../../store/actions';
import { colors, fontNames, typography } from '../../Theme';
import { height } from '../../Theme/responsiveStyles';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1 }}>
      {/*Top Large Image */}
      <View style={styles.imageContainer}>
        <Image
          resizeMode='contain'
          source={Images.buddyUpLogo}
          style={styles.sideMenuProfileIcon}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <TouchableOpacity onPress={() => {
          Alert.alert("Logout", "Are you sure you want to logout?", [{
            text: "Cancel",
            style: "cancel"
          }, {
            text: "Ok", onPress: () => dispatch(logoutAction(props.navigation))
          }])
        }} style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={styles.text}>
            Logout
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: height * .27,
    paddingTop: height * .08,
    borderBottomWidth: .8,
    borderBottomColor: "#ccc",
    backgroundColor: colors.darkBlue,
    alignItems: "center",
  },
  sideMenuProfileIcon: {
    width: 120,
    height: 120,
    // borderRadius: 140 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',

  },
  text: {
    fontSize: typography.FONT_SIZE_16,
    color: colors.redColor,
    fontWeight: "bold",
    fontFamily: fontNames.boldFont
  }
});

export default CustomSidebarMenu;