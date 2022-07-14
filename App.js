import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Windows from "./Tabs/Windows"
import Scheduling from "./Tabs/Scheduling";
import AddDevice from "./Tabs/AddDevice";
import { StyleSheet, Text, View } from "react-native";
import Test from "./Tabs/Test";
import Stacks from "./Tabs/Stacks/Stacks";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tabs.Navigator>
        <Tabs.Screen name="Windows" component={Windows} />
        <Tabs.Screen name="Scheduling" component={Scheduling} />
        <Tabs.Screen name="Add a new Device" component={AddDevice} />
        <Tabs.Screen name="Test" component={Test}/>
        <Tabs.Screen name = "Stacks" component={ Stacks} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


/**import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Horus Security Devices</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/* */
