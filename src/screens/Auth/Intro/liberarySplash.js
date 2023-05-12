import * as React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { COLORS, ICONS, FONTS, PADDING, MARGIN } from '../../../constants';

import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
import Liberarylogin from '../Liberarylogin';
import Liberarylogorsing from '../Liberarylogorsing';
import Liberarysignup from '../Liberarysignup';


export default class LiberarySplash extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.get_Count()
        //  setTimeout(() => {

        //     if (login == 0) {
        //         this.props.navigation.navigate("MainApp")
        //     }
        //     else {
        //         this.props.navigation.navigate("Liberarylogorsing")
        //     }
        // }, 3000)
    }
    async get_Count() {
        let coun = await AsyncStorage.getItem("login")
        // alert(coun)
        setTimeout(() => {
            if (coun == 1) {
                //   await AsyncStorage.setItem('login',null)
                //   this.setState({ count: 0 })
                this.props.navigation.navigate("MainApp")

            } else {
                //   this.setState({ count: coun })
                this.props.navigation.navigate("Liberarylogorsing")

            }
        }, 2000)
    }

    render() {
        return (
            <>

                <View
                    // animation='fadeInUp'
                    // iterationCount=""
                    style={styles.container}>
                    <Animatable.Image
                        animation='fadeIn'
                        easing={"ease-in-circ"}

                        source={{ uri: "https://library.kissclipart.com/20180904/rw/kissclipart-ink-feather-clipart-paper-quill-pens-a487676fe5bba474.png" }}
                        style={styles.Image} resizeMode={'stretch'}
                    />
                    <Animatable.Text
                        animation='fadeIn'
                        easing={"ease-in-circ"}
                        style={styles.TextHeader}>
                        مكتبتي
                    </Animatable.Text>
                    {/* <View style={styles.Veiw}>
                        <Text style={ styles.TextB}>
                            الرفيق وقت الضيق
                        </Text>
                    </View> */}
                </View>

            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    },
    Image: {
        width: RFValue(200),
        height: RFValue(200),
    },
    TextHeader: {
        color: COLORS.yallo,
        fontSize: RFValue(40),
        fontWeight: "bold",
        marginTop: MARGIN.lgMargin
    },
    // Veiw: {
    //     width: RFValue(width),
    //     height: RFValue(height/3),
    //     justifyContent: "flex-end",
    //     alignItems: "center"
    // },
    // TextB: {
    //     color: COLORS.primary,
    //     fontSize: RFValue(40),
    //     fontWeight: "bold"
    // }

})