import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#F96D41",
  secondary: "#25282F",
  secondPrimary: "#E1EDFF",

  // colors
  black: "#1E1B26",
  white: "#FFFFFF",
  lightGray: "#64676D",
  lightGray2: "#EFEFF0",
  lightGray3: "#D4D5D6",
  lightGray4: "#7D7E84",
  gray: "#2D3038",
  gray1: "#282C35",
  darkRed: "#31262F",
  lightRed: "#eb0e0e",
  darkBlue: "#22273B",
  lightBlue: "#2867fa",
  darkGreen: "#213432",
  lightGreen: "#04d435",
  linerGradientPrimary: ["#4559BD", "rgba(69, 89, 189, 0.7)"],
  transparent: "transparent",
  lightYellow: "#ffff17",
  darkYellow: "#3d3d22",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  // largeTitle: 50,
  // h1: 30,
  // h2: 22,
  // h3: 16,
  // h4: 14,
  // body1: 30,
  // body2: 20,
  // body3: 16,
  // body4: 14,
  largeTitle: 25,
  h1: 20,
  h2: 15,
  h3: 12,
  h4: 10,
  body1: 20,
  body2: 15,
  body3: 12,
  body4: 10,

  // app dimensions
  width,
  height,
};

// export const FONTS = {
//   largeTitle: {
//     fontFamily: "Roboto-regular",
//     fontSize: SIZES.largeTitle,
//     lineHeight: 55,
//   },
//   h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
//   h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
//   h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
//   h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
//   body1: {
//     fontFamily: "Roboto-Regular",
//     fontSize: SIZES.body1,
//     lineHeight: 36,
//   },
//   body2: {
//     fontFamily: "Roboto-Regular",
//     fontSize: SIZES.body2,
//     lineHeight: 30,
//   },
//   body3: {
//     fontFamily: "Roboto-Regular",
//     fontSize: SIZES.body3,
//     lineHeight: 22,
//   },
//   body4: {
//     fontFamily: "Roboto-Regular",
//     fontSize: SIZES.body4,
//     lineHeight: 22,
//   },
// };
export const FONTS = {
  largeTitle: {
    fontFamily: "Roboto_400Regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Roboto_900Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto_700Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto_700Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto_700Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto_400Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto_400Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto_400Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto_400Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
