import react from "react";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from "react-native";
import styles from "./style";
import { Images, colors, typography } from "../../Theme";
import { Constants } from "../../Theme/AppConstants";
import Swiper from "react-native-deck-swiper";
import { Modalize } from "react-native-modalize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  chatUserList,
  showHideData,
  likeAction,
  disLikeAction,
} from "../../store/actions/chatUserAction";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { width } from "../../Theme/responsiveStyles";
import firestore from "@react-native-firebase/firestore";
import { updateNotificationsCount } from "../../store/actions/notificationsAction";

const height = Dimensions.get("screen");

const BuddyUpSwiper = ({ navigation }) => {
  useEffect(() => {
    let unsubscriber;

    AsyncStorage.getItem("detail").then(async (res) => {
      let parseData = JSON.parse(res);
      console.log(parseData);

      try {
        if (parseData?._id) {
          unsubscriber = firestore()
            .collection("Notifications")
            .doc(parseData?._id)
            .onSnapshot((snapshot) => {
              let notificationsCount = 0;
              if (snapshot?.exists) {
                notificationsCount = Object.values(snapshot.data()).reduce(
                  (total = 0, num) => {
                    return total + num;
                  }
                );
              }
              dispatch(updateNotificationsCount(notificationsCount));
            });
        }
      } catch (error) {
        console.log("...Error notificationsCount", JSON.stringify(error));
      }
    });

    dispatch(chatUserList(navigation));

    () => {
      if (unsubscriber) {
        return unsubscriber();
      }
    };
  }, []);

  const bottomSheetRef = useRef();
  const open = height * 0.8;
  const useSwiper = useRef(null).current;
  const handleOnSwipedLeft = () => useSwiper.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.swipeTop();
  const handleOnSwipedRight = () => useSwiper.swipeRight();
  const [showDat, setShowData] = useState(false);
  const [BFOOD, setBFood] = useState(false);
  const [BBALL, setBBall] = useState(false);
  const [BQUALITY, setBQuality] = useState(false);
  const [SEEALL, setSeeAll] = useState(false);
  const [cardIndex, setCrdIndex] = useState(null);
  const [updatedcard, setUpdatedCa] = useState([]);

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.authenticationReducer);
  const notificationsState = useSelector((state) => state.notificationsReducer);

  // useEffect(()=>{
  //     setBFood(userState?.userList[0]?.interests?.includes('bFood')? true:false)
  //     setBBall(userState?.userList[0]?.interests?.includes('bBall')?true:false)
  //     setBQuality(userState?.userList[0]?.interests?.includes('bQuality')?true:false)
  // },[])
  useEffect(() => {
    const unsubscribe1 = navigation.addListener("blur", () => {
      setSeeAll(!SEEALL);
    });

    return unsubscribe1;
  }, [SEEALL]);

  const setItemView = (item, i) => {
    dispatch(showHideData(item, i));
    setTimeout(() => {
      setShowData(true);
    }, 1000);
  };

  const deck = useRef();
  const modalRef = useRef();

  const renderContent = () => {
    return (
      <View style={{ flex: 1, width: "100%", paddingHorizontal: 15 }}>
        {/* <TouchableOpacity
                style={{borderWidth:1, justifyContent:"center", alignItems:"center"}}
                    onPress={() => setSeeAll(!SEEALL)}
                >
                    <Icon name="menu" size={20} color="gray" />
                </TouchableOpacity> */}
        <View
          style={{
            width: "100%",
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 0.6, justifyContent: "center" }}>
            <Text
              style={{
                textAlign: "left",
                fontSize: typography.FONT_SIZE_14,
                fontWeight: "bold",
              }}
            >
              Oakland, CA 94610
            </Text>
            <Text
              style={{ textAlign: "left", fontSize: typography.FONT_SIZE_14 }}
            >
              Parson Russell Terrior
            </Text>
          </View>
          <View
            style={{
              flex: 0.4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: typography.FONT_SIZE_18 }}>12 Years</Text>
          </View>
        </View>

        <View style={styles.dogItemView}>
          <TouchableOpacity
            onPress={() => setBFood(!BFOOD)}
            style={[styles.iconCircle]}
          >
            <Image
              style={BFOOD ? styles.activityIconBlue : styles.activityIcon}
              source={
                BFOOD ? Images.Images.activityIcon1 : Images.Images.dogFood
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setBBall(!BBALL)}
            style={[styles.iconCircle]}
          >
            <Image
              style={BBALL ? styles.activityIconBlue : styles.activityIcon}
              source={BBALL ? Images.Images.activityIcon2 : Images.Images.ball}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setBQuality(!BQUALITY)}
            style={[styles.iconCircle]}
          >
            <Image
              style={BQUALITY ? styles.activityIconBlue : styles.activityIcon}
              source={
                BQUALITY ? Images.Images.activityIcon3 : Images.Images.quality
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.descText}>
          <Text>{Constants.dummyText}</Text>
        </View>

        <View style={styles.socialView}>
          <TouchableOpacity
            onPress={() => setBFood(!BFOOD)}
            style={[styles.socialIconCircle]}
          >
            <Image
              style={styles.activityIcon}
              source={Images.Images.facebookIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setBBall(!BBALL)}
            style={[styles.socialIconCircle]}
          >
            <Image
              style={styles.activityIcon}
              source={Images.Images.tictokIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setBQuality(!BQUALITY)}
            style={[styles.socialIconCircle]}
          >
            <Image
              style={styles.activityIcon}
              source={Images.Images.instaIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onOpen = () => {
    modalRef.current?.open();
  };

  const cardComponent = (item, index) => {
    return (
      <View style={styles.card}>
        <View style={{ flex: 1, width: "100%" }}>
          {/* <View style={{flex:0.1,justifyContent:"center", alignItems:"center"}}> */}
          <ImageBackground
            imageStyle={styles.imageBackGroundView}
            style={{ width: "100%", flex: 0.7 }}
            source={Images.Images.richard}
            resizeMode="cover"
          >
            <View style={styles.swiperImageView}>
              {/* <TouchableOpacity
                                // onPress={() => onOpen()}
                                onPress={() =>{
                                    
                                    navigation.navigate("MatchingScreen",{item:item})
                                }}
                            > */}
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 28,
                  color: colors.white,
                }}
              >
                {item.name}
              </Text>
              {/* </TouchableOpacity> */}
            </View>
          </ImageBackground>
          {item?.swiperView ? (
            <View
              style={{ paddingHorizontal: 10, flex: 0.7, alignItems: "center" }}
            >
              <TouchableOpacity
                style={styles.extendIcon}
                onPress={() => setItemView(item, index)}
              >
                <Icon name="menu" size={20} color="gray" />
              </TouchableOpacity>
              {renderContent()}
            </View>
          ) : (
            <View
              style={{ paddingHorizontal: 10, flex: 0.3, alignItems: "center" }}
            >
              <TouchableOpacity onPress={() => setItemView(item, index)}>
                <Icon name="menu" size={20} color="gray" />
              </TouchableOpacity>

              <View
                style={{
                  width: "100%",
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 0.6, justifyContent: "center" }}>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: typography.FONT_SIZE_14,
                      fontWeight: "bold",
                    }}
                  >
                    {item?.city}
                    {item?.city ? "," : ""} {item?.address}
                  </Text>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: typography.FONT_SIZE_14,
                    }}
                  >
                    {item?.breed}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.4,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: typography.FONT_SIZE_18 }}>
                    {item.age} Years
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  flex: 0.4,
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                {item.interests.includes("BFOOD") ||
                  (item.interests.includes("bFood") && (
                    <TouchableOpacity
                      onPress={() => setBFood(!BFOOD)}
                      style={[styles.iconCircle]}
                    >
                      <Image
                        style={styles.activityIcon}
                        source={Images.Images.dogFood}
                      />
                    </TouchableOpacity>
                  ))}

                {item.interests.includes("BBALL") ||
                  (item.interests.includes("bBall") && (
                    <TouchableOpacity
                      onPress={() => setBBall(!BBALL)}
                      style={[styles.iconCircle]}
                    >
                      <Image
                        style={
                          item.interests.includes("BBALL") ||
                            item.interests.includes("bBall")
                            ? styles.activityIconBlue
                            : styles.activityIcon
                        }
                        source={Images.Images.ball}
                      />
                    </TouchableOpacity>
                  ))}

                {item.interests.includes("BQUALITY") ||
                  (item.interests.includes("bQuality") && (
                    <TouchableOpacity style={[styles.iconCircle]}>
                      <Image
                        style={styles.activityIcon}
                        source={Images.Images.quality}
                      />
                    </TouchableOpacity>
                  ))}
                {item.interests.includes("BBED") ||
                  (item.interests.includes("bBed") && (
                    <TouchableOpacity
                      onPress={() => setBQuality(!BQUALITY)}
                      style={[styles.iconCircle]}
                    >
                      <Image
                        style={styles.activityIcon}
                        source={Images.Images.dogBed}
                      />
                    </TouchableOpacity>
                  ))}
                {item.interests.includes("BLEASH") ||
                  (item.interests.includes("bLeash") && (
                    <TouchableOpacity style={[styles.iconCircle]}>
                      <Image
                        style={styles.activityIcon}
                        source={Images.Images.leash}
                      />
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.primaryBlue} />
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          {!!notificationsState?.notificationsCount && (
            <View style={styles.badgeBox}>
              <Text style={styles.badge}>
                {notificationsState?.notificationsCount}
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              style={styles.headerLeftIcon}
              source={Images.Images.hamburgerMenu}
            />
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>
              Buddy<Text style={[{ fontWeight: "normal" }]}>Up</Text>
            </Text>
          </View>
          <View />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {/* <StatusBar backgroundColor={colors.white} barStyle="dark-content" /> */}
        <View style={styles.mainWrapper}>
          {userState.userList !== undefined && userState.userList.length > 0 ? (
            <View style={styles.swiperView}>
              <Swiper
                useViewOverflow={true}
                ref={useSwiper}
                cards={userState.userList.length > 0 ? userState.userList : []}
                animateCardOpacity
                // infinite={false}
                key={userState.userList.length}
                keyExtractor={(item, index) => item._id}
                // animateOverlayLabelsOpacity
                overlayLabels={{
                  left: {
                    title: "NOPE",
                    element: (
                      <View style={styles.nopeTextStyle}>
                        <Text style={styles.nope}>NOPE</Text>
                        {/* <Image source={Images.nopeImg} style={{height:108,width:150}}></Image> */}
                      </View>
                    ),
                  },
                  right: {
                    title: "YES",
                    element: (
                      <View style={styles.likeTextStyle}>
                        {/* <Image source={Images.likeImg} style={{height:108,width:150}}></Image> */}
                        <Text style={styles.yes}>LIKE</Text>
                      </View>
                    ),
                  },
                }}
                renderCard={cardComponent}
                cardIndex={0}
                onSwipedRight={(cardIndex, item) => {
                  dispatch(likeAction(item, cardIndex, navigation));
                }}
                onSwipedLeft={(cardIndex, item) => {
                  dispatch(disLikeAction(item, cardIndex, navigation));
                }}
                cardVerticalMargin={20}
                backgroundColor={"transparent"}
                //   disableRightSwipe={this.state.limit_reach == 1 ? true : false}
                //disableLeftSwipe={this.state.limit_reach == 1 ? true : false}
                //   disableBottomSwipe={this.state.limit_reach == 1 ? true : false}
                //   disableTopSwipe={this.state.limit_reach == 1 ? true : false}
                stackSize={5}
                onSwipedAll={() => {
                  dispatch(chatUserList(navigation));
                }}
              />
            </View>
          ) : (
            <View
              style={{
                height: "80%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>No more users, please try again later!</Text>
            </View>
          )}
          {/* <Modalize
                        ref={modalRef}
                        snapPoint={350}
                        modalStyle={{ backgroundColor: colors.white }}
                    // HeaderComponent={this.renderHeader}
                    >
                        {renderContent()}
                    </Modalize> */}
        </View>
      </View>
    </>
  );
};

export default BuddyUpSwiper;
