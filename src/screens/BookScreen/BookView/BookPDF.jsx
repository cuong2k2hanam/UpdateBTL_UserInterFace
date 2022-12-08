import React from "react";
import { View, StyleSheet } from "react-native";
import PdfReader from "rn-pdf-reader-js";

const BookPDF = ({ style, pdf }) => {
  console.log(pdf);
  return (
    <View style={[styles.container, style]}>
      <PdfReader
        source={{
          uri: pdf,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    backgroundColor: "red",
    flex: 1,
  },
});

export default BookPDF;
