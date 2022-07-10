import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

export default function AddDevice() {
    return (
        <View style={styles.ScheduleContainer}>

        </View>
    )
}

const styles = StyleSheet.create({
    ScheduleContainer: {
      flex: 1,
      fontSize: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    WindowFlatList: {
        flex: 1,
    }

  });