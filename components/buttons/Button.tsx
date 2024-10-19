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
            style={style.container}>
            <View style={[styles.flexColumns, style.buttonWrapper]}>
                <View>
                    <Text style={styles.textColorWhite}>Process New Order</Text>
                </View>
                <View>
                    <View style={styles.flexColumns}>
                        <Text style={styles.textColorWhite}>3 items</Text>
                        <Text style={styles.textColorWhite}>$100</Text>
                        <Text style={styles.textColorWhite}>arrow</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        paddingRight: 20, 
        paddingLeft: 20
    },
    buttonWrapper: {
        padding:15,
        backgroundColor:'#333', 
        alignItems:'center',
        width: '100%',
        borderRadius: 5,
    }
});

export default Button;