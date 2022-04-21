// Mechanic file!
import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  MainTerrainTheme,
  GreenCityTheme,
  CoffeeTheme,
  StarLightTheme,
  DarkTheme,
} from "../assets/MapThemes";
import styles from "../styles/Mechanic";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import GeolocationPermissions from "../components/GeolocationPermissions";
import NavigationBtns from "../components/NavigationBtns";

class Mechanic extends Component {
  constructor() {
    super();

    this.state = {
      sidebarVisibility: false,
      sidebarPropLocked: false,
      // keepSidebarVisible: false,
      // sidebarRouteKey: null,
      // sidebarRouteKeyChangeInt: 1,
      // it: true,
    };

    this.setSidebarVisibility = this.setSidebarVisibility.bind(this);
  }

  setSidebarVisibility(sidebarVisibility) {
    const currentSidebarVisibilityStats = this.state.sidebarVisibility;

    if (sidebarVisibility === "sidebarToggled") {
      if (
        currentSidebarVisibilityStats === "disabledSidebar" ||
        currentSidebarVisibilityStats === false
      ) {
        this.setState({
          sidebarPropLocked: false,
          sidebarVisibility: true,
        });
      } else if (
        currentSidebarVisibilityStats === "keptSidebarVisible" ||
        currentSidebarVisibilityStats === true
      ) {
        this.setState({
          sidebarPropLocked: false,
          sidebarVisibility: false,
        });
      }
    } else if (sidebarVisibility === "sidebarPropLocked") {
      this.setState({
        sidebarPropLocked: true,
      });
    }
  }

  componentDidMount() {
    this.navigation = this.props.navigation;

    // const sidebarRouteKey = this.props.route.key;
    // console.log('sidebarRouteKey', sidebarRouteKey);

    // this.props.route.params?.keepSidebarVisible = undefined;
    // this.props.route.key = 'asdfasdf34234_sd';s
    // drawer main fnc:
    // navigation.toggleDrawer

    // this.navigation.setParams({
    //   keepSidebarVisible: 'sidebarParamsLocked',
    // });

    const keepSidebarVisible = this.props.route.params?.keepSidebarVisible;

    // console.log('keepSidebarVisible first rendering', keepSidebarVisible);

    if (keepSidebarVisible === "sidebarParamsLocked") {
      // console.log('sidebarParamsLocked');
      return;
    } else if (keepSidebarVisible === true) {
      this.navigation.setParams({
        keepSidebarVisible: "sidebarParamsLocked",
      });

      this.setState({
        sidebarVisibility: "keptSidebarVisible",
      });
    } else if (keepSidebarVisible === false) {
      this.navigation.setParams({
        keepSidebarVisible: "sidebarParamsLocked",
      });

      this.setState({
        sidebarVisibility: "disabledSidebar",
      });
    }

    // console.log(
    //   'this.state.sidebarVisibility = ' + this.state.sidebarVisibility,
    // );

    // const keepSidebarVisible = this.props.route.params?.keepSidebarVisible;

    // // if (keepSidebarVisible === "sidebarParamsLocked") {
    // //   return;
    // // } else

    // console.log('params', this.props.route.key);
    // // console.error('params', this.props.route.params?.keepSidebarVisible);

    // if (this.props.route.params?.keepSidebarVisible === true) {
    //   this.setState({
    //     sidebarSignalInt: this.state.sidebarSignalInt++,
    //   });
    //   console.error('yes', keepSidebarVisible.key, this.state.sidebarSignalInt);

    //   // this.props.route.params?.keepSidebarVisible = "sidebarParamsLocked";
    //   // this.props.route.params?.keepSidebarVisible = null;
    // } else if (this.props.route.params?.keepSidebarVisible === false) {
    //   console.error('no', keepSidebarVisible.key, this.state.sidebarSignalInt);

    //   // this.props.route.params?.keepSidebarVisible = "sidebarParamsLocked";
    //   // this.props.route.params?.keepSidebarVisible = null;
    // }
  }

