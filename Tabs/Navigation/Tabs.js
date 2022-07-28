import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Windows from "../Windows";
import Scheduling from "../Scheduling";
import AddDevice from "../AddDevice";
import { StyleSheet, Text, View, Image } from "react-native";


const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (

            <Tab.Navigator style={styles.headerFonts}>
                <Tab.Screen name="Your Rooms" component={Windows} 
                    style={styles.roomFont}
                    options = {{
                            headerShown: false,
                            tabBarIcon: ( {color} ) => {
                                // 
                                <Text> Does this work </Text>
                            }
                        }} />
                <Tab.Screen name="Scheduling" component={Scheduling} style={styles.scheduleFont}/>
                <Tab.Screen name="Add a new Device" component={AddDevice} style={styles.deviceFont}/>
            </Tab.Navigator>

    )
}


export default  Tabs;

const styles = StyleSheet.create({
    roomFont: 'Times New Roman'
})