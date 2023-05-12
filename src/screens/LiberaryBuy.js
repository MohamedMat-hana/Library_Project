import * as React from 'react';
import {
    Text,
    StyleSheet,
    initialLayout,
    useWindowDimensions,
    View,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS, ICONS, MARGIN, PADDING, RADIUS } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Input, GeneralButton } from '../components/GeneralButton';

export default class LiberaryBuy extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            books: this.props.route.params.book,
            Delievry: 40,
            Cart: "",
            cart: 0,
            count: 1,

        }
    }
    componentDidMount() {
        let data = this.props.route.params.book

        this.setState({ books: data })
        // this.get_Count()

    }
    async store_data() {
        // await AsyncStorage.setItem("book", JSON.stringify(this.state.books))
        this.props.navigation.navigate("LiberaryBuySure", {
            book: this.state.books,
            cart: this.state.cart,
            count: this.state.count
        })

    }
    Cart() {
        let nEw = this.state.Cart
        if (nEw == '') {
            this.setState({ cart: 0 })
        }
        else {
            this.setState({ cart: 20 })

        }
    }
    async store_Count(last_edit) {
        await AsyncStorage.setItem("counter", JSON.stringify(last_edit))

    }
    async get_Count() {
        let coun = await AsyncStorage.getItem("counter")
        this.setState({ count: coun })
    }



    async Plus_num() {
        let new_edit = parseInt(this.state.count)
        let last_edit = parseInt(new_edit + 1)
        this.setState({ count: last_edit })
        if (new_edit == 99) {

            this.setState({ count: 0 })


        } this.store_Count(last_edit)
    };
    async Mun_num() {
        let new_edit = parseInt(this.state.count)
        if (new_edit > 1) {
            var last_edit = parseInt(new_edit - 1)
        } else {
            last_edit = 1
        }
        this.setState({ count: last_edit })
        this.store_Count(last_edit)
    };

    // Price(){
    //     let nEw=this.state.books.price
    //     if (this.state.count == '') {
    //         this.setState({ cart: 0 })
    //     }
    //     else {
    //         this.setState({ cart: 20 })

    //     }

    // }
    // async get_data() {
    //     let item = await AsyncStorage.getItem("book")
    //     item = JSON.parse(item)
    //     // console.log(item)

    //     if (item == null) {
    //         //   await AsyncStorage.setItem('book',[])
    //         alert("Dddd")

    //         this.setState({ book: item })

    //     } else {
    //         // alert(item)

    //         this.setState({ books: item })

    //     }
    // }


    render() {
        return (
            <>
                <View style={styles.Header1}>

                    <View style={styles.Header}>
                        <View style={[styles.Header, {
                            justifyContent: "space-between",
                            flexDirection: "row",
                            height: RFValue(height / 20)
                        }]}>

                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }}>
                                <AntDesign
                                    name="arrowright"
                                    color={COLORS.gray}
                                    size={ICONS.lIcon}
                                />
                            </TouchableOpacity>

                            <View>
                                <Text style={styles.View1}>
                                    السلة
                                </Text>
                            </View>
                            <View></View>
                        </View>
                        {/* <View style={styles.ViewImage}>
                            <Image source={{ uri: this.state.books.photo }}
                                style={styles.Image} resizeMode={'cover'}
                            />
                            <View style={styles.View2}>
                                <Text style={styles.NameBook}>
                                    {this.state.books.namebook}
                                </Text>
                                <Text style={styles.Text1}>
                                    {this.state.books.nameWriter}
                                </Text>
                                <Text style={styles.TextPrice}>
                                    {this.state.books.price}
                                </Text>


                            </View>

                            <View style={styles.View4}>
                                <View style={styles.View5}>
                                    <Text style={styles.Text1}>
                                        صوتية
                                    </Text>
                                </View>
                                <View style={styles.View6}>
                                    <TouchableOpacity>
                                        <Entypo name='minus' color={COLORS.grayICon} size={ICONS.mIcon} />
                                    </TouchableOpacity>
                                    <Text style={styles.Text1}>1</Text>
                                    <TouchableOpacity>
                                        <Entypo name='plus' color={COLORS.primary} size={ICONS.mIcon} />
                                    </TouchableOpacity>
                                </View>


                            </View>


                        </View> */}
                        <View style={styles.ViewImage}>
                            <Image source={this.state.books.photo}
                                style={styles.Image} resizeMode={'cover'}
                            />
                            <View style={styles.View2}>
                                <Text style={styles.NameBook}>
                                    {this.state.books.namebook}
                                </Text>
                                <Text style={styles.Text1}>
                                    {this.state.books.nameWriter}
                                </Text>
                                <Text style={styles.TextPrice}>
                                    {this.state.books.price}
                                </Text>


                            </View>
                            <View style={styles.View4}>
                                <View style={styles.View5}>
                                    <Text style={styles.Text1}>
                                        صوتية
                                    </Text>
                                </View>
                                <View style={styles.View6}>
                                    <TouchableOpacity onPress={() => {
                                        this.Mun_num()
                                    }}>
                                        <Entypo name='minus' size={ICONS.mIcon} color={COLORS.grayICon} />
                                    </TouchableOpacity>
                                    <Text style={styles.Text1}>{this.state.count}</Text>
                                    <TouchableOpacity onPress={() => {
                                        this.Plus_num()
                                    }}>
                                        <Entypo name='plus' size={ICONS.mIcon} color={COLORS.grayICon} />
                                    </TouchableOpacity>
                                </View>


                            </View>


                        </View>
                        <View style={styles.Box}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.Cart()
                                }}
                                style={styles.Button}>
                                <Text style={styles.Text2}>
                                    كود الخصم
                                </Text>

                            </TouchableOpacity>
                            <TextInput style={styles.TextInput2}
                                value={this.state.Cart}
                                onChangeText={value => {
                                    this.setState({ Cart: value })
                                    console.log(this.state.Cart)
                                }}>
                            </TextInput>

                        </View>
                        <View style={styles.View7}>
                            <Text style={styles.TextPrice}>
                                تفاصيل الشراء
                            </Text>

                        </View>

                        <View style={styles.ViewBox}>
                            <View style={styles.Item1Box}>
                                < Text style={styles.Text}>
                                    الحساب
                                </Text>
                                <Text style={styles.TextMore}>{this.state.books.price * this.state.count} EGP</Text>

                            </View>

                            <View style={styles.Item1Box}>
                                < Text style={styles.Text}>
                                    الشحن
                                </Text>
                                <Text style={styles.TextMore}>{this.state.Delievry} EGP</Text>

                            </View>
                            <View style={styles.Item1Box}>
                                < Text style={styles.Text}>
                                    الخصم
                                </Text>
                                <Text style={styles.TextMore}>{this.state.cart} EGP</Text>

                            </View>
                            <View style={[styles.Item1Box, { borderColor: COLORS.ButtonWhite, borderTopWidth: 1 }]}>
                                < Text style={styles.Text}>
                                    الاجمالي
                                </Text>
                                <Text style={styles.TextMore}>{this.state.Delievry + (this.state.books.price * this.state.count) - this.state.cart} EGP</Text>

                            </View>



                        </View>

                        <View style={styles.ViewButton}>
                            <GeneralButton
                                title="دفع"
                                bgcolor={COLORS.primary}
                                onPress={() => {
                                    this.store_data()
                                }}
                            />

                        </View>

                    </View>
                </View>

            </>

        )
    }
}
const styles = StyleSheet.create({
    Header1: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: COLORS.white,

    },
    Header: {
        width: RFValue(width),
        height: RFValue(height),
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "space-around"
    },
    View1: {
        fontSize: FONTS.h3,
        color: COLORS.primary,
        fontWeight: "bold",
        alignSelf: "center"
    },
    Icon: {
        color: COLORS.gray,
        marginHorizontal: MARGIN.xxsMargin

    },
    TextInput: {
        width: RFValue(width / 1.15),
        alignItems: "flex-start",
        alignSelf: "flex-start",
        justifyContent: "flex-start",
        fontSize: FONTS.h3,
    },
    View2: {
        // marginHorizontal: MARGIN.xxsMargin,
        height: RFValue(height / 5),
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    View3: {
        width: RFValue(width / 1.01),
        height: RFValue(height / 13),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        alignSelf: "center"
    },
    Text: {
        fontSize: FONTS.h5,
        color: COLORS.primary
    },
    TextMore: {
        fontSize: FONTS.h7,
        color: COLORS.grayFont,
        textDecorationLine: "underline"
    },
    UpScroll: {
        width: RFValue(width * 1.05),
        height: RFValue(height / 3),
        flexDirection: "row",
    },
    TouchableOpacityMap: {
        width: RFValue(width / 2.5),
        alignItems: "center",
        // marginHorizontal: MARGIN.xxsMargin,
        justifyContent: "center"
    },
    ViewImage: {
        flexDirection: "row",
        height: RFValue(height / 5),
        width: RFValue(width),
        alignItems: "center",
        justifyContent: "space-evenly",
        // margin: MARGIN.smMargin
    },
    Image: {
        width: RFValue(90),
        height: RFValue(140),
        borderRadius: RADIUS.xsRadius
    },
    NameBook: {
        fontSize: FONTS.h4,
        color: COLORS.grayFont,
        alignSelf: "center"

    },
    Text1: {
        fontSize: FONTS.h5,
        color: COLORS.gray
    },
    namewriter: {
        fontSize: FONTS.h6,
        color: COLORS.grayFont,
        alignSelf: "center"

    },
    TextPrice: {
        fontSize: FONTS.h6,
        color: COLORS.primary
    },
    View4: {
        // marginHorizontal: MARGIN.xxsMargin,
        height: RFValue(height / 5),
        alignItems: "center",
        justifyContent: 'space-around',
    },
    View5: {
        padding: PADDING.xsPadding,
        borderRadius: RADIUS.xxsRadius,
        borderWidth: 2,
        borderColor: COLORS.gray,
    },
    View6: {
        width: RFValue(width / 3),
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
        alignSelf: "center"
    },
    Box: {
        marginVertical: MARGIN.xxsMargin,
        width: RFValue(width / 1.05),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',

    },
    Button: {
        width: RFValue(width / 3),
        height: RFValue(height / 9),
        backgroundColor: COLORS.primary,
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",
    },
    Text2: {
        fontSize: FONTS.h3,
        color: COLORS.white
    },
    TextInput2: {
        borderWidth: 1,
        borderColor: COLORS.gray,
        width: RFValue(width / 1.61),
        height: RFValue(height / 9),
        alignItems: "center",
        justifyContent: "center",
        fontSize: FONTS.h3,
        color: COLORS.black
    },
    View7: {
        width: RFValue(width / 1.05),
        height: RFValue(height / 15),
        alignItems: 'flex-start',
        justifyContent: "flex-end"
    },
    ViewBox: {
        // marginTop: MARGIN.xxsMargin,
        width: RFValue(width / 1.05),
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: COLORS.gray,

    },
    Item1Box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: RFValue(width / 1.05),
        padding: PADDING.xsPadding
    },
    ViewButton: {
        height: RFValue(height / 7),
        width: RFValue(width),
        justifyContent: "center"
    },
    // TouchableOpacity:{
    //     width: RFValue(width/2),
    //     height: RFValue(height/10),
    //     backgroundColor: COLORS.primary,
    //     alignSelf: "center",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     borderRadius: 2
    // }


});