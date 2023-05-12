import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress, DrawerItemList } from '@react-navigation/drawer';
import { Home, Details } from '../screens'
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { AuthContext } from '../screens/contexts/AuthContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  PADDING,
  MARGIN,
  ICONS,
  COlor,
  Fonts
} from '../src/constants/Constants';

import LiberaryBuy from '../src/screens/LiberaryBuy'
import LiberaryBuySure from '../src/screens/LiberaryBuySure'
import Liberaryabout from '../src/screens/Liberaryabout'
import LiberaryDetails from '../src/screens/LiberaryDetails'
import LiberaryDetails2 from '../src/screens/LiberaryDetails2'
import LiberaryMain from '../src/screens/LiberaryMain'
import EditProfileScreen from '../src/screens/EditProfileScreen'
import SettingsScreen from '../src/screens/SettingsScreen'
import Liberarylogin from '../src/screens/Auth/Liberarylogin';
import Liberarylogorsing from '../src/screens/Auth/Liberarylogorsing';
import Liberarysignup from '../src/screens/Auth/Liberarysignup';
import ChangePassword from '../src/screens/Auth/ChangePassword';
import LiberaryBooks from '../src/screens/LiberaryBooks';
import PDFExample from '../src/screens/PDFExample';


const Drawer = createDrawerNavigator();


const CustomDrawerItem = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: COLORS.lightGray1
      }}
      onPress={onPress}
    >
      <Image
        source={icon}

        style={{
          width: 20,
          height: 20,

        }}
      />
      <Text
        style={{
          marginLeft: 15,
          fontSize: SIZES.h3,
          fontWeight: "bold"
        }}
      >
        {label}

      </Text>

    </TouchableOpacity>

  )

}





const DrawerScreenContainer = ({ children }) => {
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });


  return (
    <Animated.View
      style={{
        flex: 1,
        overflow: 'hidden',
        transform: [{ scale }],
        borderRadius: borderRadius,
      }}>
      {children}
    </Animated.View>
  );
}


function CustomDrawerContent({ navigation }) {
  const { signOut } = React.useContext(AuthContext)
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius
        }}
      >
        <View style={{ height: 30 }} />
        <View style={{
          alignItems: "center",
          justifyContent: "center"
        }} >
          <Image
            source={images.Logo}
            style={{
              width: 80,
              height: 80,
              borderRadius: SIZES.radius
            }}
            resizeMode='contain'
          />
          <Text style={{
            margin: MARGIN.xsMargin,
            fontSize: Fonts.h3,
            color: COLORS.lightGray1
          }}>اهلا</Text>

        </View>

        <View
          style={{
            flex: 1,
            marginTop: SIZES.radius
          }}
        >
          <CustomDrawerItem
            label={"الرئيسية"}
            onPress={() => {
              navigation.navigate("Liberaryabout")
            }}
            icon={icons.user}

          />
          <CustomDrawerItem
            label={"الكتب"}
            onPress={() => {
              navigation.navigate("LiberaryMain")
            }}
            icon={icons.books}

          />
          {/* <CustomDrawerItem
            label={"الشراء"}
            onPress={() => {
              navigation.navigate("LiberaryBuy")
            }}
            icon={icons.shopping}

          /> */}


        </View>

        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomDrawerItem
            label={"تسجيل الخروج"}
            icon={icons.user}
            onPress={() => {
              navigation.navigate("Liberarylogorsing")
            }}
          />
        </View>


      </View>



    </DrawerContentScrollView>

  );
}

const CustomDrawer = () => {

  return (
    <View style={{ flex: 1, backgroundColor: COlor.primary }} >

      <Drawer.Navigator

        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: COLORS.transparent,
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingLeft: 20,
            backgroundColor: COLORS.transparent
          },
          sceneContainerStyle: {
            backgroundColor: COLORS.transparent
          }


        }}
        initialRouteName="Home"
        drawerContent={props => {
          return (
            <CustomDrawerContent
              navigation={props.navigation}
            />
          )
        }}
      >


        <Drawer.Screen name="Liberaryabout">

          {
            props => (
              <DrawerScreenContainer>
                <Liberaryabout {...props} />
              </DrawerScreenContainer>
            )
          }
        </Drawer.Screen>

        <Drawer.Screen name="LiberaryMain">
          {
            props => (
              <DrawerScreenContainer>
                <LiberaryMain {...props} />
              </DrawerScreenContainer>
            )
          }
        </Drawer.Screen>

        {/* <Drawer.Screen name="LiberaryBuy">

          {
            props => (
              <DrawerScreenContainer>
                <LiberaryBuy {...props} />
              </DrawerScreenContainer>
            )
          }
        </Drawer.Screen> */}


      </Drawer.Navigator>
    </View>

  );
}

export default CustomDrawer