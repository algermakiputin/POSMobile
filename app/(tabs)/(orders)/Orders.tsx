import { Input, Layout, Text } from "@ui-kitten/components";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "@/app/styles/style";
import Button from "@/components/buttons/Button";

const Orders = () => {
    const route = useRouter();
    const processOrderHandler = () => {
        route.navigate('/(orders)/summary');
    }
    return (
        <View style={{position: 'relative', flex:1}}>
            <View style={[styles.container, {marginBottom:20}]}>
                <Input placeholder="Search Item" />
            </View>
            {/* <View style={{backgroundColor: '#fff'}}>
                <ScrollView  horizontal={true} >
                    <Layout style={[style.categoriesWrapper, {flex:1, flexDirection: 'row', marginBottom: 20}]}>
                        <View style={style.category}> 
                        </View>
                        <View style={style.category}>

                        </View>
                        <View style={style.category}>

                        </View>
                        <View style={style.category}>

                        </View>
                        <View style={style.category}>

                        </View>
                        <View style={style.category}>

                        </View>
                        
                    </Layout>
                     
                </ScrollView>
            </View> */}
            <ScrollView>
                <View style={styles.container}>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                    <Layout style={[style.item]}>
                        <Layout  style={[style.layout, style.avatar]}></Layout>
                        <Layout  style={[style.layout, {padding: 10, alignItems:'flex-start'}]}>
                            <Text>Part Number Coke</Text>
                            <Text>$100</Text>
                        </Layout>
                        <Layout  style={style.quantity}>
                            <Text>-</Text>
                            <Text>0</Text>
                            <Text>+</Text>
                        </Layout>
                    </Layout>
                </View>
            </ScrollView>
            <View style={styles.floatBottom}>
                <Button onPressHandler={processOrderHandler} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    category: {
        minHeight: 80,
        backgroundColor: '#ddd',
        width: 110,
        marginRight: 10
    },
    categoriesWrapper: {
        marginLeft: 20
    },
    item: {
        minHeight: 75,
        flex: 1,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 15
    },
    avatar: {
        width: 75,
        backgroundColor: '#ddd',
        height: 75
    },
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    quantity: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent:'space-evenly', 
        alignItems: 'center'
    },
    proceedButton: {
        flex:1,
        justifyContent: 'space-between',
        width: '100%', 
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems:'center',
        padding: 10
    },
    buttonWrapper: {
        paddingLeft: 20, 
        paddingRight: 20,
        marginBottom:10, 
        height:50
    }
});

export default Orders;