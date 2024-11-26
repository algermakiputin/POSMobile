import { Layout, Text, } from "@ui-kitten/components";
import { View, ScrollView, StyleSheet } from "react-native";
import InventorySummary from "@/components/cards/InventorySummary";
import QuickMenu from "@/components/navigation/QuickMenu";
import styles from "../styles/style";

export default function HomeScreen() {
  return ( 
    <ScrollView>
      <View style={styles.container}>
        <Text style={localStyles.welcomeMessage}>Welcome, Alger!</Text>
        <InventorySummary />
        <QuickMenu />
      </View>
    </ScrollView>
  )
} 

const localStyles = StyleSheet.create({
  welcomeMessage: {
    marginBottom: 20
  }
});
