// helpful things for navigation in react native
import * as React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

// navigating in class components
import * as React from "react";
import { useNavigation } from "@react-navigation/native";

class MyBackButton extends React.Component {
  render() {
    // Get it from props
    const { navigation } = this.props;
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigation();

  return <MyBackButton {...props} navigation={navigation} />;
}
