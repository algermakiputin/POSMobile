import { IconElement, List, ListItem, Divider, Layout, Text } from "@ui-kitten/components";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import CustomerSelectCard from "@/components/cards/CustomerSelectCard";
import styles from "@/app/styles/style";
import Button from "@/components/buttons/Button";
import { useRouter } from "expo-router";
interface IListItem {
    title: string;
    description: string;
  }
  
  const data = new Array(15).fill({
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
        <Layout  style={style.quantity}>
            <TouchableOpacity>
                <Text>Star</Text>
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
                <Text>+</Text>
            </TouchableOpacity>
        </Layout>
      );
    
    const submitHandler = () => {
      route.navigate('/(orders)/receipt');
    }

    const renderItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
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
          <Text>Total Amount: $100</Text>
        </View>
        <Divider style={{marginBottom:10, marginTop:10}}/>
        <Layout>
          <List
              style={{marginBottom:15}}
              data={data}
              renderItem={renderItem}
              ItemSeparatorComponent={Divider}
          />
        </Layout>
        <View style={styles.floatBottom}>
          <Button onPressHandler={submitHandler} />
        </View>
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