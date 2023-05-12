import * as React from 'react';
import {
    Text,
    StyleSheet,
    initialLayout,
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
} from 'react-native';
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
} from '../../src/constants/Constants';
import { COLORICON } from '../../src/constants/Constants';
import {  icons, images, SIZES } from '../../constants';
import * as Animatable from 'react-native-animatable';


export default class Route3 extends React.Component {


    constructor() {
        super();
        this.state = {
            count: 0,
            books: [
                {
                    photo: images.I03,
                    namebook: "عقل بلا جسد",
                    nameWriter: "احمد خالد توفيق",
                    price: "155",
                    pages: "156",
                    rate: "4.5",

                },
                {
                    photo: images.I01,
                    namebook: "اسواق الذهب",
                    nameWriter: "احمد شوقي",
                    price: "755",
                    pages: "156",
                    rate: "4.7",


                },
                {
                    photo: images.I04,
                    namebook: "الست هدى",
                    nameWriter: "احمد شوقي",
                    price: "200",
                    pages: "150",
                    rate: "3",


                },
                {
                    photo:images.I05,
                    namebook: "انت لي",
                    nameWriter: "مني المرشود",
                    price: "75",
                    pages: "116",
                    rate: "3.5",


                },
                {
                    photo: images.I06,
                    namebook: "ليطمئن قلبي",
                    nameWriter: "ادهم شرقاوي",
                    price: "145",
                    pages: "556",
                    rate: "4",


                },
                {
                    photo:images.I07,
                    namebook: "انا يوسف",
                    nameWriter: "ايمن العتوم",
                    price: "95",
                    pages: "146",
                    rate: "2",


                },
                {
                    photo:images.I08,
                    namebook: "انتيخريستوس",
                    nameWriter: "احمد خالد مصطفي",
                    price: "185",
                    pages: "176",
                    rate: "3.2",

                },
                {
                    photo:images.I09,
                    namebook: "ياسمين العودة",
                    nameWriter: "خولة حمدي",
                    price: "150",
                    pages: "146",
                    rate: "4.5",

                },
                {
                    photo: images.I010,
                    namebook: "موسم صيد الغزلان",
                    nameWriter: "احمد مراد",
                    price: "125",
                    pages: "146",
                    rate: "4.7",


                },


            ],


        }
    }
    Plus_num = Value => {
        let new_edit = this.state.count;
        let last_edit = new_edit + 1;
        this.setState({ last_edit })
    };

