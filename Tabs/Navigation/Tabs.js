import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Windows from "../Windows";
import Scheduling from "../Scheduling";
import AddDevice from "../AddDevice";
import { StyleSheet, Text, View } from "react-native";


const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (

            <Tab.Navigator>
                <Tab.Screen name="Your Rooms" component={Windows} />
                <Tab.Screen name="Scheduling" component={Scheduling} />
                <Tab.Screen name="Add a new Device" component={AddDevice} />
            </Tab.Navigator>

    )
}

export default  Tabs 
