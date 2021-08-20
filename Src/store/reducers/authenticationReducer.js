import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'
import {apiConstants as types} from '../../Theme/AppConstants'

const initialState = {
    isLoading : false,
    result:{},
    errorState:null,
    isExpired:null,
    status:0,
    userList:[],
    matchesList:[]
}

export const authenticationReducer = (state = initialState, action)=>{
    switch (action.type) {

        // Authentication Cases
        // Login
        case types.API_LOGIN_LOAD:
            return {...state,isLoading :true,errorState:null}
        case types.API_LOGIN_SUCCESS:
            return {...state,isLoading:false, result : action.result}
            
        case types.API_LOGOUT_LOAD:
            AsyncStorage.clear()
            action.navigation.dispatch(
             CommonActions.reset({
               index: 0,
               routes: [
                 { name: 'Welcome' },
                 
               ],
             })
           );    

            return {...state,isLoading:false}
            //sign
            case types.API_SIGNUP_LOAD:
            return {...state,isLoading :true,errorState:null}
        case types.API_SIGNUP_SUCCESS:
            return {...state,isLoading:false,status:1, }

        // Forgot Password
        case types.API_FORGOT_PASSWORD_LOAD:
            return {...state,errorState:null, isLoading:true}
        case types.API_FORGOT_PASSWORD_SUCCESS:
            return {...state, isLoading:false}
        // user list
            case types.API_GET_MATCH_LIST_LOAD:
            return {...state,errorState:null, isLoading:true}
        case types.API_GET_MATCH_LIST_SUCCESS:
            return {...state, isLoading:false,matchesList:action.result.data}
        ///match list
            case types.API_GET_USER_LIST_LOAD:
            return {...state,errorState:null, isLoading:true}
        case types.API_GET_USER_LIST_SUCCESS:
        let data=action.result    
        data.map((x)=>{
                x.swiperView=false
            })
            return {...state, isLoading:false,userList:data}
        
        
            //Authentication Failed Case
        case types.API_AUTHENTICATION_FAILED:
            return {...state, isLoading:false}
        case types.API_AUTHENTICATION_ERROR:
            return {...state, isLoading:false}
        case "API_SHOW_DATA_LOAD":
            let updateData=state.userList
        updateData.map((x,index)=>{
            if(index==action.index){
                x.swiperView=!x.swiperView
            }
        })    
        console.log(updateData,'update data');
        return{
             ...state,userList:updateData   
            }
        //Default case
        default:
            return {...state} 

    }
}