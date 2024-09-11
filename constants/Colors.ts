/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#673AB7';
const tintColorDark = '#fff';
const primaryColor = '#673AB7';
const lightColor= '#FFFFFF';
const darkColor= '#000000';

export const Colors = {
  light: {
    text: '#11181C',
    textLight: lightColor,
    background: primaryColor,
    backgroundSecondary: '#FFFFFF',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    button: primaryColor,
    placeholder: lightColor,
  },
  dark: {
    text: '#ECEDEE',
    textLight: darkColor,
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    button: primaryColor,
    placeholder: darkColor,
  },
  colorPrimary: primaryColor,
  colorSecondary: '#512DA8',
  colorTertiary: '#FFAB40',

};
