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

// Previous Window Object List
// const windowObject = {
//   id: "Window1",
//   nickname: "LivingRoomWindow",

//   isReinforced: false,
// };

export default function Windows({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeSwitch, setActiveSwitch] = useState(null);

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
        {/* Switches and Rooms are here */}

      <View style={styles.addDeleteRoom}>
        <TouchableOpacity>
            <Text style={styles.addRoomText}>Add Room</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.deleteRoomText}>Delete Room</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.roomOneContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RoomOne")}>
          <Text style={styles.roomOneText}>Room 1</Text>
        </TouchableOpacity>
        <Switch
          left={240}
          trackColor={{ false: "#767577", true: "#65E096" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch1}
          value={activeSwitch === 1}
        />
      </View>

      <View style={styles.roomTwoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RoomTwo")}>
          <Text style={styles.roomTwoText}>Room 2</Text>
        </TouchableOpacity>
        <Switch
          left={240}
          trackColor={{ false: "#767577", true: "#65E096" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch2}
          value={activeSwitch === 2}
        />
      </View>

      <View style={styles.roomThreeContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RoomThree")}>
          <Text style={styles.roomThreeText}>Room 3</Text>
        </TouchableOpacity>
        <Switch
          left={240}
          trackColor={{ false: "#767577", true: "#65E096" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch3}
          value={activeSwitch === 3}
        />
      </View>

        {/* Buttons are here */}

      <View style={styles.openShield}>
        <Text style={styles.openText}>Open all Shields</Text>
        <TouchableOpacity style={styles.openShieldButton}>
        <View style={styles.greenButton}>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.closeShield}>
        <Text style={styles.closeText}>Close all Shields</Text>
        <TouchableOpacity style={styles.closeShieldButton}>
        <View style={styles.redButton}>
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
    },
    roomOneText: {
        backgroundColor: "white",
        fontSize: 21,
        padding: 10,
    },
    roomTwoContainer: {
        backgroundColor: "white",
        flexDirection: "row"
    },
    roomTwoText: {
        backgroundColor: "white",
        fontSize: 21,
        padding: 10,
    },
    roomThreeContainer: {
        backgroundColor: "white",
        flexDirection: "row"
    },
    roomThreeText: {
        backgroundColor: "white",
        fontSize: 21,
        padding: 10,
    },
    greenButton: {
        backgroundColor: '#8EE18E',
        width: 283,
        height: 87,
    },
    openText: {
        backgroundColor: "white",
        fontSize: 20,
        fontFamily: "Times New Roman",
        padding: 10
    },
    redButton: {
        backgroundColor: "#F37C7C",
        width: 283,
        height: 87,
    },
    closeText: {
        backgroundColor: "white",
        fontSize: 20,
        fontFamily: "Times New Roman",
        padding: 10
    },
    openShield: {
        backgroundColor: "white",
        top: 195,
        alignItems: "center",
        justifyContent: "center"
    },
    closeShield: {
        backgroundColor: "white",
        top: 210,
        alignItems: "center",
        justifyContent: "center",
    },
});
