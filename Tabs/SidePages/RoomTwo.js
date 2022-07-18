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

export default function RoomOne({ navigation }) {
return (
<>
<View style={styles.body}>
<View style={styles.backButton}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text style={styles.back}> Back </Text>
  </TouchableOpacity>

<Text style={styles.header}>Room 2</Text>
</View>

<View style={styles.windowContainer}>
<TouchableOpacity>
        <Text style={styles.windowOne}>Window 1</Text>
</TouchableOpacity>
<TouchableOpacity>
        <Text style={styles.windowOne}>Window 2</Text>
</TouchableOpacity>
<TouchableOpacity>
        <Text style={styles.windowOne}>Window 3</Text>
</TouchableOpacity>
</View>
</View>
</>
)
}

const styles = StyleSheet.create({
backButton: {
top: 60,
left: 10,
flexDirection: 'row'
},
header: {
textAlign: 'center',
left: 100,
fontSize: 30,
fontFamily: 'Times New Roman'  
},
back: {
top: 10
},
windowOne: {
  backgroundColor: "white",
  fontSize: 21,
  padding: 10,
},
windowContainer: {
top: 100
},
body: {
backgroundColor: 'white'
}
})