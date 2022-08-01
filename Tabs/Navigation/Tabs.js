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
                            source= {require('../../assets/Icons/ic_outline-window.png')}
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
                  source={require('../../assets/Icons/uil_calender.png')}
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
                  style={styles.bottomTabIconArrow}
                  source={require('../../assets/Icons/carbon_add.png')}
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
bottomTabIcon: {
  height: 50,
  width: 50
},
bottomTabIconArrow: {
  height: 70,
  width: 70
}
})