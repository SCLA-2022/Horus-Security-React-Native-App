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
  const onChange = (selectedTime) => {
    // setDate({hours: selectedTime.getHours(), minutes: selectedTime.getMinutes});
    // console.log(date)
    console.log('This is the time:', selectedTime)
    setDate(moment(selectedTime))
    console.log(date)
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
    }else if (hours > 12) {
      return hours - 12
    }else if (hours < 10) {
      return `0${hours}`
    }else{
      return hours
    }
  }
  const showMinutes = (minutes) => {
    if (minutes < 10) {
      return `0${minutes}`
    }else return minutes
  }
  return(
    <View style = {{}}>
    <TouchableOpacity
      activeOpacity={0}
      onPress={() => setShow(true)}>
      <View style = { {flexDirection: 'row',}}>
      
        <View style = {{position: 'relative', borderWidth: 1, borderColor: 'purple', height: 57, width: 73, justifyContent: 'center', borderRadius: 2}}>
          <Text style = {{ alignSelf: 'center', fontSize: 24, fontFamily: "Times New Roman"}}> {showHours(date.hour())} </Text>
        </View>

        <Text style = {{alignSelf: 'center'}}> : </Text>
      
        <View style = {{position: 'relative', borderWidth: 1, borderColor: 'purple', height: 57, width: 73, justifyContent: 'center', borderRadius: 2}}>
          <Text style = {{ alignSelf: 'center', fontSize: 24, fontFamily: "Times New Roman"}}> {showMinutes(date.minute())} </Text>
        </View>

        <Modal
          transparent = {true}
          animationType = "slide"
          visible = {show}
          supportedOrientations={['portrait']}
          onRequestClose={ () => setShow(false) }>
          <View style = {{flex:1}}>
            <TouchableOpacity
                style = {{
                  flex: 1,
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                }}
                activeOpacity={1}
                visible = {show}
                onPress={() => setShow(false)}>
                <TouchableOpacity
                  underlayColor={'#FFFFFF'}
                  style = {{
                    flex:1,
                    borderTopColor: '#E9E9E9',
                    borderTopWidth: 1,
                  }}
                  onPress={() => console.log("datepicker clicked")}>
                    <View style = {{
                      backgroundColor: "#FFFFFF",
                      height: 256,
                      overflow: 'hidden',
                    }}>
                      <View style = {{ marginTop: 20 }}>
                        <DateTimePicker
                          display= 'spinner'
                          value = {new Date(date)}
                          mode = "time"
                          onChange = {(e, newTime) => {
                            // console.log('look here:', moment(newTime).format('HH:MM'))
                            onChange(newTime)}
                          }
                        />
                      </View>
                      <TouchableOpacity
                        underlayColor={'transparent'}
                        onPress = {onCancel}
                        style = {[styles.btnText, styles.btnCancel]}>
                        <Text> Cancel </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        underlayColor={'transparent'}
                        onPress = {onDone}
                        style = {[styles.btnText, styles.btnDone]}>
                        <Text> Done </Text>
                      </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default function Scheduling({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "All Rooms", value: "window1" },
    { label: "Room 1", value: "window2" },
    { label: "Room 2", value: "window3" },
    { label: "Room 3", value: "window4" },
  ]);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("Date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [time, setTime] = useState({hours: '', minutes: ''});

  
  const [toggle, setToggle] = useState({toggle: true})
  const textValue = toggle?"AM":"PM";
  const buttonBg = toggle?"#361A36":"#FFFFFF"
  const textColor = toggle?"#FFFFFF":"#361A36"


  const _onPress = () => {
    const newToggle = !toggle.toggle
    setToggle({toggle:newToggle})
  }



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);

    setTime({hours: tempDate.getHours(), minutes: tempDate.getMinutes()}) 
    console.log(time);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

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
            <View style={styles.closedShieldView}>
              <Text style={styles.ShieldText}>Close Shields</Text>
            </View>
            <Switch
              left={315}
              top={50}
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
        <View style={styles.othercontainer}>
          <View style={styles.openShieldContainer}>
            <View style={styles.openShieldView}>
              <Text style={styles.ShieldText}>Open Shields</Text>
            </View>
            <Switch
              left={156}
              top={85}
              trackColor={{ false: "#767577", true: "#361A36" }}
              thumbColor={isEnabled ? "#f5dd4b" : "white"}
              ios_backgroundColor="white"
              onValueChange={switch2}
              value={activeSwitch === 2}
            />
          </View>
          <View style={styles.repeatTwo}>
            <TouchableOpacity
              onPress={() => navigation.navigate("RepeatEachWeek")}>
              <Text style={styles.repeatEveryText}>Repeat Every</Text>
            </TouchableOpacity>
          </View>
        </View>
{/* 
        <View style={styles.timeshow}>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="default"
              onChange={onChange}
            />
          )}
        </View> */}
        {/* <TouchableOpacity>
        <View style={styles.wholeTimeContainer}>
        <View style={styles.hoursContainer}>
        <Text style={styles.showingHours}> {time.hours} </Text>
        </View>
        <View style={styles.colon}>
        <Text style={styles.textColon}> : </Text> 
        </View>
        <View style={styles.minutesContainer}>
        <Text style={styles.showingMinutes}> {time.minutes} </Text>
        </View>
        </View>
        </TouchableOpacity> */}

      <CustomTimePicker
        defaultDate = {moment()}
      />

      <CustomTimePicker
        defaultDate = {moment()}
      />



        <View style={{}}>
          <View style={{}}>
            <TouchableOpacity onPress={()=>_onPress()} style={{backgroundColor:buttonBg, height: 57, width: 73, left: 220, top: -166 , borderRadius: 2, justifyContent: 'center'}}>
              <Text style={{color:textColor, textAlign:'center', justifyContent: 'center', fontSize: 20, fontFamily: "Times New Roman"}}>{textValue}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{}}>
          <View style={{}}>
            <TouchableOpacity onPress={()=>_onPress()} style={{backgroundColor:buttonBg, height: 57, width: 73, left: 220, top: 31 , borderRadius: 2, justifyContent: 'center'}}>
              <Text style={{color:textColor, textAlign:'center', justifyContent: 'center', fontSize: 20, fontFamily: "Times New Roman"}}>{textValue}</Text>
            </TouchableOpacity>
          </View>
        </View>


        <StatusBar style="auto" />
      </View>
    </>
   );
  }

