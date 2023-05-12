import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { RADIUS, COLORS, FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
export class GeneralButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, bgcolor, ...rest } = this.props;
    return (
      <TouchableOpacity
        {...rest}
        activeOpacity={0.7}
        style={[styles.container, { backgroundColor: bgcolor }]}>
        <Text style={styles.titleStyle}>{title}</Text>

      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: RFValue(60),
    width: RFValue(width / 1.4),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    borderRadius: RADIUS.smRadius
  },
  titleStyle: {
    color: COLORS.white,
    fontSize: RFValue(FONTS.h3),
  },
});
export default GeneralButton;
