import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import { useState } from "react";
import { primaryColor } from "@/app/styles/style";
const ItemFilter = () => {
    const categories = ['Drinks', 'Detergents', 'Fish', 'Frozen Meat', 'Candy', 'Beverage', 'Alcohol', 'Medicine', 'Load'];
    const suppliers = ['J&T', 'ABS-FISH', 'MAGNOLIA', 'Jupiter', 'Mars', 'Venus', 'Sun & Moon'];
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSupplier, setSelectedSupplier] = useState('');

    const categoryFilterSelectHandler = (category: string) => {
        setSelectedCategory(category);
    }

    const supplierSelectHandler = (supplier: string) => {
        setSelectedSupplier(supplier);
    }
    
    return ( 
        <View style={localStyle.container}>
            <ScrollView>
                <View style={localStyle.filterWrapper}>
                    <Text style={localStyle.filterHeader}>Category</Text>
                    <Divider style={localStyle.divider}/>
                    <View style={localStyle.filterContainer}>
                        {
                            categories.map((category: string, index: number) => (
                                <TouchableOpacity onPress={() => categoryFilterSelectHandler(category)} key={`category-${index}`}>
                                    <View style={[localStyle.labelContainer, selectedCategory == category ? {backgroundColor: primaryColor} : {}]}>
                                        <Text style={selectedCategory == category ? {color: '#fff'} : {}}>{category}</Text>
                                    </View>
                                </TouchableOpacity>
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
                            suppliers.map((supplier: string, index: number) => (
                                <TouchableOpacity onPress={() => supplierSelectHandler(supplier)} key={`supplier-${index}`}>
                                    <View style={[localStyle.labelContainer, selectedSupplier == supplier ? localStyle.selectedFilter : {}]}>
                                        <Text style={selectedSupplier == supplier ? localStyle.selectedFilterText : {}}>{supplier}</Text>
                                    </View>
                                </TouchableOpacity>
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
        flexWrap: 'wrap',
        gap: 10
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
    },
    selectedFilter: {
        backgroundColor: primaryColor
    },
    selectedFilterText: {
        color: '#fff'
    }
});

export default ItemFilter;