    render() {
        return (
            <>
             <View
            style={{
                flex:1, 
                backgroundColor:COLORS.white
            }}
            >
                <ScrollView  >
                    <View style={styles.Header}>
                        <View>
                            <View style={styles.View1}>
                                <Text style={styles.text}>
                                    كتبي
                                </Text>

                                <Text style={styles.textmore}>
                                    عرض المزيد
                                </Text>
                            </View>
                            <View style={styles.View2}>

                                <Text style={styles.text2}>
                                    الكتب
                                </Text>
                                <View style={styles.numAndIcon}>
                                    <Text style={styles.numtext}>
                                        13
                                    </Text>
                                    <Entypo name='chevron-left' size={ICONS.mIcon} color={COLORS.grayFont} />
                                </View>
                            </View>
                            <View style={styles.View2}>
                                <Text style={styles.text2}>
                                    الكتب الصوتيه
                                </Text>
                                <View style={styles.numAndIcon}>
                                    <Text style={styles.numtext}>
                                        23
                                    </Text>
                                    <Entypo name='chevron-left' size={ICONS.mIcon} color={COLORS.grayFont} />
                                </View>
                            </View>
                            <View style={styles.View2}>

                                <Text style={styles.text2}>
                                    موضوعاتي
                                </Text>
                                <View style={styles.numAndIcon}>
                                    <Text style={styles.numtext}>
                                        0
                                    </Text>
                                    <Entypo name='chevron-left' size={ICONS.mIcon} color={COLORS.grayFont} />
                                </View>
                            </View>
                            <View style={styles.View2}>

                                <Text style={styles.text2}>
                                    المقروءة
                                </Text>
                                <View style={styles.numAndIcon}>
                                    <Text style={styles.numtext}>
                                        3
                                    </Text>
                                    <Entypo name='chevron-left' size={ICONS.mIcon} color={COLORS.grayFont} />
                                </View>
                            </View>
                            <View style={styles.View2}>
                                <Text style={styles.text}>
                                    موضوعاتي
                                </Text>

                                <Text style={styles.textmore}>
                                    عرض المزيد
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.View3}>

                                <View style={styles.View4}>
                                    <Entypo name='plus' size={ICONS.mIcon} color={COLORS.primary} />

                                </View>
                                <Text style={styles.text3}>
                                    حمل كتابك
                                </Text>
                            </View>

                        </View>
                        <View style={styles.View2}>
                            <Text style={styles.text}>
                                المفضلة
                            </Text>

                            <Text style={styles.textmore}>
                                عرض المزيد
                            </Text>
                        </View>
                        <ScrollView horizontal={true} style={{ height: height / 15 }} >
                            {this.state.books.map(item => (



                                <View style={styles.View5}>
                                    <Image source={item.photo }
                                        style={styles.Image} resizeMode={"contain"}
                                    />
                                    <Text style={styles.NameBook}>
                                        {item.namebook}
                                    </Text>
                                    <Text style={styles.namewriter}>
                                        {item.nameWriter}
                                    </Text>
                                    <View style={styles.stars}>
                                        <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />
                                        <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />
                                        <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />
                                        <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />
                                        <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />


                                    </View>


                                </View>))}

                        </ScrollView>

                    </View>
                    {/* //جته اضافيه */}
                    {/* <View style={styles.View2}>
                        <Text style={styles.text}>
                            يقرأ الان
                        </Text>

                        <Text style={styles.textmore}>
                            عرض المزيد
                        </Text>
                    </View> */}
                    {/* <ScrollView horizontal={true} style={{ height: height / 3 }}>

                        <View style={styles.ViewSCrol}>
                            <View style={{ width: width / 3, }}>
                                <Image source={{ uri: "https://books-library.net/files/s-books-library.net-11091003Te2F3.jpg" }}
                                    style={styles.Image} resizeMode={"contain"}
                                />
                                <Text style={styles.NameBook}>
                                    عقل بلا جسد
                                </Text>
                                <Text style={styles.namewriter}>
                                    احمد خالد توفيق
                                </Text>
                                <View style={styles.stars}>
                                    <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />
                                    <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />
                                    <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />
                                    <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />
                                    <Entypo name='star' size={ICONS.smIcon} color={COLORS.star} />

                                </View>
                            </View>

                        </View>
                    </ScrollView> */}
                    {/* <View style={{
      width: '97%',
      height: height / 13,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      alignSelf: "center"
    }}>
      <Text style={{
        fontSize: 17,
        color: "#d0e"
      }}>
        ارائي
      </Text>

      <Text style={{
        fontSize: 13,
        color: "#535357",
        textDecorationLine: "underline"
      }}>
        عرض المزيد
      </Text>
    </View> */}


                </ScrollView>
                </View>
            </>

        )
    }
}
const styles = StyleSheet.create({
    ScrollView: {
        width: RFValue(width),
        height: RFValue(height),
    },
    Header: {
        // width: RFValue(width),
        height: RFValue(height),
    // backgroundColor:COLORS.white
    },
    View1: {
        width: RFValue(width / 1.01),
        height: RFValue(height / 13),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        alignSelf: "center"
    },
    View2: {
        width: RFValue(width / 1.01),
        height: RFValue(height / 15),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        alignSelf: "center"
    },
    text: {
        fontSize: FONTS.h4,
        color: COLORS.primary,
    },
    textmore: {
        fontSize: FONTS.h7,
        color: COLORS.grayFont,
        textDecorationLine: "underline"
    },
    text2: {
        fontSize: FONTS.h5,
        color: COLORS.black
    },
    numAndIcon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    numtext: {
        fontSize: FONTS.h7,
        color: COLORS.grayFont,
    },
    View3: {
        width: RFValue(width / 3),
        height: RFValue(height / 4.5),
        borderRadius: RADIUS.mdRadius,
        borderWidth: 2,
        borderColor: COLORS.ButtonWhite,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: MARGIN.xxsMargin
    },
    View4: {
        width: RFValue(30),
        height: RFValue(30),
        alignSelf: "center",
        borderRadius: RADIUS.smRadius,
        borderWidth: 1,
        borderColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    text3: {
        fontSize: FONTS.h3,
        color: COLORS.grayFont,
    },
    Image: {
        width: RFValue(width / 2),
        height: RFValue(height / 5),
    },

    ViewSCrol: {//hsere
        justifyContent: "center",
        width: width / 3,
        // height: height,
        alignItems: "flex-start", alignSelf: "center"
    },
    View5: {
        width: RFValue(width / 2.5),
        alignItems: "center",
    },
    NameBook: {
        fontSize: FONTS.h4,
        color: COLORS.grayFont,
        alignSelf: "center"

    },
    namewriter: {
        fontSize: FONTS.h6,
        color: COLORS.grayFont,
        alignSelf: "center"

    },
    stars: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: RFValue(width / 5),
        alignSelf: "center"
    }
})