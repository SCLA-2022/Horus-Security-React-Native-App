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
  import CheckBox from '@react-native-community/checkbox';

export default function RepeatEachWeek({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  
return(
  <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
)
}
