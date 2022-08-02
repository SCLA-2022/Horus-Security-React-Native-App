import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Switch,
  SwitchComponent,
  Modal,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

export default function RoomOne({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const inputModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
         <Text style={styles.Bluetooth}> What do you want to do with this window? </Text>
                <View style={styles.background}>
                  <TouchableOpacity onPress={() => navigation.navigate("AssignRoom") + setModalVisible(false)}>
                    <View style={styles.reassign}>
                      <Text style={styles.reassignText}>Reassign</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.line}></View>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <View style={styles.disconnect}>
                      <Text style={styles.disconnectText}>Disconnect</Text>
                    </View>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
    </Modal>
  );

  return (
    <>
      {/* <View style={styles.modalContainer}> */}
      {/* <Modal style={styles.theModal} visible={modalOpen} animationType="fade"> */}
      {/* <View style={styles.ModalView}>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Text style={styles.modalText}>Back</Text>
            </TouchableOpacity>
          </View> */}
      {/* <View style={styles.container}>
            <Text style={styles.Bluetooth}>
              {" "}
              What do you want to do with this window?{" "}
            </Text>
            <View style={styles.background}>
              <TouchableOpacity>
                <View style={styles.reassign}>
                  <Text style={styles.reassignText}>Reassign</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity>
                <View style={styles.disconnect}>
                  <Text style={styles.disconnectText}>Disconnect</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View> */}
      {inputModal()}
      <View style={styles.body}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}> Back </Text>
          </TouchableOpacity>
        </View>
        
          <Text style={{alignSelf: 'center', color: '#361A36', fontSize: 40, fontWeight: "400", lineHeight: 48, marginTop: 30, fontFamily: 'ZenDots'}}>Room 1</Text>
        <View style={styles.hopefullyeverythingturnsoutfinebuteventheniwillpushforwardhopefullythingsturnoutalrightwithhardwork}>

        
        <View style={styles.windowContainerOne}>

          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.windowOne}>Window 1</Text>                  
          </TouchableOpacity>

        
          <TouchableOpacity style = {{marginLeft: 'auto', marginRight: 25}} onPresss = {() => console.log('three dots clicked')}>  
            <Text style = {{fontSize: 30, color: '#361A36'}}> ... </Text>
          </TouchableOpacity>

        </View>

        <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 0}}></View>

        <View style={styles.windowContainerTwo}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.windowTwo}>Window 2</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {{marginLeft: 'auto', marginRight: 25}} onPresss = {() => console.log('three dots clicked')}>  
            <Text style = {{fontSize: 30, color: '#361A36'}}> ... </Text>
          </TouchableOpacity>
        </View>

        <View style = {{borderWidth:1, backgroundColor:'red', width: 377, alignSelf:'center', marginTop: 0}}></View>

        <View style={styles.windowContainerThree}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.windowThree}>Window 3</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {{marginLeft: 'auto', marginRight: 25}} onPresss = {() => console.log('three dots clicked')}>  
            <Text style = {{fontSize: 30, color: '#361A36'}}> ... </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    left: 50,
    borderWidth: 0.6,
    borderBottomColor: "transparent",
  },
  disconnect: {
    marginLeft: 100,
    width: 120,
    height: 65,
  },
  disconnectText: {
    left: -20,
    top: 16,
    fontSize: 23,
    fontFamily: "Times New Roman",
  },
  reassign: {
    top: 0,
    left: 50,
    width: 120,
    height: 65,
  },
  reassignText: {
    left: -10,
    top: 16,
    fontSize: 23,
    fontFamily: "Times New Roman",
  },
  modalText: {},
  theModal: {
    width: 345,
    height: 189,
    backgroundColor: "white",
    
  },
  container: {
    width: 345,
    height: 189,
    top: 180,
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderWidth: 1,
  },
  background: {
    backgroundColor: "white",
    height: 65,
    top: 35,
    left: 0,
    width: 345,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderWidth: 1,
    flexDirection: "row",
  },
  Bluetooth: {
    paddingTop: 20,
    color: "black",
    textAlign: "center",
    top: 5,
    left: 0,
    fontSize: 25,
    width: 200,
    fontFamily: "Times New Roman",
  },
  modalContainer: {
    opacity: 100,
  },
  ModalView: {
    opacity: 100,
    top: 70,
    left: 10,
  },
  backButton: {
    marginTop: 60,
    marginLeft: 10,
    flexDirection: "row",
  },
  header: {
    textAlign: "center",
    left: 100,
    fontSize: 30,
    fontFamily: "Times New Roman",
  },
  back: {
    color: '#361A36',
    marginTop: 0,
    marginLeft: 30,
    fontFamily: "DoppioOne"

  },
  windowOne: {
    color: '#361A36',
    backgroundColor: "white",
    fontSize: 26,
    marginLeft: 28,
    fontFamily: "DoppioOne"
  },
  windowTwo: {
    color: '#361A36',
    backgroundColor: "white",
    fontSize: 26,
    marginLeft: 28,
    fontFamily: "DoppioOne"
  },
  windowThree: {
    color: '#361A36',
    backgroundColor: "white",
    fontSize: 26,
    marginLeft: 28,
    fontFamily: "DoppioOne"
  },
  windowContainerOne: {
    backgroundColor: "white",
    fontSize: 21,
    padding: 10,
    fontFamily: "Times New Roman",
    flexDirection: 'row'
  },
  windowContainerTwo: {
    backgroundColor: "white",
    fontSize: 21,
    padding: 10,
    fontFamily: "Times New Roman",
    flexDirection: 'row'
  },
  windowContainerThree: {
    backgroundColor: "white",
    fontSize: 21,
    padding: 10,
    fontFamily: "Times New Roman",
    flexDirection: 'row'
  },
  body: {
    backgroundColor: "white",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    top: -130,
    borderWidth: 1,
    margin: 100,
    backgroundColor: "white",
    borderRadius: 20,
    width: 345,
    padding: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  hopefullyeverythingturnsoutfinebuteventheniwillpushforwardhopefullythingsturnoutalrightwithhardwork: {
    marginTop: 40
  }
});
