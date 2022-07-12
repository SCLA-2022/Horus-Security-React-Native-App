import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

export default function Windows() {
    return (
        <View style={styles.WindowContainer}>
            <Text style={styles.WindowHeader}>Windows/Devices</Text>
            <FlatList
            data={[
                {key: 'Window 1'},
                {key: 'Window 2'},
                {key: 'Window 3'},
                {key: 'Window 4'},
                {key: 'Window 5'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            <Text style={styles.AllWindows}>All Windows</Text>
            <View style={styles.buttonContainerOnOff}>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>Up/Down</Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
    WindowContainer: {
      flex: 1,
      fontSize: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    WindowFlatList: {
        flex: 1,
    },

    AllWindows: {
        flex: 100,
    },

    buttonContainerOnOff: {
        flex: 800,
        alignItems: 'center',
        justifyContent: 'center',
    },

    FlatList: {
    }
  });