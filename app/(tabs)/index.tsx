import { Layout, Text, } from "@ui-kitten/components";
import { View, ScrollView, StyleSheet } from "react-native";
import InventorySummary from "@/components/cards/InventorySummary";
import styles from "../styles/style";

export default function HomeScreen() {
  return ( 
    <ScrollView>
      <View style={styles.container}>
        <Text style={localStyles.welcomeMessage}>Welcome, Alger!</Text>
        <InventorySummary />
        <Text>Quick Menu</Text>
        <Layout style={styles.row}>
          <Layout style={styles.flex}>
            <Text>Categories</Text>
          </Layout>
          <Layout style={styles.flex}>
            <Text>Supplier</Text>
          </Layout>
          <Layout style={styles.flex}>
            <Text>Sales</Text>
          </Layout>
          <Layout style={styles.flex}>
            <Text>New Order</Text>
          </Layout>
        </Layout>
      </View>
    </ScrollView>
  )
} 

const localStyles = StyleSheet.create({
  welcomeMessage: {
    marginBottom: 20
  }
});
