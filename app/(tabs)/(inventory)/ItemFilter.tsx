import { ScrollView, StyleSheet, View } from "react-native";
import { Text, Divider, Layout, CheckBox } from "@ui-kitten/components";
const ItemFilter = () => {
    return ( 
        <View style={localStyle.container}>
            <View style={localStyle.filterWrapper}>
                <Text style={localStyle.filterHeader}>Category</Text>
                <Divider />
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                    <View>  
                    </View>
                    <View>
                        <Text>Hello</Text>
                    </View>
                    <View>
                        <Text>Hello</Text>
                    </View>
                </View>
            </View>
        </View> 
    );
}

const localStyle = StyleSheet.create({
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
        marginBottom: 10
    },
    filterWrapper: {
        marginBottom: 20
    },
    filterColumn: {
        flex: 1
    }
});

export default ItemFilter;