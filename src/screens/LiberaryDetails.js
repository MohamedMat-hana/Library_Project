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
import { icons, images, pdf, SIZES } from '../../constants';
import * as Animatable from 'react-native-animatable';

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


export default class LiberaryDetails extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            item: {},

            books: [
                {
                    photo: images.I08,
                    namebook: "انتيخريستوس",
                    nameWriter: "احمد خالد مصطفي",
                    price: 185,
                    pages: "176",
                    rate: "3.2",
                    wordWriter: "رواية أنتيخريستوس للرائع أحمد خالد مصطفى، تظهر عبقرية الكاتب بشكل مرعب، نوع جديد من الكتابات هلّ عالم الرواية. يتميز الكاتب باختيار المواضيع الفريدة التي لم يتناولها أحد قط من قبل. معلومات غالبها جديد بالنسبة للقارئ الكريم، مما يضفي التميز إلى كتاباته"

                },
                {
                    photo: images.I03,
                    namebook: "عقل بلا جسد",
                    nameWriter: "احمد خالد توفيق",
                    price: 155,
                    pages: "156",
                    rate: "4.5",
                    wordWriter: "هو الأديب والكاتب المصري أحمد خالد توفيق فراج، ولد بمدينة طنطا عاصمة محافظة الغربية في العاشر من يونيو عام 1962، وتوفي اثنين من شهر أبريل 2018، هو طبيب وأديب مصري، ويعتبر أول كاتب عربي في مجال أدب الرعب والأشهر في مجال أدب الشباب والفانتازيا والخيال العلمي"
                },
                {
                    photo: images.I02,
                    namebook: "فن اللامبالاة",
                    nameWriter: "مارك مانسون",
                    price: 465,
                    pages: "466",
                    rate: "3.5",
                    wordWriter: "كاتب ومدوّن أمريكي، وُلد في تكساس عام 1984، درس وتخرّج من جامعة بوسطن. له كتابان، حقق كل منهما مبيعات عالمية، الأول هو “فن اللامبالاة” والثاني هو “خراب: كتاب عن الأمل”، وكلاهما صدر عن منشورات الرمل."
                },
                {
                    photo: images.I01,
                    namebook: "اسواق الذهب",
                    nameWriter: "احمد شوقي",
                    price: 755,
                    pages: "156",
                    rate: "4.7",
                    wordWriter: "أحمد شوقي هو أحد أعمدة الشعر العربي الحديث، ورائد النهضة الشعرية العربية، اعتلى عرش الشعر العربي فلُقب بأمير الشعراء عام 1927م، وكان قبل ذلك قد نُفي إلى إسبانيا في الفترة الممتدة بين عامي 1914-1919م، وحين عودته سيطر على الساحة الأدبية في مصر، وقد عُرف شوقي بغزارة إنتاجه الشعري، كما امتاز شعره بغرابة الألفاظ وسهولة الأسلوب، وكتب مسرحیات حاكى بها نماذج الشعراء الغربيين من أمثال: شكسبير، وكورني، وراسین."


                },
                {
                    photo: images.I04,
                    namebook: "الست هدى",
                    nameWriter: "احمد شوقي",
                    price: 200,
                    pages: "150",
                    rate: "3",
                    wordWriter: "أحمد شوقي هو أحد أعمدة الشعر العربي الحديث، ورائد النهضة الشعرية العربية، اعتلى عرش الشعر العربي فلُقب بأمير الشعراء عام 1927م، وكان قبل ذلك قد نُفي إلى إسبانيا في الفترة الممتدة بين عامي 1914-1919م، وحين عودته سيطر على الساحة الأدبية في مصر، وقد عُرف شوقي بغزارة إنتاجه الشعري، كما امتاز شعره بغرابة الألفاظ وسهولة الأسلوب، وكتب مسرحیات حاكى بها نماذج الشعراء الغربيين من أمثال: شكسبير، وكورني، وراسین."
                },
                {
                    photo: images.I05,
                    namebook: "انت لي",
                    nameWriter: "مني المرشود",
                    price: 75,
                    pages: "116",
                    rate: "3.5",
                    wordWriter: "د.منى المرشود هي كاتبه سعودية بدأت الكتابة منذ عام 2001 من رواياتها: فجعّت قلبي , أنت لي ، الملاك الأعرج ، انا ونصفي الأخر"


                },
                {
                    photo: images.I06,
                    namebook: "ليطمئن قلبي",
                    nameWriter: "ادهم شرقاوي",
                    price: 145,
                    pages: "556",
                    rate: "4",
                    wordWriter: "أدهم شرقاوي كاتب شاب فلسطيني الجنسية، متزوج وله من الأبناء ولد وثلاثة بنات. يعيش في لبنان. حاصل على دبلوم دار معلمين من الأونيسكو، دبلوم تربية رياضية من الأونيسكو، إجازة في الأدب العربي من الجامعة اللبنانية في بيروت ، ماجستير في الأدب العربي. ينشر كتاباته تحت اسم مستعار ألا وهو  قس بن ساعدة '  . من مؤلفاته  -عندما التقيت عمر بن الخطاب - كش ملك - خربشات خارجة عن القانون - حديث الصباح - عن شيء اسمه الحب - تأملات قصيرة جداً - نبض"


                },
                {
                    photo: images.I07,
                    namebook: "انا يوسف",
                    nameWriter: "ايمن العتوم",
                    price: 95,
                    pages: "146",
                    rate: "2",
                    wordWriter: "أيمن علي حسين العتوم، أديب وروائي أردنيّ الجنسية، ولد في جرش في الأردن يوم 2 آذار(مارس) عام 1972م، نشأ في الأردن ثم انتقل مع عائلته إلى الإمارات العربية المتحدة ودرس هناك، ثم عاد إلى الأردن واستقر فيها، وأكمل مسيرته العلمية وحصل على عدة شهادات جامعية ظهر في تقديراتها مدى نبوغه الأكاديمي وحبه للعلم"


                },
                {
                    photo: images.I09,
                    namebook: "ياسمين العودة",
                    nameWriter: "خولة حمدي",
                    price: 150,
                    pages: "146",
                    rate: "4.5",
                    wordWriter: "هي أستاذة جامعية وكاتبة روائية سعودية شابة. لاقت أعمالها الروائية شهرةً كبيرة وحققت انتشارًا واسعًا. وتتسم روايات خولة حمدي بالطابع الإسلامي، فهي في كل أعمالها تدافع عن الدين الإسلامي وترد بعض الشبهات التي وُجهت له. وفي هذا المقال نقدم مراجعة مختصرة لـ أشهر روايات خولة حمدي"

                },
                {
                    photo: images.I010,
                    namebook: "موسم صيد الغزلان",
                    nameWriter: "احمد مراد",
                    price: 125,
                    pages: "146",
                    rate: "4.7",
                    wordWriter: "أحمد مراد هو كاتب روائي مصري وسيناريست ومصور من مواليد 1978 في القاهرة أي أن عمره حاليًا 40 عامًا بدأ حياته المهنية كـ مصور وبدأ في الكتابة منذ عشر سنوات فقط كتب فيهم عددًا من الروايات نجحوا جميعًا نجاحًا كبيرًا جدًا، ويُعد أحمد مراد الكاتب الآنجح في مصر في الأونة الأخيرة من جانب المبيعات وتحول أفلامه إلى أعمال سينمائية"


                },

            ],
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

        }
    }
    componentDidMount() {
        let data = this.props.route.params.name
        // alert(data)

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
                <Animatable.View
                    animation='fadeInLeftBig'
                    easing={"ease-in"}
                    style={styles.UPheader}>
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
                            <Image
                                source={this.state.item.photo}
                                style={styles.Image} resizeMode={'cover'}
                            />
                            <View style={styles.View1Details}>
                                <View style={styles.View1Detailsname}>
                                    <Text style={styles.text}>
                                        {this.state.item.nameWriter}
                                    </Text >
                                    <Text style={styles.Text1}>
                                        {/* محمد */}
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
                            <Text style={[styles.text, { fontSize: FONTS.h7 }]}>{this.state.item.wordWriter} </Text>

                        </View >
                        <View style={[styles.View4, { marginTop: MARGIN.smMargin }]}>

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
                                            onPress={() => {
                                                this.props.navigation.navigate("LiberaryDetails2", {
                                                    books: item
                                                })
                                            }}>
                                            <Image
                                                source={item.photo}
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

                        </View >
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

                </Animatable.View>

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