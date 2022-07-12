import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'


export default function Scheduling() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Window 1', value: 'window1'},
    {label: 'Window 2', value: 'window2'},
    {label: 'Window 3', value: 'window3'},
    {label: 'Window 4', value: 'window4'},
    {label: 'Window 5', value: 'window5'},
    {label: 'All Windows', value: 'allwindows'}
  ]);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('Date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

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

        <View style={styles.container}>
        <Text style={styles.Stuff}>{text}</Text>
        <View >
            <Button title='DatePicker' onPress={() => showMode('date')}/>
        </View>
        <View>
            <Button title='TimePicker' onPress={() => showMode('time')}/>
        </View>

        
            {show && (
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={false}
            display='default'
            onChange={onChange}
            />)}

        

        <StatusBar style="auto" />
        </View>
    </>
    ) 





  

    

    /**return (
        <View style={styles.container}>
        <Text style={styles.Stuff}>{text}</Text>
        <View style={styles.PickButton}>
            <Button title='DatePicker' onPress={() => showMode('date')}/>
        </View>
        <View style={styles.PickButton}>
            <Button title='TimePicker' onPress={() => showMode('time')}/>
        </View>

        
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
            />

        <StatusBar style="auto" />
        </View>
    )
/* */


}
const styles = StyleSheet.create({
    ScheduleContainer: {
      flex: 1,
      fontSize: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    WindowFlatList: {
        flex: 1,
    }
})