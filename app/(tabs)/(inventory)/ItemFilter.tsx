import { ScrollView, StyleSheet, View } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
const ItemFilter = () => {
    const categories = ['Drinks', 'Detergents', 'Fish', 'Frozen Meat', 'Candy', 'Beverage', 'Alcohol', 'Medicine', 'Load'];
    const suppliers = ['J&T', 'ABS-FISH', 'MAGNOLIA', 'Jupiter', 'Mars', 'Venus', 'Sun & Moon'];
    return ( 
        <View style={localStyle.container}>
            <ScrollView>
                <View style={localStyle.filterWrapper}>
                    <Text style={localStyle.filterHeader}>Category</Text>
                    <Divider style={localStyle.divider}/>
                    <View style={localStyle.filterContainer}>
                        {
                            categories.map((category: string) => (
                                <View style={localStyle.labelContainer}>
                                    <Text>{category}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                <Divider style={localStyle.divider}/>
                <View style={localStyle.filterWrapper}>
                    <Text style={localStyle.filterHeader}>Supplier</Text>
                    <Divider style={localStyle.divider}/>
                    <View style={localStyle.filterContainer}>
                        {
                            categories.map((category: string) => (
                                <View style={localStyle.labelContainer}>
                                    <Text>{category}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                <Divider style={localStyle.divider} />
            </ScrollView>
        </View> 
    );
}

const localStyle = StyleSheet.create({
    divider: {
        marginBottom: 15
    },
    filterContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-between', 
        flexWrap: 'wrap'
    },
    labelContainer: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: '#f4f4f5',
        marginBottom: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        display:'flex',
        padding: 20,
        flexDirection: 'column'
    },
    filterHeader: {
        fontWeight: 700,
        marginBottom: 15
    },
    filterWrapper: {
        marginBottom: 20
    },
    filterColumn: {
        flex: 1
    }
});

export default ItemFilter;