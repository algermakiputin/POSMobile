import { Icon, IconElement, List, ListItem, Button, Divider, Layout, Text } from "@ui-kitten/components";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomerSelectCard from "@/components/cards/CustomerSelectCard";
import styles from "@/app/styles/style";

interface IListItem {
    title: string;
    description: string;
  }
  
  const data = new Array(20).fill({
    title: 'Title for Item',
    description: 'Description for Item',
  });

const Summary = () => {

    const renderItemIcon = (props: any) => (
        <View style={{height:55,width:55,backgroundColor:'#777', borderRadius:5}}>

        </View>
      );

    const renderItemAccessory = (): React.ReactElement => (
        <Layout  style={style.quantity}>
            <TouchableOpacity>
                <Icon name="star"/>
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
                <Text>+</Text>
            </TouchableOpacity>
        </Layout>
      );

    const renderItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
          accessoryLeft={renderItemIcon}
          accessoryRight={renderItemAccessory}
        />
      );

    return (
        <View style={{padding:20}}>
            <CustomerSelectCard /> 
            <Divider style={{marginBottom:10, marginTop:10}}/>
            <List
                style={{marginBottom:70}}
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
            /> 
        </View>
    );
}

const style = StyleSheet.create({
    quantity: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent:'space-evenly', 
        alignItems: 'center'
    },
});

export default Summary;