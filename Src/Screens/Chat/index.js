import react from "react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActionSheetIOS,
  ScrollView,
} from "react-native";
import styles from "./style";
import { colors, Images } from "../../Theme";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import FastImage from 'react-native-fast-image'
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loader } from "../../Components/Loader";
const PROP = [
  {
    key: "one",
    text: "Hi Waldo, I am Buddy Science Both love laying fetch, Do you want to meet up?",
  },
  {
    key: "two",
    text: "Woof Waldo, I am BUddy and i like that you are a little older, like me. Are you free for a low-key playdate?",
  },
  {
    key: "three",
    text: "Hello Waldo, I am Buddy. It looks like we are a match base of our love for naps. Do you have any time this week to meat for a short walk?",
  },
];

const Chat = (props) => {
  // const [messages, setMessages] = useState(chatMessage);
  const [messages, setMessages] = useState(null);
  const [value, setValue] = useState("two");
  const [userId, setUserId] = useState(props.route.params.userId);
  const [SELECT, setSelect] = useState(false);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  // const user = auth().currentUser.toJSON()

  useEffect(async () => {
    // AsyncStorage.getItem('detail').then((res)=>{
    //   console.log('[ress',res);
    //     let parseData=JSON.parse(res)
    //     console.log(parseData);
    //     if(userId==undefined&&userId==null)
    //     {
    //         setUserId(parseData)
    //     }
    //     console.log(parseData,props);
    // })

    const docid =
      props.route.params.item._id > userId?._id
        ? userId?._id + "-" + props.route.params.item._id
        : props.route.params.item._id + "-" + userId?._id;
    const messageRef = firestore()
      .collection("Chats")
      .doc(docid)
      .collection("message")
      .orderBy("createdAt", "desc");
    console.log("messageRef", messageRef);

    const unSubscribe = messageRef.onSnapshot((querySnap) => {
      const allmsg = querySnap.docs.map((docSanp) => {
        // console.log('docmap',doc);
        const data = docSanp.data();
        console.log("temp doc", data);
        if (data.createdAt) {
          return {
            ...docSanp.data().messages[0],
            createdAt: docSanp.data().createdAt.toDate(),
          };
        } else {
          return {
            ...docSanp.data(),
            createdAt: new Date(),
          };
        }
      });
      console.log("alll msg", allmsg);
      setMessages(allmsg);
    });
    clearNotifications();

    return () => {
      clearNotifications();
      unSubscribe();
    };
  }, []);

  const clearNotifications = () => {
    console.log("..userId", userId?._id);
    try {
      firestore()
        .collection("Notifications")
        .doc(userId?._id)
        .set({ [props.route.params.item._id]: 0 }, { merge: true });
    } catch (error) {
      console.error("...Error", JSON.stringify(error));
    }
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const docid =
      props.route.params.item._id > userId?._id
        ? userId?._id + "-" + props.route.params.item._id
        : props.route.params.item._id + "-" + userId?._id;

    try {
      // setTimeout(() => {
      firestore()
        .collection("Chats")
        .doc(docid)
        .collection("message")
        .add({
          messages,
          createdAt: firestore.FieldValue.serverTimestamp(),
          //   sentBy:userId._id,
          //   sentTo:props.route.params.item._id,
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
      // }, 2000);

      // Add count to other user's notifications
      firestore()
        .collection("Notifications")
        .doc(props.route.params.item._id)
        .set(
          { [userId?._id]: firestore.FieldValue.increment(1) },
          { merge: true }
        );

      // Get other user's Notification Count
      firestore()
        .collection("Notifications")
        .doc(props.route.params.item._id)
        .get()
        .then((doc) => {
          let notificationsCount = 0;
          if (doc.exists) {
            notificationsCount = Object.values(doc.data()).reduce(
              (total = 0, num) => {
                return total + num;
              }
            );
          }
          console.log("..notificationsCount", notificationsCount);
        });
    } catch (error) {
      console.error("..onSend", JSON.stringify(error));
    }
  });

  const renderChatEmptyView = () => {
    return (
      <View style={styles.wrapper}>
        <View style={{ height: 60, justifyContent: "center" }}>
          <Text style={styles.heading}>One of our preset messages:</Text>
        </View>

        {PROP.map((res) => {
          return (
            <View key={res.key} style={styles.container}>
              <View style={styles.selectionText}>
                <Text style={styles.radioText}>{res.text}</Text>
              </View>
              <View style={styles.radioButtonView}>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    // setFirstMessage(res.name)
                    setValue(res.key);
                    setSelect(true);

                    onSend([
                      {
                        _id: userId._id,
                        text: res.text,
                        createdAt: new Date(),
                        user: {
                          _id: userId._id,
                          name: userId.name,
                          avatar: Images.Images.buddyUpLogo,
                        },
                      },
                    ]);
                  }}
                >
                  {value === res.key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View style={{ height: 60, justifyContent: "center" }}>
          <Text style={styles.heading}>Or right your own::</Text>
        </View>
      </View>
    );
  };

  const renderBubble = (props) => {
    // if(props.user._id == userId._id){}
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: colors.primaryBlue,
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const renderItem = (obj) => {
    // console.log(obj.currentMessage.user.avatar);
    return (
      <Image
        resizeMode="contain"
        source={Images.Images.buddyUpLogo}
        // source={{uri: obj.currentMessage.user.avatar}}
        style={{ width: 50, height: 50 }}
      />
    );
  };

  return (
    <>
      {/* <SafeAreaView style={{ flex: 1, }}>
                <StatusBar backgroundColor="#0090e6" barStyle="dark-content" />
                <View style={styles.mainWrapper}> */}
      <View style={styles.header}>
        {console.log(userId, "jjjj")}
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.headerleftView}
        >
          <Icon name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <View style={[styles.headerleftView, { flex: 0.8 }]}>
          <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>
            {props.route.params.item.name}
          </Text>
        </View>
        <View style={styles.headerleftView}>
          <Icon name="dots-vertical" size={30} color="white" />
        </View>
      </View>
      <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
        {messages ? (
          <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: userId?._id,
              name: userId?.name,
              avatar: Images.Images.buddyUpLogo,
            }}
            renderChatEmpty={() => renderChatEmptyView()}
            inverted={true}
            renderBubble={renderBubble}
            showUserAvatar
            renderAvatar={(obj) => renderItem(obj)}
            showAvatarForEveryMessage={true}
          />
        ) : (
          <Loader loading={messages == null ? true : false} />
        )}
      </View>
      {/* </View>
            </SafeAreaView> */}
    </>
  );
};

export default Chat;
