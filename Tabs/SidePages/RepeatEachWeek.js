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
    <View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text>Monday</Text>
    </View>
    <View>
    <Checkbox
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? '#65E096' : undefined}
    />
    <Text>Tuesday</Text>
    </View>
    <View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text>Wednesday</Text>
    </View>
    <View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text>Thursday</Text>
    </View>
    <View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text>Friday</Text>
    </View>
    <View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text>Saturday</Text>
    </View>
    <View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#65E096' : undefined}
        />
        <Text>Sunday</Text>
    </View>
  </>
)
}
