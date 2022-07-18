import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

export default function AddDevice() {
    return (
        <View style={styles.ScheduleContainer}>
            <View style={styles.container}>
                <Text style={styles.Bluetooth}> Bluetooth </Text>
                <View style={styles.background}>
                
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
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>Window 1 (Disconnect)</Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>Window 2 (Disconnect)</Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                            <Text  style={styles.buttonText}>Window 3 (Disconnect)</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ScheduleContainer: {
      flex: 1,
      fontSize: 20,
      backgroundColor: '#fff',
      top: 100
    },
    container: {
        width: 360,
        height: 400,
        left: 15,
        borderRadius: 20,
        backgroundColor: '#2B5A85'
    },
   background: {
    backgroundColor: '#D9D9D9',
    height: 250,
    top: 50
   },
   Bluetooth: {
    color: 'white',
    textAlign: 'center',
    top: 30,
    fontSize: 30
   },
   buttonText: {
    fontFamily: 'Times New Roman',
    fontSize: 22,
    padding: 2.5
   }
  });