import { StyleSheet, View } from "react-native";
import styles from "@/app/styles/style";
import { Button, IconElement, List, ListItem, Layout, Text, Divider, } from '@ui-kitten/components';
import { Fragment } from "react";
const SalesScreen = () => {

    const renderItemAccessory = (): React.ReactElement => (
        <Text>2022-10-10</Text>
      );
    const renderItemIcon = (index: number): IconElement => (
        <Text>{index}</Text>
      );
    
    const renderItem = ({ item, index }: { item: any; index: number }): React.ReactElement => (
        <ListItem
            title={`${item.title} ${index + 1}`}
            description={`${item.description}`}
            accessoryLeft={renderItemIcon(index + 1)}
            accessoryRight={renderItemAccessory}
            style={{marginBottom:10}}
        />
    );

    const data = [
        {
            title: "1x Dandelion Juice",
            description: 'PHP 18'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        },
        {
            title: "test title",
            description: 'test description'
        }

    ];

    return (
        <Fragment>
            <View style={style.cardWrapper}>
                <Text>Total Sales (Today)</Text>
                <Text>19,500</Text>
            </View>
            <View style={styles.container}>
                <Text style={[styles.sectionHeader]}>Recent Transaction</Text>
                <List
                    style={{}}
                    data={data}
                    renderItem={renderItem}
                />
            </View>
        </Fragment>
    );
}

const style = StyleSheet.create({
    cardWrapper: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        maxHeight: 200, 
        backgroundColor: '#fff', 
        borderRadius: 20
    },
    listContainer: {
        maxHeight: 192,
        flex:1,
        height: 300,
        backgroundColor: 'red'
    }
});

export default SalesScreen;