  componentDidUpdate() {
    // if (this.props.route.params) {
    //   console.error('didUpdate', this.props.route.params.keepSidebarVisible);
    // } else if (!this.props.route.params) {
    //   console.error('no');
    // }
    // console.error('didUpdate', this.props.route.params?.sidebarVisibility);
    // console.error('props', this.props);
    // console.error('params', this.props.route.params);
    // if (this.props.route.params?.keepSidebarVisible) {
    //   if (this.state.sidebarSignalInt !== this.state.sidebarSignalInt++) {
    //     this.setState({
    //       sidebarSignalInt: this.state.sidebarSignalInt++,
    //     });
    //   }
    //   console.error('yes', this.state.sidebarSignalInt);
    // } else if (!this.props.route.params?.keepSidebarVisible) {
    //   console.error(
    //     'no',
    //     this.props.route.params?.keepSidebarVisible,
    //     this.state.sidebarSignalInt,
    //   );
    // }
    // const sidebarRouteKey = this.props.route.key;
    // const keepSidebarVisible = this.props.route.params?.keepSidebarVisible;
    // console.log('sidebarRouteKey', sidebarRouteKey);
    // console.log('keepSidebarVisible', keepSidebarVisible);
    // if (this.state.sidebarRouteKey === sidebarRouteKey) {
    //   return;
    // } else if (keepSidebarVisible === true) {
    //   this.setState({
    //     sidebarRouteKey: sidebarRouteKey,
    //     sidebarVisibility: 'keptSidebarVisible',
    //   });
    //   console.log('yes', sidebarRouteKey, this.state.sidebarVisibility);
    // } else if (keepSidebarVisible === false) {
    //   this.setState({
    //     sidebarRouteKey: sidebarRouteKey,
    //     sidebarVisibility: false,
    //   });
    //   console.log('no', sidebarRouteKey, this.state.sidebarVisibility);
    // }

    // const keepSidebarVisible = this.props.route.params?.keepSidebarVisible;

    // console.log('keepSidebarVisible', keepSidebarVisible);

    // // console.log(
    // //   'please fuck me if this is fucking true. I like it!',
    // //   this.props.route.params,
    // // );

    // if (keepSidebarVisible === 'sidebarParamsLocked') {
    //   console.log('sidebarParamsLocked');
    //   return;
    // } else if (keepSidebarVisible === true) {
    //   this.navigation.setParams({
    //     keepSidebarVisible: 'sidebarParamsLocked',
    //   });

    //   this.setState({
    //     // sidebarRouteKey: sidebarRouteKey,
    //     sidebarVisibility: 'keptSidebarVisible',
    //   });

    //   console.log('yes', this.state.sidebarVisibility);
    // } else if (keepSidebarVisible === false) {
    //   this.navigation.setParams({
    //     keepSidebarVisible: 'sidebarParamsLocked',
    //   });

    //   this.setState({
    //     // sidebarRouteKey: sidebarRouteKey,
    //     sidebarVisibility: 'disabledSidebar',
    //   });

    //   console.log('no', this.state.sidebarVisibility);
    // }

    const keepSidebarVisible = this.props.route.params?.keepSidebarVisible;

    // console.log('keepSidebarVisible first rendering', keepSidebarVisible);

    if (keepSidebarVisible === "sidebarParamsLocked") {
      // console.log('sidebarParamsLocked');
      return;
    } else if (keepSidebarVisible === true) {
      this.navigation.setParams({
        keepSidebarVisible: "sidebarParamsLocked",
      });

      this.setState({
        sidebarVisibility: "keptSidebarVisible",
      });
    } else if (keepSidebarVisible === false) {
      this.navigation.setParams({
        keepSidebarVisible: "sidebarParamsLocked",
      });

      this.setState({
        sidebarVisibility: "disabledSidebar",
      });
    }

    // console.log(
    //   'this.state.sidebarVisibility = ' + this.state.sidebarVisibility,
    // );
  }

