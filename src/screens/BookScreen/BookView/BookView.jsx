import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../../components/common/Header";
import { theme } from "../../../theme";
import BookPDF from "./BookPDF";

const BookView = ({ route, navigation }) => {
  const { mybook } = route.params;
  console.log(mybook);

  return (
    <View style={styles.container}>
      <Header
        title={mybook.bookName}
        style={styles.header}
        navigation={navigation}
      />
      <BookPDF style={styles.bookPDF} pdf={mybook.bookUri} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.colors.primary,
  },
  bookPDF: {},
});

export default BookView;
