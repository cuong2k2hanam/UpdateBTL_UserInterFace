import { View, Text } from "react-native";
import React from "react";
import { TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BookEmpty from "../screens/BookScreen/BookEmpty/BookEmpty";
import BookInfo from "../screens/BookScreen/BookInfo/BookInfo";
import BookComment from "../screens/BookScreen/BookComent/BookComment";
import BookListen from "../screens/BookScreen/BookListen/BookListen";
import BookView from "../screens/BookScreen/BookView/BookView";
import BookDetail from "../screens/Bach/BookDetail";

const Stack = createStackNavigator();

export default function BookNavigation({ route, navigaton }) {
  console.log(route.params);

  return (
    <Stack.Navigator
      initialRouteName={route.params ? "BookInfo" : "BookEmpty"}
      screenOptions={{ headerShown: false }}
      // initialParams={{ myroute: route }}
    >
      <Stack.Screen name="BookEmpty" component={BookEmpty} />
      <Stack.Screen
        name="BookInfo"
        component={BookInfo}
        initialParams={{ mybook: route.params?.mybook }}
      />
      <Stack.Screen name="BookComment" component={BookComment} />
      <Stack.Screen name="BookListen" component={BookListen} />
      <Stack.Screen name="BookView" component={BookView} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
    </Stack.Navigator>
  );
}
