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
import { loginAction, signupAction } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { authenticationReducer } from "../../store/reducers/authenticationReducer";
import { Loader } from "../../Components/Loader";
const age = [
    { label: '6 montsh', value: '6 months' },
    { label: '1 year', value: '1year' },
    { label: '2 year', value: '2year' },
    { label: '3 year', value: '3year' },
    { label: '4 year', value: '4year' },
]

const size = [
    { label: '15 lbs', value: '15lbs' },
    { label: '15-25 lbs', value: '1525lbs' },
    { label: '25-40 lbs', value: '2540lbs' },
    { label: '4060lbs', value: '60lbs' },
]

const levels = [
    { label: 'High energy', value: 'Highenergy' },
    { label: 'Work hard play hard', value: 'Workhardplay hard' },
    { label: 'Sometimes mellow', value: 'Sometimesmellow' },
    { label: 'Couch potato', value: 'Couch potato' },
]

const breed = [
    { label: 'Affenpinscher', value: 'Affenpinscher' },
    { label: 'Airedale Terrier', value: 'AiredaleTerrier' },
    { label: 'Akita', value: 'Akita' },
    { label: 'Alaskan Husky', value: 'AlaskanHusky' },
    { label: 'Alaskan Klee Kai', value: 'AlaskanKleeKai' },
    { label: 'Alaskan Malamute', value: 'AlaskanMalamute' },
    { label: 'American Cocker Spaniel', value: 'AmericanCockerSpaniel' },
    { label: 'American English Coonhound', value: 'AmericanEnglishCoonhound' },
    { label: 'American Eskimo Dog', value: 'AmericanEskimoDog' },
]

const Login = (props) => {
    const dispatch = useDispatch()
    const [PAGE, setPage] = useState()
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 200;
    const [index, setIndex] = useState(0);
    const pagerRef = useRef(0);
    const [BFOOD, setBFood] = useState(false)
    const [BBALL, setBBall] = useState(false)
    const [BQUALITY, setBQuality] = useState(false)
    const [BBED, setBBED] = useState(false)
    const [BLEASH, setBLeash] = useState(false)
    const [FFOOD, setFFood] = useState(false)
    const [FBALL, setFBall] = useState(false)
    const [FQUALITY, setFQuality] = useState(false)
    const [FBED, setFBED] = useState(false)
    const [FLEASH, setFLeash] = useState(false)

    const stateData = useSelector((state) => state.authenticationReducer)

    const pickerRef = useRef()
    const [BAGE, setBAge] = useState()
    const [BSIZE, setBSize] = useState()
    const [BLEVELS, setBLevelse] = useState()
    const [BBREED, setBBreed] = useState()
    const [FAGE, setFAge] = useState()
    const [FSIZE, setFSize] = useState()
    const [FLEVELS, setFLevelse] = useState()
    const [FBREED, setFBreed] = useState()

    const placeholderAge = {
        label: 'Age..',
        value: null,
        color: '#9EA0A4',
    };

    const placeholderSize = {
        label: 'Size...',
        value: null,
        color: '#9EA0A4',
    };

    const placeholderLevels = {
        label: 'Levels...',
        value: null,
        color: '#9EA0A4',
    };

    const placeholderBreed = {
        label: 'Breeds...',
        value: null,
        color: '#9EA0A4',
    };
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')



    const screenChanged = (e) => {
        setIndex(e.nativeEvent.position);
    };

    const setBLeash1 = () => {
        setBLeash(!BLEASH)
        navigation.navigate('BuddyUpSwiper')
    }

    const setBBED1 = () => {
        setBBED(!BBED)
        navigation.navigate('CustomSwiper')
    }


    const BuddyAppCommunity = () => {
        return (
            <>
                <View style={styles.headingView}>
                    <Text style={[styles.headingText,]}>Login to the</Text>
                    <Text style={[styles.headingText,]}>BuddyUp Community</Text>
                </View>
                <View style={styles.dogIconViewpage2}>
                    <Image
                        style={styles.iconStylePage2}
                        source={Images.Images.buddyUpLogo}
                    />
                </View>
                <View style={{ flex: 0.33, }}>
                    <View style={styles.inputViewPage2}>
                        <Text style={styles.inputHeadingText}>Email</Text>
                        <TextInputField
                            onChangeText={(v) => setEmail(v)}
                            placeHolderText={"Enter Email"}
                            placeHolderTextColor={"gray"}
                        />
                    </View>
                    <View style={styles.inputViewPage2}>
                        <Text style={styles.inputHeadingText}>Password</Text>
                        <TextInputField
                            onChangeText={(v) => setPassword(v)}
                            placeHolderText={"Enter password"}
                            placeHolderTextColor={"gray"}
                            password={true}
                        />
                    </View>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => {
                        dispatch(loginAction(email, password, props.navigation))
                    }}
                        style={[styles.buttonPage2, { backgroundColor: colors.secondaryBlue }]}>
                        <Text style={styles.buttonTextPage2}>Login my account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonPage2, { backgroundColor: colors.primaryBlue }]}>
                        <Text style={styles.buttonTextPage2}>Connect With Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonPage2, { flexDirection: "row", backgroundColor: colors.black }]}>
                        <Image
                            style={styles.appleLogo}
                            source={Images.Images.apple}
                        />
                        <Text style={styles.buttonTextPage2}>Sign in with Apple</Text>
                    </TouchableOpacity>
                    <View style={styles.privacyPolicyView}>
                        <Text style={styles.privacyPolicyText} >By counting, you agree to our <Text style={{ color: colors.primaryBlue }}>Terms of Use</Text> and <Text style={{ color: colors.primaryBlue }}>Privacy Policy</Text></Text>
                    </View>

                </View>
            </>
        )
    }


    return (

        <SafeAreaView style={{ flex: 1, }}>
            <Loader loading={stateData.isLoading} />
            <StatusBar backgroundColor={index == 0 ? colors.primaryBlue : colors.white} barStyle="dark-content" />
            <View style={styles.mainWrapper}>


                {BuddyAppCommunity()}

            </View>
        </SafeAreaView>

    )
}

export default Login




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