import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Platform, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import RepeatEachWeek from "./SidePages/RepeatEachWeek";


export default function Scheduling({navigation}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'All Rooms', value: 'window1'},
    {label: 'Room 1', value: 'window2'},
    {label: 'Room 2', value: 'window3'},
    {label: 'Room 3', value: 'window4'}
  ]);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('Date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
      setText(fDate + '\n' + fTime)

      console.log(fDate + ' (' + fTime + ')')
  }

  const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode)
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const [activeSwitch, setActiveSwitch] = useState(null);

  const toggleSwitch = (num) => {
    setIsEnabled(setActiveSwitch(num === activeSwitch ? null : num));
  };

  const toggleAll = (activeSwitch) => {
    setIsEnabled(
      setActiveSwitch(activeSwitch === Switch ? null : activeSwitch)
    );
  };

  const switch1 = () => {
    toggleSwitch(1);
  };
  const switch2 = () => {
    toggleSwitch(2);
  };

    return (
        <>
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />


        <View style={styles.Body}>
        <View style={styles.wholecontainer}>
        <View style={styles.closeShieldContainer}>
        <View style={styles.closedShieldView}>
        <Text style={styles.closedShieldText}>Closed Shields:</Text>
        </View>
        <Text style={styles.timeDateText}>{text}</Text>
        <View style={styles.Time}>
        <Button title='Time' onPress={() => showMode('time')}/>
        </View>
        {/* <Button title='Date' onPress={() => showMode('date')}/> */}
        <Switch
          left={10}
          trackColor={{ false: "#767577", true: "#65E096" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch1}
          value={activeSwitch === 1}
        />
        </View>
        <View style={styles.repeat}>
        <TouchableOpacity onPress={() => navigation.navigate("RepeatEachWeek")}>
            <Text style={styles.repeatEveryText}>Repeat Every:</Text>
            <View style={styles.arrowContainer}>
                <Text> → </Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.othercontainer}>
        <View style={styles.openShieldContainer}>
        <View style={styles.openShieldView}>
        <Text style={styles.openShieldText}>Open Shields:</Text>
        </View>
        <Text style={styles.timeDateText}>{text}</Text>
            <View style={styles.Time}>
            <Button title='Time' onPress={() => showMode('time')}/>
            </View>
            {/* <Button title='Date' onPress={() => showMode('date')}/> */}
            <Switch
          left={20}
          trackColor={{ false: "#767577", true: "#65E096" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switch2}
          value={activeSwitch === 2}
        />
        </View>
        <View style={styles.repeat}>
        <TouchableOpacity onPress={() => navigation.navigate("RepeatEachWeek")}>
            <Text style={styles.repeatEveryText}>Repeat Every:</Text>
            <View style={styles.arrowContainer}>
                <Text> → </Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.timeshow}>
            {show && (
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={false}
            display='default'
            onChange={onChange}
            />)}
        </View>

        

        <StatusBar style="auto" />
        </View>
    </>
    ) 

}
const styles = StyleSheet.create({
    closeShieldContainer: {
        flexDirection: 'row'
    },
    openShieldContainer: {
        flexDirection: 'row'
    },
    timeDateText: {
        borderWidth: 1,
        borderColor: 'black',
    },
    repeat: {
        backgroundColor: '#D9D9D9',
        width: 426,
        height: 48,
        flexDirection: "row"
    },
    arrowContainer: {
        textAlign: 'center',
        top: -10,
        left: 100,
        backgroundColor: 'white',
        height: 34,
        width: 74,
    },
    repeatEveryText: {
        top: 13
    },
    Body: {
        backgroundColor: 'white'
    },
    wholecontainer: {
        top: 50
    },
    othercontainer: {
        top: 200
    },
    timeshow: {
        top: -165,
        alignContent: 'center',
        justifyContent: 'center',
        left: -140
    }

})