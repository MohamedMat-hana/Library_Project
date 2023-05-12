
import * as React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {
  Text,
  StyleSheet,
  useWindowDimensions,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  TextInput,
  Dimensions,
  PermissionsAndroid,
  YellowBox,
  BackHandler,
  Alert

} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import * as ImagePicker from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';

import { Value } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import { Input, GeneralButton } from '../../components';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  COLORS,
  MARGIN,
  ICONS,
  FONTS,
  RADIUS
} from '../constants/Constants';
import SettingsScreen from './SettingsScreen'
import Route3 from './Route3';
import Route4 from './Route4';



const FirstRoute = () => (
  <Route4 />
);

const SecondRoute = () => (
  <Route3 />

);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,

});

// export default function TabViewExample({ navigation }) {
export default class LiberaryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      index: 0,
      routes: [
        {
          key: 'first', title: 'خطتي'
        },
        {
          key: 'second', title: 'نظرة عامه'
        }
      ],
    }
  }
  //  options = [
  //     <Text
  //     onPress={() => {
  //       this.selectFromGallery();
  //     }}>
  //     اختيار صوره
  //   </Text>
  //   ,
  //   <Text
  //     onPress={() => {
  //       this.launchCamera();
  //     }}>
  //     التقاط صوره
  //   </Text>,
  // ];
  backAction = () => {

        BackHandler.exitApp()
    
    return true;
  };
  
  componentWillUnmount() {
    this.backHandler.remove();
  }

  componentDidMount() {
    this.requestCameraPermission();
    YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
    // let data = this.props.route.params.name
    // // alert(data)

    // this.setState({ item: data })
this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );

  }
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  selectFromGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        emailErr: '',
      },
    };
    ImagePicker.launchImageLibrary({ options, includeBase64: true }, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        this.setState({
          photo_data: res.assets[0],
          photo_uri: res.assets[0].uri,
        });
      }
    });
  };
  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        this.setState({
          photo_data: res.assets[0],
          photo_uri: res.assets[0].uri,
        });
      }
    });
  };

  // const layout = useWindowDimensions();

  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'first', title: 'نظرة عامه' },
  //   { key: 'second', title: 'خطتي' },
  // ]);

  //   componentDidMount() {
  //     let data = this.props.route.params.photo
  // alert(data)
  //     // this.setState({ item: data })

  //   }
  // _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;
  _renderScene = SceneMap({
    'first': FirstRoute,
    'second': SecondRoute,
  });

  render() {
    return (
      <>
        <View style={styles.Header1}>
          <View style={styles.Header}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SettingsScreen')
              }}>
              <Entypo name={"cog"} size={ICONS.mIcon} color={COLORS.grayICon} />
            </TouchableOpacity>
            <TouchableOpacity>
              {/* // <Entypo name={"bell"} size={ICONS.mIcon} color={COLORS.grayICon} />  */}
            </TouchableOpacity>
          </View>

          <View style={styles.View1}>
            <View style={styles.View2}>
              <Animatable.Text
                animation='fadeInRight'
                easing={"ease-in-circ"}
                style={[styles.text, { fontWeight: "bold" }]}>   __________</Animatable.Text>
              {/* <Image source={require('../assets/Images/4.jpg')}  */}
              <View style={styles.photoContainer}>
                <Animatable.View animation='fadeIn'
                  easing={"ease-in-circ"}
                  style={styles.photo}>
                  {this.state.photo_uri == '' ? (
                    <Entypo name="user" size={RFValue(50)} color="#4b4b4b" />
                  ) : (
                    <Image
                      source={{ uri: this.state.photo_uri }}
                      style={styles.selectedPhoto}
                      resizeMode="contain"
                    />
                  )}
                </Animatable.View>
                <TouchableOpacity
                  style={styles.editView}
                  onPress={() => {
                    this.ActionSheet.show();
                  }}>
                  <Entypo
                    name="edit"
                    size={RFValue(ICONS.smIcon)}
                    color="#fff"
                    style={styles.editIcon}
                  />
                  <ActionSheet
                    ref={o => (this.ActionSheet = o)}
                    options={['التقاط صوره', 'اختيار صوره', 'حذف الصوره', 'الغاء']}
                    cancelButtonIndex={3}
                    destructiveButtonIndex={3}
                    onPress={index => {
                      if (index == 0) {
                        this.launchCamera();
                      } else if (index == 1) {
                        this.selectFromGallery();
                      } else if (index == 2) {
                        this.setState({ photo_uri: '' });
                      }
                    }}
                  />
                </TouchableOpacity>
              </View>

              {/* // style={styles.Image} resizeMode={'cover'} />  */}
              <Animatable.Text
                animation='fadeInLeft'
                easing={"ease-in-circ"}
                style={[styles.text, { fontWeight: "bold" }]}>__________   </Animatable.Text>

            </View>

            <Animatable.Text animation='fadeIn' easing={"ease-in-circ"}
              style={[styles.text, { marginTop: MARGIN.xsMargin }]}>محمد مطحنه</Animatable.Text>
          </View>

          <View style={styles.Follow}>

            <View style={styles.Boxs}>
              <Text style={styles.wordBoxs}>99</Text>
              <Text style={styles.wordBoxs}>متابعة</Text>
            </View>

            <View style={styles.Boxs}>
              <Text style={styles.wordBoxs}>60</Text>
              <Text style={styles.wordBoxs}>متابع</Text>
            </View>

            <View style={styles.Boxs}>
              <Text style={styles.wordBoxs}>0</Text>
              <Text style={styles.wordBoxs}>موضوعاتي</Text>
            </View>

          </View>
        </View>

        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
        // onRequestChangeTab={this._handleChangeTab}
        />


      </>
    );
  }
}

const styles = StyleSheet.create({
  Header1: {
    backgroundColor: COLORS.white
  },
  photoContainer: {
    width: RFValue(100),
    alignSelf: 'center',
  },
  photo: {
    backgroundColor: '#cccccc',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    width: RFValue(75),
    height: RFValue(75),
    borderRadius: RADIUS.XXXLRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedPhoto: {
    width: RFValue(75),
    height: RFValue(75),
    borderRadius: RADIUS.XXXLRadius,
  },
  editView: {
    padding: 5,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: RFValue(7),
    borderRadius: RFValue(RADIUS.smRadius),
  },
  editIcon: {
    position: 'relative',
    zIndex: -1,
  },

  Header: {
    width: RFValue(width / 1.001),
    height: RFValue(height / 18),
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
  },
  View1: {
    width: RFValue(width),
    height: RFValue(height / 6),
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",

  },
  View2: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: COLORS.grayFont,
    fontSize: FONTS.h3,
  },
  Image: {
    width: RFValue(75),
    height: RFValue(75),
    borderRadius: RADIUS.XXXLRadius
  },
  Follow: {
    width: RFValue(width),
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center"
  },
  Boxs: {
    width: RFValue(width / 3),
    height: RFValue(height / 10),
    justifyContent: "center",
    alignItems: "center",
  },
  wordBoxs: {
    color: COLORS.gray,
    fontSize: FONTS.h6,
    fontWeight: "bold"
  }
})