const styles = StyleSheet.create({
  ShieldText: {
    fontFamily: "Times New Roman",
    fontSize: 30,
    left: 36,
    top: 10
  },

  toggleButtonContainer: {
    left: 62,
    width: 50,
    height: 70,

  },
  colon: {
    height: 57,
    justifyContent: 'center',
    left: -2
  },
  textColon: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20
  },
  wholeTimeContainer: {
    flexDirection: 'row'
  },
  hoursContainer: {
    borderWidth: 1,
    borderRadius: 2,
    width: 73,
    height: 57,
    justifyContent: 'center',
  },
  minutesContainer: {
    borderWidth: 1,
    borderRadius: 2,
    width: 73,
    height: 57,
    justifyContent: 'center',
  },
  showingHours: {
    fontFamily: "Times New Roman",
    fontSize: 25,
    left: -3,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  showingMinutes: {
    fontFamily: "Times New Roman",
    fontSize: 25,
    left: -3,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  closeShieldContainer: {
    flexDirection: "row",
  },
  openShieldContainer: {
    flexDirection: "row",
  },
  timeDateText: {
    borderWidth: 1,
    borderColor: "black",
  },
  repeat: {
    justifyContent: 'center',
    backgroundColor: "#361A36",
    left: 36,
    width: 155,
    height: 36,
    top: 80,
    borderRadius: 5,
  },
  repeatTwo: {
    justifyContent: 'center',
    backgroundColor: "#361A36",
    left: 36,
    width: 155,
    height: 36,
    top: 115,
    borderRadius: 5,
  },
  arrowContainer: {
    textAlign: "center",
    top: -10,
    left: 100,
    backgroundColor: "white",
    height: 34,
    width: 74,
  },
  repeatEveryText: {
    fontFamily: "Times New Roman",
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  Body: {
    backgroundColor: "white",
    flex: 1
  },
  wholecontainer: {
    top: 50,
  },
  othercontainer: {
    top: 200,
  },
  timeshow: {
    top: -165,
    alignContent: "center",
    justifyContent: "center",
    left: -140,
  },
});
