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
  import Checkbox from "expo-checkbox";

export default function RepeatEachWeek({ navigation }) {
  const [isChecked, setChecked] = useState(false);

return(
  <>
  <View style={styles.BackButton}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.back}> Back </Text>
    </TouchableOpacity>
  </View>
  <Text style={styles.Header}>
    Repeat
  </Text>
  <View style={styles.checkboxContainer}>
    <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text style={styles.weekDay}> Monday </Text>
    </View>
    <View style={styles.checkbox}>
    <Checkbox
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? '#65E096' : undefined}
    />
    <Text style={styles.weekDay}> Tuesday </Text>
    </View>
    <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text style={styles.weekDay}> Wednesday </Text>
    </View>
    <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text style={styles.weekDay}> Thursday </Text>
    </View>
    <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text style={styles.weekDay}> Friday </Text>
    </View>
    <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text style={styles.weekDay}> Saturday </Text>
    </View>
    <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text style={styles.weekDay}> Sunday </Text>
    </View>
  </View>
  <TouchableOpacity>
  <View style={styles.confirmButton}>
      <Text style={styles.confirmText}> Confirm </Text>
  </View>
  </TouchableOpacity>
  </>
)
}

const styles = StyleSheet.create({
  checkboxContainer: {
    top: 200,
    left: 35,
    width: 320,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 9
  },
  checkbox: {
    flexDirection: 'row',
    padding: 10,
  },
  confirmButton: {
    left: 135,
    width: 120,
    height: 45,
    borderWidth: 1,
    borderRadius: 9,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    top: 250,
    backgroundColor: 'white'
  },
  confirmText: {
    textAlign: 'center',
    left: -3,
    fontFamily: 'Times New Roman',
    fontSize: 18
  },
  weekDay: {
    fontFamily: 'Times New Roman',
    fontSize: 18
  },
  Header: {
    textAlign: 'center',
    top: 70,
    fontSize: 30,
    fontFamily: 'Times New Roman',
  },
  BackButton: {
    top: 95,
    left: 10
  }
})