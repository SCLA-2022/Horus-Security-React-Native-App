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

export default function RoomTwo({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Room 2!</Text>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text> Go back to the previous screen! </Text>
  </TouchableOpacity>
</View>
)
}