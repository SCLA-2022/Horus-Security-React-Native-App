import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Windows from "./Tabs/Windows"
import Scheduling from "./Tabs/Scheduling";
import AddDevice from "./Tabs/AddDevice";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Test from "./Tabs/Test";
import Tabs from "./Tabs/Navigation/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoomOne from "./Tabs/SidePages/RoomOne";
import RoomTwo from "./Tabs/SidePages/RoomTwo";
import RoomThree from "./Tabs/SidePages/RoomThree";
import RepeatEachWeek from "./Tabs/SidePages/RepeatEachWeek";
import LoginScreen from "./Tabs/LoginScreen";
import AssignRoom from "./Tabs/SidePages/AssignRoom";
import { useFonts } from "expo-font";
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name = "Login" component = { LoginScreen }/> */}
      <Stack.Screen name = "Tabs"  component = { Tabs }/>
      <Stack.Screen name = "RoomOne" component = { RoomOne }/>
      <Stack.Screen name = "RoomTwo" component = {RoomTwo}/>
      <Stack.Screen name = "RoomThree" component = {RoomThree}/>
      <Stack.Screen name = "RepeatEachWeek" component = {RepeatEachWeek}/>
      <Stack.Screen name = "AssignRoom" component = {AssignRoom}/>
    </Stack.Navigator>
  )
}


export default function App() {

  const [loaded] = useFonts({
    DoppioOne: require('./assets/fonts/DoppioOne-Regular.ttf'),
    ZenDots: require('./assets/fonts/ZenDots-Regular.ttf')
  })


  if(!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stacks/>
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
