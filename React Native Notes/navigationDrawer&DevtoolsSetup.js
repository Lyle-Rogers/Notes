// Add this this file to navigation drawer & devtools setup's ReadMe file

// How to get started
// https://reactnavigation.org/docs/getting-started

// npm install @react-navigation/native

// npm install react-native-screens react-native-safe-area-context
// react-native-screens package requires one additional configuration step
// to properly work on Android devices. Edit MainActivity.java file which is
// located in android/app/src/main/java/<your package name>/MainActivity.java.
// Add the following code to the body of MainActivity class:
// @Override
// protected void onCreate(Bundle savedInstanceState) {
//   super.onCreate(null);
// }
// and make sure to add an import statement at the top of this file:
// import android.os.Bundle;

// Now, we need to wrap the whole app in NavigationContainer. Usually you'd
// do this in your entry file, such as index.js or App.js:
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

export function App() {
  // I took off default from this so that these notes will stop showing a disturbing error
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}

// setting up the navigation drawer
// https://reactnavigation.org/docs/drawer-navigator

// npm install @react-navigation/drawer

// npm install react-native-gesture-handler react-native-reanimated

// To finalize installation of react-native-gesture-handler, add the following
// at the top (make sure it's at the top and there's nothing else before it) of
// your entry file, such as index.js or App.js:

import "react-native-gesture-handler";

// you will also need to configure reanimated 2 or divert to reanimated 1. reanimated
// 2 configuration documentation here:
// https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/

// npm install react-native-reanimated

// Add Reanimated's babel plugin to your babel.config.js:
module.exports = {
  plugins: ["react-native-reanimated/plugin"],
};
// Reanimated plugin has to be listed last.

// Turn on Hermes engine by editing android/app/build.gradle
// project.ext.react = [
//   enableHermes: true  // <- here | clean and rebuild if changing
// ]

// Plug Reanimated in MainApplication.java:
// import com.facebook.react.bridge.JSIModulePackage; // <- add
// import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add
// ...
// private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
// ...

//     @Override
//     protected String getJSMainModuleName() {
//       return "index";
//     }

//     @Override
//     protected JSIModulePackage getJSIModulePackage() {
//       return new ReanimatedJSIModulePackage(); // <- add
//     }
//   };
// ...

// clean gradle with this and then restart it:
// cd android
// ./gradlew clean
// then: npm start --rest-cache
// npm run android

// adding the drawer navigator to the App.js file:
import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainPage from "./src/screens/MainPage";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainPage">
        <Drawer.Screen name="MainPage" component={MainPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

// after adding the navigation drawer it gave me this error:
// Error: Reanimated 2 failed to create a worklet, maybe you forgot to
// add Reanimated's babel plugin?, js engine: hermes

// I literally did everything in this long ass file and reread it like twice. Do not, I repeat,
// do not open this mother fucker
// https://github.com/software-mansion/react-native-reanimated/issues/1875

// I found the solution to the error in this stackoverflow question here:
// https://stackoverflow.com/questions/43604603/module-appregistry-is-not-registered-callable-module-calling-runapplication/51304124
// cd android
// taskkill /f /im node.exe
// npm start -- --reset-cache
// npm run android

// Setting up react native navigation devtools:
// npm install @react-navigation/devtools
// npm install --save-dev react-native-flipper
// Install the react-navigation plugin in the Flipper app
// Flipper is an application for debugging apps.
