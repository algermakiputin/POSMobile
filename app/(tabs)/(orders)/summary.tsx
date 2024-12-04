import { List, ListItem, Divider, Layout, Text } from "@ui-kitten/components";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import CustomerSelectCard from "@/components/cards/CustomerSelectCard";
import styles from "@/app/styles/style";
import Button from "@/components/buttons/Button";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
interface IListItem {
  title: string;
  description: string;
}
  
const data = new Array(3).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const Summary = () => {
  const route = useRouter();
  const renderItemIcon = (props: any) => (
    <View style={{height:55,width:55,backgroundColor:'#777', borderRadius:5}}>
    </View>
  );

  const renderItemAccessory = (): React.ReactElement => (
      <Layout style={style.quantity}>
          <Text>120.00</Text>
      </Layout>
    );
    
  const submitHandler = () => {
    route.navigate('/(orders)/receipt');
  }

  const renderItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => (
      <ListItem
        title={`${item.title} ${index + 1}`}
        description={`1x 120`}
        accessoryLeft={renderItemIcon}
        accessoryRight={renderItemAccessory}
      />
    );

  return (
    <View style={{padding:20, flex:1, height:'100%', position:'relative'}}>
      <CustomerSelectCard /> 
      <Divider style={{marginBottom:10}}/>
      <View style={styles.flexColumns}>
        <Text>Order List</Text>
        <Text>Total Amount: <Text style={{fontWeight: 700, fontSize: 20}}>360.00</Text></Text>
      </View>
      <Divider style={style.divider}/>
      <Layout>
        <List
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
        />
      </Layout>
      <View style={styles.floatBottom}>
        <Button onPressHandler={submitHandler} title="Complete Order"/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    quantity: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    divider: {
      marginBottom:10, 
      marginTop:10
    }
});

export default Summary;