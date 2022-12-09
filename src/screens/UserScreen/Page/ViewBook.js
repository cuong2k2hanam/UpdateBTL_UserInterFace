import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { Image } from "react-native-elements";
import { styleCommon } from "../styles/common";
const BASE_URI = "https://source.unsplash.com/random?sig=";
const ImageAPI = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.bookItem}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
          }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    aspectRatio: 0.7,
    width: "100%",
    flex: 1,
  },
  bookItem: {
    paddingTop: 15,
    width: "30%",
    alignItems: "center",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 1,
  },
});

export default ImageAPI;
