import * as React from 'react';
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
    Modal,
    AsyncStorage
} from 'react-native';
import { icons, images, SIZES } from '../../constants';

import { Value } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Input, GeneralButton } from '../components/GeneralButton';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    COLORS,
    MARGIN,
    ICONS,
    FONTS,
    RADIUS,
    PADDING
} from '../constants/Constants';
import { Colors } from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


export default class LiberaryDetails2 extends React.Component {


    constructor() {
        super();
        this.state = {
            item: {},
            book: [
                {
                    photo: images.I03,
                    namebook: "عقل بلا جسد",
                    nameWriter: "احمد خالد توفيق",
                    price: 155,
                    pages: "156",
                    rate: "4.5",

                },
                {
                    photo: images.I02,
                    namebook: "فن اللامبالاة",
                    nameWriter: "مارك مانسون",
                    price: 465,
                    pages: "466",
                    rate: "3.5",
                },
                {
                    photo: images.I01,
                    namebook: "اسواق الذهب",
                    nameWriter: "احمد شوقي",
                    price: 755,
                    pages: "156",
                    rate: "4.7",


                },
                {
                    photo: images.I04,
                    namebook: "الست هدى",
                    nameWriter: "احمد شوقي",
                    price: 200,
                    pages: "150",
                    rate: "3",


                },
                {
                    photo: images.I05,
                    namebook: "انت لي",
                    nameWriter: "مني المرشود",
                    price: 75,
                    pages: "116",
                    rate: "3.5",


                },
                {
                    photo: images.I06,
                    namebook: "ليطمئن قلبي",
                    nameWriter: "ادهم شرقاوي",
                    price: 145,
                    pages: "556",
                    rate: "4",


                },
                {
                    photo: images.I07,
                    namebook: "انا يوسف",
                    nameWriter: "ايمن العتوم",
                    price: 95,
                    pages: "146",
                    rate: "2",


                },
                {
                    photo: images.I08,
                    namebook: "انتيخريستوس",
                    nameWriter: "احمد خالد مصطفي",
                    price: 185,
                    pages: "176",
                    rate: "3.2",

                },
                {
                    photo: images.I09,
                    namebook: "ياسمين العودة",
                    nameWriter: "خولة حمدي",
                    price: 150,
                    pages: "146",
                    rate: "4.5",

                },
                {
                    photo: images.I010,
                    namebook: "موسم صيد الغزلان",
                    nameWriter: "احمد مراد",
                    price: 125,
                    pages: "146",
                    rate: "4.7",


                },



            ],
            books: [
                {
                    photo: images.I08,
                    namebook: "انتيخريستوس",
                    nameWriter: "احمد خالد مصطفي",
                    price: 185,
                    pages: "176",
                    rate: "3.2",
                    pdf: "../../assets/pdf/First.pdf"

                },
                {
                    photo: images.I03,
                    namebook: "عقل بلا جسد",
                    nameWriter: "احمد خالد توفيق",
                    price: 155,
                    pages: "156",
                    rate: "4.5",
                    // pdf:pdf.P1
                    pdf: 'https://camp-coding.com/classRoomAPI/data/tasks.pdf'

                },
                {
                    photo: images.I02,
                    namebook: "فن اللامبالاة",
                    nameWriter: "مارك مانسون",
                    price: 465,
                    pages: "466",
                    rate: "3.5",
                    pdf: "../../assets/pdf/First.pdf"

                },
                {
                    photo: images.I01,
                    namebook: "اسواق الذهب",
                    nameWriter: "احمد شوقي",
                    price: 755,
                    pages: "156",
                    rate: "4.7",
                    pdf: "../../assets/pdf/First.pdf"


                },
                {
                    photo: images.I04,
                    namebook: "الست هدى",
                    nameWriter: "احمد شوقي",
                    price: 200,
                    pages: "150",
                    rate: "3",
                    pdf: "../../assets/pdf/First.pdf"


                },
                {
                    photo: images.I05,
                    namebook: "انت لي",
                    nameWriter: "مني المرشود",
                    price: 75,
                    pages: "116",
                    rate: "3.5",
                    pdf: "../../assets/pdf/First.pdf"


                },
                {
                    photo: images.I06,
                    namebook: "ليطمئن قلبي",
                    nameWriter: "ادهم شرقاوي",
                    price: 145,
                    pages: "556",
                    rate: "4",
                    pdf: "../../assets/pdf/First.pdf"


                },
                {
                    photo: images.I07,
                    namebook: "انا يوسف",
                    nameWriter: "ايمن العتوم",
                    price: 95,
                    pages: "146",
                    rate: "2",
                    pdf: "../../assets/pdf/First.pdf"


                },
                {
                    photo: images.I09,
                    namebook: "ياسمين العودة",
                    nameWriter: "خولة حمدي",
                    price: 150,
                    pages: "146",
                    rate: "4.5",
                    pdf: "../../assets/pdf/First.pdf"

                },
                {
                    photo: images.I010,
                    namebook: "موسم صيد الغزلان",
                    nameWriter: "احمد مراد",
                    price: 125,
                    pages: "146",
                    rate: "4.7",
                    pdf: "../../assets/pdf/First.pdf"


                },


            ],
        }
    }
    componentDidMount() {
        let data = this.props.route.params.books

        this.setState({ item: data })
    }
    async store_data() {
        await AsyncStorage.setItem("book", JSON.stringify(this.state.book))
        this.props.navigation.navigate("LiberaryBuy", {
            book: this.state.item
        })

    }

