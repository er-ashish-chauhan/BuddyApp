import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native';
import styles from './style';
import TextInputField from "../../Components/TextInputField";
import ViewPager from '@react-native-community/viewpager';
import { Images, colors, typography } from "../../Theme";
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import WebView from "react-native-webview";


   export const Privacy = (props) => {
    
        return (
          <View style={{flex:1}}>
             <View style={styles.header}>
             <TouchableOpacity 
                            style={styles.headerLeftIcon}
                      
                      onPress={()=>props.navigation.toggleDrawer()}>
                      
                        <Image
                            style={styles.headerLeftIcon}
                            source={Images.Images.hamburgerMenu}
                        />
                      </TouchableOpacity>
                        <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>PRIVACY POLICY</Text>
                    </View>
          <WebView source={{ uri: 'https://www.google.com' }} />
               </View>
            )
    }
