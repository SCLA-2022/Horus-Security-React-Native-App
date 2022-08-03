import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Switch,
    SwitchComponent,
    Modal,
    Pressable,
    Image
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import { NavigationContainer } from "@react-navigation/native";
  import React, { useState } from "react";
  import CheckBox from "react-native-check-box";
  
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
              <Image style = {{width: 30, height: 30, marginLeft: 30, backgroundColor: 'red', marginTop: 40}} resizeMode="stretch" source = {require('../../assets/Icons/left-arrow.png')}/>
            </TouchableOpacity>

            <Text style={styles.assignText}>Assign to Room</Text>

            <TouchableOpacity onPress={() => setChecked(!isChecked)} style={styles.roomOneContainer}>

         
              <Text style={styles.roomOneText}>Room 1</Text>
   
              <View style={styles.checkboxThree}>

                <CheckBox
                  onClick={()=>{
                    setChecked(!isChecked)
                  }}
                  isChecked={isChecked}
                  leftText={"CheckBox"}
                  checkedImage = {<View style={{width: 30, height: "auto"}}><Text style = {{fontSize: 20, color: '#361A36'}}> ✓ </Text></View>}
                  unCheckedImage = {<View style = {{ width: 50, height: 20}}></View>}
                />

              </View>
      

            </TouchableOpacity>

            <View style = {{borderWidth:1, width: 377, alignSelf:'center', marginTop: 10}}></View>

            <TouchableOpacity onPress={() => setChecked2(!isChecked2)} style={styles.roomTwoContainer}>
      
              <Text style={styles.roomTwoText}>Room 2</Text>
       
              <View style={styles.checkboxTwo}>
                  
                <CheckBox
                onClick={()=>{
                  setChecked2(!isChecked2)
                }}
                  isChecked={isChecked2}
                  leftText={"CheckBox"}
                  checkedImage = {<View style={{width: 100, height: 20}}><Text style = {{fontSize: 20, color: '#361A36'}}> ✓ </Text></View>}
                  unCheckedImage = {<View style = {{ width: 100, height: 20}}></View>}
                />

              </View>

            </TouchableOpacity>

            <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

            <TouchableOpacity onPress={() => setChecked3(!isChecked3)} style={styles.roomThreeContainer}>
       
              <Text style={styles.roomThreeText}>Room 3</Text>
      
              <View style={styles.checkbox}>

                <CheckBox
                onClick={()=>{
                  setChecked3(!isChecked3)
                }}
                  isChecked={isChecked3}
                  leftText={"CheckBox"}

                  checkedImage = {<View style={{width: 100, height: 20}}><Text style = {{fontSize: 20, color: '#361A36'}}> ✓ </Text></View>}
                  unCheckedImage = {<View style = {{ width: 100, height: 20}}></View>}
                />

              </View>

            </TouchableOpacity>
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
      color: '#361A36',
      marginTop: 50,
      marginLeft: 30,
      fontFamily: "DoppioOne"
    },
    assignText: {
      color: '#361A36',
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
    color: '#361A36',
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
    color: '#361A36',
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
    color: '#361A36',
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
  