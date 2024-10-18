import { TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import styles from "@/app/styles/style";

type Props = {
    onPressHandler?: () => void;
}

const Button = (Props: Props) => {
    const processOrderHandler = () => {
        if (Props?.onPressHandler) Props.onPressHandler();
    }
    return (
        <TouchableOpacity 
            onPress={processOrderHandler}
            style={style.buttonWrapper}>
            <View style={[styles.flexColumns, {backgroundColor: 'red', width:300}]}>
                <View>
                    <Text>Process New Order</Text>
                </View>
                <View>
                    <View style={styles.flexColumns}>
                        <Text>3 items</Text>
                        <Text>$100</Text>
                        <Text>arrow</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    // proceedButton: {
    //     // flex:1,
    //     justifyContent: 'space-between',
    //     width: '100%', 
    //     backgroundColor: 'red',
    //     flexDirection: 'row',
    //     alignItems:'center',
    //     padding: 10,
    //     margin:'auto'
    // },
    buttonWrapper: {
        // paddingLeft: 20, 
        // paddingRight: 20,
        // marginBottom:10, 
        // height:50
    }
});

export default Button;