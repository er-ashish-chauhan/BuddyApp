import AsyncStorage from '@react-native-async-storage/async-storage';

const DataManager = {

   

    //method to set access token
    setAccessToken(token) {
        AsyncStorage.setItem('accessToken', JSON.stringify(token))
    },

    //method to get access token
    getAccessToken() {
        try {
            return AsyncStorage.getItem('accessToken').then((token) => {
                return JSON.parse(token)
            })
        }
        catch (error) {
        }
    },

    //method to set access token
    setUserDetail(data) {
        AsyncStorage.setItem('userDetail', JSON.stringify(data))
    },

    //method to get access token
    getUserDetail() {
        try {
            return AsyncStorage.getItem('userDetail').then((data) => {
                return data
            })
        }
        catch (error) {
        }
    },

    clearLocalStorage() {
        AsyncStorage.multiRemove(['accessToken', 'userDetail'])
    }
}
export default DataManager;