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


   export const ChangePassword = (props) => {
       const [image,setImage]=useState(null)
    
        return (
            <>
                             <StatusBar backgroundColor="#0090e6" barStyle="dark-content" />

                <ImageBackground 
                  source={Images.Images.bg} 
                resizeMode="cover"
                    style={styles.appLogoView}>
                <View style={styles.headingView}>
                <TouchableOpacity 
                            style={[styles.headerLeftIcon]}
                      
                      onPress={()=>props.navigation.goBack()}>
                      
                <Image
                            style={[styles.headerLeftIcon]}
                            source={Images.Images.backIcon}
                        />
                        </TouchableOpacity>
                    <Text style={[styles.headingText,]}>Change Password</Text>
                </View>
                <Image
                            resizeMode={"contain"}
                            style={[{height:120,width:120}]}
                            source={Images.Images.buddyUpLogo} />

                    </ImageBackground>
               <View style={styles.dogIconViewpage2}>
                    
                </View>
                <View style={{ flex: 0.5, }}>
                    <View style={styles.inputViewPage2}>
                        <Text style={styles.inputHeadingText}>Current Password</Text>
                        <TextInputField
                            password
                            placeHolderText={"Current Password"}
                            placeHolderTextColor={"gray"}
                        />
                        <Text style={styles.inputHeadingText}>New Password</Text>
                        <TextInputField
                            password
                            placeHolderText={"New Password"}
                            placeHolderTextColor={"gray"}
                        />
                        <Text style={styles.inputHeadingText}>Confirm Password</Text>
                        <TextInputField
                            password
                            placeHolderText={"Confirm Password"}
                            placeHolderTextColor={"gray"}
                        />
                    </View>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity
                        style={[styles.buttonPage2, { backgroundColor: colors.secondaryBlue }]}>
                        <Text style={styles.buttonTextPage2}>Update</Text>
                    </TouchableOpacity>
   
                    

                </View>
            </>
        )
    }





const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
    //   paddingHorizontal: 10,
      paddingVertical: 5,
      color: 'black', // to ensure the text is never behind the icon
      textAlign:"left",
      alignItems:"center",
      marginRight:10
    },
    icon : {margin:20, paddingTop:10 }
  });