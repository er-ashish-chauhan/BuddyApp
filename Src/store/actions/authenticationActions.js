import { apiConstants as types } from '../../Theme/AppConstants'

// Login Action
export const loginAction = (email, password, navigation) => (
    {
        type: types.API_LOGIN_LOAD,
        email,
        password,
        navigation
    })
export const logoutAction = (navigation) => (
    {
        type: types.API_LOGOUT_LOAD,
        navigation

    })
//signup action
export const signupAction = (payload, navigation) => ({
    type: types.API_SIGNUP_LOAD,
    payload,
    navigation
})
//UPDATE PROFILE
export const updateAction = (payload, navigation) => ({
    type: types.API_EDIT_USER_DETAILS_LOAD,
    payload,
    navigation
})

export const userExist = (email, page) => ({
    type: "USER_EXIST_LOAD",
    email,
    page
})

// Forgot Password Action
export const forgotPasswordAction = (email) => ({
    type: types.API_FORGOT_PASSWORD_LOAD,
    email,
})

export const resetPasswordAction = (newPassword, query) => ({
    type: types.API_RESET_PASSWORD_LOAD,
    newPassword,
    query,
})

export const checkResetPasswordAction = (id) => ({
    type: types.API_CHECK_RESET_PASSWORD_LOAD,
    id,
})

export const notificationSettingGet = (value) => ({
    type: 'NOTIFICATION_SETTING_GET_LOAD',
    value
})
export const adsSettingGet = (value) => ({
    type: 'ADS_SETTING_GET_LOAD',
    value
})

/**
 * @method updateAvatar
 * @description Action used for update Avatar
 */
export const updateAvatar = (payload, onSuccess, onError) => ({
    type: types.UPDATE_AVATAR,
    payload,
    onSuccess,
    onError
})

/**
 * @method getUserDetails
 * @description Action used for get user details 
 */
export const getUserDetails = (onSuccess, onError) => ({
    type: types.GET_USER_DETAILS,
    onSuccess,
    onError
})
/**
 * @method changeUserPwd
 * @description Action used for change password
 */
export const changeUserPwd = (payload, onSuccess, onError) => ({
    type: types.CHANGE_PWD,
    payload,
    onSuccess,
    onError
})