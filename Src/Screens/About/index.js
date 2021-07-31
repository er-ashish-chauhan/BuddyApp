import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import {
    View,Text,Image,TouchableOpacity
} from 'react-native';
import WebView from "react-native-webview";
import { Images } from "../../Theme/AppImages";
import styles from './style';


   export const About = (props) => {
    
        return (
      <View style={{flex:1}}>
        <View style={styles.header}>
        <TouchableOpacity 
                            style={styles.headerLeftIcon}
                      
                      onPress={()=>props.navigation.toggleDrawer()}>
                      
                        <Image
                            style={styles.headerLeftIcon}
                            source={Images.hamburgerMenu}
                        />
                        </TouchableOpacity>
                        <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>ABOUT US</Text>
                    </View>
 <WebView source={{ uri: 'https://www.google.com' }} />
      </View>
            )
    }
