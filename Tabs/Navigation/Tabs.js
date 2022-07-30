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
            <Tab.Screen
                name='Your Room'
                component={Windows}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={styles.bottomTabIcon}
                            source= {require('../../assets/Icons/windowIcon.png')}
                        />
                    ),
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tab.Screen
            name='Scheduling'
            component={Scheduling}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  style={styles.bottomTabIcon}
                  source={require('../../assets/Icons/calenderIcon.png')}
                />
              ),
              tabBarShowLabel: false,
              headerShown: false,
            }}
          />
            <Tab.Screen
            name='Add a new Device'
            component={AddDevice}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  style={styles.bottomTabIcon}
                  source={require('../../assets/Icons/addIcon.png')}
                />
              ),
              tabBarShowLabel: false,
              headerShown: false,
            }}
          />
        </Tab.Navigator>

    )
}


export default Tabs;

const styles = StyleSheet.create({
    roomFont: 'Times New Roman'
})