import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import {
    View, Text, SafeAreaView, StatusBar, Image,
    ImageBackground, TouchableOpacity, Animated, Dimensions, PanResponder
} from 'react-native';
import styles from './style';
import { Images, colors, typography } from "../../Theme";
import {Constants}from '../../Theme/AppConstants'
import { Modalize } from 'react-native-modalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwiperCard from "../../Utils/SwiperCard";

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const { width } = Dimensions.get('screen');
let temp = [];
const SWIPE_THRESHOLD = 0.25 * width;
const CustomSwiper = ({ navigation }) => {

    const [BFOOD, setBFood] = useState(false)
    const [BBALL, setBBall] = useState(false)
    const [BQUALITY, setBQuality] = useState(false)

    const [update, setUpdate] = useState([])

    const [data, _panResponder, animation, scale, opacity] = SwiperCard([
        {
            dogImage: Images.Images.BuddyProfile,
            name: "Buddy",
            swiperView: false,
            id: "1"
        },
        {
            dogImage: Images.Images.richard,
            name: "Waldo",
            swiperView: false,
            id: "2"
        },
        {
            dogImage: Images.Images.rubyAlford,
            name: "Waldo2",
            swiperView: false,
            id: "3"
        },
        {
            dogImage: Images.Images.waldo,
            name: "Waldo3",
            swiperView: false,
            id: "4"
        },
        {
            dogImage: Images.Images.rubyAlford,
            name: "Waldo4",
            swiperView: false,
            id: "5"
        },
        {
            dogImage: Images.Images.waldo,
            name: "Waldo5",
            swiperView: false,
            id: "6"
        },
        {
            dogImage: Images.Images.rubyAlford,
            name: "Waldo2",
            swiperView: false,
            id: "7"
        },
        {
            dogImage: Images.Images.waldo,
            name: "Waldo3",
            swiperView: false,
            id: "8"
        },
        {
            dogImage: Images.Images.rubyAlford,
            name: "Waldo4",
            swiperView: false,
            id: "9"
        },
        {
            dogImage: Images.Images.waldo,
            name: "Waldo5",
            swiperView: false,
            id: "10"
        },
    ], update != [] && update)




    const setItemView = (item, index) => {
        temp = data;
        // alert(JSON.stringify(temp))
        for (let i in temp) {
            if (index - 1 == i) {
                // alert(index - 1 + " " + i)
                temp[i].swiperView = true
            } else {
                temp[i].swiperView = false
            }
        }
        setUpdate(temp)
        setTimeout(() => {
            setBFood(!BFOOD)
        }, 200);

    }
    const setItemView2 = (item, index) => {
        temp = data;
        // alert(JSON.stringify(temp))
        for (let i in temp) {
            if (index - 1 == i) {
                // alert(index - 1 + " " + i)
                temp[i].swiperView = false
            } else {
                temp[i].swiperView = false
            }
        }
        setUpdate(temp)
        setTimeout(() => {
            setBFood(!BFOOD)
        }, 200);

    }

    const renderCardItem = () => {
        return data
            .slice(0, 2)
            .reverse()
            .map((item, index, items) => {
                const isLastItem = index === items.length - 1;
                const panHandlers = isLastItem ? { ..._panResponder.panHandlers } : {};
                const isSecondToLast = index === items.length - 2;
                const rotate = animation.x.interpolate({
                    inputRange: [-200, 0, 200],
                    outputRange: ['-30deg', '0deg', '30deg'],
                    extrapolate: 'clamp',
                });

                const animatedCardStyles = {
                    transform: [{ rotate }, ...animation.getTranslateTransform()],
                    opacity,
                };

                const cardStyle = isLastItem ? animatedCardStyles : undefined;
                const nextStyle = isSecondToLast
                    ? { transform: [{ scale: scale }], borderRadius: 35 }
                    : undefined;

                return (
                    <Animated.View
                        {...panHandlers}
                        key={item.id}
                        style={[
                            {
                                height: SCREEN_HEIGHT - 120,
                                width: SCREEN_WIDTH,
                                padding: 20,
                                position: 'absolute'
                            },
                            cardStyle, nextStyle
                        ]}
                    >

                        <View style={{
                            flex: 1,
                            borderRadius: 35
                        }}>

                            <ImageBackground
                                imageStyle={styles.imageBackGroundView}
                                style={{ width: "100%", flex: 0.7 }}
                                source={item.dogImage}
                                resizeMode='cover'
                            >
                                <View style={styles.swiperImageView}>
                                    <TouchableOpacity

                                        onPress={() => { navigation.navigate("MatchingScreen") }}
                                    >
                                        <Text style={{ fontWeight: "bold", fontSize: 28, color: colors.white }}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>

                            </ImageBackground>
                            {
                                !item.swiperView ?


                                    <View style={{ backgroundColor: "white", paddingHorizontal: 10, flex: 0.3, alignItems: "center", borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}>

                                        <TouchableOpacity style={styles.extendIcon}
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
                                    :
                                    <View style={{ paddingHorizontal: 10, flex: 0.7, alignItems: "center", backgroundColor: "white", borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}>
                                        <TouchableOpacity style={styles.extendIcon}
                                            onPress={() => setItemView2(item, index)}
                                        >
                                            <Icon name="menu" size={20} color="gray" />
                                        </TouchableOpacity>
                                        
                                        <View style={{ flex: 1, width: "100%", paddingHorizontal: 15 }}>

                                            <View style={{ width: "100%", flex: 0.20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
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
                                    </View>
                            }
                        </View>

                    </Animated.View>
                )
            });
    }

    const CardComponent = () => {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 20 }} />
                <View style={{ flex: 1 }}>
                    {renderCardItem()}
                </View>
                <View style={{ height: 20 }} />
            </View>
        );

    }

    return (
        <>

            <SafeAreaView style={{ flex: 1, }}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
                <View style={styles.mainWrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.headerLeftIcon}

                            onPress={() => navigation.toggleDrawer()}>
                            <Image
                                style={styles.headerLeftIcon}
                                source={Images.Images.hamburgerMenu}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>Buddy</Text>
                        <Text style={[styles.headerTitle, { fontWeight: "normal" }]}>Up</Text>
                    </View>

                    <View style={{ flex: 0.92, width: "100%", backgroundColor: colors.primaryBlue, margin: 10 }}>
                        {CardComponent()}
                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}

export default CustomSwiper