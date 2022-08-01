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

export default function AssignRoom({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const [activeCheck, setActiveCheck] = useState(null);

  const [isChecked2, setChecked2] = useState(false);
  const [activeCheck2, setActiveCheck2] = useState(null);

  const [isChecked3, setChecked3] = useState(false);
  const [activeCheck3, setActiveCheck3] = useState(null);

  const [isChecked4, setChecked4] = useState(false);
  const [activeCheck4, setActiveCheck4] = useState(null);

  const [isChecked5, setChecked5] = useState(false);
  const [activeCheck5, setActiveCheck5] = useState(null);

  const [isChecked6, setChecked6] = useState(false);
  const [activeCheck6, setActiveCheck6] = useState(null);

  const [isChecked7, setChecked7] = useState(false);
  const [activeCheck7, setActiveCheck7] = useState(null);

  return (
    <>
      <View style={styles.body}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}> Back </Text>
          </TouchableOpacity>
          <Text style={styles.assignText}>Repeat</Text>
          <View style={styles.roomOneContainer}>

        <Text style={styles.roomOneText}>Monday</Text>
 
      <View style={styles.checkboxOne}>
      <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#361A36" : undefined}
        />
      </View>
    </View>

    <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

    <View style={styles.roomTwoContainer}>
    
        <Text style={styles.roomTwoText}>Tuesday</Text>
     
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
     
        <Text style={styles.roomThreeText}>Wednesday</Text>
    
      <View style={styles.checkboxThree}>
      <Checkbox
         value={isChecked3}
          onValueChange={setChecked3}
          color={isChecked3 ? "#361A36" : undefined}
        />
      </View>
    </View>

    <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

    <View style={styles.roomTwoContainer}>
    
        <Text style={styles.roomTwoText}>Thursday</Text>
     
      <View style={styles.checkboxFour}>
      <Checkbox
          value={isChecked4}
          onValueChange={setChecked4}
          color={isChecked4 ? "#361A36" : undefined}
        />
      </View>
    </View>

    <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

    <View style={styles.roomTwoContainer}>
    
        <Text style={styles.roomTwoText}>Friday</Text>
     
      <View style={styles.checkboxFive}>
      <Checkbox
          value={isChecked5}
          onValueChange={setChecked5}
          color={isChecked5 ? "#361A36" : undefined}
        />
      </View>
    </View>

    <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

    <View style={styles.roomTwoContainer}>
    
        <Text style={styles.roomTwoText}>Saturday</Text>
     
      <View style={styles.checkboxSix}>
      <Checkbox
          value={isChecked6}
          onValueChange={setChecked6}
          color={isChecked6 ? "#361A36" : undefined}
        />
      </View>
    </View>

    <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>

    <View style={styles.roomTwoContainer}>
    
        <Text style={styles.roomTwoText}>Sunday</Text>
     
      <View style={styles.checkboxSeven}>
      <Checkbox
          value={isChecked7}
          onValueChange={setChecked7}
          color={isChecked7 ? "#361A36" : undefined}
        />
      </View>
    </View>

    <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 10}}></View>
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
  backButton: {

  },
  confirmButton: {
    marginTop: 80,
    width: 269,
    height: 67,
    borderRadius: 100,
    borderColor: "white",
    backgroundColor: "#361A36",
    alignSelf: 'center',
    justifyContent: 'center'
},
confirmText: {
textAlign: "center",
fontFamily: "ZenDots",
fontSize: 24,
color: "white",
},
  checkboxOne: {
    marginTop: 10,
    marginLeft: 210 
  },
  checkboxTwo: {
    marginTop: 10,
    marginLeft: 206
  },
  checkboxThree: {
    marginTop: 10,
    marginLeft: 166
  },
  checkboxFour: {
    marginTop: 10,
    marginLeft: 194
  },
  checkboxFive: {
    marginTop: 10,
    marginLeft: 232
  },
  checkboxSix: {
    marginTop: 10,
    marginLeft: 198
  },
  checkboxSeven: {
    marginTop: 10,
    marginLeft: 219
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
  marginTop: 40,
 
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
