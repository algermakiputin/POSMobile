import { Fragment } from "react";
import { Layout, Text } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/app/styles/style";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { routes as routeTypes } from "@/app/types/routes";
import { useRouter } from "expo-router";

const QuickMenu = () => {
    const router = useRouter();
    const menuPressHandler = (path: routeTypes) => {
        router.navigate({pathname: path as any});
    }
    return (
        <Fragment>
            <Text>Quick Menu</Text>
            <Layout style={styles.row}>
                <Layout style={[styles.flex]}>
                    <TouchableOpacity onPress={() => menuPressHandler("NewCategory" as any)}>
                        <View style={[styles.flexCenter, localStyles.menu]}>
                            <Ionicons name="grid-outline" size={20}/>
                            <Text style={localStyles.label}>Categories</Text>
                        </View>
                    </TouchableOpacity>
                </Layout>
                <Layout style={[styles.flex]}>
                    <TouchableOpacity onPress={() => menuPressHandler(routeTypes.newSupplier)}>
                        <View style={[styles.flexCenter, localStyles.menu]}>
                            <Ionicons name="cube-outline" size={20}/>
                            <Text style={localStyles.label}>Supplier</Text>
                        </View>
                    </TouchableOpacity>
                </Layout>
                <Layout style={[styles.flex]}>
                    <TouchableOpacity onPress={() => menuPressHandler(routeTypes.sales)}>
                        <View style={[styles.flexCenter, localStyles.menu]}>
                            <Ionicons name="pie-chart-outline" size={20}/>
                            <Text style={localStyles.label}>Sales</Text>
                        </View>
                    </TouchableOpacity>
                </Layout>
                <Layout style={[styles.flex]}>
                    <TouchableOpacity onPress={() => menuPressHandler('index' as any)}>
                        <View style={[styles.flexCenter, localStyles.menu]}>
                            <Ionicons name="calculator-outline" size={20}/>
                            <Text style={localStyles.label}>New Order</Text>
                        </View>
                    </TouchableOpacity>
                </Layout>
            </Layout>
        </Fragment>
    );
};

const localStyles = StyleSheet.create({
    menu: {
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    label: {
        fontSize: 14
    }
});
export default QuickMenu;