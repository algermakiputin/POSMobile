import { StyleSheet, Text, View } from "react-native";
import styles from "@/app/styles/style";
import { Fragment } from "react";
const SalesScreen = () => {
    return (
        <Fragment>
            <View style={style.cardWrapper}>
                <Text>Total Sales (Today)</Text>
                <Text>19,500</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.sectionHeader}>Recent Transaction</Text>
                <View style={styles.card}>

                </View>
            </View>
        </Fragment>
    );
}

const style = StyleSheet.create({
    cardWrapper: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        maxHeight: 200, 
        backgroundColor: '#fff', 
        borderRadius: 20
    }
});

export default SalesScreen;