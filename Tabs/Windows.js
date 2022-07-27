import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Switch,
  SwitchComponent,
  fontFamily,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import RoomOne from "./SidePages/RoomOne";
import RoomTwo from "./SidePages/RoomTwo";
import RoomThree from "./SidePages/RoomThree";
import axios from "axios";

// Previous Window Object List
// const windowObject = {
//   id: "Window1",
//   nickname: "LivingRoomWindow",

//   isReinforced: false,
// };


export default function Windows({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeSwitch, setActiveSwitch] = useState(null);

  const turnOn = () => {
    console.log("turning motor")
    axios.get('http://172.20.10.4/motor?cw=on').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    }) 
  }
  const turnOff = () => {
    console.log("turning on led")
    axios.get('http://172.20.10.4/motor?ccw=on').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  //Three Equals is going to check for Type (if number or string, Boolean) and checks if it is the correct value

  const toggleSwitch = (num) => {
    setIsEnabled(setActiveSwitch(num === activeSwitch ? null : num));
  };

  const toggleAll = (activeSwitch) => {
    setIsEnabled(
      setActiveSwitch(activeSwitch === Switch ? null : activeSwitch)
    );
  };

  //This is going to be the value of each switch
  const switch1 = () => {
    toggleSwitch(1);
  };
  const switch2 = () => {
    toggleSwitch(2);
  };
  const switch3 = () => {
    toggleSwitch(3);
  };

//style={styles.} 
//for the styles
  return (
    <View style={styles.Body}>
    <>
      {/* <View style={styles.addDeleteRoom}>
        <TouchableOpacity>
            <Text style={styles.addRoomText}>Add Room</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.deleteRoomText}>Delete Room</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.roomOneContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RoomOne")}>
          <Text style={styles.roomOneText}>Room 1</Text>
        </TouchableOpacity>
        <Switch
          top={10}
          left={220}
          trackColor={{ false: "#767577", true: "#361A36" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#E3E3E3"
          onValueChange={switch1}
          value={activeSwitch === 1}
        />
      </View>

      <View style={styles.roomTwoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RoomTwo")}>
          <Text style={styles.roomTwoText}>Room 2</Text>
        </TouchableOpacity>
        <Switch
          top={10}
          left={220}
          trackColor={{ false: "#767577", true: "#361A36" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#E3E3E3"
          onValueChange={switch2}
          value={activeSwitch === 2}
        />
      </View>

      <View style={styles.roomThreeContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RoomThree")}>
          <Text style={styles.roomThreeText}>Room 3</Text>
        </TouchableOpacity>
        <Switch
          top={10}
          left={220}
          trackColor={{ false: "#767577", true: "#361A36" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#E3E3E3"
          onValueChange={switch3}
          value={activeSwitch === 3}
        />
      </View>

        {/* Buttons are here */}

      <View style={styles.openShield}>
        <TouchableOpacity onPress={() => {turnOn()}}>
        <View style={styles.greenButton}>
          <Text style={styles.openText}>Open all Shields</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.closeShield}>
        
        <TouchableOpacity onPress={() => {turnOff()}}>
        <View style={styles.redButton}>
          <Text style={styles.closeText}>Close all Shields</Text>
        </View>
        </TouchableOpacity>
      </View>
    </>
    </View>
  );
}

const styles = StyleSheet.create({
    addDeleteRoom: {
        flexDirection: "row",
        padding: 10
    },
    addRoomText: {
        fontFamily: "Times New Roman",
        textAlign: "left",
        padding: 10,
        fontSize: 15,
    },
    deleteRoomText: {
        fontFamily: "Times New Roman",
        left: 185,
        textAlign: "right",
        padding: 10,
        fontSize: 15,
    },
    Windows: {
        backgroundColor: "white"
    },
    Body: {
        flex: 1,
        backgroundColor: "white"
    },
    yourRoom: {
        backgroundColor: "white",
        fontSize: 30,
        textAlign: "center",
        padding: 20
    },
    roomOneContainer: {
      backgroundColor: "white",
      flexDirection: "row",
      top: 35,
      borderWidth: 1,
      borderTopColor: 'white',
      borderEndColor: 'white',
      borderStartColor: 'white',
    },
    roomOneText: {
        backgroundColor: "white",
        fontSize: 25,
        padding: 10,
        fontFamily: "Times New Roman"
    },
    roomTwoContainer: {
      backgroundColor: "white",
      flexDirection: "row",
      top: 35,
      borderWidth: 1,
      borderTopColor: 'white',
      borderEndColor: 'white',
      borderStartColor: 'white'
    },
    roomTwoText: {
        backgroundColor: "white",
        fontSize: 25,
        padding: 10,
        fontFamily: "Times New Roman"
    },
    roomThreeContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        top: 35,
        borderWidth: 1,
        borderTopColor: 'white',
        borderEndColor: 'white',
        borderStartColor: 'white'
    },
    roomThreeText: {
        backgroundColor: "white",
        fontSize: 25,
        padding: 10,
        fontFamily: "Times New Roman"
    },
    greenButton: {
        top: 40,
        borderWidth: 3,
        backgroundColor: 'white',
        width: 269,
        height: 67,
        borderRadius: 100
    },
    openText: {
        fontSize: 20,
        fontFamily: "Times New Roman",
        padding: 0,
        top: 20,
        textAlign: 'center',
        justifyContent: 'center'
    },
    redButton: {
        top: 80,
        backgroundColor: "#F37C7C",
        width: 269,
        height: 67,
        borderRadius: 100,
        backgroundColor: "#361A36"
    },
    closeText: {
        top: 20,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: "white",
        fontFamily: "Times New Roman"
    },
    openShield: {
        top: 195,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    closeShield: {
        top: 210,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
});