    render() {
        return (
            <>
                <View style={styles.UPheader}>
                    <View style={styles.Header}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                            <AntDesign
                                name="arrowright"
                                color={COLORS.gray}
                                size={ICONS.lIcon}
                            />
                        </TouchableOpacity>

                        <Text style={[styles.text, { color: COLORS.primary }]}>
                            {this.state.item.namebook}


                        </Text>
                        <View></View>
                    </View>
                    <ScrollView>
                        <View style={styles.View1}>
                            <Image source={this.state.item.photo}
                                style={styles.Image} resizeMode={'cover'}
                            />
                            <View style={styles.View1Details}>
                                <View style={styles.View1Detailsname}>
                                    <Text style={styles.text}>
                                        {this.state.item.nameWriter}
                                    </Text >
                                    <Text style={styles.Text1}>
                                        {this.state.item.namebook}

                                    </Text>

                                </View>

                                <View style={styles.View2}>
                                    <View style={styles.Boxs}>
                                        <View style={{
                                            flexDirection: "row",
                                        }}>
                                            <Entypo name='star' size={ICONS.smIcon} color={COLORS.grayICon} />
                                            <Text style={styles.textBox}>
                                                {this.state.item.rate}
                                            </Text>

                                        </View>
                                        <Text style={styles.textBox2}>
                                            رأي 987
                                        </Text>

                                    </View>
                                    <View style={styles.Boxs}>
                                        <Text style={styles.textBox}>
                                            {this.state.item.pages}

                                        </Text>

                                        <Text style={styles.textBox2}>
                                            صفحة
                                        </Text>

                                    </View>
                                    <View style={styles.Boxs}>
                                        <Entypo name='globe' size={ICONS.smIcon} color={COLORS.grayICon} />

                                        <Text style={styles.textBox2}>
                                            عربي
                                        </Text>

                                    </View>

                                </View>

                            </View>


                        </View>
                        <View style={styles.ViewButton}>
                            <TouchableOpacity style={styles.TouchableOpacity1}
                                onPress={() => {
                                    this.props.navigation.navigate("PDFExample", {
                                        book: this.state.books,

                                    })
                                }}>

                                <Text style={styles.Text1}>
                                    العينة المجانية
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TouchableOpacity2}>
                                <Text style={[styles.Text1, { color: COLORS.white }]}>
                                    الاٍضافة الي القائمة
                                </Text>


                            </TouchableOpacity>


                        </View>
                        <View style={styles.View1}>
                            <View style={styles.View3}>
                                <Text style={[styles.text, { fontSize: FONTS.h6 }]}>{this.state.item.price}</Text>
                                <Text style={[styles.text, { fontSize: FONTS.h6 }]}>
                                    النسخة الالكترونيه
                                </Text>
                            </View>
                            <View style={styles.View3}>
                                <Text style={[styles.text, { fontSize: FONTS.h6 }]}>{this.state.item.price}</Text>
                                <Text style={[styles.text, { fontSize: FONTS.h6 }]}>
                                    النسخة الورقية
                                </Text>
                            </View>
                            <View style={styles.View3}>
                                <Text style={[styles.text, { fontSize: FONTS.h6 }]}>{this.state.item.price}</Text>
                                <Text style={[styles.text, { fontSize: FONTS.h6 }]}>
                                    النسخة الصوتية
                                </Text>
                            </View>

                        </View>
                        <View style={styles.ViewButton}>
                            <TouchableOpacity style={styles.TouchableOpacity2}
                                onPress={() => {
                                    this.store_data()
                                }}>
                                <Text style={[styles.Text1, { color: COLORS.white }]}>
                                    اضافة النسخة الالكترونية
                                </Text>
                                <Text style={[styles.Text1, { color: COLORS.white }]}>
                                    الي السلة
                                </Text>


                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TouchableOpacity2}>
                                <Text style={[styles.Text1, { color: COLORS.white }]}>
                                    اضافة النسخة الورقية
                                </Text>
                                <Text style={[styles.Text1, { color: COLORS.white }]}>
                                    الي السلة
                                </Text>


