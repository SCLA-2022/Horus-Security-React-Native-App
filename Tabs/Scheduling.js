import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Platform,
  Switch,
  Modal,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import RepeatEachWeek from "./SidePages/RepeatEachWeek";
import { render } from "react-dom";
import moment from "moment";

const CustomTimePicker = (props) => {
  const { textStyle, defaultDate } = props;

  const [date, setDate] = React.useState(defaultDate);
  const [show, setShow] = React.useState(false);

  const [pressed, setPressed] = React.useState(false);
  const [pressed2, setPressed2] = React.useState(false);

  const onChange = (selectedTime) => {
    selectedTime = moment(selectedTime)

    setDate(selectedTime)

  }

  const onCancel = () => {
    // setDate(moment(defaultDate));
    setShow(false);
  }
  const onDone = () => {
    // props.onDateChange(date)
    setShow(false);
  }

  const showHours = (hours) => {
    if (hours == 0) {
      return `12`
    } else if (hours > 12) {
      return hours - 12
    } else {
      return hours
    }
  }

  const showMinutes = (minutes) => {
    if (minutes < 10) {
      return `0${minutes}`
    } else return minutes
  }

  const changeColor = (hours) => {
    hours = moment(hours).hour()


    if (hours > 12) {
      setPressed(false)
      setPressed2(true)
    } else {
      setPressed2(false)
      setPressed(true)
    }
  }

  return (
    <>
      <TouchableOpacity
        activeOpacity={0}
        onPress={() => setShow(true)}>


        <View style={{ flexDirection: 'row', marginTop: 23, marginLeft: 36 }}>
          <View style={{ position: 'relative', borderWidth: 1, borderColor: '#361A36', height: 57, width: 74, justifyContent: 'center', borderRadius: 3 }}>
            <Text style={{ alignSelf: 'center', fontFamily: 'ZenDots' }}> {showHours(date.hour())} </Text>
          </View>

          <Text style={{ alignSelf: 'center', fontSize: 30 }}> : </Text>

          <View style={{ position: 'relative', borderWidth: 1, borderColor: '#361A36', height: 57, width: 74, justifyContent: 'center', borderRadius: 3 }}>
            <Text style={{ alignSelf: 'center', fontFamily: 'ZenDots' }}> {showMinutes(date.minute())} </Text>
          </View>

          <Modal
            transparent={true}
            animationType="slide"
            visible={show}
            supportedOrientations={['portrait']}
            onRequestClose={() => setShow(false)}>

            <View style={{ flex: 1 }}>

              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                }}
                activeOpacity={1}
                visible={show}
                onPress={() => setShow(false)}>

                <TouchableOpacity
                  underlayColor={'#FFFFFF'}
                  style={{
                    flex: 1,
                    borderTopColor: '#E9E9E9',
                    borderTopWidth: 1,
                  }}
                  onPress={() => console.log("datepicker clicked")}>

                  <View style={{
                    backgroundColor: "#FFFFFF",
                    height: 256,
                    overflow: 'hidden',
                  }}>

                    <View style={{ marginTop: 20 }}>
                      <DateTimePicker
                        textColor = {'#361A36'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}

                        value={new Date(date)}
                        mode="time"

                        onChange={(e, newTime) => {
                          onChange(newTime)
                          changeColor(newTime)
                        }
                        }
                      />
                    </View>

                    <TouchableOpacity
                      underlayColor={'transparent'}
                      onPress={onCancel}
                      style={[styles.btnText, styles.btnCancel]}>
                      <Text> Cancel </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      underlayColor={'transparent'}
                      onPress={onDone}
                      style={[styles.btnText, styles.btnDone]}>
                      <Text> Done </Text>
                    </TouchableOpacity>

                  </View>

                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 27, marginLeft: 36 }}>

        <TouchableOpacity onPress={() => {
          setPressed(!pressed)
          setPressed2(false)

          if (date.hour() > 12) {
            setDate(date.subtract(12, 'hours'))
          }
        }}
          style={{ position: 'relative', borderWidth: 1, borderColor: '#361A36', height: 36, width: 75, justifyContent: 'center', borderRadius: 3, backgroundColor: pressed ? 'purple' : 'white', marginRight: 13 }}>

          <Text style={[{ alignSelf: 'center' }, , { color: pressed ? 'white' : 'black', fontSize: 15, fontWeight: '400', lineHeight: 18, fontFamily: 'ZenDots' }]}> am </Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setPressed2(!pressed2)
          setPressed(false)

          if (date.hour() < 12) {
            setDate(date.add(12, 'hours'))
          }
        }}
          style={{ position: 'relative', borderWidth: 1, borderColor: '#361A36', height: 36, width: 75, justifyContent: 'center', borderRadius: 3, backgroundColor: pressed2 ? 'purple' : 'white' }}>

          <Text style={[{ alignSelf: 'center' }, { color: pressed2 ? 'white' : 'black', fontSize: 15, fontWeight: '400', lineHeight: 18, fontFamily: 'ZenDots' }]}> pm </Text>

        </TouchableOpacity>



      </View>
    </>

  )
}

