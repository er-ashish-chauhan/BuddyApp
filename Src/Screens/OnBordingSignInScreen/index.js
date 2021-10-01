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
    Platform,
    ScrollView
} from 'react-native';
import styles from './style';
import TextInputField from "../../Components/TextInputField";
import PagerView from 'react-native-pager-view';
import { Images, colors, typography } from "../../Theme";
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginAction, signupAction, userExist } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Components/Loader";
import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication';
import Toast from "react-native-simple-toast";
import DataManager from "../../Components/DataManager";
import { BREEDS, AGES } from "../../Theme/AppConstants";
import { height, width } from "../../Theme/responsiveStyles";
const age = [
    { label: "Less than 1", value: "Less than 1" },
    { label: "1-2 years", value: "1-2 years" },
    { label: "2-4 years", value: "2-4 years" },
    { label: "5-6 years", value: "5-6 years" },
    { label: "6-7 years", value: "6-7 years" },
    { label: "7-8 years", value: "7-8 years" },
    { label: "8-10 years", value: "8-10 years" },
    { label: "10-12 years", value: "10-12 years" },
    { label: "12 or more years", value: "12 or more years" },
]

// const age = [
//     { label: '0-5 Years', value: "0-5" },
//     { label: '6-10 Years', value: "6-10" },
//     { label: '11-15 Years', value: "11-15" },
//     { label: '16-20 Years', value: "16-20" },
//     { label: '21-25 Years', value: "21-25" },
//     { label: '26-30 Years', value: "26-30" },
// ]

const size = [
    { label: '15 lbs', value: '15lbs' },
    { label: '15-25 lbs', value: '1525lbs' },
    { label: '25-40 lbs', value: '2540lbs' },
    { label: '40-60 lbs', value: '60lbs' },
    { label: '60+ lbs', value: '60+lbs' },
]

