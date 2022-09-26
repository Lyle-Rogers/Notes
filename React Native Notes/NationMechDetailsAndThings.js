// maps api dashboard
// https://console.cloud.google.com/apis/credentials?project=uber-cloned-338000

// https://www.npmjs.com/package/react-native-google-places-autocomplete
// npm install react-native-google-places-autocomplete --save

// npm install react-native-maps --save-exact
// https://github.com/react-native-maps/react-native-maps/blob/HEAD/docs/installation.md
// This is w'ere you can find features for the maps
// https://www.npmjs.com/package/react-native-maps
// supportLibVersion = "29.0.0" // It seems that this dependencie is uneeded but just incase it is then this is it's latest version that's not part of androidX

// https://www.npmjs.com/package/react-native-maps-directions
// npm install react-native-maps-directions

// https://www.npmjs.com/package/@react-native-community/geolocation
// npm i @react-native-community/geolocation
// This is onlly if your using google places autocomplete
// import com.reactnativecommunity.geolocation.GeolocationPackage;
// I installed it and after deleting it metro was giving me error because the line of the code at the top was
// still import it in MainApplication.java in the android folder!

// https://reactnavigation.org/docs/getting-started/
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
// for a side tab react native navigator install this
// npm install @react-navigation/drawer
// npm install react-native-gesture-handler react-native-reanimated
// if your get an error after installing react-native-gesture-handler do what this guide says in android!
// https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
// The link there on top didn't help me but I'm helping fix the Gradle update problem on slack with these people.
// https://stackoverflow.com/questions/71771423/react-native-compilejava-task-current-target-is-1-8-and-compilekotlin-tas
// commands that are possibly helpful.
// cd android
// ./gradlew --version
// ./gradlew clean
// React Navigation Developer tools installation guide. I'm using these devtools instead because the normal devtools don't
// work with react navigation's drawer. installation: https://reactnavigation.org/docs/devtools/

// I was having this very same problem here. I tried @MouTio's suggestion and updated the distributionUrl to 7.4.2 at
// Project-Name\android\gradle\wrapper\gradle-wrapper.properties but that still gave me this error here:
// > Task :react-native-gradle-plugin:compileKotlin FAILED
// 'compileJava' task (current target is 1.8) and 'compileKotlin' task (current target is 11) jvm targeta version.
// 1 actionable task: 1 executed

// FAILURE: Build failed with an exception.

// * What went wrong:
// Execution failed for task ':react-native-gradle-plugin:compileKotlin'.
// > Failed to query the value of task ':react-native-gradle-plugin:compileKotlin' property 'compilerRun
//    > Kotlin could not find the required JDK tools in the Java installation. Make sure Kotlin compilat
//  However the error was fixed after running this choco install -y nodejs-lts openjdk11 with a command line using administration privileges.
// and don't forget to rerun npm run android with a refreshed terminal

// This install vector icons. The google maps uber cloned tutorial uses this for icons in react native like font awesome in react!
// npm i react-native-vector-icons
// Vector icons directory and website
// https://oblador.github.io/react-native-vector-icons/
// Follow the instructions here in info.plist file instructions: https://github.com/oblador/react-native-vector-icons
// the guide says to add this to info.plist in the ios folder:
// <key>UIAppFonts</key>
// <array>
// 	<string>AntDesign.ttf</string>
// 	<string>Entypo.ttf</string>
// 	<string>EvilIcons.ttf</string>
// 	<string>Feather.ttf</string>
// 	<string>FontAwesome.ttf</string>
// 	<string>FontAwesome5_Brands.ttf</string>
// 	<string>FontAwesome5_Regular.ttf</string>
// 	<string>FontAwesome5_Solid.ttf</string>
// 	<string>Foundation.ttf</string>
// 	<string>Ionicons.ttf</string>
// 	<string>MaterialIcons.ttf</string>
// 	<string>MaterialCommunityIcons.ttf</string>
// 	<string>SimpleLineIcons.ttf</string>
// 	<string>Octicons.ttf</string>
// 	<string>Zocial.ttf</string>
// 	<string>Fontisto.ttf</string>
// </array>
// in the android folder at the very bottom of app/build.gradle add this line:
// apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
// this is how you use vector icons pirate icon and shit.
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// <MaterialCommunityIcons name={"pirate"} size={23} color="darkblue" />

