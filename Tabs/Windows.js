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

const windowObject = {
  id: "Window1",
  nickname: "LivingRoomWindow",

  isReinforced: false,
};

export default function Windows() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeSwitch, setActiveSwitch] = useState(null);

  //Three Equals is going to check for Type (if number or string, Boolean) and checks if it is the correct value

  const toggleSwitch = (num) => {
    setIsEnabled(setActiveSwitch(num === activeSwitch ? null : num));
  };

  const toggleAll = (activeSwitch) => {
    setIsEnabled(
      setActiveSwitch(activeSwitch === onValueChange ? null : toggleSwitch)
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
  const switch4 = () => {
    toggleSwitch(4);
  };
  const switch5 = () => {
    toggleSwitch(5);
  };

  return (
    <>
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch1}
          value={activeSwitch === 1}
        />
      </View>

      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch2}
          value={activeSwitch === 2}
        />
      </View>

      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch3}
          value={activeSwitch === 3}
        />
      </View>

      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch4}
          value={activeSwitch === 4}
        />
      </View>

      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch5}
          value={activeSwitch === 5}
        />
      </View>

      <View>
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
        <Text>All Windows</Text>
        <View>
          <TouchableOpacity>
            <Text>Up/Down</Text>
          </TouchableOpacity>
        </View>
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
