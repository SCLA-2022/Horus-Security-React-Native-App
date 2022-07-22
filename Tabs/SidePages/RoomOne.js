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

export default function RoomOne({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <View style={styles.modalContainer}>
      <Modal style={styles.theModal} visible={modalOpen} animationType="slide">
        <View style={styles.ModalView}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text style={styles.modalText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
                <Text style={styles.Bluetooth}> What do you want to do with this window? </Text>
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
    </View>

      <View style={styles.body}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}> Back </Text>
          </TouchableOpacity>

          <Text style={styles.header}>Room 1</Text>
        </View>

        <View style={styles.windowContainer}>
          <TouchableOpacity onPress={() => setModalOpen(!modalOpen)}>
            <Text style={styles.windowOne}>Window 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
            <Text style={styles.windowTwo}>Window 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
            <Text style={styles.windowThree}>Window 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    left: 50,
    borderWidth: 0.6,
    borderBottomColor: 'transparent',
  },
  disconnect: {
    left: 100,
    width: 120,
    height: 65,
  },
  disconnectText: {
    left: -20,
    top: 16,
    fontSize: 23,
    fontFamily: 'Times New Roman'
  },
  reassign: {
    left: 50,
    width: 120,
    height: 65
  },
  reassignText: {
    left: -10,
    top: 16,
    fontSize: 23,
    fontFamily: 'Times New Roman'
  },
  modalText: {

  },
  theModal: {
  },
  container: {
  width: 345,
  height: 189,
  top: 180,
  backgroundColor: 'white',
  left: 21,
  borderTopEndRadius: 30,
  borderTopStartRadius: 30,
  borderWidth: 1,
  },
  background: {
  backgroundColor: 'white',
  height: 65,
  top: 130,
  left: -1,
  width: 345,
  borderBottomEndRadius: 30,
  borderBottomStartRadius: 30,
  borderWidth: 1,
  flexDirection: 'row'
  },
  Bluetooth: {
  color: 'black',
  textAlign: 'center',
  top: 70,
  left: 15,
  fontSize: 25,
  width: 300,
  fontFamily: 'Times New Roman'
  },
  modalContainer: {
    opacity: 100
  },
  ModalView: {
    opacity: 100,
    top: 70,
    left: 10
  },
  backButton: {
    top: 60,
    left: 10,
    flexDirection: "row",
  },
  header: {
    textAlign: "center",
    left: 100,
    fontSize: 30,
    fontFamily: "Times New Roman",
  },
  back: {
    top: 10,
  },
  windowOne: {
    backgroundColor: "white",
    fontSize: 21,
    padding: 10,
    borderWidth: 1,
    borderTopColor: "white",
    borderEndColor: "white",
    borderStartColor: "white",
    fontFamily: "Times New Roman",
  },
  windowTwo: {
    backgroundColor: "white",
    fontSize: 21,
    padding: 10,
    borderWidth: 1,
    borderTopColor: "white",
    borderEndColor: "white",
    borderStartColor: "white",
    fontFamily: "Times New Roman",
  },
  windowThree: {
    backgroundColor: "white",
    fontSize: 21,
    padding: 10,
    borderWidth: 1,
    borderTopColor: "white",
    borderEndColor: "white",
    borderStartColor: "white",
    fontFamily: "Times New Roman",
  },
  windowContainer: {
    top: 100,
  },
  body: {
    backgroundColor: "white",
    flex: 1,
  },
});
