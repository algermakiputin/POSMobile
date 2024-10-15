import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
const CustomerSelectCard = () => {
    return (
        <View style={{height:60}}>
            <View style={style.customerWrapper}>
                <View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
                    <View style={style.avatar}></View>
                    <View style={style.customerDetails}>
                        <Text>Customer</Text>
                        <Text>Alger</Text>
                    </View>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                    <Text>Edit Me</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    customerWrapper: {
        backgroundColor: '#fff',
        borderRadius:5,
        height:60,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    avatar: {
        height:60,
        width:60,
        backgroundColor: '#ddd'
    },
    customerDetails: {
        marginLeft: 10
    }
});

export default CustomerSelectCard;