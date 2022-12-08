import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Icon } from "react-native-elements";
import { styleCommon } from "../styles/common";

const Popup = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="close" type="font-awesome" color="#000" size={35} />
            </Pressable>
            <Text style={[styles.modalText, styleCommon.h1]}>Hỗ trợ</Text>
            <View style={[styleCommon.rowDirection, styleCommon.center]}>
              <Icon name="bug" type="font-awesome" color="#000" size={25} />
              <View style={{ paddingLeft: 15 }}>
                <Text style={[styleCommon.h2]}>Báo cáo lỗi</Text>
                <Text>Khi ứng dụng hoạt động bình thường</Text>
              </View>
            </View>
            <View
              style={[
                styleCommon.rowDirection,
                styles.mgTop,
                styleCommon.center,
              ]}
            >
              <Icon
                name="drafting-compass"
                type="font-awesome-5"
                color="#000"
                size={20}
              />
              <View style={{ paddingLeft: 15 }}>
                <Text style={styleCommon.h2}>Báo cáo lỗi</Text>
                <Text>Khi ứng dụng hoạt động bình thường</Text>
              </View>
            </View>
            <View
              style={[
                styleCommon.rowDirection,
                styles.mgTop,
                styleCommon.center,
              ]}
            >
              <Icon
                name="questioncircle"
                type="antdesign"
                color="#000"
                size={20}
              />
              <View style={{ paddingLeft: 15 }}>
                <Text style={styleCommon.h2}>Báo cáo lỗi</Text>
                <Text>Khi ứng dụng hoạt động bình thường</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#fff",
    position: "absolute",
    right: 20,
    top: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  mgTop: {
    marginTop: 10,
  },
});

export default Popup;
