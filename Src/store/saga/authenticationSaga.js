import { takeLatest, call, put } from 'redux-saga/effects'
import axios from '../axios'
import { apiConstants as types } from '../../Theme/AppConstants'
import DataManager from '../../Components/DataManager'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setClientToken } from '../axios/apiKit'
// import firebaseSDK from '../../../config/firebaseSdk'

// Generator to run when Authentication Failed
function* authenticationFailedSaga(result) {

    yield put({
        type: types.API_AUTHENTICATION_FAILED,
    })

}

// Generator to run when Authentication Error occured in response
function* authenticationErrorSaga(result) {
    console.log('errr', result);
    yield put({
        type: types.API_AUTHENTICATION_ERROR,
    })
    setTimeout(() => {
        alert(result.error)
    }, 200);
}

// Generator to Call Login side-effects
function* loginSaga(action) {
    const { email, password, navigation } = action;
    try {
        const result = yield call(axios.login, email, password)
        console.log('resultresult', result);
        if (result.status === 1) {
            console.log('login success');
            setClientToken(result.result.data.data.access_token)

            console.log('v', result.result);
            AsyncStorage.setItem('detail', JSON.stringify(result.result.data.data))
            //   firebaseSDK.login({email:email,password:password})
            yield put({
                type: types.API_LOGIN_SUCCESS,
                result: result.result.data.data,
                navigation: navigation.navigate('CustomSwiper')
            })
        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}
function* signupSaga(action) {
    const { payload, navigation } = action;
    console.log('sign saga call');
    try {
        const result = yield call(axios.signup, payload)
        console.log(result);
        if (result.status === 1) {
            console.log('sigup success');
            AsyncStorage.setItem('detail', JSON.stringify(result.result.data.data))
            // firebaseSDK.createAccount(JSON.parse(payload))
            console.log('v', result.result);
            setClientToken(result.result.data.data.access_token)

            yield put({
                type: types.API_SIGNUP_SUCCESS,
                result: result.result.data.data,
            })
            setTimeout(() => {
                navigation.navigate('CustomSwiper')
            }, 200);
        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}
function* profileUpdateSaga(action) {
    const { payload, navigation } = action;
    console.log('sign saga call');
    try {
        const result = yield call(axios.updateProfile, payload)
        console.log(result);
        if (result.status === 1) {

            AsyncStorage.setItem('detail', payload)

            yield put({
                type: types.API_EDIT_USER_DETAILS_SUCCESS,
                result: result.result.data.data,
                // navigation:navigation.goBack()

            })
            setTimeout(() => {
                alert(result.result.data.msg)
            }, 200);
            setTimeout(() => {
                navigation.navigate("Home");
            }, 2000);
        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}

// Generator to Call Reset Password side-effects
function* forotSaga(action) {
    const { email } = action;
    try {
        const result = yield call(axios.forgot, email)
        console.log('forgot password', result);
        if (result.status === 1) {
            console.log('forgot password', result);
            yield put({
                type: types.API_FORGOT_PASSWORD_SUCCESS,
                // result:result.result.data.data,  
            })
        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}
function* userListSaga(action) {
    console.log('action', action);
    const { navigation } = action;
    try {
        const result = yield call(axios.userList)
        if (result.status === 1) {
            console.log('userList', result);
            yield put({
                type: types.API_GET_USER_LIST_SUCCESS,
                result: result.result.data,
            })
        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}
function* matchListSaga(action) {
    console.log('action', action);
    const { navigation } = action;
    try {
        const result = yield call(axios.matchList)
        if (result.status === 1) {
            console.log('userList', result);
            yield put({
                type: types.API_GET_MATCH_LIST_SUCCESS,
                result: result.result.data,
            })
        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}
function* userLikeSaga(action) {
    console.log('action', action);
    const { navigation } = action;
    try {
        const result = yield call(axios.userLike, action.item._id)
        if (result.status === 1) {
            console.log('userList', result);
            yield put({
                type: "API_LIKE_SUCCESS",
                result: result.result.data,
            })

            if (result?.result?.data?.matches) {
                if (result?.result?.data?.matches == true) {
                    action.navigation.navigate('MatchingScreen', { item: action.item })
                }
            }
        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}
function* userDisLikeSaga(action) {
    console.log('action', action);
    const { navigation } = action;
    try {
        const result = yield call(axios.userDisLike, action.item._id)
        if (result.status === 1) {
            console.log('userList', result);
            yield put({
                type: "API_DISLIKE_SUCCESS",
                result: result.result.data,
            })


        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}
function* userExist(action) {
    console.log('action', action);
    const { navigation } = action;
    try {
        const result = yield call(axios.userExits, action.email)
        if (result.status === 1) {
            console.log('userList', result);
            yield put({
                type: "USER_EXIST_SUCCESS",
                // result:result.result.data,  
            })
            if (result.result.data.userExist == true) {
                alert(result.result.data.msg)
            }
            else {

                action.page.setPage(2)
            }
        }
        else {
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}

function* updateAvatar(action) {
    const { payload, navigation } = action;
    try {
        const result = yield call(axios.updateAvatar, payload)
        console.log(result);
        if (result.status === 1) {
            action.onSuccess(result.result);
        }
        else {
            action.onError(result.result);
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}

function* userDetails(action) {
    try {
        const result = yield call(axios.getUserDetails)
        console.log(result);
        if (result.status === 1) {
            action.onSuccess(result.result);
        }
        else {
            action.onError(result.result);
            yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        yield call(authenticationErrorSaga, error)
    }
}

function* changeUserPwd(action) {
    try {
        const result = yield call(axios.changePwd, action.payload)
        console.log(result);
        if (result.status === 1) {
            action.onSuccess(result.result);
        }
        else {
            action.onError(result.result);
            // yield call(authenticationFailedSaga, result)
        }
    }
    catch (error) {
        action.onError(error);
        // yield call(authenticationErrorSaga, error)
    }
}

// Generator to Call Reset Password side-effects
// function* resetPasswordSaga(action){
//     const {newPassword,query} = action;
//     try{
//         const result = yield call(axios.resetPassword,newPassword,query) 
//         if(result.status === 1 ){

//             yield put({
//                 type:types.API_RESET_PASSWORD_SUCCESS,
//                 result:result.result.data.data,  
//             })
//         }
//         else{
//             yield call(authenticationFailedSaga,result)
//         }
//     }
//    catch(error){
//         yield call(authenticationErrorSaga,error)
//     }
// }


export default function* rootAuthenticationSaga() {
    yield takeLatest(types.API_LOGIN_LOAD, loginSaga)
    yield takeLatest(types.API_SIGNUP_LOAD, signupSaga)
    yield takeLatest(types.API_FORGOT_PASSWORD_LOAD, forotSaga)
    yield takeLatest(types.API_EDIT_USER_DETAILS_LOAD, profileUpdateSaga)
    yield takeLatest(types.API_GET_USER_LIST_LOAD, userListSaga)
    yield takeLatest(types.API_GET_MATCH_LIST_LOAD, matchListSaga)
    yield takeLatest("API_LIKE_LOAD", userLikeSaga)
    yield takeLatest("API_DISLIKE_LOAD", userDisLikeSaga)
    yield takeLatest("USER_EXIST_LOAD", userExist)
    yield takeLatest(types.UPDATE_AVATAR, updateAvatar);
    yield takeLatest(types.GET_USER_DETAILS, userDetails);
    yield takeLatest(types.CHANGE_PWD, changeUserPwd);

}