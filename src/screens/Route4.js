import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Modal,
    TextInput,
    Dimensions,
    ScrollView,
    AsyncStorage

} from 'react-native';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

 import { RFValue } from 'react-native-responsive-fontsize';
import {
    COLORS,
    MARGIN,
    ICONS,
    FONTS,
    RADIUS,
    PADDING
} from '../../src/constants/Constants';
import * as Animatable from 'react-native-animatable';

export default class Route4 extends React.Component {


    constructor() {
        super();
        this.state = {
            count: 0,
            list: [],
            Model_add: false,
            add_item_num: "",
            add_item_words: "",
            view: false,



        }
    }

    componentDidMount() {
        // await AsyncStorage.setItem('counter',null)
        this.get_Count()
        this.getContacts()

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

            this.setState({ count: 0, model_alert: true })


        } this.store_Count(last_edit)
    };
    async Mun_num() {
        let new_edit = parseInt(this.state.count)
        if (new_edit > 0) {
            var last_edit = parseInt(new_edit - 1)
        } else {
            last_edit = 0
        }
        this.setState({ count: last_edit })
        this.store_Count(last_edit)
    };

    async storeContacts(vlaue) {
        await AsyncStorage.setItem("contacts", JSON.stringify(vlaue))
    }

    async getContacts() {
        let data2 = await AsyncStorage.getItem("contacts")

        if (data2 == null || data2 == "") {
            data2 = ""
        }


        data2 = JSON.parse(data2)
        this.setState({ list: data2 })
    }

    Add_item() {
        let all_list = this.state.list
        let new_obj = {
            add_item_num: this.state.add_item_num,
            add_item_words: this.state.add_item_words,
            view: true
        }
        all_list.push(new_obj)
        this.setState({ list: all_list, Model_add: false, view: true, })
        this.storeContacts(all_list)


    }

    delete_Item(index) {
        let all_list = this.state.list
        all_list.splice(index, 1)
        this.setState({ list: all_list })
        this.storeContacts(all_list)

    }


    render() {
        return (
            <>
            <View
            style={{
                flex:1, 
                backgroundColor:'#fff'
            }}
            >

             <ScrollView >
                    <View style={styles.Header} >
                        <View style={styles.View1}>
                            <View style={styles.View2}>
                                <Text style={styles.text}>
                                    عدد صفحات القراة يوميا
                                </Text>
                            </View>
                            <View style={[styles.View2,{ width:width/2.5,height:height/14,alignSelf:"center",borderRadius:0,padding:0,
                          }]}>
                                <TouchableOpacity onPress={() => {
                                    this.Mun_num()
                                }}>
                                    <Entypo name='minus' size={ICONS.mIcon} color={COLORS.grayICon} />
                                </TouchableOpacity>
                                <Animatable.Text 
                                animation='slideInDown' easing={"ease-out-back"} 
                                style={styles.text}>{this.state.count}</Animatable.Text>
                                <TouchableOpacity onPress={() => {
                                    this.Plus_num()
                                }}>
                                    <Entypo name='plus' size={ICONS.mIcon} color={COLORS.grayFont} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.View3}>
                            <Text style={[styles.text, { fontSize: FONTS.h3 }]}>
                                التحديات
                            </Text>

                            <Text style={styles.textmore}>
                                عرض المزيد
                            </Text>
                        </View>
                        {this.state.list.map((item,index )=> (

                            <Animatable.View  
                            animation='bounceIn' easing={"ease-in-circ"} 
                            style={styles.View4}>

                                <View style={styles.View5}>
                                    <Text style={[styles.text2, { fontSize: FONTS.h7 }]}>
                                        {item.add_item_num} %
                                    </Text>

                                </View>
                                <View style={styles.View6}>
                                    <Text style={[styles.text2, { fontSize: FONTS.h4 }]}>
                                        {item.add_item_words}
                                    </Text>

                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.delete_Item(index)
                                    }}>
                                    <FontAwesome5 name='trash-alt' color={COLORS.grayICon} size={ICONS.mIcon} />
                                </TouchableOpacity>

                            </Animatable.View>
                        ))}
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    Model_add: true,
                                    add_item_words: "",
                                    add_item_num: ""
                                })
                            }}
                            style={styles.View4}>
                            <View style={styles.View5}>
                                <Entypo name='plus' size={ICONS.lIcon} color={COLORS.primary} />

                            </View>
                            <View style={styles.View6}>
                                <Text style={styles.text4}>
                                    اضافة تحدي جديد
                                </Text>

                            </View>

                        </TouchableOpacity>
                    </View>

                </ScrollView> 
 















                <Modal
                    animationType="slide"
                    transparent={true}

                    visible={this.state.Model_add}
                    onRequestClose={() => { this.setState({ Model_add: false }) }}  >

                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <View style={styles.ViewModal}>
                            <TextInput
                                value={this.state.add_item_words}
                                onChangeText={(value) => { this.setState({ add_item_words: value }) }}
                                onPress={() => {
                                    this.setState({ Model_add: true })
                                }}

                                style={styles.TextInput}
                                placeholder={"اضافة تحدي جديد"}>

                            </TextInput>
                            <TextInput
                                value={this.state.add_item_num}
                                onChangeText={(value) => { this.setState({ add_item_num: value }) }}
                                style={styles.TextInput}
                                placeholder={"اضافة النسبة"}
                                keyboardType={'number-pad'}
                                maxLength={3}
                            >

                            </TextInput>

                            <View style={styles.ViewModal1}>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ Model_add: false })
                                    }}
                                    style={styles.Button}>
                                    <Text style={styles.text4}>
                                        إلغاء
                                    </Text>


                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.Add_item() }}
                                    style={styles.Button}>
                                    <Text style={styles.text4}>
                                        أضف
                                    </Text>

                                </TouchableOpacity>



                            </View>
                        </View>

                    </View>


                </Modal>

                </View>
           
            </>

        )
    }
}
const styles = StyleSheet.create({
    Header: {
        // width: RFValue(width),
        // height: RFValue(height),
            // backgroundColor:COLORS.white

    },
    View1: {
        width: RFValue(width / 1), 
        height: RFValue(height / 10),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center"
    },
    View2: {
        width: RFValue(width / 2),
        height: RFValue(height / 10),
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
        alignSelf: "center"
    },
    text: {
        alignSelf: "center",
        fontSize: FONTS.h5,
        color: COLORS.grayFont,
    },
    View3: {
        width: RFValue(width / 1.02),
        height: RFValue(height / 13),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        alignSelf: "center"
    },
    View4: {
        margin: MARGIN.xxsMargin,
        width: RFValue(width / 1.05),
        height: RFValue(height / 12),
        alignSelf: "center",
        borderRadius: RADIUS.mdRadius,
        borderWidth: 2,
        borderColor: COLORS.gray,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center"
    },
    textmore: {
        fontSize: FONTS.h7,
        color: COLORS.grayFont,
        textDecorationLine: "underline"
    },

    text3: {
        fontSize: FONTS.h3,
        color: COLORS.grayFont,
    },
    text4: {
        fontSize: FONTS.h4,
        color: COLORS.grayFont
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
        width: RFValue(40),
        height: RFValue(40),
        alignSelf: "center",
        borderRadius: RADIUS.mdRadius,
        borderWidth: 1,
        borderColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    text2: {
        fontSize: FONTS.h6,
        color: COLORS.primary
    },
    View6: {
        width: RFValue(width / 1.5),
        height: RFValue(height / 12),
        alignSelf: "center",
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    ViewModal: {
        backgroundColor: COLORS.ButtonWhite,
        borderRadius: RADIUS.XXXLRadius,
        padding: PADDING.mdPadding
    },
    TextInput: {
        height: RFValue(height / 12),
        width: RFValue(width / 1.2),
        borderRadius: RADIUS.XXXLRadius,
        borderWidth: 2,
        borderColor: COLORS.primary,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: "center",
        marginTop: MARGIN.lgMargin,
        fontSize: FONTS.h3,
        paddingLeft: PADDING.xlPadding
    },
    ViewModal1: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    Button: {
        height: RFValue(height / 12),
        width: RFValue(width / 3),
        borderRadius: RADIUS.lgRadius,
        borderWidth: 2,
        borderColor: COLORS.primary,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: "center",
        marginTop: MARGIN.lgMargin,
    }
})