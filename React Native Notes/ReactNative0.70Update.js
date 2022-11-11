// To begin your upgrade from a different react native version to 0.70, use this environment guide from react natives docs 0.70:
// https://reactnative.dev/docs/environment-setup

// In the terminal, we can use `javac -version` to check the JDK version, and `java -version` to check the JRE version.s

// Upgrading your app to 0.70 with the react native documentation.
// https://reactnative.dev/docs/new-architecture-app-intro

// Upgrades your app the react natives latest version.
// npx react-native upgrade
// Upgrade with a specific version
// npx react-native upgrade 0.70.0-rc.4
// A different version
// npx react-native upgrade 0.70.0
// In package.json, if name is not uncapitalized or if it has any other characters in it like an underscore or space you are fucked.

// This upgrades all of react natives packages to the versions that work with the given react native version.
// https://microsoft.github.io/rnx-kit/docs/guides/dependency-management

// Certain dependencies are'nt maintained by this auto dependency upgrading package manager and will need to be manually upgraded and checked.

// Install the package by microsoft that auto updates dependencies.
// npm add --save-dev @rnx-kit/dep-check
// If npm throws an error because of an upstream dependency conflict.
// npm add --legacy-peer-deps --save-dev @rnx-kit/dep-check

// It will ad a rnx-kit setup thing with the a list of the dependencies it can upgrade, in package.json automatically and I think other things.
// npx rnx-dep-check --init app

// This will list the dependencies that need to be upgraded that rnx knows about inside package.json to the versions that work
// with the given react native version.
// npx rnx-dep-check --set-version 0.70
// This is the output I got from this command upgrading from react native version 0.67.2 to react native version 0.70.0.
// - Current
// + Expected

//   {
//     "name": "nationmech",
//     "version": "0.0.1",
//     "private": true,
//     "scripts": {
//       "android": "react-native run-android",
//       "ios": "react-native run-ios",
//       "start": "react-native start",
//       "test": "jest",
//       "lint": "eslint ."
//     },
//     "dependencies": {
// -     "@react-native-async-storage/async-storage": "^1.16.1",
// +     "@react-native-async-storage/async-storage": "^1.17.10",
//       "@react-navigation/devtools": "^6.0.7",
//       "@react-navigation/drawer": "^6.4.1",
//       "@react-navigation/native": "^6.0.8",
//       "@react-navigation/native-stack": "^6.5.0",
//       "axios": "^0.25.0",
//       "axios-retry": "^3.3.1",
//       "lottie-ios": "^3.2.3",
//       "lottie-react-native": "^5.0.1",
//       "react": "18.1.0",
// -     "react-native": "0.70.0",
// -     "react-native-gesture-handler": "^2.3.2",
// +     "react-native": "^0.70.0",
// +     "react-native-gesture-handler": "^2.6.0",
//       "react-native-maps": "0.30.1",
//       "react-native-reanimated": "^2.10.0",
// -     "react-native-safe-area-context": "^3.3.2",
// -     "react-native-screens": "^3.10.2",
// +     "react-native-safe-area-context": "^4.3.1",
// +     "react-native-screens": "^3.14.1",
//       "react-native-svg": "^12.3.0",
//       "react-native-vector-icons": "^9.0.0"
//     },
//     "devDependencies": {
//       "@babel/core": "^7.17.0",
//       "@babel/runtime": "^7.17.0",
//       "@react-native-community/eslint-config": "^3.0.1",
//       "@rnx-kit/dep-check": "^1.13.0",
//       "babel-jest": "^27.5.0",
//       "eslint": "^8.12.0",
// -     "jest": "^27.5.0",
// -     "metro-react-native-babel-preset": "^0.67.0",
// +     "metro-react-native-babel-preset": "^0.72.1",
//       "react-native-flipper": "^0.164.0",
// -     "react-test-renderer": "17.0.2"
// +     "react-test-renderer": "18.1.0"
//       "preset": "react-native"
//     }

// This will upgrade all the dependencies that were listed with that command above right there.
// npx rnx-dep-check --vigilant 0.70 --write
// Then run nmp i to install the new dependencies.

// Make sure you have the latest version of react native cli by deleting the older version and reinstalling the newer 1
// npm uninstall -g react-native-cli
// npm install -g react-native-cli

// update or install react natives newest version.
// npm install -g react-native

// How to build from source in the react native docs:
// https://reactnative.dev/contributing/how-to-build-from-source

// set ANDROID_SDK=/Users/your_unix_name/android-sdk-macosx
// set ANDROID_NDK=/Users/your_unix_name/android-ndk/android-ndk-r20b

// Step 2: Create a local.properties file in the android directory of your react-native app with the following contents:
// Example:
// sdk.dir=/Users/your_unix_name/android-sdk-macosx
// ndk.dir=/Users/your_unix_name/android-ndk/android-ndk-r20b
// Git ignore automatically ignores this file so make sure to remember and add it after reinstalling the project of github

// I had an error updating and was fixed with this.
// StackOverFlow example: https://stackoverflow.com/questions/49513047/react-native-assemblerelease-fails-for-task-appbundlereleasejsandassets
// Add that bellow section in build.gradle

// allprojects {
//     repositories {

// add this section start!!!

//         exclusiveContent {
//             filter {
//                 includeGroup "com.facebook.react"
//             }
//             forRepository {
//                 maven {
//                     url "$rootDir/../node_modules/react-native/android"
//                 }
//             }
//         }

// add this section end!!!

//         maven {
//             // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
//             url("$rootDir/../node_modules/react-native/android")
//         }
//         maven {
//             // Android JSC is installed from npm
//             url("$rootDir/../node_modules/jsc-android/dist")
//         }
//         mavenCentral {
//             // We don't want to fetch react-native from Maven Central as there are
//             // older versions over there.
//             content {
//                 excludeGroup "com.facebook.react"
//             }
//         }
//         google()
//         maven { url 'https://www.jitpack.io' }
//     }
// }
