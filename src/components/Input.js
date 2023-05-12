// import React, { Component } from 'react';
// import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { FONTS, COLORS } from '../constants';
// const { width, height } = Dimensions.get('window');
// export class Input extends Component {
//   render() {
//     const { placeholder, TextInputWidth, style, ...rest } = this.props;
//     return (
//       <View style={styles.View}>
//         <TextInput
//           {...rest}
//           style={[styles.container, style]}
//           placeholder={placeholder}

//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   View:{
//     width: RFValue(width/1.2),
//     height: RFValue(50),
//     color: COLORS.black,
//     fontSize: RFValue(FONTS.h5),

//   },
//   container: {
//     width: RFValue(width/1.2),
//     height: RFValue(50),
//     color: COLORS.black,
//     fontSize: RFValue(FONTS.h5),
//   },
// });
// export default Input;
import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS, COLORS, MARGIN } from '../constants';
const { width, height } = Dimensions.get('window');
export class Input extends Component {
  render() {
    const { placeholder, color, TextInputWidth, placeholderTextColor, keyboardType, style, ...rest } = this.props;
    return (
      <View style={styles.view}>
        <TextInput
          {...rest}
          style={[styles.container, style]}
placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          color={color}>



        </TextInput>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  view: {
    width: RFValue(width / 1.5)
  },
  container: {
    alignSelf: "flex-start",
    fontSize: RFValue(FONTS.h4),
    marginLeft: MARGIN.xxsMargin
  },
});
export default Input;
