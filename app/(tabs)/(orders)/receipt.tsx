import { View } from "react-native";
import styles from "@/app/styles/style";
import { Text, Divider } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const Receipt = () => {
    return (
        <View style={styles.container}>
            <View style={style.receiptWrapper}>
                <Text style={style.header}>Order Complete!</Text>
                <Text style={style.subTitle}>$100</Text>
                <Divider style={style.divider} />
                <Text style={styles.textCenter}>Total Payment</Text>
                <View style={styles.flexColumns}>
                    <Text>Ref Number</Text>
                    <Text>1010239000</Text>
                </View>
                <View style={styles.flexColumns}>
                    <Text>Payment Date Time</Text>
                    <Text>2024-10-10 9AM</Text>
                </View>
                <View style={styles.flexColumns}>
                    <Text>Customer</Text>
                    <Text>John Doe</Text>
                </View>
                <Divider style={style.divider} />
                <View style={styles.flexColumns}>
                    <Text>Total Amount</Text>
                    <Text>$100</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    receiptWrapper: {
        backgroundColor: '#fff',
        padding: 20
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitle: {
        textAlign: 'center'
    },
    divider: {
        marginTop: 20,
        marginBottom: 20
    }
});

export default Receipt;