import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions,
    Platform,
    ActivityIndicator
} from 'react-native';
import styles from './style';
import TextInputField from "../../Components/TextInputField";
import { Images, colors, typography } from "../../Theme";
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import { useDispatch } from "react-redux";
import { updateAction, updateAvatar, getUserDetails } from "../../store/actions/authenticationActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-simple-toast';

import { set } from "react-native-reanimated";
import { Loader } from "../../Components/Loader";
import { useSelector } from "react-redux";
import {
    AGES, AGES_FOR_FRIEND,
    APP_BASE_URL, BREEDS,
    BREEDS_FOR_FRIEND,
    ENERGY_LEVELS,
    ENERGY_LEVELS_FRIEND,
    SIZE,
    SIZES_FOR_FRIEND
} from "../../Theme/AppConstants";
import { scale } from "react-native-size-matters";
const { width, height } = Dimensions.get("window");


export const ProfileUpate = (props) => {
    const dispatch = useDispatch();
    // const stateData = useSelector((state) => state.authenticationReducer)
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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

    const [BAGE, setBAge] = useState()
    const [BSIZE, setBSize] = useState()
    const [BLEVELS, setBLevelse] = useState()
    const [BBREED, setBBreed] = useState()
    const [FAGE, setFAge] = useState()
    const [FSIZE, setFSize] = useState()
    const [FLEVELS, setFLevelse] = useState()
    const [FBREED, setFBreed] = useState()
    const [breedName, setbreedName] = useState("")
    const [friendBreedName, setFriendBreedName] = useState("")
    const [AgeForBuddy, setAgeForBuddy] = useState(AGES);
    const [AgeForBuddyFriend, setAgeForBuddyFriend] = useState(AGES_FOR_FRIEND);
    const [SizeForBuddyFriend, setSizeForBuddyFriend] = useState(SIZES_FOR_FRIEND);
    const [SizeForBuddy, setSizeForBuddy] = useState(SIZE);
    const [engeryForBuddy, setEngeryForBuddy] = useState(ENERGY_LEVELS);
    const [engeryForBuddyFriend, setEngeryForBuddyFriend] = useState(ENERGY_LEVELS_FRIEND);
    const [breedForBuddy, setBreedForBuddy] = useState(BREEDS);
    const [breedForBuddyFriend, setBreedForBuddyFriend] = useState(BREEDS_FOR_FRIEND);

    useEffect(() => {
        get_UserDetails();
    }, [])

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
    const [profileImage, setProfileImage] = useState("");
    const [name, setName] = useState('')
    const [buddyName, setBuddyName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [imageLoading, setImageLoading] = useState(false);
    const [bio, setBio] = useState("");
    const pickerRef = useRef();


    //get User details
    const get_UserDetails = () => {
        setIsLoading(true);
        const action = getUserDetails(onFetchSuccess, onAPIError);
        dispatchAction(action);
    }

    //dispatch actions 
    const dispatchAction = async (action) => {
        try {
            await dispatch(action);
        } catch (err) {
            setIsLoading(false);
            setImageLoading(false);
            console.log(err, "Error from image")
        }
    }

    // method used for fetch api success 
    const onFetchSuccess = (result) => {
        setIsLoading(false);
        console.log(JSON.stringify(result.data, null, 1), "data")
        let userData = result.data.data[0];
        if (userData.interests.includes('bBall')) {
            setBBall(true)
        }
        if (userData.interests.includes('bLeash')) {
            setBLeash(true)
        }
        if (userData.interests.includes('bQuality')) {
            setBQuality(true)
        }
        if (userData.interests.includes('bBed')) {
            setBBED(true)
        }
        if (userData.interests.includes('bFood')) {
            setBFood(true)
        }

        ////
        if (userData.pereferences.interests.includes('fBall')) {
            setFBall(true)
        }
        if (userData.pereferences.interests.includes('fLeash')) {
            setFLeash(true)
        }
        if (userData.pereferences.interests.includes('fQuality')) {
            setFQuality(true)
        }
        if (userData.pereferences.interests.includes('fBed')) {
            setFBED(true)
        }
        if (userData.pereferences.interests.includes('fFood')) {
            setFFood(true)
        }
        console.log(parseFloat(userData.age), "parseFloat(userData.age)")

        const checkBBreedIfOther = BREEDS.findIndex(m => m.label == userData.breed);
        const checkBuddyFriendBreed = BREEDS_FOR_FRIEND.findIndex(m => m.label == userData.pereferences.breed);

        setName(userData.name)
        setBuddyName(userData.buddyName)
        setBAge(userData.age)

        setBBreed(checkBBreedIfOther > -1 ? userData.breed : "Other")
        setbreedName(userData.breed);
        setFriendBreedName(userData.pereferences.breed);
        setBSize(userData.size)
        setBLevelse(userData.energyLevel)
        //
        setProfileImage(userData.avatar ? APP_BASE_URL + "/uploads/" + userData.avatar : "");
        setAddress(userData.address ? userData.address : "");
        setBio(userData.description ? userData.description : "");
        setCity(userData.city ? userData.city : "");
        setState(userData.state ? userData.state : "");
        setFAge(userData.pereferences.age)
        setFBreed(checkBuddyFriendBreed > -1 ? userData.pereferences.breed : "Other")
        setFSize(userData.pereferences.size)
        setFLevelse(userData.pereferences.energyLevel)

    }

    const imagePicker = () => {
        try {
            ImagePicker.openPicker({
                cropping: true,
                mediaType: "photo",
                smartAlbums: ["UserLibrary", "RecentlyAdded", "Regular", "Screenshots", "PhotoStream"]
            }).then(image => {
                updateProfileImage(image);
                console.log(image, "image....")
            });
        } catch (error) {
            console.log(error)
        }
    }

    const updateProfileImage = async (image) => {
        setImageLoading(true);
        const formData = new FormData();
        formData.append("avatar", {
            name: image.filename,
            type: image.mime,
            uri: Platform.OS === "android" ? image.sourceURL : image.sourceURL.replace("file://", "")
        });
        console.log(formData, "image")
        const action = updateAvatar(formData, (res) => onAPISuccess(res, image), onAPIError);
        dispatchAction(action);
    }

    // method called on api success
    const onAPISuccess = async (result, image) => {
        setImageLoading(false);
        await setImage(image);
        Toast.show(result.data.msg, Toast.LONG)
    }

    const onAPIError = async (error) => {
        setImageLoading(false);
        setIsLoading(false);
        Toast.show(error.data.msg, Toast.LONG)
    }

    const buttonHandler = () => {
        if (BAGE == undefined && BAGE == null) {
            alert('Please select age.')
        }
        else if (name.trim().length == 0) {
            alert('Please enter name.')
        }
        else if (address.trim().length == 0) {
            alert('Please enter address.')
        }
        else if (city.trim().length == 0) {
            alert('Please enter city.')
        }
        else if (state.trim().length == 0) {
            alert('Please enter state.')
        }
        else if (buddyName.trim().length == 0) {
            alert('Please enter buddy name.')
        }
        else if (BLEVELS == undefined && BLEVELS == null) {
            alert('Please select level.')
        }
        else if (BSIZE == undefined && BSIZE == null) {
            alert('Please select size.')
        }
        else if (BBREED == undefined && BBREED == null) {
            alert('Please select breed.')
        }
        else if (BBREED == "Other" && breedName.trim().length == 0) {
            alert('Please enter breed name.')
        }
        else if (FAGE == undefined && FAGE == null) {
            alert('Please select pereference age.')
        }
        else if (FLEVELS == undefined && FLEVELS == null) {
            alert('Please select pereference level.')
        }
        else if (FSIZE == undefined && FSIZE == null) {
            alert('Please select pereference size.')
        }
        else if (FBREED == undefined && FBREED == null) {
            alert('Please select pereferences breed.')
        } else if (FBREED == "Other" && friendBreedName.trim().length == 0) {
            alert('Please enter pereferences breed name.')
        }
        else {
            dispatch(updateAction(
                JSON.stringify({
                    "address": address,
                    "state": state,
                    "description": bio,
                    "city": city,
                    "name": name.trim(),
                    "buddyName": buddyName.trim(),
                    "age": BAGE,
                    "size": BSIZE,
                    "energyLevel": BLEVELS,
                    "breed": BBREED == "Other" ? breedName : BBREED,
                    "interests": [
                        BBALL && "bBall",
                        BLEASH && "bLeash",
                        BQUALITY && "bQuality",
                        BBED && "bBed",
                        BFOOD && "bFood"
                    ],
                    "pereferences": {
                        "age": FAGE,
                        "size": FSIZE,
                        "energyLevel": FLEVELS,
                        "breed": FBREED == "Other" ? friendBreedName : FBREED,
                        "interests": [
                            FBALL && "FBALL",
                            FLEASH && "fLeash",
                            FQUALITY && "fQuality",
                            FBED && "fBed",
                            FFOOD && "fFood"
                        ]
                    }
                }),
                props.navigation

            ))
        }
    }


    const MoreAboutBuddy = () => {
        return (
            <View>
                <View style={{}}>
                    <View style={[styles.inputViewPage2, {}]}>
                        <View style={styles.viewOne}>
                            <View>
                                <Text style={styles.text1}>What should we call you?</Text>
                            </View>
                            <TextInputField
                                value={name}
                                onChangeText={(v) => setName(v)}
                                placeHolderText={"enter Name"}
                                placeHolderTextColor={"gray"}
                            />
                        </View>
                        <View style={[styles.viewOne, { marginTop: 10 }]}>
                            <View>
                                <Text style={[styles.text1, { marginTop: 10 }]}>What should we call your best friend?</Text>
                            </View>
                            <TextInputField
                                onChangeText={(v) => setBuddyName(v)}
                                value={buddyName}
                                placeHolderText={"Buddy"}
                                placeHolderTextColor={"gray"}
                            />
                        </View>
                        <View style={[styles.viewOne, { marginTop: 10 }]}>
                            <View>
                                <Text style={[styles.text1, { marginTop: 10 }]}>Bio</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    value={bio}
                                    onChangeText={text => setBio(text)}
                                    multiline={true}
                                    numberOfLines={3}
                                    placeholder="Tell us a little about what makes your pup special"
                                    style={styles.bioField}
                                    placeHolderTextColor="#ccc"
                                />
                            </View>
                        </View>
                        <View style={[styles.viewOne, { marginTop: 10 }]}>
                            <View>
                                <Text style={[styles.text1, { marginTop: 10 }]}>Address</Text>
                            </View>
                            <TextInputField
                                onChangeText={(v) => setAddress(v)}
                                value={address}
                                placeHolderText={"Address"}
                                placeHolderTextColor={"gray"}
                            />
                        </View>
                        <View style={[styles.viewOne, { marginTop: 10 }]}>
                            <View>
                                <Text style={[styles.text1, { marginTop: 10 }]}>City</Text>
                            </View>
                            <TextInputField
                                onChangeText={(v) => setCity(v)}
                                value={city}
                                placeHolderText={"City"}
                                placeHolderTextColor={"gray"}
                            />
                        </View>
                        <View style={[styles.viewOne, { marginTop: 10, marginBottom: 20 }]}>
                            <View>
                                <Text style={[styles.text1, { marginTop: 10 }]}>State</Text>
                            </View>
                            <TextInputField
                                onChangeText={(v) => setState(v)}
                                value={state}
                                placeHolderText={"State"}
                                placeHolderTextColor={"gray"}
                            />
                        </View>
                        <View style={styles.view3}>
                            <View style={[{ width: '25%', alignItems: "flex-start", }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 5 }]}>AGE</Text>
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                    <RNPickerSelect
                                        placeholder={placeholderAge}
                                        items={AgeForBuddy}
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
                            <View style={[{ width: '35%', alignItems: "center" }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 10 }]}>SIZE</Text>
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                    <RNPickerSelect
                                        placeholder={placeholderSize}
                                        items={SizeForBuddy}
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
                            <View style={[{ width: '40%', alignItems: "flex-end" }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 18 }]}>ENERGY LEVEL</Text>
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                    <RNPickerSelect
                                        placeholder={placeholderLevels}
                                        items={engeryForBuddy}
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
                        </View>
                    </View>
                    <View style={[styles.inputViewPage2, { flex: 0.30, marginTop: 20 }]}>
                        <Text style={[styles.inputHeadingText, { paddingLeft: 25 }]}>BREED</Text>
                        <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                            <RNPickerSelect
                                placeholder={placeholderBreed}
                                items={breedForBuddy}
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
                    {BBREED == "Other" && (
                        <View style={[styles.inputViewPage2, { flex: 0.30, marginTop: 20 }]}>
                            <TextInputField
                                onChangeText={(v) => setbreedName(v)}
                                value={breedName}
                                placeHolderText={"Breed name"}
                                placeHolderTextColor={"gray"}
                            />
                        </View>
                    )}
                    <View style={[styles.inputViewPage2, { flex: 0.42, marginTop: 20 }]}>
                        <View style={{ width: '90%', justifyContent: "space-between", alignItems: "center" }}>

                            <Text style={[styles.inputHeadingText, { paddingLeft: 5 }]}>INTERESTS</Text>
                            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
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
                                        onPress={() => setBBED(!BBED)}
                                        style={[styles.iconCircle,]}>
                                        <Image
                                            style={BBED ? styles.activityIconBlue : styles.activityIcon}
                                            source={BBED ? Images.Images.activityIcon4 : Images.Images.dogBed}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.circleView}>
                                    <TouchableOpacity
                                        onPress={() => setBLeash(!BLEASH)}
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
                <View style={[styles.headingView, { flex: 0.08, backgroundColor: "#e6f5ff", marginTop: 20 }]}>
                    <Text style={[styles.headingText, { color: colors.black, paddingTop: 20 }]}>What does {name.trimEnd()} want in a friend?</Text>
                </View>
                <View style={{ flex: 0.55, backgroundColor: "#e6f5ff" }}>
                    <View style={[styles.inputViewPage2, { flex: 0.28 }]}>
                        <View style={{ flexDirection: "row", width: '90%', justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                            <View style={[{ width: '25%', alignItems: "flex-start" }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>AGE</Text>
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', marginTop: 10 }]}>
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
                            <View style={[{ width: '35%', alignItems: "center" }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 25 }]}>SIZE</Text>
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', marginTop: 10 }]}>
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
                            <View style={[{ width: '40%', alignItems: "flex-end" }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 28 }]}>ENERGY LEVEL</Text>
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', marginTop: 10 }]}>
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
                        </View>

                    </View>
                    <View style={[styles.inputViewPage2, { flex: 0.30, marginTop: 18 }]}>
                        <Text style={styles.inputHeadingText}>BREED</Text>
                        <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', marginTop: 10 }]}>
                            <RNPickerSelect
                                placeholder={placeholderBreed}
                                items={breedForBuddyFriend}
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
                    {FBREED == "Other" && (
                        <View style={[styles.inputViewPage2, { flex: 0.30, marginTop: 20 }]}>
                            <TextInputField
                                onChangeText={(v) => setFriendBreedName(v)}
                                value={friendBreedName}
                                placeHolderText={"Breed name"}
                                placeHolderTextColor={"gray"}
                            />
                        </View>
                    )}
                    <View style={[styles.inputViewPage2, { flex: 0.42, marginTop: 18, paddingBottom: 30 }]}>
                        <View style={{ width: '90%', justifyContent: "space-between", alignItems: "center", }}>
                            <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>INTERESTS</Text>
                            <View style={{ flexDirection: "row", paddingBottom: 10, paddingTop: 10 }}>
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
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Loader loading={isLoading} />
            {/* <StatusBar backgroundColor="#0090e6" barStyle="dark-content" /> */}
            <ImageBackground
                source={Images.Images.bg}
                resizeMode="cover"
                style={styles.appLogoView}>
                <View style={styles.headingView}>
                    <TouchableOpacity
                        style={[styles.headerLeftIcon]}
                        onPress={() => props.navigation.toggleDrawer()}>
                        <Image
                            resizeMode="contain"
                            style={{
                                height: scale(30),
                                width: scale(30),
                                tintColor: colors.white,
                            }}
                            source={Images.Images.hamburgerMenu}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.headingText,]}>Profile Update</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={.6}
                    onPress={imagePicker}
                    style={styles.pImageContainer}>
                    {imageLoading && (
                        <ActivityIndicator
                            size="large"
                            color={colors.black}
                            style={{
                                position: "absolute",
                                top: 50,
                                zIndex: 999
                            }}
                        />
                    )}
                    <Image
                        resizeMode={"contain"}
                        style={[styles.pImage]}
                        source={profileImage && image == "" ? { uri: profileImage } : (image != "" ? { uri: image.sourceURL } : Images.Images.buddyUpLogo)} />
                </TouchableOpacity>
            </ImageBackground>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: height * .15
                }}
                style={{ flexGrow: 1, marginVertical: 20, }}>
                {MoreAboutBuddy()}
            </ScrollView>

            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => buttonHandler()}
                    style={[styles.buttonPage2, { backgroundColor: colors.secondaryBlue }]}>
                    <Text style={styles.buttonTextPage2}>Update Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ChangePassword')}
                    style={[styles.buttonChangePwd, {}]}>
                    <Text style={[styles.buttonTextPage2, { color: colors.darkBlue, textDecorationLine: "underline", fontSize: typography.FONT_SIZE_12 }]}>Change Password</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}





const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        //   paddingVertical: 12,
        paddingHorizontal: 10,
        //   borderWidth: 1,
        //   borderColor: 'gray',
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