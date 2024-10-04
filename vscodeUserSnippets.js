// ctrl + shift + p and search snippets and then click configure user snippets and select a language to edit
// user snippets for that language.

// the snippets are in a json format
{
  "Console Error": { // name of this snippet
    "prefix": "ce", // prefix is the command used to trigger this snippet
    "body": "console.error(e);", // this snippets code goes in body
    "description": "Console Error" // the description that is shown when this snippet is getting triggered
  },
  "Function Component": {
    "prefix": "fnc",
    "body": [ // the [] is for multiple lines in the body
      "import React from 'react';",
      "import {View, Text} from 'react-native';",
      "import styles from '../styles/$1';", // $1 is where the cursor will be the right after the snippet is triggered. 
      "", // this is adding an empty line
      "const $1 = () => {", // This extra $1 will be edited along with the first $1 and the other $1s so when your writing the components name you won't have to rewrite it four different times
      "  return (",
      "    <View style={styles.$2Container}>", // $2 is where the cursor goes after $1 as long as you click tab after finishing $1
      "      <Text style={styles.text}>$1</Text>",
      "    </View>",
      "  )",
      "}",
      "",
      "export default ${1:aHeader};" // this ${1:aHeader} will be the same as $1 except instead of the cursor being on an empty space it will be on a highlighted placeholder name aHeader that you can easily erase and right over
    ],
    "description": "Function Component"
  },
  "Axios Request": {
    "prefix": "ar",
    "body": [
      "axios.${1|get,post,put,delete|}('')", // ${1|get,post,put,delete|} is where the cursor will be at first but it will show options of get post put and delete instead of writing what $1 is
      "  .then(req => {",
      "    $2",
      "  })",
      "  .catch(e => {",
      "    console.error(e);",
      "  });"
    ],
    "description": "Axios Request"
  }
}

// This is a snippet generator so that you don't have to write snippets in a json format. It converts a normal javascript program to a javascript json snippet format.
// https://snippet-generator.app/



// All my snippets:
 "Simple Axios Request": {
    "prefix": "sar",
    "body": [
      "axios.${1|get,post,put,delete|}('')",
      "  .then(req => {",
      "    $2",
      "  })",
      "  .catch(e => {",
      "    console.error(e);",
      "  });"
    ],
    "description": "Simple Axios Request"
  },
  "Large Axios Request": {
    "prefix": "lar",
    "body": [
      "await AsyncStorage.getItem('auth_token')",
      "  .then(auth_token => {",
      "    if (auth_token) {",
      "      axios",
      "        .post('http://192.168.10.44:8000/api/retrieve_user', {",
      "          auth_token: auth_token,",
      "        })",
      "        .then(res => {",
      "          if (res.data == 'Token is invalid') {",
      "            this.props.navigation.navigate('Login');",
      "          } else {",
      "            $1",
      "          }",
      "        })",
      "        .catch(e => {",
      "          console.error(e);",
      "        });",
      "    } else {",
      "      this.props.navigation.navigate('Login');",
      "    }",
      "  })",
      "  .catch(e => {",
      "    console.error(e);",
      "  });"
    ],
    "description": "Large Axios Request"
  },
  "Console Error": {
    "prefix": "ce",
    "body": "console.error(e);",
    "description": "Console Error"
  },
  "Function Component": {
    "prefix": "fnc",
    "body": [
      "import React from 'react';",
      "import {View, Text} from 'react-native';",
      "import styles from '../styles/$1';",
      "",
      "const $1 = () => {",
      "  return (",
      "    <View style={styles.$2Container}>",
      "      <Text style={styles.text}>$1</Text>",
      "    </View>",
      "  )",
      "}",
      "",
      "export default $1;"
    ],
    "description": "Function Component"
  },
  "Simple Class Component": {
    "prefix": "scc",
    "body": [
      "import React, {Component} from 'react';",
      "import {View, Text} from 'react-native';",
      "import styles from '../styles/$1';",
      "",
      "export default class $1 extends Component {",
      "  constructor() {",
      "    super();",
      "    this.state = {}",
      "  }",
      "",
      "  render() {",
      "    return (",
      "      <View style={styles.$2Container}>",
      "        <Text style={styles.text}>$1</Text>",
      "      </View>",
      "    );",
      "  }",
      "}"
    ],
    "description": "Simple Class Component"
  },
  "Large Class Component": {
    "prefix": "lcc",
    "body": [
      "import React, {Component} from 'react';",
      "import {View, Text} from 'react-native';",
      "import {useNavigation} from '@react-navigation/native';",
      "import styles from '../styles/$1';",
      "",
      "class $1 extends Component {",
      "  constructor() {",
      "    super();",
      "",
      "    this.state = {};",
      "  }",
      "",
      "  componentDidMount() {",
      "    this.navigation = this.props.navigation;",
      "  }",
      "",
      "  render() {",
      "    return (",
      "      <View style={styles.$2Container}>",
      "        <Text style={styles.text}>$1</Text>",
      "      </View>",
      "    );",
      "  }",
      "}",
      "",
      "export default function () {",
      "  const navigation = useNavigation();",
      "",
      "  return <$1 navigation={navigation} />;",
      "}"
    ],
    "description": "Large Class Component"
  },
  "Style Sheet": {
    "prefix": "ss",
    "body": [
      "import {StyleSheet} from 'react-native';",
      "",
      "const styles = StyleSheet.create({",
      "  $1Container: {",
      "    flex: 1,",
      "    backgroundColor: 'black',",
      "    alignItems: 'center',",
      "    justifyContent: 'center',",
      "  },",
      "  text: {",
      "    color: 'white',",
      "    fontSize: 27,",
      "  },",
      "});",
      "",
      "export default styles;"
    ],
    "description": "Style Sheet"
  },
  "Style": {
    "prefix": "s",
    "body": ["$1: {", "  $2", "},"],
    "description": "Style"
  },
  "Style Line": {
    "prefix": "sl",
    "body": "$1: $2,",
    "description": "Style Line"
  },
  "View": {
    "prefix": "v",
    "body": ["<View style={styles.$1}>", "  $2", "</View>"],
    "description": "View"
  },
  "ReactJs function": {
    "prefix": "rfnc",
    "body": [
      "import { useContext } from 'react';",
      "import '../styles/$1.scss';",
      "",
      "import { UserContext } from '../App';",
      "",
      "export default function $1() {",
      "  const { user } = useContext(UserContext);",
      "",
      "  return (",
      "    <div",
      "      className='$2Container'",
      "      style={{",
      "        backgroundColor: 'black',",
      "        display: 'flex',",
      "        alignItems: 'center',",
      "        justifyContent: 'center',",
      "        height: '100vh',",
      "        width: '100vw',",
      "        color: 'white',",
      "        fontSize: '17px',",
      "      }}>$1</div>",
      "  );",
      "}"
    ],
    "description": "ReactJs function"
  }