// use google fonts with react native or other supliers
// in your root directory make a new file named react-native.config.js and add this and make sure the path is right for
//  the other directories we're going to create:
// module.exports = {
//   assets: ["./src/assets/fonts/"],
// };
// inside src create an assets folder if you haven't already. Create a fonts folder inside that folder and any fonts that you want
// to use, download from https://fonts.google.com/ and unzip them and add their files inside the fonts directory. Every time you add
// a font, run react-native link in the terminal and it the fonts will be added to the android and ios folders just by doing that.
// fonts are half a mb and you will have to go into the android and ios folder manually if you wish to delete them so be carful.
// to use a font copy the file name without the .ttf and inside a texts styles add fontFamily: "font-name" and it should work fine.
// when a font doesn't work it will if you rename the fonts file to its real name, that you can get when you open the fonts file,
// and then rerun react-native link and it will work.
// To stop an androids default font size from resizing your texts, ad allowFontScaling={false} inside text components.
// Maybe allowFontScaling={false} doesn't work. The best way stop a smartphones default font from resizing or changing your text, is by not
// adding fontWeight to the texts styles. To change a text with a font family's styles, redownload that font with the right font size you seek
// and use it instead and maybe delete the older 1.
// Nation Mech's app name's font family is this:
// https://fonts.google.com/specimen/Kanit?thickness=9&preview.text=Nation%20Mech&preview.text_type=custom

// Google Map themes:
// website with thousands of themes and I think the best and a theme editer
// https://snazzymaps.com/
// Google maps themes and editor that is literal shit and just shouldn't exist.
// https://mapstyle.withgoogle.com/
// import React, { Component } from "react";
// import { View } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

// const DarkTheme = [
//   // Import this out of a different file so that it isn't taking this much fucking space to exist!.!!.!.!.!.!
//   {
//     featureType: "all",
//     elementType: "all",
//     stylers: [
//       {
//         invert_lightness: true,
//       },
//       {
//         saturation: "-9",
//       },
//       {
//         lightness: "0",
//       },
//       {
//         visibility: "simplified",
//       },
//     ],
//   },
//   {
//     featureType: "landscape.man_made",
//     elementType: "all",
//     stylers: [
//       {
//         weight: "1.00",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#eeeaea",
//       },
//       {
//         gamma: "8.75",
//       },
//       {
//         weight: "6.48",
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         visibility: "simplified",
//       },
//       {
//         hue: "#3a00ff",
//       },
//       {
//         saturation: "37",
//       },
//       {
//         lightness: "86",
//       },
//       {
//         gamma: "9.92",
//       },
//       {
//         weight: "7.46",
//       },
//     ],
//   },
// ];

// export default class GoogleMapThemes extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     return (
//       <View style={styles.themesContainer}>
//         <MapView
//           style={styles.map}
//           customMapStyle={DarkTheme}
//           provider={PROVIDER_GOOGLE}
//           initialRegion={{
//             latitude: 33.6676,
//             longitude: -112.1034,
//             latitudeDelta: 0.031,
//             longitudeDelta: 0.031,
//           }}
//           // onUserLocationChange={aFunction gives an event with there coordinates.}
//           showsUserLocation={true}
//         />
//       </View>
//     );
//   }
// }