                            </TouchableOpacity>


                        </View>
                        <View style={styles.View4}>

                            <View style={[styles.View4, { flexDirection: "row", }]}>
                                <Text style={[styles.text, { fontSize: FONTS.h5 }]}>
                                    نبذة عن الكاتب
                                </Text>
                                <FontAwesome5Icon name='angle-left' size={ICONS.mIcon} color={COLORS.gray} style={{ marginLeft: MARGIN.xxsMargin }} />

                            </View>
                            <Text style={[styles.text, { fontSize: FONTS.h7 }]}>
                                {this.state.item.wordWriter}
                            </Text>

                        </View >
                        {/* <View style={[styles.View4, { marginTop: MARGIN.smMargin }]}>

                            <View style={[styles.View4, { flexDirection: "row", }]}>
                                <Text style={[styles.text, { fontSize: FONTS.h5 }]}>
                                    كتب أخري للكاتب
                                </Text>
                                <FontAwesome5Icon name='angle-left' size={ICONS.mIcon} color={COLORS.gray} style={{ marginLeft: MARGIN.xxsMargin }} />

                            </View>
                            <View style={styles.View5}>
                                <ScrollView horizontal={true}>
                                    {this.state.books.map(item => (
                                        <TouchableOpacity style={styles.TouchableOpacity3}
                                        onPress={()=>{
                                            this.props.navigation.navigate("Update", {
                                                books: item
                                            })
                                        }}>

                                            <Image source={{ uri: item.photo }}
                                                style={styles.Image} resizeMode={'cover'}
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
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>

                            </View>

                        </View > */}
                        <View style={styles.View4}>
                            <View style={[styles.View4, { flexDirection: "row", }]}>
                                <Text style={[styles.text, { fontSize: FONTS.h5 }]}>
                                    التقييم والاراء
                                </Text>
                                <FontAwesome5Icon name='angle-left' size={ICONS.mIcon} color={COLORS.gray} style={{ marginLeft: MARGIN.xxsMargin }} />

                            </View>

                            <Text style={styles.rate}>
                                {this.state.item.rate}
                            </Text>
                            <View style={[styles.View4, { flexDirection: "row", justifyContent: "center", }]}>
                                <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />
                                <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />
                                <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />
                                <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />
                                <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />

                            </View>
                            <Text style={styles.textBox2}>
                                رأي 667
                            </Text>


