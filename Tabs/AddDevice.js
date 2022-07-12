import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

export default function AddDevice() {
    return (
        <View style={styles.ScheduleContainer}>
            <Text> Searching... </Text>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>New Window (Connect)</Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>New Window (Connect)</Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>New Window (Connect)</Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>New Window (Connect)</Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>New Window (Connect)</Text>
                </TouchableOpacity>
            <Text> Disconnect </Text>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>Window (Disconnect)</Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>Window (Disconnect)</Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>Window (Disconnect)</Text>
                </TouchableOpacity>

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