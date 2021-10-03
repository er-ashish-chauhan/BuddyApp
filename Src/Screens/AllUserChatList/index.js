import react from "react";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./style";
import { colors, fontNames, Images } from "../../Theme";
import Icon from "react-native-vector-icons/FontAwesome";
// import { height } from "../../Theme/responsiveStyles";
import { useDispatch, useSelector } from "react-redux";
import { matchUserList } from "../../store/actions/chatUserAction";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APP_BASE_URL } from "../../Theme/AppConstants";
import { verticalScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const expiringConnections = [
  {
    dogImages: Images.Images.rubyAlford,
  },
  {
    dogImages: Images.Images.Louie,
    clock: Images.Images.clockRed,
  },
  {
    dogImages: Images.Images.pauline,
    clock: Images.Images.clockBlue,
  },
  {
    dogImages: Images.Images.karsten,
    clock: Images.Images.clockRed,
  },
  {
    dogImages: Images.Images.richard,
    clock: Images.Images.clockBlue,
  },
  {
    dogImages: Images.Images.Louie,
  },
];

const chatList = [
  {
    id: 1,
    dogImages: Images.Images.waldo,
    name: "Waldo",
    message: "That's perfect. we will meet you",
  },
  {
    id: 2,
    dogImages: Images.Images.richard,
    name: "Waldo",
    message: "That's perfect. we will meet you",
  },
  {
    id: 3,
    dogImages: Images.Images.rubyAlford,
    name: "Waldo",
    message: "That's perfect. we will meet you",
  },
  {
    id: 4,
    dogImages: Images.Images.waldo,
    name: "Waldo",
    message: "That's perfect. we will meet you",
  },
  {
    id: 5,
    dogImages: Images.Images.waldo,
    name: "Waldo",
    message: "That's perfect. we will meet you",
  },
  {
    id: 6,
    dogImages: Images.Images.waldo,
    name: "Waldo",
    message: "That's perfect. we will meet you",
  },
];

const AllUserChatList = ({ navigation }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.authenticationReducer);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  // Store last messages
  const [lastMessages, setLastMessages] = useState({});

  useEffect(async () => {
    // const querySanp = await firestore().collection('users').where('uid', '!=', user.uid).get()
    // const allusers = querySanp.docs.map(docSnap => docSnap.data());
    // console.log(JSON.stringify(
    //     allusers, null, 1
    // ), "don")
    // return () => unsubscribe()

    const res = await AsyncStorage.getItem("detail");
    let userData = JSON.parse(res);

    // Get Last Messages
    const unsubscribeArr = [];
    userState.matchesList?.forEach((obj) => {
      const docid =
        obj._id > userData?._id
          ? userData?._id + "-" + obj._id
          : obj._id + "-" + userData?._id;

      const messageRef = firestore()
        .collection("Chats")
        .doc(docid)
        .collection("message")
        .orderBy("createdAt", "desc")
        .limit(1);

      const unsub = messageRef.onSnapshot((querySnap) => {
        if (querySnap?.size) {
          let data = querySnap.docs[0].data();
          console.log("..doc", data);
          lastMessages[obj._id] = data.messages[0].text;
          setLastMessages({ ...lastMessages });
          console.log("...lastMessages", lastMessages);
        }
        unsubscribeArr.push(unsub);
      });
    });

    return () => {
      unsubscribeArr?.forEach((func) => {
        if (func) {
          func();
        }
      });
    };
  }, [userState.matchesList]);

  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(matchUserList(navigation));
    });
  }, []);

  const renderItem = ({ item }) => {
    if (lastMessages[item._id]) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.getItem("detail").then((res) => {
            console.log("[ress", res);
            let parseData = JSON.parse(res);

            //   console.log(parseData,props);
            setTimeout(() => {
              navigation.navigate("Chat", { item: item, userId: parseData });
            }, 2000);
          });
        }}
        // onPress={() => navigation.navigate('Chat', { thread: item })}
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <View
          style={[
            styles.imageContainer,
            {
              borderColor: item.color,
              borderEndWidth: item.percent > 70 ? 5 : 0,
            },
          ]}
        >
          <Image
            resizeMode="cover"
            style={styles.listImageStyle}
            source={
              item.avatar
                ? { uri: APP_BASE_URL + "/uploads/" + item.avatar }
                : Images.Images.rubyAlford
            }
          />
          <Image
            resizeMode="cover"
            style={styles.statusImg}
            source={{ uri: APP_BASE_URL + "/uploads/" + item.icon }}
          />
        </View>
        {/* <View >
          <Text style={[styles.listName,]}>{item.name}</Text>
      </View> */}
      </TouchableOpacity>
    );
  };

  const renderListItem = ({ item }) => {
    if (!lastMessages[item._id]) {
      return null;
    }

    // console.log(item)
    return (
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.getItem("detail").then((res) => {
            console.log("[ress", res);
            let parseData = JSON.parse(res);
            setTimeout(() => {
              navigation.navigate("Chat", { item: item, userId: parseData });
            }, 2000);
          });
        }}
        // onPress={() => navigation.navigate('Chat', { thread: item })}
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <View style={{ width: width * 0.15 }}>
          <Image
            resizeMode={"cover"}
            style={styles.listImageStyle}
            source={item.profile ? item.profile : Images.Images.rubyAlford}
          />
          {/* <Icon name="chevron-left" height={25} width={25}/> */}
        </View>
        <View style={{ alignSelf: "flex-start", marginLeft: 15 }}>
          <Text style={[styles.listName]}>{item.name}</Text>
          {/* <Text style={[styles.message]}>{item.message.slice(0, 90)}</Text> */}
          <View style={{ width: "92%" }}>
            <Text style={[styles.message]}>
              {lastMessages[item._id] ?? "Hi, Nice to meet you"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const emptyList = () => {
    return (
      <View
        style={{
          maxHeight: height * 0.5,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20
        }}
      >
        <Text style={[styles.listHeading, {fontSize: 15}]}>No chat list found</Text>
      </View>
    );
  };
  const emptyList2 = () => {
    return (
      <View
        style={{
          maxHeight: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20
        }}
      >
        <Text style={[styles.listHeading, {fontSize: 15}]}>No chat list found</Text>
      </View>
    );
  };
  return (
    <View style={{ height }}>
      <View style={styles.mainWrapper}>
        <View style={[styles.header]}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.headerLeftIcon}
            >
              <Image
                style={styles.headerLeftIcon}
                source={Images.Images.hamburgerMenu}
              />
            </TouchableOpacity>
            <Text
              style={[styles.headerTitle, { fontFamily: fontNames.boldFont }]}
            >
              Buddy
              <Text style={[styles.headerTitle, { fontWeight: "normal" }]}>
                Up
              </Text>
            </Text>
            <View />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.expiringView}>
            <Text style={[styles.listHeading]}>Expiring Connections</Text>
            <FlatList
              ListEmptyComponent={emptyList2}
              data={userState.matchesList}
              renderItem={renderItem}
              keyExtractor={(item, index) => String(item._id)}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginBottom: 10,
              }}
            />
          </View>
          <View style={styles.listView}>
            <Text style={[styles.listHeading]}>Conversations</Text>
            <FlatList
              contentContainerStyle={{ paddingBottom: 60 }}
              showsVerticalScrollIndicator={false}
              data={userState.matchesList}
              ListEmptyComponent={emptyList}
              renderItem={renderListItem}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AllUserChatList;
