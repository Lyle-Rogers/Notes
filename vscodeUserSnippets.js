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