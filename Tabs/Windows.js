import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Switch,
  SwitchComponent,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Room1 from "./SidePages/Room1";
import Room2 from "./SidePages/Room2";
import Room3 from "./SidePages/Room3";

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


  return (
    <>
      <View>
        <Text>Your Rooms</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigator("Room1")}>
          <Text>Room 1</Text>
        </TouchableOpacity>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch1}
          value={activeSwitch === 1}
        />
      </View>

      <View>
        <TouchableOpacity onPress={room2}>
          <Text>Room 2</Text>
        </TouchableOpacity>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch2}
          value={activeSwitch === 2}
        />
      </View>

      <View>
        <TouchableOpacity onPress={room3}>
          <Text>Room 3</Text>
        </TouchableOpacity>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch3}
          value={activeSwitch === 3}
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text>Up/Down</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  WindowContainer: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  WindowFlatList: {
    flex: 1,
  },

  AllWindows: {
    flex: 100,
  },

  buttonContainerOnOff: {
    flex: 800,
    alignItems: "center",
    justifyContent: "center",
  },

  FlatList: {},

  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

//Old Flatlist (don't need it)
{
  /* <View>
        <Text>Windows/Devices</Text>
        <FlatList
          data={[
            { key: "Window 1" },
            { key: "Window 2" },
            { key: "Window 3" },
            { key: "Window 4" },
            { key: "Window 5" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Text>All Windows</Text> */
}
