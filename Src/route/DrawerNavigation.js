import * as React from 'react';
import { Button, Image, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomSwiper from '../Screens/CustomSwiper';
import { ProfileUpate } from '../Screens/UpdateProfile';
import { Images } from '../Theme/AppImages';
import { Privacy } from '../Screens/Privacy';
import { About } from '../Screens/About';
import CustomSidebarMenu from '../Components/customDrawer';
import BuddyUpSwiper from '../Screens/BuddyUpSwiper';



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: {marginVertical: 5},
    }}
    // Here we are setting our custom sidebar menu 
    drawerContent={(props) => <CustomSidebarMenu {...props} />}>
         {/* <Drawer.Screen name="Home"  component={CustomSwiper} /> */}
         <Drawer.Screen name="Home"  component={BuddyUpSwiper} />
         <Drawer.Screen options={{drawerLabel:'Update Profile'}} name="UpdateProfile" component={ProfileUpate} />
         <Drawer.Screen options={{drawerLabel:'Privay Policy'}} name="privacy" component={Privacy} />
         <Drawer.Screen name="aboutus" options={{drawerLabel:'About us'}} component={About} />
      
  </Drawer.Navigator>

    
    // <Drawer.Navigator initialRouteName="Home">
      //   <Drawer.Screen name="Homee" options={{drawerLabel:'',drawerIcon:({})=><Image source={Images.buddyUpLogo} style={{alignSelf:'center',marginLeft:'20%',height:150,width:150}}/>}} component={CustomSwiper} />
      //   <Drawer.Screen name="Home"  component={CustomSwiper} />
      //   <Drawer.Screen options={{drawerLabel:'Update Profile'}} name="UpdateProfile" component={ProfileUpate} />
      //   <Drawer.Screen options={{drawerLabel:'Privay Policy'}} name="privacy" component={Privacy} />
      //   <Drawer.Screen name="aboutus" options={{drawerLabel:'About us'}} component={About} />
      
      // </Drawer.Navigator>
  );
}