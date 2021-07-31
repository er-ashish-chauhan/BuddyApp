import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import {
    View, Text, SafeAreaView, StatusBar, Image,
    ImageBackground, TouchableOpacity, Dimensions
} from 'react-native';
import styles from './style';
import { Images, colors, typography } from "../../Theme";
import {Constants}from '../../Theme/AppConstants'
import Swiper from 'react-native-deck-swiper';
import { Modalize } from 'react-native-modalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { chatUserList } from "../../store/actions/chatUserAction";
import { useDispatch, useSelector } from "react-redux";

const height = Dimensions.get('screen')

const BuddyUpSwiper = ({ navigation }) => {

    const bottomSheetRef = useRef()
    const open = height * 0.8
    const useSwiper = useRef(null).current
    const handleOnSwipedLeft = () => useSwiper.swipeLeft()
    const handleOnSwipedTop = () => useSwiper.swipeTop()
    const handleOnSwipedRight = () => useSwiper.swipeRight()
    const [BFOOD, setBFood] = useState(false)
    const [BBALL, setBBall] = useState(false)
    const [BQUALITY, setBQuality] = useState(false)
    const [SEEALL, setSeeAll] = useState(false)
    const [cardIndex,setCrdIndex]=useState(null)
    const [updatedcard,setUpdatedCa]=useState([])
    let card= [
        {
            id:1,
            dogImage: Images.Images.BuddyProfile,
            name: "Buddy",
            swiperView:false
        },
        {
            id:2,
            dogImage: Images.Images.richard,
            name: "Waldo",
            swiperView:false
        },
        {
            id:3,
            dogImage: Images.Images.rubyAlford,
            name: "Waldo",
            swiperView:false
        },
        {
            id:4,
            dogImage: Images.Images.waldo,
            name: "Waldo",
            swiperView:false
        },
    ]
    const dispatch=useDispatch()
    const userState=useSelector(state=>state.authenticationReducer)
    useEffect(()=>{
            dispatch(chatUserList(navigation))
    },[])

    useEffect(() => {
        const unsubscribe1 = navigation.addListener('blur', () => {
            setSeeAll(!SEEALL)
          });
      
          return unsubscribe1;
    }, [SEEALL])

    const setItemView = (item, i) => {
        let tt=[...card]
        console.log("tt", i);
        tt[i].swiperView=true
         
        card=tt
        setTimeout(() => {
            setBFood(!BFOOD)
        }, 200);
        // setSeeAll(!SEEALL)
        // item.swiperView = true
        // setShowUpdate(true)
    }



    const deck = useRef()
    const modalRef = useRef()

    const renderContent = () => {
        return (
            <View style={{ flex:1, width: "100%", paddingHorizontal: 15 }}>
                {/* <TouchableOpacity
                style={{borderWidth:1, justifyContent:"center", alignItems:"center"}}
                    onPress={() => setSeeAll(!SEEALL)}
                >
                    <Icon name="menu" size={20} color="gray" />
                </TouchableOpacity> */}
                <View style={{ width: "100%", flex: 0.2, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <View style={{ flex: 0.6, justifyContent: "center", }}>
                        <Text style={{ textAlign: "left", fontSize: typography.FONT_SIZE_14, fontWeight: "bold" }}>Oakland, CA 94610</Text>
                        <Text style={{ textAlign: "left", fontSize: typography.FONT_SIZE_14 }}>Parson Russell Terrior</Text>
                    </View>
                    <View style={{ flex: 0.4, justifyContent: "center", alignItems: "center", }}>
                        <Text style={{ fontSize: typography.FONT_SIZE_18 }}>12 Years</Text>
                    </View>
                </View>

                <View style={styles.dogItemView}>
                 
                        <TouchableOpacity
                            onPress={() => setBFood(!BFOOD)}
                            style={[styles.iconCircle,]}>
                            <Image
                                style={BFOOD ? styles.activityIconBlue : styles.activityIcon}
                                source={BFOOD ? Images.Images.activityIcon1 : Images.Images.dogFood}
                            />
                        </TouchableOpacity>
                
                   
                        <TouchableOpacity
                            onPress={() => setBBall(!BBALL)}
                            style={[styles.iconCircle,]}>
                            <Image
                                style={BBALL ? styles.activityIconBlue : styles.activityIcon}
                                source={BBALL ? Images.Images.activityIcon2 : Images.Images.ball}
                            />
                        </TouchableOpacity>
                  

                  
                        <TouchableOpacity
                            onPress={() => setBQuality(!BQUALITY)}
                            style={[styles.iconCircle,]}>
                            <Image
                                style={BQUALITY ? styles.activityIconBlue : styles.activityIcon}
                                source={BQUALITY ? Images.Images.activityIcon3 : Images.Images.quality}
                            />
                        </TouchableOpacity>
                    
                </View>

                <View style={styles.descText}>
                    <Text>{Constants.dummyText}</Text>
                </View>

                <View style={styles.socialView}>

                 
                        <TouchableOpacity
                            onPress={() => setBFood(!BFOOD)}
                            style={[styles.socialIconCircle,]}>
                            <Image
                                style={styles.activityIcon}
                                source={Images.Images.facebookIcon}
                            />
                        </TouchableOpacity>

                 
                        <TouchableOpacity
                            onPress={() => setBBall(!BBALL)}
                            style={[styles.socialIconCircle,]}>
                            <Image
                                style={styles.activityIcon}
                                source={Images.Images.tictokIcon}
                            />
                        </TouchableOpacity>
                  

                 
                        <TouchableOpacity
                            onPress={() => setBQuality(!BQUALITY)}
                            style={[styles.socialIconCircle,]}>
                            <Image
                                style={styles.activityIcon}
                                source={Images.Images.instaIcon}
                            />
                        </TouchableOpacity>
                   
                </View>

            </View>
        )
    }

    const onOpen = () => {
        modalRef.current?.open();
    };

  


    const cardComponent = (item, index) => {
                      console.log("item mmmmm",item);
        return (
            <View style={styles.card}>
                <View style={{ flex: 1, width: "100%" }}>
                    {/* <View style={{flex:0.1,justifyContent:"center", alignItems:"center"}}> */}
                    <ImageBackground
                        imageStyle={styles.imageBackGroundView}
                        style={{ width: "100%", flex: 0.7 }}
                        source={Images.Images.richard}
                        resizeMode='cover'
                    >
                        <View style={styles.swiperImageView}>
                            <TouchableOpacity
                                // onPress={() => onOpen()}
                                onPress={() => navigation.navigate("MatchingScreen")}
                            >
                                {/* <Text style={{ fontWeight: "bold", fontSize: 28, color: colors.white }}>{item.name}</Text> */}
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                    {
                        item?.swiperView ?
                        <View style={{ paddingHorizontal: 10, flex: 0.7, alignItems: "center" }}>
                                <TouchableOpacity style={styles.extendIcon}
                                            onPress={() => setItemView(item, index)}
                                        >
                                            <Icon name="menu" size={20} color="gray" />
                                        </TouchableOpacity>
                                {renderContent()}
                            </View>

                            :
                            <View style={{ paddingHorizontal: 10, flex: 0.3, alignItems: "center" }}>
                              
                              
                                <TouchableOpacity
                                    onPress={() => setItemView(item, index)}
                                >
                                    <Icon name="menu" size={20} color="gray" />
                                </TouchableOpacity>

                                <View style={{ width: "100%", flex: 0.4, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                    <View style={{ flex: 0.6, justifyContent: "center", }}>
                                        <Text style={{ textAlign: "left", fontSize: typography.FONT_SIZE_14, fontWeight: "bold" }}>Oakland, CA 94610</Text>
                                        <Text style={{ textAlign: "left", fontSize: typography.FONT_SIZE_14 }}>Parson Russell Terrior</Text>
                                    </View>
                                    <View style={{ flex: 0.4, justifyContent: "center", alignItems: "center", }}>
                                        <Text style={{ fontSize: typography.FONT_SIZE_18 }}>12 Years</Text>
                                    </View>
                                </View>

                                <View style={{ width: "100%", flex: 0.4, alignItems: "center", flexDirection: "row" }}>

                                  
                                        <TouchableOpacity
                                            onPress={() => setBFood(!BFOOD)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={BFOOD ? styles.activityIconBlue : styles.activityIcon}
                                                source={BFOOD ? Images.Images.activityIcon1 : Images.Images.dogFood}
                                            />
                                        </TouchableOpacity>
                                 
                                        <TouchableOpacity
                                            onPress={() => setBBall(!BBALL)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={BBALL ? styles.activityIconBlue : styles.activityIcon}
                                                source={BBALL ? Images.Images.activityIcon2 : Images.Images.ball}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => setBQuality(!BQUALITY)}
                                            style={[styles.iconCircle,]}>
                                            <Image
                                                style={BQUALITY ? styles.activityIconBlue : styles.activityIcon}
                                                source={BQUALITY ? Images.Images.activityIcon3 : Images.Images.quality}
                                            />
                                        </TouchableOpacity>
                                  
                              

                                   
                                </View>
                            </View>
                    }
                </View>
            </View>
        )
    }

    return (
        <>

            <SafeAreaView style={{ flex: 1, }}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
                <View style={styles.mainWrapper}>
                    <View style={styles.header}>
                        <Image
                            style={styles.headerLeftIcon}
                            source={Images.Images.hamburgerMenu}
                        />
                        <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>Buddy</Text>
                        <Text style={[styles.headerTitle, { fontWeight: "normal" }]}>Up</Text>
                    </View>
                    <View style={styles.swiperView}>
                        <Swiper
                            ref={useSwiper}
                            cards={userState.userList}
                            animateCardOpacity
                            infinite={false}
                            key={userState.userList.length}
                            keyExtractor={(item,index)=>item}
                            // animateOverlayLabelsOpacity
                            overlayLabels={{
                                left: {
                                    title: 'NOPE',
                                    element: <View style={styles.nopeTextStyle}>
                                        <Text style={styles.nope}>NOPE</Text>
                                        {/* <Image source={Images.nopeImg} style={{height:108,width:150}}></Image> */}
                                    </View>,

                                },
                                right: {
                                    title: 'YES',
                                    element: <View style={styles.likeTextStyle}>
                                        {/* <Image source={Images.likeImg} style={{height:108,width:150}}></Image> */}
                                        <Text style={styles.yes}>LIKE</Text>
                                    </View>,
                                },
                            }}
                            renderCard={(cardItem, index) => {
                                return  cardComponent(cardItem,index)
                                
                            }}
                            cardIndex={0}
                            onSwipedRight={(cardIndex) => {
                                //    alert('right swipe index', cardIndex+1)
                            }}
                            onSwipedLeft={(cardIndex) => { }}
                            cardVerticalMargin={20}
                            backgroundColor={'transparent'}
                            //   disableRightSwipe={this.state.limit_reach == 1 ? true : false}
                            //disableLeftSwipe={this.state.limit_reach == 1 ? true : false}
                            //   disableBottomSwipe={this.state.limit_reach == 1 ? true : false}
                            //   disableTopSwipe={this.state.limit_reach == 1 ? true : false}
                            stackSize={5}
                        //   onSwipedAll={() => this.getUserLocation()}


                        />
                    </View>
                    {/* <Modalize
                        ref={modalRef}
                        snapPoint={350}
                        modalStyle={{ backgroundColor: colors.white }}
                    // HeaderComponent={this.renderHeader}
                    >
                        {renderContent()}
                    </Modalize> */}
                </View>
            </SafeAreaView>
        </>
    )
}

export default BuddyUpSwiper