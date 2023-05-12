import * as React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import GeneralButton from '../../components/GeneralButton';
import GeneralButton2 from '../../components/GeneralButton2';
import { COLORS, ICONS, FONTS, PADDING, MARGIN } from '../../constants';
import * as Animatable from 'react-native-animatable';

import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
import {
    LiberaryBuy,
    LiberaryBuySure,
    LiberaryDetails,
    LiberaryDetails2,
    LiberaryMain,
    LiberarySplash,
    Liberaryabout,
    Liberarylogin,
    Liberarysignup
} from '../index'

export default class Liberarylogorsing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameerorr: "",
            Email: "",
            Emailerorr: "",
            phone: "",
            phoneerorr: "",
            company: "",
            companyerorr: "",
            password: "",
            passworderorr: "",
        }
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <Animatable.Image
                        animation='slideInDown'
                        easing={'linear'}

                        // iterationCount="infinite"
                        source={{ uri: "https://yourielts.ru/images/Reading/ielts-reading-mistakes.png" }}
                        style={styles.Image} resizeMode={'stretch'}
                    />

                    <Animatable.View
                        animation='slideInUp'
                        easing={'linear'}

                        style={styles.ViewTou}>
                        <GeneralButton

                            title="تسجيل دخول"
                            bgcolor={COLORS.primary}
                            onPress={() => { this.props.navigation.navigate("Liberarylogin") }}

                        />

                        <GeneralButton2

                            title="انشاء حساب"
                            bgcolor={COLORS.ButtonWhite}
                            onPress={() => { this.props.navigation.navigate("Liberarysignup") }}

                        />

                    </Animatable.View>

                </View>

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: "center"
    },
    Image: {
        width: RFValue(200),
        height: RFValue(200),
    },
    ViewTou: {
        height: RFValue(height / 5),
        width: RFValue(width),
        alignItems: "center",
        justifyContent: "space-around",
    },
})