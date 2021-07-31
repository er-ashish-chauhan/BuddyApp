import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontNames , typography} from "../../Theme";



const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        alignItems: "center"
    },
    inputView: {
        height: 55,
        width: '90%',
        borderRadius: 50 / 2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        borderColor:'gray',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textInputStyle:{
        width:"100%", 
        paddingHorizontal:30,
        fontSize:typography.FONT_SIZE_16,
        // justifyContent:"center",
        // alignItems:"center"
    }
 

})
export default styles;
