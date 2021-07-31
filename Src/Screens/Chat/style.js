import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontNames, typography } from "../../Theme";
const width = Dimensions.get('screen').width
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import { GiftedChat } from 'react-native-gifted-chat'



const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        alignItems: "center",
        width: "100%"
    },
    header: {
        height: 55,
        width: "100%",
        backgroundColor: colors.primaryBlue,
        flexDirection: "row"
    },
    headerTitle: {
        fontSize: 22,
        color: colors.white
    },
    headerleftView: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },


    wrapper: {
        marginHorizontal: 20,
        justifyContent: "space-between",
        height: "100%",
        transform: [{ scaleY: -1 }]
    },
    container: {
        paddingHorizontal:10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginVertical: 30
    },
    heading: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
    radioText: {
        fontSize: 17,
        color: '#000',

    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.primaryBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: colors.primaryBlue,
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
    selectionText: {
        flex: 0.8,
        backgroundColor: "#e6e6e6",
        padding: 15
    },
    radioButtonView: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    }

})
export default styles;
