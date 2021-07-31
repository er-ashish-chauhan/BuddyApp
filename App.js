/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Welcome from "./Src/Screens/Welcome";
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingSignInScreen from "./Src/Screens/OnBordingSignInScreen";
import { createStackNavigator } from '@react-navigation/stack';
import BuddyUpSwiper from "./Src/Screens/BuddyUpSwiper";
import MatchingScreen from "./Src/Screens/MatchingScreen";
import AllUserChatList from "./Src/Screens/AllUserChatList";
import Chat from "./Src/Screens/Chat";
import CustomSwiper from "./Src/Screens/CustomSwiper";
import DrawerNavigation from './Src/route/DrawerNavigation';
import { ChangePassword } from './Src/Screens/ChangePassword';
import { ForgotPassword } from './Src/Screens/ForgotPassword';
import { Provider } from 'react-redux';
import { configureStore } from './Src/store';
import Login from './Src/Screens/Login';
import DataManager from './Src/Components/DataManager';
import { setClientToken } from './Src/store/axios/apiKit';
import AsyncStorage from '@react-native-async-storage/async-storage';
const store = configureStore();

const App = () => {
  const [token, setToken] = useState(null)
  useEffect(() => {

    DataManager.getAccessToken().then((res) => {
      if (res) {
        console.log('resssss', res);
        setClientToken(res)
        setToken('CustomSwiper')
      }
      else {
        setToken('Welcome')

      }
    })
  }, [])
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>

      <SafeAreaView style={{ flex: 1 }}>

        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <Welcome/> */}
        {/* <OnBoardingSignInScreen /> */}

        <NavigationContainer>
          {token && <Stack.Navigator initialRouteName={token}>
            <Stack.Screen name="Welcome" component={Welcome}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />
            <Stack.Screen name="Login" component={Login}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />
            <Stack.Screen name="OnBoardingSignInScreen" component={OnBoardingSignInScreen}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />

            <Stack.Screen name="BuddyUpSwiper" component={BuddyUpSwiper}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />
            {/* <Stack.Screen name="CustomSwiper" component={CustomSwiper}
            options={{
              header: () => null,
              gestureEnabled: false,
            }} /> */}
            <Stack.Screen name="CustomSwiper" component={DrawerNavigation}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />

            <Stack.Screen name="MatchingScreen" component={MatchingScreen}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />

            <Stack.Screen name="AllUserChatList" component={AllUserChatList}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />

            <Stack.Screen name="Chat" component={Chat}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}
              options={{
                header: () => null,
                gestureEnabled: false,
              }} />



          </Stack.Navigator>
          }

        </NavigationContainer>

      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
