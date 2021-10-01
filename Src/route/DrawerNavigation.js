import * as React from "react";
import { Button, Image, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomSwiper from "../Screens/CustomSwiper";
import { ProfileUpate } from "../Screens/UpdateProfile";
import { Images } from "../Theme/AppImages";
import { Privacy } from "../Screens/Privacy";
import { About } from "../Screens/About";
import CustomSidebarMenu from "../Components/customDrawer";
import BuddyUpSwiper from "../Screens/BuddyUpSwiper";
import AllUserChatList from "../Screens/AllUserChatList";
import { colors, fontNames, typography } from "../Theme";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      sceneContainerStyle={{
        flex: 1,
        // backgroundColor: "#fff"
      }}
      drawerContentOptions={{
        activeTintColor: colors.darkBlue,
        style: { marginTop: "-15%" },
        itemStyle: {
          marginVertical: 5,
        },
        labelStyle: {
          fontSize: typography.FONT_SIZE_16,
          fontWeight: "bold",
          color: colors.lableColor,
          fontFamily: fontNames.boldFont,
        },
      }}
      initialRouteName="UpdateProfile"
      // Here we are setting our custom sidebar menu
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      {/* <Drawer.Screen name="Home"  component={CustomSwiper} /> */}
      <Drawer.Screen name="Home" component={BuddyUpSwiper} />
      <Drawer.Screen
        options={{ drawerLabel: "Update Profile" }}
        name="UpdateProfile"
        component={ProfileUpate}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Chat List",
        }}
        name="chatList"
        component={AllUserChatList}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Privacy Policy",
        }}
        name="privacy"
        component={Privacy}
      />
      <Drawer.Screen
        name="aboutus"
        options={{ drawerLabel: "About Us" }}
        component={About}
      />
    </Drawer.Navigator>
  );
}