const levels = [
    { label: 'High Energy', value: 'Highenergy' },
    { label: 'Work Hard Play Hard', value: 'WorkhardplayHard' },
    { label: 'Sometimes Mellow', value: 'Sometimesmellow' },
    { label: 'Couch Potato', value: 'CouchPotato' },
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

const OnBoardingSignInScreen = (props) => {

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
    const [FLEASH, setFLeash] = useState(false);
    const [AgeForBuddyFriend, setAgeForBuddyFriend] = useState(AGES);
    const [SizeForBuddyFriend, setSizeForBuddyFriend] = useState(size);
    const [engeryForBuddyFriend, setEngeryForBuddyFriend] = useState(levels);
    const [breedForBuddyFriend, setBreedForBuddyFriend] = useState(BREEDS);

    const stateData = useSelector((state) => state.authenticationReducer)

    useEffect(() => {
        const noPrefObj = { label: "No preference", value: "No preference" };
        const currentAgesArr = AgeForBuddyFriend;
        currentAgesArr.unshift(noPrefObj);
        setAgeForBuddyFriend(currentAgesArr);

        const currentSizeArr = SizeForBuddyFriend;
        currentSizeArr.unshift(noPrefObj);
        setSizeForBuddyFriend(currentSizeArr);

        const currentEnergyArr = engeryForBuddyFriend;
        currentEnergyArr.unshift(noPrefObj);
        setEngeryForBuddyFriend(currentEnergyArr);

        const currentBreedsArr = breedForBuddyFriend;
        currentBreedsArr.unshift(noPrefObj);
        setBreedForBuddyFriend(currentBreedsArr);

        DataManager.getAccessToken().then((res) => {
            console.log('resssss', res);
        })
    }, [])

    useEffect(() => {

        if (stateData.status == 1) {
            pagerRef.current.setScrollEnabled(true)
            setTimeout(() => {

                pagerRef.current.setPage(2)
                pagerRef.current.setScrollEnabled(false)
                console.log('pagerRef.current', pagerRef.current);
                stateData.status = 0
            }, 500);
        }

    }, [stateData.status])

    const pickerRef = useRef()
    const [BAGE, setBAge] = useState("Less than 1")
    const [BSIZE, setBSize] = useState('15lbs')
    const [BLEVELS, setBLevelse] = useState('Highenergy')
    const [BBREED, setBBreed] = useState('Affenpinscher')
    const [FAGE, setFAge] = useState("")
    const [FSIZE, setFSize] = useState('')
    const [FLEVELS, setFLevelse] = useState('')
    const [FBREED, setFBreed] = useState('')

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
    const [buddyName, setBuddyName] = useState('')
    //   const [bInterest,setBInterest]=useState([])
    //   const [Interest,setFInterest]=useState([])


    const screenChanged = (e) => {
        console.log(e.nativeEvent.position)
        setIndex(e.nativeEvent.position);
    };

    const setBLeash1 = () => {
        setBLeash(!BLEASH)
        // navigation.navigate('BuddyUpSwiper')
    }

    const setBBED1 = () => {
        setBBED(!BBED)
        // navigation.navigate('CustomSwiper')
    }

    const MoreAboutBuddy = () => {
        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.headingView, { paddingTop: "13%", paddingBottom: 10 }]}>
                    <Text style={[styles.headingText, { textAlign: "center" }]}>Tell us more about{'\n'}{name.trim() != "" ?
                        name.trimEnd() : "your dog"}!</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 10,
                        paddingBottom: height * .09
                    }}>

                    <View style={{ flex: 0.65, marginTop: 20, paddingBottom: 35 }}>
                        <View style={[styles.inputViewPage2, { marginTop: 0, flex: .28 }]}>
                            <View style={styles.view3}>
                                <View style={[{ width: width / 2.3, alignItems: "flex-start", }]}>
                                    <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>AGE</Text>
                                    <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                        <RNPickerSelect
                                            placeholder={placeholderAge}
                                            items={AGES}
                                            onValueChange={value => {
                                                setBAge(value)
                                            }}
                                            style={pickerSelectStyles}
                                            value={BAGE}
                                            useNativeAndroidPickerStyle={false}
                                            ref={pickerRef}
                                            Icon={() => {
                                                return <Icon name="caret-down" size={20} color="gray" />;
                                            }}
                                            useNativeAndroidPickerStyle={false}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={[{ width: width / 2.3, alignItems: "center" }]}>
                                    <Text style={[styles.inputHeadingText, { paddingLeft: 25 }]}>SIZE</Text>
                                    <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                        <RNPickerSelect
                                            placeholder={placeholderSize}
                                            items={size}
                                            onValueChange={value => {
                                                setBSize(value)
                                            }}
                                            style={pickerSelectStyles}
                                            value={BSIZE}
                                            useNativeAndroidPickerStyle={false}
                                            ref={pickerRef}
                                            Icon={() => {
                                                return <Icon name="caret-down" size={20} color="gray" />;
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.inputViewPage2, {
                            marginTop: 30,
                            flex: 1
                        }]}>
                            <Text style={[styles.inputHeadingText, {}]}>ENERGY LEVEL</Text>
                            <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                    placeholder={placeholderLevels}
                                    items={levels}
                                    onValueChange={value => {
                                        setBLevelse(value)
                                    }}
                                    style={pickerSelectStyles}
                                    value={BLEVELS}
                                    useNativeAndroidPickerStyle={false}
                                    ref={pickerRef}
                                    Icon={() => {
                                        return <Icon name="caret-down" size={20} color="gray" />;
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.inputViewPage2, { marginTop: 30 }]}>
                            <Text style={styles.inputHeadingText}>BREED</Text>
                            <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                    placeholder={placeholderBreed}
                                    items={BREEDS}
                                    onValueChange={value => {
                                        setBBreed(value)
                                    }}
                                    style={pickerSelectStyles}
                                    value={BBREED}
                                    useNativeAndroidPickerStyle={false}
                                    ref={pickerRef}
                                    Icon={() => {
                                        return <Icon name="caret-down" size={20} color="gray" />;
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.inputViewPage2, { marginTop: 30 }]}>
                            <View style={{ width: '90%', justifyContent: "space-between", alignItems: "center" }}>

                                <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>INTERESTS</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setBFood(!BFOOD)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={BFOOD ? styles.activityIconBlue : styles.activityIcon}
                                                source={BFOOD ? Images.Images.activityIcon1 : Images.Images.dogFood}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setBBall(!BBALL)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={BBALL ? styles.activityIconBlue : styles.activityIcon}
                                                source={BBALL ? Images.Images.activityIcon2 : Images.Images.ball}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setBQuality(!BQUALITY)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={BQUALITY ? styles.activityIconBlue : styles.activityIcon}
                                                source={BQUALITY ? Images.Images.activityIcon3 : Images.Images.quality}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setBBED1()}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={BBED ? styles.activityIconBlue : styles.activityIcon}
                                                source={BBED ? Images.Images.activityIcon4 : Images.Images.dogBed}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setBLeash1()}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={BLEASH ? styles.activityIconBlue : styles.activityIcon}
                                                source={BLEASH ? Images.Images.activityIcon5 : Images.Images.leash}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => nextHandler()}
                        style={[styles.buttonPage2, {
                            backgroundColor: colors.secondaryBlue,
                            marginTop: 50,
                            alignSelf: "center"
                        }]}>
                        <Text style={styles.buttonTextPage2}>Next Step</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

    const lastStep = () => {
        return (
            <View style={{ flex: 1, backgroundColor: "#e6f5ff" }}>
                <View style={[styles.headingView, { paddingTop: "13%", paddingBottom: 10 }]}>
                    <Text style={[styles.headingText, { textAlign: "center" }]}>What does {name.trim() != "" ?
                        name.trimEnd() : "your dog"} want{'\n'}in a friend?</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 10,
                        backgroundColor: "#e6f5ff"
                    }}>

                    <View style={{ flex: 0.65, paddingBottom: 35 }}>
                        <View style={[styles.inputViewPage2, { marginTop: 0, flex: 0.28 }]}>
                            <View style={{ flexDirection: "row", width: '90%', justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                                <View style={[{ width: width / 2.3, alignItems: "flex-start" }]}>
                                    <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>AGE</Text>
                                    <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                        <RNPickerSelect
                                            placeholder={placeholderAge}
                                            items={AgeForBuddyFriend}
                                            onValueChange={value => {
                                                setFAge(value)
                                            }}
                                            style={pickerSelectStyles}
                                            value={FAGE}
                                            useNativeAndroidPickerStyle={false}
                                            ref={pickerRef}
                                            Icon={() => {
                                                return <Icon name="caret-down" size={20} color="gray" />;
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={[{ width: width / 2.3, alignItems: "center" }]}>
                                    <Text style={[styles.inputHeadingText, { paddingLeft: 25 }]}>SIZE</Text>
                                    <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                        <RNPickerSelect
                                            placeholder={placeholderSize}
                                            items={SizeForBuddyFriend}
                                            onValueChange={value => {
                                                setFSize(value)
                                            }}
                                            style={pickerSelectStyles}
                                            value={FSIZE}
                                            useNativeAndroidPickerStyle={false}
                                            ref={pickerRef}
                                            Icon={() => {
                                                return <Icon name="caret-down" size={20} color="gray" />;
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.inputViewPage2, { marginTop: 30 }]}>
                            <Text style={[styles.inputHeadingText, { paddingLeft: 28 }]}>ENERGY LEVEL</Text>
                            <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                    placeholder={placeholderLevels}
                                    items={engeryForBuddyFriend}
                                    onValueChange={value => {
                                        setFLevelse(value)
                                    }}
                                    style={pickerSelectStyles}
                                    value={FLEVELS}
                                    useNativeAndroidPickerStyle={false}
                                    ref={pickerRef}
                                    Icon={() => {
                                        return <Icon name="caret-down" size={20} color="gray" />;
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.inputViewPage2, { marginTop: 30 }]}>
                            <Text style={styles.inputHeadingText}>BREED</Text>
                            <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                    placeholder={placeholderBreed}
                                    items={BREEDS}
                                    onValueChange={value => {
                                        setFBreed(value)
                                    }}
                                    style={pickerSelectStyles}
                                    value={FBREED}
                                    useNativeAndroidPickerStyle={false}
                                    ref={pickerRef}
                                    Icon={() => {
                                        return <Icon name="caret-down" size={20} color="gray" />;
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.inputViewPage2, { marginTop: 30 }]}>
                            <View style={{ width: '90%', justifyContent: "space-between", alignItems: "center" }}>

                                <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>INTERESTS</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setFFood(!FFOOD)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={FFOOD ? styles.activityIconBlue : styles.activityIcon}
                                                source={FFOOD ? Images.Images.activityIcon1 : Images.Images.dogFood}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setFBall(!FBALL)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={FBALL ? styles.activityIconBlue : styles.activityIcon}
                                                source={FBALL ? Images.Images.activityIcon2 : Images.Images.ball}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setFQuality(!FQUALITY)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={FQUALITY ? styles.activityIconBlue : styles.activityIcon}
                                                source={FQUALITY ? Images.Images.activityIcon3 : Images.Images.quality}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setFBED(!FBED)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={FBED ? styles.activityIconBlue : styles.activityIcon}
                                                source={FBED ? Images.Images.activityIcon4 : Images.Images.dogBed}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.circleView}>
                                        <TouchableOpacity
                                            onPress={() => setFLeash(!FLEASH)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={FLEASH ? styles.activityIconBlue : styles.activityIcon}
                                                source={FLEASH ? Images.Images.activityIcon5 : Images.Images.leash}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => nextHandler()}
                        style={[styles.buttonPage2, {
                            backgroundColor: colors.secondaryBlue,
                            marginTop: 50,
                            alignSelf: "center"
                        }]}>
                        <Text style={styles.buttonTextPage2}>Almost Done</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

    useEffect(() => {
        // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts

        // return appleAuth.onCredentialRevoked(async () => {
        //     console.warn('If this function executes, User Credentials have been Revoked');
        // });

    }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

    async function onAppleButtonPress() {
        // performs login request
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });



        // get current authentication state for user
        // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated
        }
    }

    const BuddyAppCommunity = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.headingView}>
                    <Text style={[styles.headingText,]}>Welcome to the</Text>
                    <Text style={[styles.headingText,]}>BuddyUp Community</Text>
                    <Text style={[styles.headingText, { fontWeight: "normal", fontSize: typography.FONT_SIZE_18 }]}>Let's set up your best friend's profile</Text>
                </View>
                <View style={styles.dogIconViewpage2}>
                    <Image
                        resizeMode="cover"
                        style={styles.iconStylePage2}
                        source={Images.Images.buddyUpLogo}
                    />
                </View>
                <View style={{ flex: 0.33, }}>
                    <View style={styles.inputViewPage2}>
                        <Text style={styles.inputHeadingText}>EMAIL</Text>
                        <TextInputField
                            autoCapitalize="none"
                            keyboardType={'email-address'}
                            onChangeText={(v) => setEmail(v)}
                            placeHolderText={"Enter Email"}
                            placeHolderTextColor={"gray"}
                        />
                    </View>
                    <View style={[styles.inputViewPage2, { marginTop: 10 }]}>
                        <Text style={styles.inputHeadingText}>PASSWORD</Text>
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
                        if (name.trim().length == 0) {
                            Toast.show('Please enter your name.', Toast.SHORT)
                            pagerRef.current.setPage(0)
                        }
                        else if (buddyName.trim().length == 0) {
                            Toast.show('Please enter your buddy name.', Toast.SHORT)
                            pagerRef.current.setPage(0)
                        }
                        else if (email.trim().length == 0) {
                            Toast.show('Please enter your valid email.', Toast.SHORT)
                        }
                        else if (password.trim().length == 0) {
                            Toast.show('Please enter password.', Toast.SHORT)
                        }
                        else {
                            dispatch(userExist(email.trim(), pagerRef.current))
                        }
                    }}
                        style={[styles.buttonPage2, { backgroundColor: colors.secondaryBlue }]}>
                        <Text style={styles.buttonTextPage2}>Create my account</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={[styles.buttonPage2, { backgroundColor: colors.primaryBlue }]}>
                        <Text style={styles.buttonTextPage2}>Connect With Facebook</Text>
                    </TouchableOpacity>
                    <AppleButton
                        buttonStyle={AppleButton.Style.WHITE}
                        buttonType={AppleButton.Type.SIGN_IN}
                        style={{
                        width: 160, // You must specify a width
                        height: 45, // You must specify a height
                        }}
                        onPress={() => onAppleButtonPress()}
                    />
                    */}

                    <View style={styles.privacyPolicyView}>
                        <Text style={styles.privacyPolicyText} >By creating, you agree to our <Text style={{ color: colors.primaryBlue }}>Terms of Use</Text> and <Text style={{ color: colors.primaryBlue }}>Privacy Policy</Text></Text>
                    </View>

                </View>
            </ScrollView>
        )
    }

    const friendsView = () => {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={Images.Images.bg}
                    resizeMode="cover" style={[styles.appLogoView, { flexDirection: "row", paddingTop: "10%" }]}>
                    <View style={styles.flexRow}>
                        <TouchableOpacity
                            style={[styles.headerLeftIcon]}
                            onPress={() => props.navigation.goBack()}>
                            <Image
                                style={[styles.backImage]}
                                source={Images.Images.backIcon}
                            />
                        </TouchableOpacity>
                        <View style={{
                            alignItems: "center",
                            flex: 1
                        }}>
                            <Text style={[styles.nameText, { fontWeight: "bold", }]}>Buddy<Text style={[{ fontWeight: "normal" }]}>Up</Text></Text>
                        </View>
                    </View>
                </ImageBackground>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.mainView}>
                    <View style={styles.viewOne}>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.welcomeText}>We're so glad you're here.</Text>
                            <Text style={[styles.text1, { marginTop: 10 }]}>What should we call you?</Text>
                        </View>

                        <TextInputField
                            onChangeText={(v) => setName(v)}
                            placeHolderText={"Enter Name"}
                            placeHolderTextColor={"gray"}
                        />

                        {/* <TouchableOpacity
                                style={styles.registerButton}>
                                <Text>Get Started</Text>
                            </TouchableOpacity> */}
                    </View>

                    <View style={[styles.viewOne, { marginBottom: 20, paddingBottom: 180, marginTop: '15%' }]}>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.welcomeText}>Now for the main star{'\n'}in your life...</Text>
                            <Text style={[styles.text1, { marginTop: 10 }]}>What should we call your best friend?</Text>
                        </View>

                        <TextInputField
                            onChangeText={(v) => setBuddyName(v)}

                            placeHolderText={"Buddy"}
                            placeHolderTextColor={"gray"}

                        />
                        <TouchableOpacity
                            onPress={() => nextHandler()}
                            style={[styles.buttonPage2, {
                                backgroundColor: colors.secondaryBlue,
                                marginTop: 40
                            }]}>
                            <Text style={styles.buttonTextPage2}>Next Step</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }

    const nextHandler = () => {
        switch (index) {
            case 0:
                if (name.trim().length == 0) {
                    Toast.show("Please enter your name.", Toast.SHORT);
                    pagerRef.current.setPage(0)
                } else if (buddyName.trim().length == 0) {
                    Toast.show("Please enter your buddy name.", Toast.SHORT);
                    pagerRef.current.setPage(0)
                } else {
                    pagerRef.current.setPage(index + 1)
                }
                break;
            case 1:
                if (email.trim().length == 0) {
                    Toast.show('Please enter email.', Toast.SHORT)
                }
                else if (password.trim().length == 0) {
                    Toast.show('Please enter password.', Toast.SHORT)
                }
                else {
                    dispatch(userExist(email, pagerRef.current))
                }
                break;
            case 2:
                if (email.trim().length == 0) {
                    Toast.show('Please enter email.', Toast.SHORT)
                }
                else if (password.trim().length == 0) {
                    Toast.show('Please enter password.', Toast.SHORT)
                }
                else if (name.trim().length == 0) {
                    Toast.show('Please enter name.', Toast.SHORT)
                    pagerRef.current.setPage(0)
                }
                else if (buddyName.trim().length == 0) {
                    Toast.show('Please enter buddy name.', Toast.SHORT)
                    pagerRef.current.setPage(0)
                }
                else if (BAGE == undefined && BAGE == null) {
                    Toast.show('Please select age.', Toast.SHORT)
                }
                else if (BLEVELS == undefined && BLEVELS == null) {
                    Toast.show('Please select level.', Toast.SHORT)
                }
                else if (BSIZE == undefined && BSIZE == null) {
                    Toast.show('Please select size.', Toast.SHORT)
                }
                else if (BBREED == undefined && BBREED == null) {
                    Toast.show('Please select breed.', Toast.SHORT)
                } else {
                    pagerRef.current.setPage(index + 1)
                }

                // else if (FAGE == undefined && FAGE == null) {
                //     Toast.show('Please select pereference age.', Toast.SHORT)
                // }
                // else if (FLEVELS == undefined && FLEVELS == null) {
                //     Toast.show('Please select pereference level.', Toast.SHORT)
                // }
                // else if (FSIZE == undefined && FSIZE == null) {
                //     Toast.show('Please select pereference size.', Toast.SHORT)
                // }
                // else if (FBREED == undefined && FBREED == null) {
                //     Toast.show('Please select pereferences breed.', Toast.SHORT)
                // }
                break;
            case 3:
                if (email.trim().length == 0) {
                    Toast.show('Please enter email.', Toast.SHORT)
                }
                else if (password.trim().length == 0) {
                    Toast.show('Please enter password.', Toast.SHORT)
                }
                else if (name.trim().length == 0) {
                    Toast.show('Please enter name.', Toast.SHORT)
                    pagerRef.current.setPage(0)
                }
                else if (buddyName.trim().length == 0) {
                    Toast.show('Please enter buddy name.', Toast.SHORT)
                    pagerRef.current.setPage(0)
                }
                else if (BAGE == undefined && BAGE == null) {
                    Toast.show('Please select age.', Toast.SHORT)
                }
                else if (BLEVELS == undefined && BLEVELS == null) {
                    Toast.show('Please select level.', Toast.SHORT)
                }
                else if (BSIZE == undefined && BSIZE == null) {
                    Toast.show('Please select size.', Toast.SHORT)
                }
                else if (BBREED == undefined && BBREED == null) {
                    Toast.show('Please select breed.', Toast.SHORT)
                } else {
                    dispatch(signupAction(
                        JSON.stringify({
                            "email": email.trim(),
                            password: password,
                            "name": name.trim(),
                            "buddyName": buddyName.trim(),
                            "age": BAGE,
                            "size": BSIZE,
                            "energyLevel": BLEVELS,
                            "breed": BBREED,
                            "interests": [
                                BBALL && "bBall",
                                BLEASH && "bLeash",
                                BQUALITY && "bQuality",
                                BBED && "bBed",
                                BFOOD && "bFood"],
                            "pereferences": {
                                "age": FAGE,
                                "size": FSIZE,
                                "energyLevel": FLEVELS,
                                "breed": FBREED,
                                "interests": [FBALL && "fBall",
                                FLEASH && "fLeash",
                                FQUALITY && "fQuality",
                                FBED && "fBed",
                                FFOOD && "fFood"]
                            },
                            "deviceType": Platform.OS,
                            "deviceToken": "asd32423sdf3234sff3329f"
                        })
                        , props.navigation))
                }

                break;
            default:
                break;
        }
    }

    return (
        <View style={{ flex: 1, }}>
            <Loader loading={stateData.isLoading} />

            <StatusBar backgroundColor={index == 0 ? colors.primaryBlue : colors.white} barStyle="dark-content" />
            <View style={styles.mainWrapper}>
                <PagerView
                    scrollEnabled={true}
                    onPageScroll={e => screenChanged(e)}
                    style={{
                        flex: 0.85,
                    }}
                    initialPage={0}
                    ref={pagerRef}>
                    <View key="1">{friendsView()}</View>
                    <View key="2">{BuddyAppCommunity()}</View>
                    <View key="3">{MoreAboutBuddy()}</View>
                    <View key="4">{lastStep()}</View>
                    {/* </View> */}
                </PagerView>

                <View style={styles.appLogoView}>
                    <View style={{
                        // marginTop: -30,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: width - 60,
                        // marginHorizontal: 25
                    }}>
                        {/* <TouchableOpacity
                            onPress={() => nextHandler()}
                            style={[{ justifyContent: "center", alignItems: "center" },
                                // index == 2 ? { backgroundColor: 'white', marginRight: '20%', flex: 0.36, borderRadius: 10, marginTop: 10, marginLeft: 25 } : null
                            ]}>
                            <Text style={[{
                                color: colors.white,
                                alignSelf: "flex-start",
                            },
                            { fontSize: 20, paddingLeft: 0, alignSelf: 'center', fontWeight: "800" }]}>{index == 2 ? "ALMOST DONE" : 'NEXT STEP'}</Text>
                        </TouchableOpacity> */}
                        {/* <View style={styles.pagNumberView}> */}
                        <View style={{}}>
                            <Text style={styles.pageNoText}>{index + 1} of 4</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <View style={index == 0 ? styles.activeTab : styles.inactiveTab} />
                            <View style={index == 1 ? styles.activeTab : styles.inactiveTab} />
                            <View style={index == 2 ? styles.activeTab : styles.inactiveTab} />
                            <View style={index == 3 ? styles.activeTab : styles.inactiveTab} />
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default OnBoardingSignInScreen




const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        //   paddingVertical: 12,
        paddingHorizontal: 10,
        // paddingLeft: 10,
        //   borderWidth: 1,
        //   borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        // paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: 'black', // to ensure the text is never behind the icon
        textAlign: "left",
        alignItems: "center",
        marginRight: 10
    },
    icon: { margin: 20, paddingTop: 10 }
});