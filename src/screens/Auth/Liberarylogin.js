import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    AsyncStorage
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import { Input, GeneralButton } from '../../components';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    PADDING,
    IconsView,
    COLORS,
    MARGIN,
    ICONS,
    FONTS,
    RADIUS,
} from '../../constants';
import { COLORICON } from '../../constants/Constants';
import * as Animatable from 'react-native-animatable';
import {
    LiberaryBuy,
    LiberaryBuySure,
    LiberaryDetails,
    LiberaryDetails2,
    LiberaryMain,
    LiberarySplash,
    Liberaryabout,
    Liberarysignup
} from '../index'
import CustomDrawer from '../../../navigation/index';
import { AuthContext } from '../../../screens/contexts/AuthContext';
import { UserContext } from '../../../screens/contexts/UserContext'
import { ScrollView } from 'react-native-gesture-handler';

export default class Liberarylogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameerorr: "",
            Email: "",
            Emailerorr: "",
            password: "",
            passworderorr: "",
            secured_pass: false,
            login: 0
        }
    }

    async store_Count() {
        await AsyncStorage.setItem("login", '1')
        this.props.navigation.navigate("MainApp")

    }

    validateEmail = email => {
        var em =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return em.test(email);
    };
    validatePassword = password => {
        var pass = /^(?=.*\d)(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        return pass.test(password);
    };
    signup() {
        let error = 0


        //email
        if (this.state.Email == "") {
            error++
            this.setState({ Emailerorr: "يرجى ادخال البريد الالكتروني" })
        }
        else if (!this.validateEmail(this.state.Email)) {
            error++
            this.setState({ Emailerorr: "البريد الالكترونى الذى ادخلته غير صحيح " })
        }
        else {
            this.setState({ Emailerorr: "" })
        }

        //password
        if (this.state.password.trim() == "") {
            error++
            this.setState({ passworderorr: "يجب ادخال كلمه مرور" })
        }
        else if (this.state.password.length > 20 || !this.validatePassword(this.state.password)) {
            error++
            this.setState({ passworderorr: " يجب ان تتكون من ارقام و حرف كبير و حرف صغير " })
        }
        else {
            this.setState({ passworderorr: "" })
        }


        if (error == 0) {
            this.store_Count()
        }
    }


    pass_secured = () => {
        let securedPass = this.state.secured_pass
        securedPass = !securedPass
        this.setState({ secured_pass: securedPass })
    };





    render() {
        return (
            <>
                {/* <StatusBar
          hidden={true}>
        </StatusBar> */}
        <ScrollView>
                <Animatable.View style={styles.Header}
                    animation='fadeIn'
                    easing={"ease-in-circ"}>

                    <View style={styles.View1}>
                        <Image
                            source={{ uri: "https://yesielts.net/wp-content/uploads/2021/08/bi-quyet-dat-diem-9-ielts-reading-2.jpg" }}
                            style={styles.Image} resizeMode={'stretch'}
                        />


                    </View>

                    <View>

                        <View style={styles.View2}>
                            <Entypo name='mail' size={ICONS.mIcon} color={COLORS.grayICon} style={{ marginLeft: MARGIN.smMargin, alignSelf: "center" }} />
                            <View>
                                <Input
                                    value={this.state.Email}
                                    onChangeText={(value) => { this.setState({ Email: value }) }}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    placeholder="البريد الالكتروني"
                                    color={COLORS.black}
                                    placeholderTextColor={COLORS.grayFont}
                                    />
                            </View>
                        </View>
                        {/* <View style={styles.VIEWERORR}> */}
                        <Text style={styles.TextErorr}>{this.state.Emailerorr}</Text>
                        {/* </View> */}

                    </View>


                    <View>

                        <View style={styles.View2}>
                            <Entypo name='lock' size={ICONS.mIcon} color={COLORS.grayICon} style={{ marginLeft: MARGIN.smMargin, alignSelf: "center" }} />
                            <View style={styles.ViewTextInput}>
                                <TextInput style={styles.TextInput}
                                    maxLength={10}
                                    value={this.state.password}
                                    onChangeText={(value) => { this.setState({ password: value }) }}
                                    placeholder={"كلمة المرور"}
                                    secureTextEntry={this.state.secured_pass}
                                    color={COLORS.black}
                                    placeholderTextColor={COLORS.grayFont}
                                    >

                                </TextInput>

                            </View>
                            <TouchableOpacity
                                style={{
                                    justifyContent: "center"
                                }}
                                onPress={() => {
                                    this.pass_secured();
                                }}>
                                <Entypo
                                    name={this.state.secured_pass ? 'eye-with-line' : 'eye'}
                                    size={ICONS.mIcon}
                                    color={COLORS.grayICon}
                                />
                            </TouchableOpacity>


                        </View>
                        {/* <View style={styles.VIEWERORR}> */}
                        <Text style={styles.TextErorr}>{this.state.passworderorr}</Text>
                        {/* </View> */}

                    </View>
                    <GeneralButton
                        title="تسجيل دخول"
                        bgcolor={COLORS.primary}
                        onPress={() => { this.signup() }}
                    />

                    <View style={styles.VIEWCONTACT}>
                        <Text style={styles.lastFont}>
                            __________ او قم بالتسجيل باستخدام __________
                        </Text>
                        <View style={styles.ViewIcons}>
                            <Entypo name='globe' size={ICONS.mIcon} color={COLORS.primary} />
                            <Entypo name='twitter' size={ICONS.mIcon} color={COLORS.primary} />
                            <Entypo name='facebook' size={ICONS.mIcon} color={COLORS.primary} />

                        </View>

                    </View>

                </Animatable.View>
                </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: "center"
    },
    View1: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
    Image: {
        width: RFValue(width),
        height: RFValue(height / 2.5),
        marginBottom: MARGIN.xlMargin
    },
    View2: {
        height: RFValue(height / 13),
        width: RFValue(width - 70),
        borderColor: COLORS.gray,
        borderWidth: 1,
        flexDirection: "row",
    },
    TextInput: {
        color: COLORS.black,
        alignSelf: "flex-start",
        fontSize: RFValue(FONTS.h4),
        marginLeft: MARGIN.xxsMargin
    },
    ViewTextInput: {
        width: RFValue(width / 1.65),
    },
    VIEWCONTACT: {
        marginTop: MARGIN.lgMargin,
        width: RFValue(width),
        alignItems: "center",
    },
    lastFont: {
        fontSize: 15,
        color: COLORS.primary
    },
    ViewIcons: {
        flexDirection: "row",
        width: RFValue(width / 1.5),
        justifyContent: 'space-evenly',
        alignItems: "center",
        marginTop: MARGIN.smMargin
    },
    // VIEWERORR: {
    //     height: RFValue(40),
    //     width: RFValue(width / 1.3),
    //     alignItems: "center",
    //     alignSelf: "center",
    //     justifyContent: 'center'
    // },
    TextErorr: {
        height: RFValue(20),
        color: COLORS.error,
        fontSize: FONTS.h7,
        alignSelf: "center"

    }
})