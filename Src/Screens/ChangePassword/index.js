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
    ImageBackground,
    Dimensions,
    Keyboard
} from 'react-native';
import styles from './style';
import TextInputField from "../../Components/TextInputField";
import { Images, colors, typography } from "../../Theme";
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from "react-native-simple-toast";
import * as AuthActions from "../../store/actions/authenticationActions";
import { useDispatch } from "react-redux";
import { Loader } from "../../Components/Loader";
const { width, height } = Dimensions.get("window");
export const ChangePassword = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [currentPwd, setCurrentPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const changePwdHandler = async () => {
        Keyboard.dismiss();
        if (!formValidations()) return;
        setIsLoading(true);
        //set params
        const params = JSON.stringify({
            "currentPassword": currentPwd,
            "newPassword": newPwd,
            "confirmPassword": confirmPwd
        });

        //create action
        const action = AuthActions.changeUserPwd(params, onAPISuccess, onAPIError);
        //dispatch action
        try {
            await dispatch(action);
        } catch (err) {
            onAPIError(err)
        }
    }

    const onAPISuccess = (result) => {
        console.log(result, "result on view")
        setIsLoading(false);
        setTimeout(() => {
            showToast(result.data.msg, Toast.LONG);
        }, 300);
        setTimeout(() => {
            props.navigation.goBack()
        }, 2500);
    }

    const onAPIError = (error) => {
        console.log(error.error, "error on view")
        setIsLoading(false);
        setTimeout(() => {
            showToast(error.error, Toast.LONG); 
        }, 300);
    }

    const formValidations = () => {
        let flag = true;
        if (currentPwd.trim().length == 0) {
            flag = false;
            showToast("Please enter current password");
        } else if (newPwd.trim().length == 0) {
            flag = false;
            showToast("Please enter new password");
        } else if (confirmPwd.trim().length == 0) {
            flag = false;
            showToast("Please enter confirm password");
        } else if (newPwd !== confirmPwd) {
            flag = false;
            showToast("New password and confirm password must be same");
        }
        return flag;
    }

    const showToast = (msg, duration = Toast.SHORT) => {
        Toast.show(msg, duration);
    }

    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}>
            <Loader loading={isLoading} />
            <ImageBackground
                source={Images.Images.bg}
                resizeMode="cover"
                style={styles.appLogoView}>
                <View style={styles.headingView}>
                    <TouchableOpacity
                        style={[styles.headerLeftIcon]}
                        onPress={() => props.navigation.goBack()}>
                        <Image
                            style={[{ height: 30, width: 30 }]}
                            source={Images.Images.backIcon}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.headingText,]}>Change Password</Text>
                </View>
                <View style={styles.pImageContainer}>
                    <Image
                        resizeMode={"contain"}
                        style={[{ height: 120, width: 120 }]}
                        source={Images.Images.buddyUpLogo} />
                </View>
            </ImageBackground>

            <View style={{ marginTop: height * .05 }}>
                <View style={styles.inputViewPage2}>
                    <View style={{ marginBottom: 20, width: width, alignItems: "center" }}>
                        <Text style={styles.inputHeadingText}>Current Password</Text>
                        <TextInputField
                            password
                            value={currentPwd}
                            onChangeText={text => setCurrentPwd(text)}
                            placeHolderText={"Current Password"}
                            placeHolderTextColor={"gray"}
                        />
                    </View>
                    <View style={{ marginBottom: 20, width: width, alignItems: "center" }}>
                        <Text style={styles.inputHeadingText}>New Password</Text>
                        <TextInputField
                            password
                            value={newPwd}
                            onChangeText={text => setNewPwd(text)}
                            placeHolderText={"New Password"}
                            placeHolderTextColor={"gray"}
                        />
                    </View>
                    <View style={{ marginBottom: 20, width: width, alignItems: "center" }}>
                        <Text style={styles.inputHeadingText}>Confirm Password</Text>
                        <TextInputField
                            password
                            value={confirmPwd}
                            onChangeText={text => setConfirmPwd(text)}
                            placeHolderText={"Confirm Password"}
                            placeHolderTextColor={"gray"}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={changePwdHandler}
                    activeOpacity={.6}
                    style={[styles.buttonPage2, { backgroundColor: colors.secondaryBlue }]}>
                    <Text style={styles.buttonTextPage2}>Update</Text>
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