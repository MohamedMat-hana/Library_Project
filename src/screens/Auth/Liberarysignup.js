import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    AsyncStorage
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import { Input, GeneralButton } from '../../components';
import * as Animatable from 'react-native-animatable';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    COLORS,
    MARGIN,
    ICONS,
    FONTS,
} from '../../constants';
import { COLORICON } from '../../constants/Constants';

export default class Liberarysignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameerorr: "",
            Email: "",
            Emailerorr: "",
            password: "",
            passworderorr: "",
            secured_pass: false

        }
    }
    async store_Count() {
        await AsyncStorage.setItem("login", '1')
        this.props.navigation.navigate("MainApp",{
            name:this.state.name
        })

    }


    validateEmail = email => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            return false;
        } else {
            return true;
        }
    };
    validatePassword = password => {
        var pass = /^(?=.*\d)(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        return pass.test(password);
    };
    validateName = name => {
        const re = /^([a-zA-Z0-9\s_\u0600-\u06FF]).{5,30}$/;
        return re.test(String(name).toLowerCase());
    };
    signup() {
        let error = 0;
        //name

        if (this.state.name.trim() == '') {
            error++;
            this.setState({ nameerorr: 'لايجب ان يكون هذا الحقل فارغ' });
        } else if (!this.validateName(this.state.name)) {
            error++;
            this.setState({ nameerorr: 'أدخل اسم بشكل صحيح ' });
        } else {
            this.setState({ nameerorr: '' });
        }

        //email
        if (this.state.Email == '') {
            error++;
            this.setState({ Emailerorr: 'لايجب ان يكون هذا الحقل فارغ' });
        } else if (!this.validateEmail(this.state.Email)) {
            error++;
            this.setState({ Emailerorr: 'تأكد من كتابة البريد الالكترونى بشكل صحيح ' });
        } else {
            this.setState({ Emailerorr: '' });
        }



        //password
        if (this.state.password.trim() == "") {
            error++
            this.setState({ passworderorr: "لايجب ان يكون هذا الحقل فارغ" })
        }
        else if ((this.state.password.trim()).length > 20) {
            error++
            this.setState({ passworderorr: "كلمه المرور يجب ألا تزيد عن 20 حرف و رقم" })
        } else if (!this.validatePassword(this.state.password)) {
            error++;
            this.setState({ passworderorr: "يجب ان تتكون من 8 ارقام و احرف كبيره و صغيره " })
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
                <ScrollView>

                    {/* <StatusBar
          hidden={true}>
        </StatusBar> */}
                    <View style={styles.Header}>

                        <View style={styles.View1}>
                            <Image source={{ uri: "https://yourielts.ru/images/Reading/ielts-reading-mistakes.png" }}
                                style={styles.Image} resizeMode={'stretch'}
                            />


                        </View>

                        <View>
                            {/* //here */}
                            <View style={styles.View2}>
                                <Entypo name='user' size={ICONS.mIcon} color={COLORS.grayICon} style={{ marginLeft: MARGIN.smMargin, alignSelf: "center" }} />
                                {/* <View style={{ width: "83%", borderRadius: 40, paddingRight: 25 }}>
                                <TextInput style={{ color: '#000', alignSelf: "flex-start", fontSize: 20, marginLeft: 5 }} keyboardType="email-address"
                                    value={this.state.name}
                                    onChangeText={(value) => { this.setState({ name: value }) }}
                                    placeholder={"الاسم"}
                                    placeholderTextColor={"#bfbfc0"}>
                                </TextInput>
                            </View> */}
                                <View>
                                    <Input
                                        value={this.state.name}
                                        onChangeText={(value) => { this.setState({ name: value }) }}
                                        autoCapitalize="none"
                                        placeholder="الاسم"
                                        color={COLORS.black}
                                        placeholderTextColor={COLORS.grayFont}
                                        />
                                </View>

                            </View>
                            <Text style={styles.TextErorr}>{this.state.nameerorr}</Text>

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
                            <Text style={styles.TextErorr}>{this.state.Emailerorr}</Text>

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
                            <Text style={styles.TextErorr}>{this.state.passworderorr}</Text>

                        </View>

                        <GeneralButton
                            title="انشاء حساب"
                            bgcolor={COLORS.primary}
                            onPress={() => { this.signup() }}
                        />
                        <View style={styles.VIEWCONTACT}>
                            <Text style={styles.lastFont}>
                                هل لديك حساب؟
                            </Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Liberarylogin") }}>
                                <Text style={{ fontSize: FONTS.h7, color: COLORS.gray }}>
                                    تسجيل دخول
                                </Text>
                            </TouchableOpacity>

                        </View>


                    </View>

                </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.background,
        height: RFValue(height),
        width: RFValue(width),
        alignItems: "center",
        alignSelf: "center"
    },
    View1: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginVertical: MARGIN.lgMargin,

    },
    Image: {
        width: RFValue(width / 1.5),
        height: RFValue(height / 3.5),
        marginBottom: MARGIN.xlMargin
    },
    View2: {
        height: RFValue(height / 13),
        width: RFValue(width - 70),
        borderColor: COLORS.gray,
        borderWidth: 1,
        flexDirection: "row",
    },
    TextErorr: {
        height: RFValue(20),
        color: COLORS.error,
        fontSize: FONTS.h7,
        alignSelf: "center"

    },
    ViewTextInput: {
        width: RFValue(width / 1.65),
    },
    TextInput: {
        color: COLORS.black,
        alignSelf: "flex-start",
        fontSize: RFValue(FONTS.h4),
        marginLeft: MARGIN.xxsMargin
    },

    VIEWCONTACT: {
        marginTop: MARGIN.lgMargin,
        width: RFValue(width),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
    },
    lastFont: {
        fontSize: 15,
        color: COLORS.primary
    },

})