// // Recipient Roads Themes:
// export const MainTerrainTheme = [
//   {
//     featureType: "landscape",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         saturation: -100,
//       },
//       {
//         lightness: -16,
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         hue: "#2bff00",
//       },
//       {
//         lightness: -39,
//       },
//       {
//         saturation: 8,
//       },
//     ],
//   },
//   {
//     featureType: "poi.attraction",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         lightness: 100,
//       },
//       {
//         saturation: -100,
//       },
//     ],
//   },
//   {
//     featureType: "poi.business",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         saturation: -100,
//       },
//       {
//         lightness: 100,
//       },
//     ],
//   },
//   {
//     featureType: "poi.government",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         lightness: 100,
//       },
//       {
//         saturation: -100,
//       },
//     ],
//   },
//   {
//     featureType: "poi.medical",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         lightness: 100,
//       },
//       {
//         saturation: -100,
//       },
//     ],
//   },
//   {
//     featureType: "poi.place_of_worship",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         lightness: 100,
//       },
//       {
//         saturation: -100,
//       },
//     ],
//   },
//   {
//     featureType: "poi.school",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         saturation: -100,
//       },
//       {
//         lightness: 100,
//       },
//     ],
//   },
//   {
//     featureType: "poi.sports_complex",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         saturation: -100,
//       },
//       {
//         lightness: 100,
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         lightness: -100,
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         lightness: -100,
//       },
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         lightness: 100,
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "all",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         saturation: 100,
//       },
//       {
//         hue: "#006eff",
//       },
//       {
//         lightness: -19,
//       },
//     ],
//   },
// ];

// export const GreenCityTheme = [
//   {
//     featureType: "administrative",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#d38bc8",
//       },
//       {
//         saturation: 45,
//       },
//       {
//         lightness: 36,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.country",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#d38bc8",
//       },
//       {
//         saturation: 45,
//       },
//       {
//         lightness: 36,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.land_parcel",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#d38bc8",
//       },
//       {
//         saturation: 45,
//       },
//       {
//         lightness: 36,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "landscape.man_made",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#4f6b46",
//       },
//       {
//         saturation: -23,
//       },
//       {
//         lightness: -61,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi.government",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#ff00d8",
//       },
//       {
//         saturation: 35,
//       },
//       {
//         lightness: -19,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#e3ff00",
//       },
//       {
//         saturation: -19,
//       },
//       {
//         lightness: -25,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi.school",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#ff00d8",
//       },
//       {
//         saturation: -6,
//       },
//       {
//         lightness: -17,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#d38bc8",
//       },
//       {
//         saturation: -55,
//       },
//       {
//         lightness: 13,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#ffa200",
//       },
//       {
//         saturation: 100,
//       },
//       {
//         lightness: -22,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "road.local",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#d38bc8",
//       },
//       {
//         saturation: -55,
//       },
//       {
//         lightness: -31,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#f69d94",
//       },
//       {
//         saturation: 84,
//       },
//       {
//         lightness: 9,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "all",
//     stylers: [
//       {
//         hue: "#87bcba",
//       },
//       {
//         saturation: -37,
//       },
//       {
//         lightness: -17,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
// ];

// export const CoffeeTheme = [
//   {
//     featureType: "all",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         saturation: 36,
//       },
//       {
//         lightness: 40,
//       },
//     ],
//   },
//   {
//     featureType: "all",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 16,
//       },
//     ],
//   },
//   {
//     featureType: "all",
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//       {
//         saturation: "-41",
//       },
//       {
//         gamma: "0.00",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "all",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 20,
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         weight: 1.2,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         color: "#ffffff",
//       },
//     ],
//   },
//   {
//     featureType: "landscape",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: "20",
//       },
//     ],
//   },
//   {
//     featureType: "landscape.man_made",
//     elementType: "all",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         color: "#000000",
//       },
//       {
//         lightness: "20",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "all",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 21,
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         gamma: "1.00",
//       },
//       {
//         lightness: "20",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         color: "#79e8f9",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi.attraction",
//     elementType: "all",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#395f31",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#8e8e8e",
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 19,
//       },
//     ],
//   },
//   {
//     featureType: "transit.station.bus",
//     elementType: "all",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [
//       {
//         invert_lightness: true,
//       },
//       {
//         visibility: "on",
//       },
//       {
//         lightness: "20",
//       },
//       {
//         weight: "0.50",
//       },
//       {
//         saturation: "-71",
//       },
//     ],
//   },
// ];

// export const DarkTheme = [
//   {
//     featureType: "all",
//     elementType: "all",
//     stylers: [
//       {
//         invert_lightness: true,
//       },
//       {
//         saturation: "-9",
//       },
//       {
//         lightness: "0",
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "landscape.man_made",
//     elementType: "all",
//     stylers: [
//       {
//         weight: "1.00",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "all",
//     stylers: [
//       {
//         weight: "0.49",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         weight: "0.01",
//       },
//       {
//         lightness: "-7",
//       },
//       {
//         saturation: "-35",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "labels.text",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
// ];