                        </View >
                        <View style={styles.View6}>
                            <View style={[styles.View4, { flexDirection: "row", justifyContent: "space-between", }]}>
                                <View style={styles.View7}>
                                    <Image source={{ uri: "https://books-library.net/files/s-books-library.net-11091003Te2F3.jpg" }}
                                        style={styles.Image2} resizeMode={"cover"}
                                    />
                                    <View style={styles.View8}
                                    >
                                        <Text style={[styles.text, { fontSize: FONTS.h5 }]}>
                                            محمد مطحنة
                                        </Text>
                                        <View style={{ flexDirection: "row", }}>
                                            <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />
                                            <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />
                                            <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />
                                            <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />
                                            <Entypo name='star' size={ICONS.xsIcon} color={COLORS.star} />

                                        </View>

                                    </View>
                                </View>
                                <Text style={styles.textBox}>
                                    12:00 AM
                                </Text>

                            </View>
                            <View >
                                <Text style={styles.text2}>
                                    كاتب عظيم وأديب رائع
                                </Text>
                            </View>
                        </View>

                    </ScrollView>

                </View>

            </>

        )
    }
}
const styles = StyleSheet.create({
    UPheader: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
        backgroundColor: COLORS.white
    },
    Header: {
        width: RFValue(width),
        height: RFValue(height / 15),
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
    },
    View1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    View1Details: {
        width: RFValue(width / 1.55),
        height: RFValue(height / 4),
    },
    View1Detailsname: {
        width: RFValue(width),
        height: RFValue(height / 8),
        justifyContent: "center",
        alignItems: "flex-start"

    },
    View2: {
        width: RFValue(width / 1.5),
        height: RFValue(height / 8),
        justifyContent: "space-evenly",
        alignItems: 'flex-end',
        flexDirection: "row"
    },
    text: {
        color: COLORS.black,
        fontSize: FONTS.h3,
        fontWeight: "bold"
    },
    Text1: {
        fontSize: FONTS.h6,
        color: COLORS.primary,
    },
    Image: {
        width: RFValue(120),
        height: RFValue(170),
        borderRadius: RADIUS.xxsRadius
    },
    Boxs: {
        width: RFValue(width / 5),
        height: RFValue(height / 12),
        justifyContent: "center",
        alignItems: "center",
    },
    textBox: {
        marginLeft: MARGIN.xxsMargin,
        fontSize: FONTS.h8,
        color: COLORS.gray

    },
    textBox2: {
        fontSize: FONTS.h7,
        color: COLORS.grayFont
    },
    ViewButton: {
        width: RFValue(width),
        height: RFValue(height / 8),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    TouchableOpacity1: {
        width: RFValue(width / 2.2),
        height: RFValue(height / 12),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.xxsRadius,
        borderColor: COLORS.ButtonWhite,
        borderWidth: 1
    },
    TouchableOpacity2: {
        width: RFValue(width / 2.2),
        height: RFValue(height / 12),
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.xxsRadius,
    },
    View3: {
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRightWidth: 1,
        borderColor: COLORS.ButtonWhite,
        paddingRight: RADIUS.xsRadius
    },
    View4: {
        margin: MARGIN.xxsMargin,
        width: RFValue(width / 1.05),
        alignItems: "center",
        alignSelf: "center",
    },
    View5: {
        width: RFValue(width),
        height: RFValue(height / 3),
        flexDirection: "row",
    },
    TouchableOpacity3: {
        width: RFValue(width / 2.3),
        alignItems: "center",
        marginHorizontal: MARGIN.xxsMargin,
        justifyContent: "center"
    },
    NameBook: {
        fontSize: FONTS.h5,
        color: COLORS.grayFont,
        alignSelf: "center"

    },
    namewriter: {
        fontSize: FONTS.h7,
        color: COLORS.grayFont,
        alignSelf: "center"

    },
    stars: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: RFValue(width / 5),
        alignSelf: "center"
    },
    rate: {
        fontSize: FONTS.h0,
        color: COLORS.primary,
        fontWeight: "bold",
    },
    View6: {
        width: RFValue(width / 1.05),
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.ButtonWhite
    },
    View7: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    Image2: {
        width: RFValue(50),
        height: RFValue(50),
        borderRadius: 25,
    },
    View8: {
        marginLeft: MARGIN.xsMargin,
        alignItems: "center"
    },
    text2: {
        width: RFValue(width / 1.09),
        marginVertical: MARGIN.xsMargin,
        color: COLORS.black
    }


})