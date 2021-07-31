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
    ScrollView
} from 'react-native';
import styles from './style';
import TextInputField from "../../Components/TextInputField";
import ViewPager from '@react-native-community/viewpager';
import { Images, colors, typography } from "../../Theme";
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import { useDispatch } from "react-redux";
import { updateAction } from "../../store/actions/authenticationActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "react-native-reanimated";

const age = [
    { label: '6 month', value: 0.5 },
    { label: '1 year', value: 1 },
    { label: '2 year', value: 2 },
    { label: '3 year', value: 3 },
    { label: '4 year', value: 4 },
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
   export const ProfileUpate = (props) => {
const dispatch=useDispatch()



    const [image,setImage]=useState(null)

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
   

       useEffect(()=>{
        AsyncStorage.getItem('detail').then((res)=>{
            let parseData=JSON.parse(res)
            console.log(parseData);
        setName(parseData.name)
        setBuddyName(parseData.buddy_name)
        setBAge(parseData.age)
        setBBreed(parseData.breed)
        setBSize(parseData.size)
        setBLevelse(parseData.energyLevel)

        setFAge(parseData.pereferences.age)
        setFBreed(parseData.pereferences.breed)
        setFSize(parseData.pereferences.size)
        setFLeash(parseData.pereferences.energyLevel)
        
        })
        },[])

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
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [name,setName]=useState('')
   const [buddyName,setBuddyName]=useState('')
      
    
   const pickerRef = useRef()
   
   
     

    const openCamera=()=>{

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
        });
    }

    const MoreAboutBuddy = () => {
        return (
            <>
                <View style={[styles.headingView, { flex: 0.08 }]}>
                    <Text style={[styles.headingText,]}>Tell us more about Buddy!</Text>
                </View>
                <View style={{ flex: 0.55, }}>
                    <View style={[styles.inputViewPage2, { flex: 0.28, }]}>
                        
                    <View style={styles.viewOne}>
                        <View>
                            <Text style={styles.welcomeText}>We're so glad you're here.</Text>
                            <Text style={styles.text1}>What should we call you?</Text>
                        </View>

                        <TextInputField
                        value={name}
                        onChangeText={(v)=>setName(v)}
                            placeHolderText={"enter Name"}
                            placeHolderTextColor={"gray"}
                        />

                        {/* <TouchableOpacity
                                style={styles.registerButton}>
                                <Text>Get Started</Text>
                            </TouchableOpacity> */}
                    </View>


                    <View style={[styles.viewOne, { marginBottom: 20 }]}>
                        <View>
                            <Text style={styles.text1}>What should we call your best friend?</Text>
                        </View>

                        <TextInputField
                        onChangeText={(v)=>setBuddyName(v)}
                        value={buddyName}
                            placeHolderText={"Buddy"}
                           placeHolderTextColor={"gray"}
                       
                        />
                        {/* <TouchableOpacity
                                style={styles.registerButton}>
                                <Text>Get Started</Text>
                            </TouchableOpacity> */}
                    </View>


                        <View style={styles.view3}>
                          
                          
                            <View style={[{ width: '25%', alignItems: "flex-start", }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>AGE</Text>
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                        placeholder={placeholderAge}
                                        items={age}
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
                            <View style={[{ width: '40%', alignItems: "flex-end" }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 28 }]}>ENERGY LEVEL</Text>
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

                        </View>

                    </View>
                    <View style={[styles.inputViewPage2, { flex: 0.30, marginTop: 10 }]}>
                        <Text style={styles.inputHeadingText}>BREED</Text>
                        <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                        placeholder={placeholderBreed}
                                        items={breed}
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
                    <View style={[styles.inputViewPage2, { flex: 0.42, }]}>
                        <View style={{ width: '90%', justifyContent: "space-between", alignItems: "center" }}>

                            <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>iNTERESTS</Text>
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

                <View style={[styles.headingView, { flex: 0.08, backgroundColor: "#e6f5ff" }]}>
                    <Text style={[styles.headingText,]}>What does Buddy want in a friend?</Text>
                </View>
                <View style={{ flex: 0.55, backgroundColor: "#e6f5ff" }}>
                    <View style={[styles.inputViewPage2, { flex: 0.28 }]}>
                        <View style={{ flexDirection: "row", width: '90%', justifyContent: "space-between", alignItems: "center" }}>
                            <View style={[{ width: '25%', alignItems: "flex-start" }]}>
                                <Text style={[styles.inputHeadingText, { paddingLeft: 15 }]}>AGE</Text>
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                        placeholder={placeholderAge}
                                        items={age}
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
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                        placeholder={placeholderSize}
                                        items={size}
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
                                <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                        placeholder={placeholderLevels}
                                        items={levels}
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
                    <View style={[styles.inputViewPage2, { flex: 0.30, marginTop: 10 }]}>
                        <Text style={styles.inputHeadingText}>BREED</Text>
                        <TouchableOpacity style={[styles.inputViewDropDown, { width: '90%', }]}>
                                <RNPickerSelect
                                        placeholder={placeholderBreed}
                                        items={breed}
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
                    <View style={[styles.inputViewPage2, { flex: 0.42, }]}>
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
            </>
        )
    }




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
                      
                      onPress={()=>props.navigation.toggleDrawer()}>
                      
                <Image
                            style={styles.headerLeftIcon}
                            source={Images.Images.hamburgerMenu}
                        />
                        </TouchableOpacity>
                    <Text style={[styles.headingText,]}>Profile Update</Text>
                </View>
                <Image
                            resizeMode={"contain"}
                            style={[{height:120,width:120}]}
                            source={Images.Images.buddyUpLogo} />

                    </ImageBackground>
                
                <View style={{ flex: 0.7, }}>
                <ScrollView style={{flexGrow:1,marginVertical:20}}>
                {MoreAboutBuddy()}

                </ScrollView>
</View>
                {/* <View style={{ flex: 0.5, }}>
                    <View style={styles.inputViewPage2}>
                        <Text style={styles.inputHeadingText}>Name</Text>
                        <TextInputField
                            placeHolderText={"Tommy"}
                            placeHolderTextColor={"black"}
                        />
                    </View>
                </View>
 */}
                <View style={styles.buttonView}>
                    <TouchableOpacity
                    onPress={()=>
                       {
                         if(BAGE==undefined&&BAGE==null){
                            alert('Please select age.')
                        }
                        else if(name.trim().length==0){
                            alert('Please enter name.')
                        }
                        else if(buddyName.trim().length==0){
                            alert('Please enter buddy name.')
                        }
                        else if(BLEVELS==undefined&&BLEVELS==null){
                            alert('Please select level.')
                        }
                        else if(BSIZE==undefined&&BSIZE==null){
                            alert('Please select size.')
                        }
                        else if(BBREED==undefined&&BBREED==null){
                            alert('Please select breed.')
                        }
                        
                        
                        else if(FAGE==undefined&&FAGE==null){
                            alert('Please select pereference age.')
                        }
                        else if(FLEVELS==undefined&&FLEVELS==null){
                            alert('Please select pereference level.')
                        }
                        else if(FSIZE==undefined&&FSIZE==null){
                            alert('Please select pereference size.')
                        }
                        else if(FBREED==undefined&&FBREED==null){
                            alert('Please select pereferences breed.')
                        }
                           else{
                        dispatch(updateAction(
                       JSON.stringify( {
                        "name":name,
                        "buddy_name":buddyName,
                            "age":BAGE,
                            "size":BSIZE,
                            "energyLevel":BLEVELS,
                            "breed":BBREED,
                            "interests":["feedbowl","ball","leash"],
                            "pereferences":{
                                "age":FAGE,
                                "size":FSIZE,
                                "energyLevel":FLEVELS,
                                "breed":FBREED,
                                "interests":["feedbowl","ball","leash"]
                            }
                        }),
                        props.navigation
                        
                    ))}}}
                        style={[styles.buttonPage2, { backgroundColor: colors.secondaryBlue }]}>
                        <Text style={styles.buttonTextPage2}>Update Profile</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress={()=>props.navigation.navigate('ChangePassword')}
                        style={[styles.buttonPage2, { backgroundColor: colors.secondaryBlue }]}>
                        <Text style={styles.buttonTextPage2}>Change Password</Text>
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