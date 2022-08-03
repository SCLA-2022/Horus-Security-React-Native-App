import { StyleSheet, Text, View, FlatList, TouchableOpacity, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

export default function AddDevice({ navigation }) {
    return (
        <View style={styles.ScheduleContainer}>
            <Text style={styles.bluetooth}>Bluetooth</Text>
            <View style={styles.allButtonContainer}>
            <View style={styles.roomOneContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AssignRoom")}>
        <View style={styles.connectView}>
          <Text style={styles.roomThreeText}>New Window</Text>
          <Text style={styles.textConnect}>Connect</Text>
        </View>
        </TouchableOpacity>
    
      </View>

      <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

      <View style={styles.roomTwoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AssignRoom")}>
        <View style={styles.connectView}>
          <Text style={styles.roomThreeText}>New Window</Text>
          <Text style={styles.textConnect}>Connect</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

      <View style={styles.roomThreeContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AssignRoom")}>
        <View style={styles.connectView}>
          <Text style={styles.roomThreeText}>New Window</Text>
          <Text style={styles.textConnect}>Connect</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>
      </View>
        </View>
    )
}

const styles = StyleSheet.create({
        bluetooth: {
          color: '#361A36',
        fontFamily: "ZenDots",
        alignSelf: 'center',
        marginTop: 100,
        fontSize: 40
        },
        allButtonContainer: {
        },
        textConnect: {
          color: '#361A36',
            fontFamily: "DoppioOne",
            marginTop: 10,
            marginLeft: 120
        },
        connectView: {
            flexDirection: 'row'
        },
        ScheduleContainer: {
            flex: 1,
            backgroundColor: 'white'
        },
        roomOneContainer: {
          backgroundColor: "white",
          flexDirection: "row",
          marginTop: 61,
         
        },
        roomOneText: {
            backgroundColor: "white",
            fontSize: 26,
            marginLeft: 28,       
            fontFamily: "DoppioOne",
            flexDirection: 'row'
        },
        roomTwoContainer: {
          backgroundColor: "white",
          flexDirection: "row",
          marginTop: 10,
        },
        roomTwoText: {
            backgroundColor: "white",
            fontSize: 26,
            marginLeft: 28,
            fontFamily: "DoppioOne"
        },
        roomThreeContainer: {
           
            backgroundColor: "white",
            flexDirection: "row",
            marginTop: 10,
           
        },
        roomThreeText: {
          color: '#361A36',
            backgroundColor: "white",
            fontSize: 26,
            marginLeft: 28,
            fontFamily: "DoppioOne"
        },
});