export default function Scheduling({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "All Rooms", value: "window1" },
    { label: "Room 1", value: "window2" },
    { label: "Room 2", value: "window3" },
    // { label: "Room 3", value: "window4" },
  ]);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("Date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [time, setTime] = useState({ hours: '', minutes: '' });


  const [toggle, setToggle] = useState({ toggle: true })
  const textValue = toggle ? "AM" : "PM";
  const buttonBg = toggle ? "#361A36" : "#FFFFFF"
  const textColor = toggle ? "#FFFFFF" : "#361A36"


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
    <View style={styles.Body}>


      <View style = {{ display: 'flex',justifyContent: 'center', flexDirection: 'row',  marginTop: 80}}>
        <Text style={{ alignSelf: 'center', fontSize: 25,lineHeight: 36, fontWeight: '400', color: '#361A36', fontFamily: "ZenDots", marginLeft: 20 }}> Shield Schedule </Text>
        <View style={{right: 10}}>
        <DropDownPicker
          style = {{backgroundColor: '#361A36', width: 57, height: 48, alignSelf: 'center'}}
          ArrowDownIconComponent = {({style}) => <Image  resizeMode="stretch" source = {require('../assets/Icons/arrowIcon.png')} style={{ width: 15, height: 8, left: -10}} />}
          containerStyle = {{width: 100, borderRadius: 20,}}
          
          placeholder=""
          open={open}
          value={null}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
      />
      </View>
      </View>
      <Text style={styles.ShieldText}> Open Shields </Text>

      {/* This view is the parent and everything within it is the child */}
      <View style={{ flexDirection: 'row' }}>

        {/* Container for the custom time picker for flex direction row to work */}
        <View>
          <CustomTimePicker
            defaultDate={moment()}
          />
        </View>

        <View>
          <Switch
            marginTop={35}
            marginLeft={82}
            trackColor={{ false: "#767577", true: "#361A36" }}
            thumbColor={isEnabled ? "#f5dd4b" : "white"}
            ios_backgroundColor="white"
            onValueChange={switch1}
            value={activeSwitch === 1}
          />

          <View style={styles.repeat}>
            <TouchableOpacity
              onPress={() => navigation.navigate("RepeatEachWeek")}>
              <Text style={styles.repeatEveryText}>Repeat Every</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>


      <Text style = {styles.ShieldText}> Close Shields </Text>
      <View style={{ flexDirection: 'row' }}>

        {/* Container for the custom time picker for flex direction row to work */}
        <View>
          <CustomTimePicker
            defaultDate={moment()}
          />
        </View>

        <View>
          <Switch
            marginTop={35}
            marginLeft={82}
            trackColor={{ false: "#767577", true: "#361A36" }}
            thumbColor={isEnabled ? "#f5dd4b" : "white"}
            ios_backgroundColor="white"
            onValueChange={switch1}
            value={activeSwitch === 1}
          />

          <View style={styles.repeat}>
            <TouchableOpacity
              onPress={() => navigation.navigate("RepeatEachWeek")}>
              <Text style={styles.repeatEveryText}>Repeat Every</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  ShieldText: {
    fontFamily: "ZenDots",
    fontSize: 23,
    marginLeft: 30,
    marginTop: 84
  },
  repeat: {
    justifyContent: 'center',
    backgroundColor: "#361A36",
    marginLeft: 35,
    marginTop: 39,
    width: 130,
    height: 36,
    borderRadius: 5,
  },
  repeatEveryText: {
    fontFamily: 'ZenDots',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
    textAlign: 'center',
    color: 'white',
  },
  Body: {
    backgroundColor: "white",
    flex: 1
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  }
});