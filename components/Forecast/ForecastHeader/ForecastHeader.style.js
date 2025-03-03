import {StyleSheet} from "react-native";
import {Size} from "../../../constants/Size";

export const s = StyleSheet.create({
    header: {
    flexDirection: 'row',
    },
    header_texts: {
        flex: 1,
        alignItems: 'center',
        marginRight: 30,

    },
    subtitle: {
        fontSize: Size.M
    },
    back_button: {
        width: 30,
    }
})