// export const StarLightTheme = [
//   {
//     featureType: "all",
//     elementType: "all",
//     stylers: [
//       {
//         invert_lightness: true,
//       },
//       {
//         saturation: 10,
//       },
//       {
//         lightness: 30,
//       },
//       {
//         gamma: 0.5,
//       },
//       {
//         hue: "#00aaff",
//       },
//     ],
//   },
// ];

// How to open another app and even websites with linking
// Instructions on how to open basic apps and even add things to them like the normal calling app with a number already inside it:
import React, { Component } from "react";
import { View, Linking, Button } from "react-native";
import styles from "../styles/IUsedLinkingAlready";

export class IUsedLinkingAlready extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.linkingAlreadyContainer}>
        <Button
          title="IDidLinking"
          onPress={() => {
            // Calling a specific number:
            Linking.openURL("tel:6988619781");
            // texting a specific number with a text:
            Linking.openURL(
              "sms:number=6988619781?body=I like myself a linking sms",
            );
            // Send an email to a person with specific text in it:
            Linking.openURL(
              "mailto:theusersemail@fuckme.com?subject=A lit Subject here!&body=I like this email's texting skills",
            );
            // even open your apps specific settings where your apps permissions, location permission, and notification settings are and works
            // on ios and android:
            Linking.openSettings();
            // opens whatsapp with a message pre written for a specific phone number:
            Linking.openURL(
              "whatsapp://send?phone=6988619781&text=I like this whatsapp text",
            );
            // and google maps:
            Linking.openURL("https://www.google.com/maps");
            // search a specific place in the maps
            Linking.openURL(
              "https://www.google.com/maps/search/?api=1&query=Japan",
            );
            // and even youtube:
            Linking.openURL("https://www.youtube.com/watch?v=aVideosUrl");
            // and fucking facebook of course:
            Linking.openURL("fb://profile/");
            // I prefer to use openSettings(). This only works on android and does not open your specific app
            // settings but will open all the devices apps notification settings:
            Linking.sendIntent("android.settings.LOCATION_SOURCE_SETTINGS");
          }}
        />
      </View>
    );
  }
}
// a website to get the values to every section of the android settings so we can open 1 of them with linking:
// https://developer.android.com/reference/android/provider/Settings

// a potential way to check if geolocation is enabled in ios
if (Platform.OS === "ios") {
  const auth = await Geolocation.requestAuthorization("whenInUse");
  if (auth === "granted") {
    // do something if granted...
  }
}
// This is the way I do it I think!
if (Platform.OS === "ios") {
  Geolocation.requestAuthorization().then((res) => {
    if (res === "disabled") {
      this.setState({ geolocationIsGranted: false });
    }
  });
}

// Retrying axios calls for when they fail like a network error or something.
// React Native navigation docs on this: https://reactnavigation.org/docs/function-after-focusing-screen/
// Npm tutorial: https://www.npmjs.com/package/axios-retry
// Install axios-retry: npm install axios-retry
// This package works for react and react native like axios does.
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, {
  // Any axios calls made will now have axios retry added in it in any file that is
  // currently focused while this file is focused.
  retryCondition: () => true, // It is required or it will fail indefinitely! I also idk.
  retries: 19, // How many times it can retry our api calls before it fails.
  retryDelay: axiosRetry.exponentialDelay, // This will double the time between every delay until the retry count is reached.
  // retryDelay: () => 7000, // The request is delayed by 7 seconds before retrying until the retry count is reached.
});

export const AxiosRetry = () => {
  function apiCall() {
    axios // every last axios request we make in these focused files have this added
      .get(url)
      .then(() => console.log("api call success"))
      .catch(() => console.log("api call failed so fuck yourself"));
  }

  return (
    <TouchableOpacity onPress={() => apiCall()}>
      <Text>AxiosRetry</Text>
    </TouchableOpacity>
  );
};

