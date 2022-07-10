import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react'

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

    return (
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    ) 

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

  });