  render() {
    return (
      <View style={styles.mechanicContainer}>
        <Header setSidebarVisibility={this.setSidebarVisibility} />
        <View style={styles.workContainer}>
          <MapView
            style={styles.map}
            customMapStyle={StarLightTheme}
            provider={PROVIDER_GOOGLE}
            mapPadding={{
              left: Dimensions.get("window").width / 2 - 35,
            }}
            initialRegion={{
              latitude: 33.6676,
              longitude: -112.1034,
              latitudeDelta: 0.031,
              longitudeDelta: 0.031,
            }}
            showsUserLocation={true}
            // followsUserLocation={true}
            // showsMyLocationButton={true}
            // showsCompass={true}
            // toolbarEnabled={true}
            // zoomEnabled={true}
            // rotateEnabled={true}
            // onUserLocationChange={aFunction gives an event with there coordinates.}
          ></MapView>
          <GeolocationPermissions />
          <Sidebar
            sidebarVisibility={this.state.sidebarVisibility}
            setSidebarVisibility={this.setSidebarVisibility}
            sidebarPropLocked={this.state.sidebarPropLocked}
            // keepSidebarVisible={this.state.keepSidebarVisible}
            // sidebarSignalInt={this.state.sidebarSignalInt}
          />
        </View>
        {/* <Pressable
          onPress={() =>
            this.setState({
              it: !this.state.it,
            })
          }>
          <Text>
            asdfasdfsadfasdfasdfasdfsafsadfsadfasdfsafafdsafasfsaffsdfasdfasdf
          </Text>
        </Pressable> */}
        <NavigationBtns
          selectedScreen={"Mechanic"}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default function () {
  const navigation = useNavigation();
  const route = useRoute();

  return <Mechanic navigation={navigation} route={route} />;
}








// Recipient Roads sidebar file:
import React, {Component} from 'react';
import {View, Text, Animated, Easing, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/Sidebar';

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      sidebarVisibility: false,
      falseLocked: false,
      // keptSidebarVisible: false,
      // updatedSidebar: false,
    };

    this.sidebarAnimation = new Animated.Value(0);

    this.setSidebarVisibility = this.setSidebarVisibility.bind(this);
  }

  setSidebarVisibility(sidebarVisibility) {
    // if (sidebarVisibility) {
    //   if (!this.state.sidebarVisibility) {
    //     this.setState({
    //       sidebarVisibility: true,
    //     });
    //   }

    //   Animated.timing(this.sidebarAnimation, {
    //     toValue: 251,
    //     easing: Easing.bounce,
    //     duration: 1111,
    //     useNativeDriver: true,
    //   }).start();
    // } else {
    //   Animated.timing(this.sidebarAnimation, {
    //     toValue: 0,
    //     duration: 1111,
    //     useNativeDriver: true,
    //   }).start();

    //   if (this.state.sidebarVisibility) {
    //     setTimeout(() => {
    //       this.setState({
    //         sidebarVisibility: false,
    //       });
    //     }, 1111);
    //   }
    // }

    const isSidebarVisible = this.state.sidebarVisibility;
    const falseLocked = this.state.falseLocked;

    if (sidebarVisibility === true && isSidebarVisible !== true) {
      this.setState({
        sidebarVisibility: true,
        falseLocked: false,
      });

      Animated.timing(this.sidebarAnimation, {
        toValue: 251,
        easing: Easing.bounce,
        duration: 1111,
        useNativeDriver: true,
      }).start();
      // } else if (sidebarVisibility === false && isSidebarVisible !== false) {
    } else if (sidebarVisibility === false && falseLocked !== true) {
      Animated.timing(this.sidebarAnimation, {
        toValue: 0,
        duration: 1111,
        useNativeDriver: true,
      }).start();

      this.setState({
        falseLocked: true,
      });

      setTimeout(() => {
        this.setState({
          sidebarVisibility: false,
        });
      }, 1111);
    } else if (
      sidebarVisibility === 'keptSidebarVisible' &&
      isSidebarVisible !== 'keptSidebarVisible'
    ) {
      Animated.timing(this.sidebarAnimation, {
        toValue: 251,
        duration: 0,
        useNativeDriver: true,
      }).start();

      this.setState({
        sidebarVisibility: 'keptSidebarVisible',
      });
    } else if (
      sidebarVisibility === 'disabledSidebar' &&
      isSidebarVisible !== 'disabledSidebar'
    ) {
      Animated.timing(this.sidebarAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();

      this.setState({
        sidebarVisibility: 'disabledSidebar',
      });
    }

    this.props.setSidebarVisibility('sidebarPropLocked');
  }

  componentDidMount() {
    this.navigation = this.props.navigation;

    // if (!this.state.keptSidebarVisible) {
    //   if (this.props.keepSidebarVisible) {
    //     this.setState({
    //       sidebarVisibility: true,
    //       keptSidebarVisible: true,
    //     });

    //     Animated.timing(this.sidebarAnimation, {
    //       toValue: 251,
    //       duration: 0,
    //       useNativeDriver: true,
    //     }).start();
    //   } else {
    //     this.setState({
    //       sidebarVisibility: false,
    //       // keptSidebarVisible: false,
    //     });

    //     Animated.timing(this.sidebarAnimation, {
    //       toValue: 0,
    //       duration: 0,
    //       useNativeDriver: true,
    //     }).start();
    //   }
    // }

    // if (this.props.sidebarVisibility) {
    // if (true) {
    //   // if (!this.state.sidebarVisibility) {
    //   this.props.setSidebarVisibility(true);
    //   this.setState({
    //     sidebarVisibility: true,
    //   });
    //   // }

    //   Animated.timing(this.sidebarAnimation, {
    //     toValue: 251,
    //     easing: Easing.bounce,
    //     duration: 1111,
    //     useNativeDriver: true,
    //   }).start();
    // }

    // Animated.timing(this.sidebarAnimation, {
    //   // toValue: -251,
    //   toValue: 251,
    //   easing: Easing.bounce,
    //   // delay: 3000,
    //   duration: 1111,
    //   useNativeDriver: true,
    // }).start();

    const sidebarVisibility = this.props.sidebarVisibility;

    // console.error(this.props.sidebarPropLocked);
    // console.error(this.props.sidebarVisibility);

    if (this.props.sidebarPropLocked) {
      return;
    } else if (sidebarVisibility === 'disabledSidebar') {
      this.setSidebarVisibility('disabledSidebar');
    } else if (sidebarVisibility === 'keptSidebarVisible') {
      this.setSidebarVisibility('keptSidebarVisible');
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if ((nextProps.keepSidebarVisible = true)) {
  //     // if, delete this!
  //     // if (!this.state.sidebarVisibility) {
  //     this.setState({
  //       sidebarVisibility: true,
  //     });
  //     // }

  //     Animated.timing(this.sidebarAnimation, {
  //       toValue: 251,
  //       duration: 0,
  //       useNativeDriver: true,
  //     }).start();
  //   } else if ((nextProps.keepSidebarVisible = false)) {
  //     this.setState({
  //       sidebarVisibility: false,
  //     });

  //     Animated.timing(this.sidebarAnimation, {
  //       toValue: 0,
  //       duration: 0,
  //       useNativeDriver: true,
  //     }).start();
  //   }
  // }

  componentDidUpdate() {
    // if (!this.state.updatedSidebar) {
    //   if (this.props.keepSidebarVisible) {
    //     if (!this.state.sidebarVisibility) {
    //       this.setState({
    //         sidebarVisibility: true,
    //       });
    //     }

    //     Animated.timing(this.sidebarAnimation, {
    //       toValue: 251,
    //       duration: 0,
    //       useNativeDriver: true,
    //     }).start();
    //   } else {
    //     if (this.props.sidebarVisibility) {
    //       this.setSidebarVisibility(true);
    //     } else {
    //       this.setSidebarVisibility(false);
    //     }
    //   }
    // } else {
    //   if (this.props.sidebarVisibility) {
    //     this.setSidebarVisibility(true);
    //   } else {
    //     this.setSidebarVisibility(false);
    //   }
    // }

    const sidebarVisibility = this.props.sidebarVisibility;

    // console.error(this.props.sidebarPropLocked);

    if (this.props.sidebarPropLocked) {
      return;
    } else if (sidebarVisibility === true) {
      this.setSidebarVisibility(true);
    } else if (sidebarVisibility === false) {
      this.setSidebarVisibility(false);
    } else if (sidebarVisibility === 'disabledSidebar') {
      this.setSidebarVisibility('disabledSidebar');
    } else if (sidebarVisibility === 'keptSidebarVisible') {
      this.setSidebarVisibility('keptSidebarVisible');
    }
  }

  render() {
    return (
      <View
        style={[
          styles.sidebarContainer,
          this.state.sidebarVisibility === false ||
          this.state.sidebarVisibility === 'disabledSidebar'
            ? {height: 0, width: 0}
            : null,
        ]}>
        <Animated.View
          style={[
            styles.sidebar,
            {
              transform: [
                {translateX: this.sidebarAnimation},
                {perspective: 1000},
              ],
            },
          ]}>
          <Text>sidebar and other weird stuff!.!.!!!!..!</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.pressableOpacityContainer,
            {
              transform: [
                {translateX: this.sidebarAnimation},
                {perspective: 1000},
              ],
            },
          ]}>
          <Pressable
            style={styles.pressableOpacity}
            onPress={() => this.props.setSidebarVisibility('sidebarToggled')}
          />
        </Animated.View>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <Sidebar {...props} navigation={navigation} />;
}

