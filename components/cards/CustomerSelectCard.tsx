import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
const CustomerSelectCard = () => {
    const editButtonHandler = () => {
        alert('editing');
    }
    return (
        <View style={{height:60}}>
            <View style={style.customerWrapper}>
                <View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
                    <View style={style.avatar}>
                        <Ionicons name="person-circle-outline" size={26} />
                    </View>
                    <View style={style.customerDetails}>
                        <Text>Customer</Text>
                        <Text>Alger</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={editButtonHandler}>
                    <View style={{flex:1, alignItems: 'flex-end', justifyContent:'center'}}>
                        <Text>Edit <Ionicons name="create-outline" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    customerWrapper: {
        backgroundColor: '#fff',
        borderRadius:5,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 20,
       
    },
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 26,
        width: 26
    },
    customerDetails: {
        marginLeft: 10
    }
});

export default CustomerSelectCard;