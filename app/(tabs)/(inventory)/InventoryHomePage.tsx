import { useRouter } from "expo-router";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import styles from "@/app/styles/style";
import { Input, Button, List, Layout, OverflowMenu, MenuItem } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
} from 'react-native-popup-menu';


const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

const InventoryHomePage = () => {
    const router = useRouter();
    const newItemButtonHandler = () => {
        router.navigate('/(inventory)/supplier/NewSupplier');
    }
    const { SlideInMenu, ContextMenu } = renderers;
    const renderSearchIcon = () => {
        return <Ionicons name="search-outline" />
    }

    const renderItemAccessory = (): React.ReactElement => (
        <Button size='tiny'>
    FOLLOW
        </Button>
      );
    
    const renderItemIcon = () => (
        null
    );

    const renderItem = () => {
        return (
            <View style={styles.card}>
                <Text style={style.itemTitle}>Surf Powder Bar With Fabcon</Text>
                <View style={styles.row}>
                    <View style={styles.col1}>
                        <View style={style.itemAvatar}></View> 
                    </View>
                    <View style={[styles.col2, style.productDetailsColumn]}>
                        <Text>Stocks: 24</Text>
                        <Text>Supplier: J&B</Text>
                        <Text>Category: Sabon</Text>
                        <Text>Location: 1</Text>
                    </View> 
                </View> 
                <Menu renderer={ContextMenu} style={{width:20, position:'absolute', right: 10, bottom:20}}>
                    <MenuTrigger >
                        <Ionicons name="ellipsis-vertical-outline" size={18} />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Save`)} text='View' />
                        <MenuOption onSelect={() => alert(`Save`)} text='Edit' />
                        <MenuOption onSelect={() => alert(`Delete`)} >
                            <Text style={{color: 'red'}}>Delete</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
    return ( 
        <View style={styles.container}> 
            <View style={style.filterWrapper}>
                <Input accessoryLeft={renderSearchIcon} style={style.filterLeft}/>
                <View style={style.filterRight}>
                    <Ionicons onPress={() => alert(0)} name="filter-outline" size={24} />
                </View>
            </View>
            <List
                style={{backgroundColor: 'transparent'}}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
    // minHeight: 144,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    actionsContainer: {
        display:'flex', 
        alignItems: 'flex-end',
        marginBottom: 15
    },
    button: {
        backgroundColor:'#006FFD',
        height:40, 
        width:125, 
        flex: 1, 
        justifyContent:'center', 
        alignContent:'center', 
        alignItems:'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14
    },
    productDetailsColumn: {
      
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    itemAvatar: {
        height:85,
        width:85,
        backgroundColor:'#ddd',
        borderRadius: 5
    },
    filterWrapper: {
        marginBottom:15, 
        flexDirection: 'row',
        display: 'flex'
    },
    filterLeft: {
        width:'auto', 
        flex:1
    },
    filterRight: {
        width:40, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
});

export default InventoryHomePage;