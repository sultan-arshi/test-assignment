import Entypo from '@expo/vector-icons/Entypo';
import react from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface CheckBoxProps {
    /**
     * Determind weather the CheckBox is checked or not
     */
    checked: boolean;
    /**
     * onPress event of the CheckBox
     */
    onPress: () => void;
    /**
     * optinal size of the checkBox
     */
    size?: number;
}


const CheckBox = (props: CheckBoxProps) => {


    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.checkbox}>
                {props.checked && <Entypo name="check" size={props.size ?? 19} />}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'gray',
    },
    checkbox: {
    },
})

export default CheckBox;