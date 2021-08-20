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
import { Images, colors, typography } from "../../Theme";
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordAction } from "../../store/actions";
import { Loader } from '../../Components/Loader'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const ForgotPassword = (props) => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const stateData = useSelector((state) => state.authenticationReducer)

    const forgotPwd = () => {
        dispatch(forgotPasswordAction(email))
    }

    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flex: 1
            }}>
            <Loader loading={stateData.isLoading} />

            {/* <StatusBar hidden/> */}
            <ImageBackground
                source={Images.Images.bg}
                resizeMode="cover"
                style={styles.appLogoView}>
                <View style={styles.headingView}>
                    {/* <TouchableOpacity
                        style={[styles.headerLeftIcon]}
                        onPress={() => props.navigation.goBack()}>
                        <Image
                            style={[styles.headerLeftIcon]}
                            source={Images.Images.backIcon}
                        />
                    </TouchableOpacity> */}
                    <Text style={[styles.headingText,]}>Forgot Password</Text>
                </View>
                <Image
                    resizeMode={"contain"}
                    style={[{ height: 120, width: 120, }]}
                    source={Images.Images.buddyUpLogo} />

            </ImageBackground>
            <View style={styles.dogIconViewpage2}>

            </View>
            <View style={{ flex: 0.5, }}>
                <View style={styles.inputViewPage2}>
                    <Text style={styles.inputHeadingText}>Enter Email Address</Text>
                    <TextInputField
                        keyboardType={'email-address'}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        keyboardType='email-address'
                        placeHolderText={"Enter Email Address"}
                        placeHolderTextColor={"gray"}
                    />
                </View>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => forgotPwd()}
                    style={[styles.buttonPage2, { backgroundColor: colors.secondaryBlue }]}>
                    <Text style={styles.buttonTextPage2}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => props.navigation.goBack()}>
                    <Text style={[styles.buttonTextPage2, { color: colors.primaryBlue }]}>Back to Login?</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAwareScrollView>
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
        textAlign: "left",
        alignItems: "center",
        marginRight: 10
    },
    icon: { margin: 20, paddingTop: 10 }
});