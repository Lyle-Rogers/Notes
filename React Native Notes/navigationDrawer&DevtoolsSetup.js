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

// Making a react native application into an apk file and then
// downloading it on to an android device so that we can then ad
// the application to Aptoid, a black market for android apps:

// the majority of the code below I learned in this tutorial
// https://www.youtube.com/watch?v=5tgcogEoIiQ

// cd production

// change the apps name in package.json and in the android folder
// at: \app\src\main\res\values\strings.xml

// can make an icon for your app at: https://appicon.co/
// Unselect all apple products and generate it for android to
// work with the android apk.
// After the icon has been generated, open it's android directory. Inside
// there is the generated app icons in all android formats. In the react native
// app open \android\app\src\main\res and replace the default react native
// icon files with the newly generated icon files, and don't replace
// the values directory or any of the other extra files and directories

// After generating a cropped image with the android app icon generator
// above, use this website to make it into a perfect app icon for android
// and ios: https://icon.kitchen/

// at icon.kitchen make sure to make a circle app icon named ic_launcher_round.png
// and a square app icon just named ic_launcher.png. In the res directory where the icons are
// stored in react native replace the 2 round and square images in every folder there with the
// newly created square and round images. After that just do npm run android and should work fine.
// if you got an error your image files might be names incorrectly in 1 of the app icon folders!
// what you named the react native in the beginning will be the name of the apk package. If you wished
// to change it there is on stack overflow or somewhere else!

// Generate a upload key for google play store with this:
// don't run this command endless your sure the upload key fields you enter are the fields you wan't you'r
// app to be stuck with maybe for ever. Save the upload key's password. If you ever forget it play store
// won't allow you to publish updates to your app!
// Just change the required fields in this upload key generator command to match your app before submittin.
// first cd android & cd app and then run the command bellow just after changing my-key-alias and my-upload-key
// to your react apps directory name or apk name:
// keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
// https://reactnative.dev/docs/signed-apk-android
// after you've submitted, the key file will be generated in the app folder

// similar in https://reactnative.dev/docs/signed-apk-android edit this file ~/.gradle/gradle.properties or android/gradle.properties,
// and add the following (replace ***** with the correct keystore password, alias and key password),
// I just put it in /android/gradle.properties
// MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
// MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
// MYAPP_UPLOAD_STORE_PASSWORD=*****
// MYAPP_UPLOAD_KEY_PASSWORD=*****

// and just remember never ever forget those 4 crucial fields there or google play store will forever lock
// you out of that app!

// react native doc: The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit
// the file android/app/build.gradle in your project folder, and add the signing config,
// at the bottom add the release section in the signingConfigs section and
// change buildTypes release section from signingConfigs.debug to signingConfigs.release to enter
// it's release state
// ...
// android {
//     ...
//     defaultConfig { ... }
//     signingConfigs {
//         release {
//             if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
//                 storeFile file(MYAPP_UPLOAD_STORE_FILE)
//                 storePassword MYAPP_UPLOAD_STORE_PASSWORD
//                 keyAlias MYAPP_UPLOAD_KEY_ALIAS
//                 keyPassword MYAPP_UPLOAD_KEY_PASSWORD
//             }
//         }
//     }
//     buildTypes {
//         release {
//             ...
//             signingConfig signingConfigs.release
//         }
//     }
// }
// ...
// In the same file change def enableSeparateBuildPerCPUArchitecture from false to true! this makes
// the apk add extra files when it's generated to use several different cpu architectures and
// that is depending on the specific device I think! An to reduce the size of the final apk file change
// def enableProguardInReleaseBuilds to true also! and just finally edit this block of code here:
// change the universalApk variable to true to make a universal apk get generated as well.
// splits {
//     abi {
//         reset()
//         enable enableSeparateBuildPerCPUArchitecture
//         universalApk false  // If true, also generate a universal APK
//         include "armeabi-v7a", "x86", "arm64-v8a", "x86_64"
//     }
// }

// Just finally lastly lets actually generate the react native android apk like this. Just cd back
// into android and run ./gradlew assembleRelease

// To get the newly generated apk files, go to this directory: \android\app\build\outputs\apk
// That's how you generate a ready for production react native apk file.

// as I generated the new apk file I ran into this problem here: A failure occurred while
// executing com.android.build.gradle.tasks.PackageAndroidArtifact$IncrementalSplitterRunnable
// to fix this I added org.gradle.jvmargs=-Xmx4608m to the bottom of /android/gradle.properties
// then also run cd android and then ./gradlew clean as well!

// to make an sdk file for play store run ./gradlew bundleRelease in the android directory and then the apk
// will be generated in /android/app/build/outputs/bundle/release and it will be named app-release.aab
// this file is similar to the universal apk release build supposedly

// and then do run this as the last thing to do I think:
// npx react-native run-android --variant=release
// This runs your app in its release format for testing things

// C:\Program Files\OpenJDK\openjdk-11.0.14.1_1

// C:\Program Files\Java\jdk-18.0.1
