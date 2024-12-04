import { useRouter } from "expo-router";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import styles from "@/app/styles/style";
import { Input, List, Text} from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';
import { routes } from "@/app/types/routes";
import { blackLightShade } from "@/app/styles/style";

const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

const InventoryHomePage = () => {
    const router = useRouter(); 
    const { ContextMenu } = renderers;
    const renderSearchIcon = () => {
        return <Ionicons name="search-outline" />
    } 

    const filterButtonHandler = () => {
        router.navigate({pathname: routes.itemFilter as any});
    }

    const renderItem = () => {
        return (
            <View style={styles.card}>
                <Text style={{color: '#777'}}>0019201092</Text>
                <Text style={style.itemTitle}>Surf Powder Bar With Fabcon</Text>
                <View style={styles.row}>
                    <View style={styles.col1}>
                        <View style={style.itemAvatar}></View> 
                    </View>
                    <View style={[styles.col2, style.productDetailsColumn]}>
                        <Text>Stocks: 24</Text>
                        <Text>Supplier: J&B</Text>
                        <Text>Category: Sabon</Text>
                        <Text style={style.price}>95.00</Text>
                    </View> 
                </View> 
                <Menu renderer={ContextMenu} style={{width:20, position:'absolute', right: 10, bottom:20}}>
                    <MenuTrigger >
                        <Ionicons name="ellipsis-vertical-outline" size={18} />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Save`)} text='View' />
                        <MenuOption onSelect={() => router.navigate({pathname: routes.editItem as any})}  text="Edit"/>
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
                    <TouchableOpacity onPress={filterButtonHandler}>
                        <Ionicons name="filter-outline" size={24} />
                    </TouchableOpacity>
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
    },
    price: {
        fontWeight: 'bold'
    }
});

export default InventoryHomePage;