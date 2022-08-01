import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Switch,
    SwitchComponent,
    Modal,
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import { NavigationContainer } from "@react-navigation/native";
  import React, { useState } from "react";
  import Checkbox from "expo-checkbox";
import { CheckBox } from "react-native-web";
  
  export default function AssignRoom({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const [activeCheck, setActiveCheck] = useState(null);

    const [isChecked2, setChecked2] = useState(false);
    const [activeCheck2, setActiveCheck2] = useState(null);

    const [isChecked3, setChecked3] = useState(false);
    const [activeCheck3, setActiveCheck3] = useState(null);

    return (
      <>
        <View style={styles.body}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.back}> Back </Text>
            </TouchableOpacity>
            <Text style={styles.assignText}>Assign to Room</Text>
            <View style={styles.roomOneContainer}>

          <Text style={styles.roomOneText}>Room 1</Text>
   
        <View style={styles.checkboxThree}>
        <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#361A36" : undefined}
          />
        </View>
      </View>

      <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

      <View style={styles.roomTwoContainer}>
      
          <Text style={styles.roomTwoText}>Room 2</Text>
       
        <View style={styles.checkboxTwo}>
        <Checkbox
            value={isChecked2}
            onValueChange={setChecked2}
            color={isChecked2 ? "#361A36" : undefined}
          />
        </View>
      </View>

      <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

      <View style={styles.roomThreeContainer}>
       
          <Text style={styles.roomThreeText}>Room 3</Text>
      
        <View style={styles.checkbox}>
        <Checkbox
           value={isChecked3}
            onValueChange={setChecked3}
            color={isChecked3 ? "#361A36" : undefined}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <View style={styles.confirmButton}>
          <Text style={styles.confirmText}> Confirm </Text>
        </View>
      </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    confirmButton: {
      width: 269,
      height: 67,
      borderRadius: 100,
      borderColor: "white",
      backgroundColor: "#361A36",
      justifyContent: 'center',
      marginLeft: 60,
      marginTop: 100,
},
confirmText: {
  textAlign: "center",
  fontFamily: "ZenDots",
  fontSize: 24,
  color: "white",
},
    checkboxThree: {
      marginTop: 8,
      marginLeft: 223
    },
    checkboxTwo: {
      marginTop: 8,
      marginLeft: 219
    },
    checkbox: {
      marginTop: 8,
      marginLeft: 220
    },
    back: {
      marginTop: 50,
      marginLeft: 30,
      fontFamily: "DoppioOne"
    },
    assignText: {
      textAlign: 'center',
      marginTop: 50,
      fontFamily: "ZenDots",
      fontSize: 35,
    },
    headerBack: {
      flexDirection: 'row',
    },
    body: {
      flex: 1,
      backgroundColor: 'white'
    },
    addDeleteRoom: {
      flexDirection: "row",
      padding: 10
  },
  addRoomText: {
      fontFamily: "Times New Roman",
      textAlign: "left",
      padding: 10,
      fontSize: 15,
  },
  deleteRoomText: {
      fontFamily: "Times New Roman",
      left: 185,
      textAlign: "right",
      padding: 10,
      fontSize: 15,
  },
  Windows: {
      backgroundColor: "white"
  },
  Body: {
      flex: 1,
      backgroundColor: "white"
  },
  yourRoom: {
      backgroundColor: "white",
      fontSize: 30,
      textAlign: "center",
      padding: 20
  },
  roomOneContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 61,
   
  },
  roomOneText: {
      backgroundColor: "white",
      fontSize: 26,
      marginLeft: 28,       
      fontFamily: "DoppioOne"
  },
  roomTwoContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 10,
  },
  roomTwoText: {
      backgroundColor: "white",
      fontSize: 26,
      marginLeft: 28,
      fontFamily: "DoppioOne"
  },
  roomThreeContainer: {
      backgroundColor: "white",
      flexDirection: "row",
      marginTop: 10,
     
  },
  roomThreeText: {
      backgroundColor: "white",
      fontSize: 26,
      marginLeft: 28,
      fontFamily: "DoppioOne"
  },
  greenButton: {
      
      borderWidth: 3,
      backgroundColor: 'white',
      width: 269,
      height: 67,
      borderRadius: 100
  },
  openText: {
      fontSize: 20,
      fontFamily: "ZenDots",
      padding: 0,
      top: 20,
      textAlign: 'center',
      justifyContent: 'center'
  },
  redButton: {
      backgroundColor: "#F37C7C",
      width: 269,
      height: 67,
      borderRadius: 100,
      backgroundColor: "#361A36"
  },
  closeText: {
      top: 20,
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center',
      color: "white",
      fontFamily: "ZenDots"
  },
  openShield: {
      marginTop: 176,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
  },
  closeShield: {
      marginTop: 57,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100
  },
  });
  