// Add axios-retry to App.js and all the axios calls in the rest of the app will be automatically handled! An example:
import "react-native-gesture-handler";

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import axios from "axios";
import axiosRetry from "axios-retry";

import Sidebar from "./src/screens/Sidebar";

axiosRetry(axios, {
  // If other files have axios capitalized, even though it's not in here, it's fine it'll work.
  retryCondition: () => true,
  retries: 26,
  retryDelay: axiosRetry.exponentialDelay,
});

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Sidebar />
    </SafeAreaView>
  );
};

export default App;

// How to refresh a navigation screen when a user navigates back:
// https://reactnavigation.org/docs/function-after-focusing-screen/
import React, { useEffect } from "react";

export const AScreen = ({ navigation }) => {
  function AnApiCallThatRetrievesNewData() {
    // An api request or whatever.
  }

  // When navigation is updated with new data from any screen, this checks if
  // the new data says that if this screen is focused or not and to do this if it is!
  useEffect(() => {
    const refreshOnFocus = navigation.addListener("focus", () =>
      AnApiCallThatRetrievesNewData(),
    );

    return refreshOnFocus;
  }, [navigation]);

  return;
};

// Macbook Pro i7 spacegrey ratina
// https://www.amazon.com/Apple-MacBook-Retina-MLH32LL-Renewed/dp/B078BSQDPK/ref=sr_1_9?keywords=macbook&pd_rd_r=77f598d3-19a8-430c-9396-56edb9c2e707&pd_rd_w=qwmny&pd_rd_wg=RrmHC&pf_rd_p=4fa0e97a-13a4-491b-a127-133a554b4da3&pf_rd_r=4BT76A63YQV3S8YRMTHD&qid=1642209367&sr=8-9
// Macbook Pro casing
// https://www.amazon.com/Kuzy-Compatible-MacBook-Keyboard-Release/dp/B08YNFWRL3
// blue light glasses
// https://www.amazon.com/dp/B08GFP4YYM/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B08GFP4YYM&pd_rd_w=MiXDJ&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=8N9it&pf_rd_r=2YAZDBW61ZJZRDHG0GZT&pd_rd_r=478d3ed5-2a2c-4f05-9140-fdf327a17d4a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFIVU9ZRVpQWkNXMEImZW5jcnlwdGVkSWQ9QTA3ODYwNjMzMjhHS0xBNlJBQ1IzJmVuY3J5cHRlZEFkSWQ9QTAxNjIwOTZHSjZXN0xWMFY5T1kmd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl
// xbox 1 controller + pc adapter
// https://www.amazon.com/Microsoft-Xbox-Wireless-Controller-Adapter-Windows/dp/B08K2C3HVG/ref=sr_1_17?crid=VA97FWVQ7BF6&keywords=xbox+controller&qid=1642223788&refinements=p_36%3A2422979011&rnid=386453011&s=videogames&sprefix=xbox+%2Caps%2C130&sr=1-17
// Gaming Monitor:
// https://www.amazon.com/ASUS-1080P-Gaming-Monitor-VZ249QG1R/dp/B09BKK2FXR/ref=sr_1_6?crid=3CF7CBCV1UUEQ&keywords=gaming+monitor&qid=1642225369&refinements=p_36%3A9100-16100&rnid=386442011&s=electronics&sprefix=gaming+monitor%2Caps%2C138&sr=1-6
// the gaming chair needed!
// https://www.amazon.com/Kasorix-Footrest-Adjustment-Computer-Chair-8512BLACK/dp/B08R5QZF79/ref=sr_1_14_sspa?crid=3260DIQB1Y2RJ&keywords=gaming%2Bchair&qid=1642226232&refinements=p_36%3A1253526011&rnid=386465011&s=home-garden&sprefix=gaming%2Bchair%2Caps%2C292&sr=1-14-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVS09CTjlIMERVTkwmZW5jcnlwdGVkSWQ9QTA2NTEyNzgzQ05GVThWSldSMDgzJmVuY3J5cHRlZEFkSWQ9QTA1MDMwMDczTDdDNFRPUUZYWFBZJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1
// vr headset with pc compatability quest 2
// https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B099VMT8VZ/ref=sr_1_1_sspa?crid=32HSY9KU9GP0A&keywords=oculus+quest+2+black&qid=1642230094&sprefix=oculus+quest+2+black%2Caps%2C134&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUVNLMEtEQTA3OE9JJmVuY3J5cHRlZElkPUEwOTExMDQ3MzhYNlkxTlpMRkg5NiZlbmNyeXB0ZWRBZElkPUEwMTczOTYzN1c1RjVROUNYWFpKJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==
// the quest 2 black accessory casing!
// https://www.amazon.com/MASiKEN-Accessories-Quest-Head-Strap/dp/B08ZMK3WH4/ref=sr_1_8?crid=32HSY9KU9GP0A&keywords=oculus%2Bquest%2B2%2Bblack&qid=1642230094&sprefix=oculus%2Bquest%2B2%2Bblack%2Caps%2C134&sr=8-8&th=1
// quest 2 laptop adapter for fucking gaming
// https://www.amazon.com/Compatible-Kuject-Transfer-Charging-Chargers/dp/B08MZFS4SY/ref=sr_1_1_sspa?crid=28XDTM3Y1AIZP&keywords=oculus%2Blink%2Bvirtual%2Breality%2Bheadset%2Bcable%2Bfor%2Bquest%2B2&qid=1642229253&sprefix=Oculus%2BLink%2BVirtual%2BReality%2BHeadset%2BCable%2B%2Caps%2C252&sr=8-1-spons&smid=ANYCM9RSLDH7Y&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyREJVQkFGR1I4TkxZJmVuY3J5cHRlZElkPUEwODMzOTg2MU1TWUNTV0k5S0ZCRiZlbmNyeXB0ZWRBZElkPUEwMjgzMDU0MTY5TDcxV0JPOFNVMSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1
// the thermal past i need
// https://www.amazon.com/Thermal-Grizzly-Hydronaut-Grease-Paste/dp/B00ZJSDB7W/ref=sr_1_4?crid=375FW41Y24XM1&keywords=thermal%2Bpaste%2Bgaming%2Bpc&qid=1642226637&sprefix=thermal%2Bpaste%2Bgaming%2B%2Caps%2C134&sr=8-4&th=1
// Type-C Hub with 4k HDMI
// https://www.amazon.com/Sabrent-Multi-Port-Type-C-Delivery-HB-TC5P/dp/B08V3PHKR8/ref=psdc_281413_t2_B082CZG7HH?th=1
// the galaxy s21 ultra except a black instead:
// https://www.amazon.com/Samsung-Verizon-Unlocked-Phantom-Renewed/dp/B09M27BTZP/ref=sr_1_5?crid=178B4NKRMS3DI&keywords=galaxy+s1+ultra&qid=1642227574&sprefix=galaxy+s1+ultra%2Caps%2C228&sr=8-5
// earbuds waterproof and awesome
// https://www.amazon.com/dp/B07RGZ5NKS/ref=sspa_dk_detail_2?pd_rd_i=B07RGZ5NKS&pd_rd_w=kuEkZ&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=Hdcty&pf_rd_r=CFVDXCK29YK92MS3XRMZ&pd_rd_r=99214a81-367f-4210-aef0-b9f667e59c38&s=electronics&smid=A28TBB3WNHMFPN&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVTlLT1JLNjc0VU04JmVuY3J5cHRlZElkPUEwMzk2NjM2MUdHUTVXU0VXT1pGSSZlbmNyeXB0ZWRBZElkPUEwMTI4OTE3M05UTVJaNUg4R1ZXSSZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1
// gaming pc headset for aqulas quest 2 black
// https://www.amazon.com/Razer-Nari-Essential-Wireless-Auto-Adjusting/dp/B07HZ5N8QT/ref=sr_1_6?crid=AR5QUUE7IF9B&keywords=gaming+headset+bluetooth&qid=1645746171&s=electronics&sprefix=gaming++headset%2Celectronics%2C1008&sr=1-6
// and black sweat pants
// obviously a black car and music system!
