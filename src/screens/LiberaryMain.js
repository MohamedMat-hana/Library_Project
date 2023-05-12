import * as React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
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
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import Route1 from './Routone'
import Route2 from './Routttwo'
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS, ICONS, MARGIN, RADIUS, PADDING } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { icons, images, SIZES } from '../../constants';
import * as Animatable from 'react-native-animatable';

// export default function TabViewExample({ navigation }) {
export default class LiberaryMain extends React.Component {

    constructor() {
        super();
        this.state = {

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
            sallary: [
                {
                    photo: images.I010,
                    namebook: "موسم صيد الغزلان",
                    nameWriter: "احمد مراد",
                    price: 125,
                    pages: "146",
                    rate: "4.7",
                    wordWriter: "أحمد مراد هو كاتب روائي مصري وسيناريست ومصور من مواليد 1978 في القاهرة أي أن عمره حاليًا 40 عامًا بدأ حياته المهنية كـ مصور وبدأ في الكتابة منذ عشر سنوات فقط كتب فيهم عددًا من الروايات نجحوا جميعًا نجاحًا كبيرًا جدًا، ويُعد أحمد مراد الكاتب الآنجح في مصر في الأونة الأخيرة من جانب المبيعات وتحول أفلامه إلى أعمال سينمائية"


                },
                {
                    photo: images.I011,
                    namebook: "رائد",
                    nameWriter: "يوسف الشاطر",
                    price: 165,
                    pages: "176",
                    rate: "4.9",
                    wordWriter: "رواية رائد للرائع يوسف الشاطر تظهر عبقرية الكاتب بشكل مرعب، نوع جديد من الكتابات هلّ عالم الرواية. يتميز الكاتب باختيار المواضيع الفريدة التي لم يتناولها أحد قط من قبل. معلومات غالبها جديد بالنسبة للقارئ الكريم، مما يضفي التميز إلى كتاباته"


                },
                {
                    photo: images.I012,
                    namebook: "سر الغرفه207",
                    nameWriter: "احمد خالد توفيق",
                    price: 185,
                    pages: "186",
                    rate: "4",
                    wordWriter: "هو الأديب والكاتب المصري أحمد خالد توفيق فراج، ولد بمدينة طنطا عاصمة محافظة الغربية في العاشر من يونيو عام 1962، وتوفي اثنين من شهر أبريل 2018، هو طبيب وأديب مصري، ويعتبر أول كاتب عربي في مجال أدب الرعب والأشهر في مجال أدب الشباب والفانتازيا والخيال العلمي"

                },

            ],
            show: [
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
                    photo: images.I08,
                    namebook: "انتيخريستوس",
                    nameWriter: "احمد خالد مصطفي",
                    price: 185,
                    pages: "176",
                    rate: "3.2",
                    wordWriter: "رواية أنتيخريستوس للرائع أحمد خالد مصطفى، تظهر عبقرية الكاتب بشكل مرعب، نوع جديد من الكتابات هلّ عالم الرواية. يتميز الكاتب باختيار المواضيع الفريدة التي لم يتناولها أحد قط من قبل. معلومات غالبها جديد بالنسبة للقارئ الكريم، مما يضفي التميز إلى كتاباته"



                },

            ],
            New: [
                {
                    photo: images.I014,
                    namebook: "النهاية",
                    nameWriter: "ممدوح نصرالله",
                    price: 285,
                    pages: "276",
                    rate: "4.2",
                    wordWriter: "لم يعد شيء كما كان .. واقع لم أتخيل حدوثه حتى في أسوأ كوابيسي .. أدرك الآن أن كل الأمل يكمن في النجاة , لكن . إلى أين ؟ ولماذا ؟ أهو الخوف ما يحركنا أم غريزة البقاء ؟ كل ما أعرفه أننا عَلقنا في تلك النقطة الفاصلة بين الحياة والموت .. لقد تغير العالم لنصير مجرد ثلة تبحث عن البقاء .. لربما كان العيش ليوم واحد إضافي هو الانتصار في نهاية لا أصفاد.                    "

                },
                {
                    photo: images.I015,
                    namebook: "لوكاندة بير الوطاويط",
                    nameWriter: "احمد مراد",
                    price: 265,
                    pages: "246",
                    rate: "3.2",
                    wordWriter: "أحمد مراد هو كاتب روائي مصري وسيناريست ومصور من مواليد 1978 في القاهرة أي أن عمره حاليًا 40 عامًا بدأ حياته المهنية كـ مصور وبدأ في الكتابة منذ عشر سنوات فقط كتب فيهم عددًا من الروايات نجحوا جميعًا نجاحًا كبيرًا جدًا، ويُعد أحمد مراد الكاتب الآنجح في مصر في الأونة الأخيرة من جانب المبيعات وتحول أفلامه إلى أعمال سينمائية"


                },
                {
                    photo: images.I016,
                    namebook: "طعم البعاد",
                    nameWriter: "عبد الباسط يوسف",
                    price: 155,
                    pages: "56",
                    rate: "4.8",
                    wordWriter: "أيمن علي حسين العتوم، أديب وروائي أردنيّ الجنسية، ولد في جرش في الأردن يوم 2 آذار(مارس) عام 1972م، نشأ في الأردن ثم انتقل مع عائلته إلى الإمارات العربية المتحدة ودرس هناك، ثم عاد إلى الأردن واستقر فيها، وأكمل مسيرته العلمية وحصل على عدة شهادات جامعية ظهر في تقديراتها مدى نبوغه الأكاديمي وحبه للعلم"

                },
                {
                    photo: images.I017,
                    namebook: "أكاشك",
                    nameWriter: "شهيرة جلال",
                    price: 185,
                    pages: "156",
                    rate: "2.5",
                    wordWriter: "كل هذا يمكن احتماله إن كان الحزن يختفي باختفائنا ويأكله الدود معنا  لكن تكون الكارثة حين يتخلل الجينات وينتقل من جيل إلى آخر مع لون الشعر وشكل الأنف  هو وحش بألف ذراع"
                },
                {
                    photo: images.I018,
                    namebook: "المعركة الاخيرة",
                    nameWriter: "جهاد الترباني",
                    price: 123,
                    pages: "156",
                    rate: "3.2",
                    wordWriter: "اد الترباني كاتب وشاعر وباحث تاريخي فلسطيني ، اهتم بالتاريخ الإسلامي، أشتهر بشعره الداعم للثورة السورية ضد نظام بشار الأسد ، والثورة المصرية ضد نظام حسني مبارك "


                }


            ],
            soon: [
                {
                    photo: images.I019,

                },
                {
                    photo: images.I020,

                },
                {
                    photo: images.I021,

                },
                {
                    photo: images.I022,

                },
                {
                    photo: images.I023,

                },
                {
                    photo: images.I024,

                },
                {
                    photo: images.I025,

                },
            ],
            search: "",




        }
    }

    makesearch(searchText) {
        let list = this.state.books
        for (let i = 0; i < list.length; i++) {
            if (((list[i].word).toUpperCase()).includes(searchText.toUpperCase())) {
                list[i].view = true
            }
            else {
                list[i].view = false
            }
        }
        this.setState({ books: list })
    }
    componentDidMount() {
        let list = this.state.books
        for (let i = 0; i < list.length; i++) {
            list[i].view = false
        }
        this.setState({ books: list })

    }


    // const FirstRoute = () => (
    //     <Route1 navigation={navigation} />

    // );

    // const SecondRoute = () => (
    //     <Route2 navigation={navigation} />

    // );



    // const [index, setIndex] = React.useState(0);
    // const [routes] = React.useState([
    //     { key: '1', title: 'استكشف' },
    //     // { key: '2', title: 'الانواع' },
    // ]);

    // const renderScene = SceneMap({
    //     1: FirstRoute,
    //     // 2: SecondRoute,

    // });

    render() {
        return (
            <>
                <Animatable.View
                    animation='fadeInLeftBig'
                    easing={"ease-in"}

                    style={{
                        flex: 1,
                        backgroundColor: COLORS.white
                    }}>
                    <ScrollView>
                        <View  >
                            {/* <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("MainApp")
                            }}>
                            <FontAwesome
                                name="bars"
                                color={COLORS.gray}
                                size={RFValue(ICONS.xlIcon)}
                            />
                        </TouchableOpacity> */}
                            <Text style={styles.HeaderName}>الكتب</Text>
                            {/* <View></View> */}



                        </View>
                        {/* <View style={styles.Header}>     

                    {/* <View style={styles.View1}> */}
                        {/* <Entypo name='magnifying-glass' size={ICONS.mIcon} style={styles.Icon} />
                    <TextInput style={styles.TextInput}
                        placeholderTextColor={COLORS.gray}
                        placeholder={"بحث"}

                        value={this.state.search}
                        onChangeText={value => {
                            this.setState({ search: value });
                        }}
                    > */}




                        {/* </TextInput> */}
                        {/* </View>
                <Entypo name='mic' size={ICONS.mIcon} style={styles.Icon} /> */}

                        {/* </View>  */}
                        <View style={styles.View2}>
                            <View>
                                <View style={styles.View3}>
                                    <Text style={styles.Text}>
                                        المفضلة
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate("LiberaryBooks", {
                                                name: this.state.books
                                            })
                                        }}>
                                        <Text style={styles.TextMore}>
                                            عرض المزيد
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.UpScroll}
                                >
                                    <ScrollView horizontal={true}>
                                        {this.state.books.map(item => (
                                            <>
                                                {item.view ? (null)
                                                    :
                                                    (
                                                        <TouchableOpacity style={styles.TouchableOpacityMap}
                                                            onPress={() => {
                                                                this.props.navigation.navigate("LiberaryDetails", {
                                                                    name: item
                                                                })
                                                            }}
                                                        >
                                                            <View style={styles.ViewImage}>
                                                                <Image source={item.photo}
                                                                    style={styles.Image} resizeMode={'cover'}
                                                                />
                                                            </View>
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
                                                        </TouchableOpacity>)
                                                }
                                            </>
                                        ))}
                                    </ScrollView>

                                </View>
                            </View>
                            <View>
                                <View style={styles.View3}>
                                    <Text style={styles.Text}>
                                        الاكثر مبيعاً
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate("LiberaryBooks", {
                                                name: this.state.sallary
                                            })
                                        }}>
                                        <Text style={styles.TextMore}>
                                            عرض المزيد
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.UpScroll}>
                                    <ScrollView horizontal={true}>
                                        {this.state.sallary.map(item => (
                                            <TouchableOpacity style={styles.TouchableOpacityMap}
                                                onPress={() => {
                                                    this.props.navigation.navigate("LiberaryDetails", {
                                                        name: item
                                                    })
                                                }}
                                            >

                                                <View style={styles.ViewImage}>
                                                    <Image
                                                        source={item.photo}
                                                        style={styles.Image} resizeMode={'cover'}
                                                    />
                                                </View>
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
                            </View>
                            <View>
                                <View style={styles.View3}>
                                    <Text style={styles.Text}>
                                        العروض
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate("LiberaryBooks", {
                                                name: this.state.show
                                            })
                                        }}>
                                        <Text style={styles.TextMore}>
                                            عرض المزيد
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.UpScroll}
                                >
                                    <ScrollView horizontal={true}>
                                        {this.state.show.map(item => (
                                            <TouchableOpacity style={styles.TouchableOpacityMap}
                                                onPress={() => {
                                                    this.props.navigation.navigate("LiberaryDetails", {
                                                        name: item
                                                    })
                                                }}
                                            >
                                                <View style={styles.ViewImage}>
                                                    <Image source={item.photo}
                                                        style={styles.Image} resizeMode={'cover'}
                                                    />
                                                </View>
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
                            </View>
                            <View>
                                <View style={styles.View3}>
                                    <Text style={styles.Text}>
                                        الاصدرات الجديدة
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate("LiberaryBooks", {
                                                name: this.state.New
                                            })
                                        }}>
                                        <Text style={styles.TextMore}>
                                            عرض المزيد
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.UpScroll}
                                >
                                    <ScrollView horizontal={true}>
                                        {this.state.New.map(item => (
                                            <TouchableOpacity style={styles.TouchableOpacityMap}
                                                onPress={() => {
                                                    this.props.navigation.navigate("LiberaryDetails", {
                                                        name: item
                                                    })
                                                }}
                                            >
                                                <View style={styles.ViewImage}>
                                                    <Image source={item.photo}
                                                        style={styles.Image} resizeMode={'cover'}
                                                    />
                                                </View>
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
                            </View>
                            <View>
                                <View style={styles.View3}>
                                    <Text style={styles.Text}>
                                        سيتوفر قريباً

                                    </Text>

                                    <Text style={styles.TextMore}>

                                    </Text>
                                </View>
                                <Text style={[styles.namewriter, {
                                    alignSelf: "flex-start",
                                    marginLeft: MARGIN.xsMargin
                                }]}>
                                    يناير 2023
                                </Text>
                                <View style={styles.UpScroll}
                                >
                                    <ScrollView horizontal={true}>
                                        {this.state.soon.map(item => (
                                            <View style={styles.ViewImage}>
                                                <Image source={item.photo}
                                                    style={styles.Image} resizeMode={'cover'}
                                                />
                                            </View>
                                        ))}
                                    </ScrollView>

                                </View>
                            </View>

                        </View>
                    </ScrollView>

                </Animatable.View>
                {/* <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={{ backgroundColor: "#8A3982" }}


            /> */}

            </>
        );
    }
}
const styles = StyleSheet.create({
    Header: {

        // height: RFValue(height / 19),
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "space-between",
        // backgroundColor: COLORS.white
    },
    HeaderName: {
        fontSize: FONTS.h3,
        color: COLORS.primary,
        fontWeight: "bold",
        padding: PADDING.smPadding,
        alignSelf: "center"

    },

    View1: {
        width: RFValue(width / 1.1),
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
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
        flex: 1,
        backgroundColor: COLORS.white
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
        marginHorizontal: MARGIN.xxsMargin,
        justifyContent: "center"
    },
    ViewImage: {
        marginHorizontal: MARGIN.xsMargin,
        alignItems: "center",
        alignSelf: "center",

    },
    Image: {
        width: RFValue(120),
        height: RFValue(170),
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


});