import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  AsyncStorage
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  PADDING,
  COLORS,
  MARGIN,
  ICONS,
  FONTS,
} from '../constants/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: [

        {
          name: 'تعديل الملف الشخصى',
          ICON: 'arrowright',
        },
        {
          name: 'تغيير كلمه المرور',
          ICON: 'arrowright',
        },
        // {
        //   name: 'الاشعارات',
        //   ICON: 'arrowright',
        // },
        {
          name: 'تسجيل الخروج',
          ICON: 'logout',
        },

      ]

    }
  }
  choosenIndex = (index) => {
    if (index == 0) {
      this.props.navigation.navigate('EditProfileScreen')
    } else if (index == 1) {
      this.props.navigation.navigate('ChangePassword')
    } else if (index == 2) {
      this.store_Count()
    }
  }
  async store_Count() {
    await AsyncStorage.setItem("login", '0')
    this.props.navigation.navigate("Liberarylogorsing")

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <AntDesign
              name="arrowright"
              color={COLORS.gray}
              size={RFValue(ICONS.xlIcon)}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderName}>الاعدادات</Text>
          <View></View>
          <View>
          </View>



        </View>
        {this.state.setting.map((item, index) => (
          <TouchableOpacity style={styles.ToView}
            onPress={() => this.choosenIndex(index)}>

            <View >
              <AntDesign
                name={item.ICON}
                color={COLORS.gray}
                size={ICONS.lIcon}
              />
            </View>

            <Text style={styles.adress}>{item.name}</Text>


          </TouchableOpacity>
        ))}


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white
  },
  Header: {
    height: RFValue(height / 12),
    width: RFValue(width),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  HeaderName: {
    color: COLORS.black,
    fontSize: RFValue(FONTS.h3),
    fontWeight: 'bold',

  },

  ToView: {
    height: RFValue(height / 12),
    width: RFValue(width),
    borderBottomWidth: 0.5,
    borderColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  adress: {
    fontSize: RFValue(FONTS.h6),
    fontWeight: "bold",
    color: COLORS.black

  }


});

