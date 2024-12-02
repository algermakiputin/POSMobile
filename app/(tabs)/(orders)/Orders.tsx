import { Input, Layout, Text, List } from "@ui-kitten/components";
import { ScrollView, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import styles from "@/app/styles/style";
import Button from "@/components/buttons/Button";
import { Ionicons } from "@expo/vector-icons";

const Orders = () => {
    const route = useRouter();
    const processOrderHandler = () => {
        route.navigate('/(orders)/summary');
    }

    const renderItem = () => {
        return (
            <Layout style={[style.item]}>
                <Layout  style={[style.layout, style.avatar]}>
                    <Ionicons name="image-outline" size={30} style={{color: '#ccc'}}/>
                </Layout>
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
        )
    }

    const searchIcon = () => {
        return <Ionicons name="search-outline" />
    }

    return (
        <View style={{position: 'relative', flex:1}}>
            <View style={{padding: 20}}>
                <Input placeholder="Search Item" accessoryLeft={searchIcon} />
            </View>
            <View style={{paddingLeft: 20}}>
                <View style={{backgroundColor: '#fff'}}>
                    <ScrollView  horizontal={true} >
                        <Layout style={[style.categoriesWrapper, {flex:1, flexDirection: 'row', padding: 10}]}>
                            <View style={style.category}> 
                                <Ionicons name="grid-outline" style={style.categoryIcon} size={14} />
                                <Text>Foods</Text>
                            </View>
                            <View style={style.category}> 
                                <Ionicons name="grid-outline" style={style.categoryIcon} size={14}/>
                                <Text>Liquor</Text>
                            </View>
                            <View style={style.category}> 
                                <Ionicons name="grid-outline" style={style.categoryIcon} size={14}/>
                                <Text>Drinks</Text>
                            </View>
                            <View style={style.category}> 
                                <Ionicons name="grid-outline" style={style.categoryIcon} size={14}/>
                                <Text>Frozen</Text>
                            </View>
                            <View style={style.category}> 
                                <Ionicons name="grid-outline" style={style.categoryIcon} size={14}/>
                                <Text>Fish</Text>
                            </View>
                            <View style={style.category}> 
                                <Ionicons name="grid-outline" style={style.categoryIcon} size={14}/>
                                <Text>Soft Drinks</Text>
                            </View>
                            <View style={style.category}> 
                                <Ionicons name="grid-outline" style={style.categoryIcon} size={14}/>
                                <Text>Detergents</Text>
                            </View>
                        </Layout>
                        
                    </ScrollView>
                </View>
            </View> 
            <View style={styles.container}>
                <List
                    style={{backgroundColor: 'transparent'}}
                    data={new Array(10).fill({title: 'Alger'})}
                    renderItem={renderItem}
                />
            </View> 
            <View style={styles.floatBottom}>
                <Button onPressHandler={processOrderHandler} title="Proceed New Order"/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    categoryIcon: {
        backgroundColor: '#f4f4f5',
        padding: 10,
        borderRadius: 100,
        marginBottom: 3,
    },
    category: {
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        width: 85,
        marginRight: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesWrapper: {
    
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
        height: 75,
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