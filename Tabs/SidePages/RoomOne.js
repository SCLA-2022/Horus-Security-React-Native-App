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
      <Modal visible={true} animationType='slide'>
        <View style={styles.ModalView}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.body}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}> Back </Text>
          </TouchableOpacity>

          <Text style={styles.header}>Room 1</Text>
        </View>

        <View style={styles.windowContainer}>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
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
