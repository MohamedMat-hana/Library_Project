import * as React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
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
    Alert
} from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { Colors, ThemeProvider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Value } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
import * as Animatable from 'react-native-animatable';
export default class LiberaryBuySure extends React.Component {


    constructor() {
        super();
        this.state = {
            book: {},
            Cart: "",
            cart: 0,
            count: 1,
            Delievry: 40,
            model_alert: false,
            model_alert1: false,
            address: '',
            resion: null,
            placeName: '',
            buy: [
                {
                    name: "كاش",
                    firstIcon: "circle",
                    scIcon: "hand-holding",
                    color: COLORS.grayICon,
                    borderColor: COLORS.ButtonWhite,
                    Change: true,
                    fontColor: COLORS.grayFont

                },
                {
                    name: "فوري",
                    firstIcon: "circle",
                    scIcon: "gratipay",
                    color: COLORS.grayICon,
                    borderColor: COLORS.ButtonWhite,
                    Change: true,
                    fontColor: COLORS.grayFont

                },
                {
                    name: "كارد",
                    firstIcon: "circle",
                    scIcon: "credit-card",
                    color: COLORS.grayICon,
                    borderColor: COLORS.ButtonWhite,
                    Change: true,
                    fontColor: COLORS.grayFont

                }

            ],

        }
    }
    ChangeColor(index) {
        let new_in = this.state.buy
        if (new_in[index].Change == true) {
            new_in[index].Change = false
            new_in[index].borderColor = COLORS.primary
            new_in[index].color = COLORS.primary
            new_in[index].firstIcon = "check-circle"
            new_in[index].fontColor = COLORS.primary


        } else {
            for (var i = 0; i < new_in.length; i++) {
                new_in[i].Change = false
                new_in[i].borderColor = COLORS.grayICon
                new_in[i].color = COLORS.grayICon
                new_in[i].firstIcon = "circle"
                new_in[i].fontColor = COLORS.grayFont


            }
            new_in[index].Change = true
            new_in[index].borderColor = COLORS.primary
            new_in[index].color = COLORS.primary
            new_in[index].firstIcon = "check-circle"
            new_in[index].fontColor = COLORS.primary


        }


        this.setState({ buy: new_in })
    }


    componentDidMount() {
        this.requestLocationPermision()
        let data = this.props.route.params.book
        let data1 = this.props.route.params.cart
        let data2 = this.props.route.params.count

        this.setState({ book: data, cart: data1, count: data2 })

    }


    async requestLocationPermision() {
        if (Platform.OS === 'ios') {
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);


            if (response === 'granted') {
                this.locateCurrentPosition();
            }
        } else {
            const granted = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

            if (granted === 'granted') {
                this.locateCurrentPosition();
            }
        }
        // locateCurrentPosition();

    }


    onRegionChange(resion) {

        Geocoder.init('AIzaSyAv0zTFavJT9I6rvLufEodpCvtMkEkdIX8');
        // setTempLoc(resion);

        Geocoder.from(resion.latitude, resion.longitude)
            .then(json => {
                // console.log(json);

                var addressComponent = json.results[7].formatted_address;
                this.setState({ placeName: addressComponent })
                // console.log(addressComponent)

            })
            .catch(error => console.warn(error));
    }






    locateCurrentPosition() {
        Geolocation.getCurrentPosition(
            position => {
                // console.log(JSON.stringify(position));

                let initialRegion = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                };

                this.setState({ resion: initialRegion });

                // mapView.current.animateToRegion(initialRegion);
                // this.map.animateToRegion(initialRegion,1000)

                Geocoder.from(position.coords.latitude, position.coords.longitude)
                    .then(json => {
                        // console.log(json);
                        var addressComponent = json.results[8].formatted_address;

                        this.setState({ placeName: addressComponent })
                    })
                    .catch(error => console.warn(error));
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 3600000 },
        );
    }









    render() {
        return (
            <>
                <View style={styles.Header}>
                    <View style={styles.Header1}>

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
                                الدفع
                            </Text>
                        </View>
                        <View></View>
                    </View>
                    <View style={styles.View2}>
                        <View style={styles.View3}>

                            <FontAwesome5 name='map-marker-alt' size={ICONS.mIcon} color={COLORS.grayICon} />
                            <View>
                                <Text style={[styles.Text, { fontSize: FONTS.h7 }]}>
                                    {JSON.stringify(this.state.placeName)}
                                </Text>
                                {/* <Text style={styles.Text1}>
                                    الدقهلية مصر
                                </Text> */}

                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ model_alert1: true })
                            }}
                            style={styles.View4}>
                            <Text style={styles.Text2}>
                                تغيير
                            </Text>
                        </TouchableOpacity>



                    </View>
                    <View style={styles.View5}>

                        <FontAwesome5 name='car' size={ICONS.mIcon} color={COLORS.grayICon} />
                        <Text style={styles.Text}>
                            التوصيل
                        </Text>

                        <Text style={styles.Text1}>
                            خلال اربعة ايام
                        </Text>




                    </View>

                    <View>
                        <Text style={styles.Text3}>
                            الدفع بواسطة
                        </Text>
                        {this.state.buy.map((item, index) => (
                            <TouchableOpacity style={[styles.TouchableOpacity, {
                                borderColor: item.borderColor
                            }]}
                                onPress={() => {
                                    this.ChangeColor(index)
                                }}>
                                <View style={styles.View6}>
                                    <FontAwesome5 name={item.firstIcon} size={ICONS.mIcon} color={item.color} />
                                    <FontAwesome5 name={item.scIcon} size={ICONS.mIcon} color={item.color} />
                                    <Text style={[styles.Text4, {
                                        color: item.fontColor
                                    }]}>
                                        {item.name}
                                    </Text>
                                </View>

                            </TouchableOpacity>))}
                        {/* <TouchableOpacity style={styles.TouchableOpacity}>
                            <View style={styles.View6}>
                                <Entypo name='circle' size={ICONS.mIcon} color={COLORS.grayICon} />
                                <FontAwesome5 name='gratipay' size={ICONS.mIcon} color={COLORS.grayICon} />
                                <Text style={styles.Text4}>
                                    فوري
                                </Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchableOpacity}
                            onPress={() => {
                                this.props.navigation.navigate("Update")
                            }}>
                            <View style={styles.View6}>
                                <Entypo name='circle' size={ICONS.mIcon} color={COLORS.grayICon} />
                                <Entypo name='credit-card' size={ICONS.mIcon} color={COLORS.grayICon} />
                                <Text style={styles.Text4}>
                                    كارد
                                </Text>
                            </View>

                        </TouchableOpacity> */}

                    </View>

                    {/* <View style={{
                        width: '97%',
                        alignItems: 'flex-start',
                    }}>
                        <Text style={{
                            fontSize: 17,
                            color: "#6f3589",
                            marginLeft: 8
                        }}>
                            تفاصيل الشراء
                        </Text>

                    </View>

                    <View style={{
                        marginTop: 5,
                        width: width / 1.05,
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        borderWidth: 1,
                        borderColor: "#d7d7d7",
                        padding: 5

                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}>
                            < Text style={{
                                fontSize: 17,
                                color: "#6f3589",
                            }}>
                                الحساب
                            </Text>
                            <Text style={{
                                fontSize: 13,
                                color: "#535357",
                                textDecorationLine: "underline"
                            }}>156 EGP</Text>

                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}>
                            < Text style={{
                                fontSize: 17,
                                color: "#6f3589",
                            }}>
                                الشحن
                            </Text>
                            <Text style={{
                                fontSize: 13,
                                color: "#535357",
                                textDecorationLine: "underline"
                            }}>40 EGP</Text>

                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}>
                            < Text style={{
                                fontSize: 17,
                                color: "#6f3589",
                            }}>
                                الخصم
                            </Text>
                            <Text style={{
                                fontSize: 13,
                                color: "#535357",
                                textDecorationLine: "underline"
                            }}>0 EGP</Text>

                        </View>
                        <View style={{
                            borderTopWidth: 1,
                            borderColor: "#d7d7d7",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}>
                            < Text style={{
                                fontSize: 17,
                                color: "#6f3589",
                            }}>
                                الاجمالي
                            </Text>
                            <Text style={{
                                fontSize: 13,
                                color: "#535357",
                                textDecorationLine: "underline"
                            }}>196 EGP</Text>

                        </View>



                    </View> */}
                    <View style={styles.View7}>
                        <Text style={styles.TextPrice}>
                            تفاصيل الشراء
                        </Text>

                    </View>

                    <View style={styles.ViewBox}>
                        <View style={styles.Item1Box}>
                            < Text style={styles.Text5}>
                                الحساب
                            </Text>
                            <Text style={styles.TextMore}>{this.state.book.price * this.state.count} EGP</Text>

                        </View>

                        <View style={styles.Item1Box}>
                            < Text style={styles.Text5}>
                                الشحن
                            </Text>
                            <Text style={styles.TextMore}>{this.state.Delievry} EGP</Text>

                        </View>
                        <View style={styles.Item1Box}>
                            < Text style={styles.Text5}>
                                الخصم
                            </Text>
                            <Text style={styles.TextMore}>{this.state.cart} EGP</Text>

                        </View>
                        <View style={[styles.Item1Box, { borderColor: COLORS.ButtonWhite, borderTopWidth: 1 }]}>
                            < Text style={styles.Text5}>
                                الاجمالي
                            </Text>
                            <Text style={styles.TextMore}>{this.state.Delievry + (this.state.book.price * this.state.count) - this.state.cart} EGP</Text>

                        </View>



                    </View>

                    <View style={styles.ViewButton}>
                        <GeneralButton
                            title="تأكيد"
                            bgcolor={COLORS.primary}
                            onPress={() => {
                                this.setState({ model_alert: true })
                            }}
                        />

                    </View>
                    {/* <View style={{
                        height: "20%",
                        width: width,
                        justifyContent: "center"
                    }}>
                        <TouchableOpacity style={{
                            width: "50%",
                            height: 75,
                            backgroundColor: "#6f3589",
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 2
                        }}
                            onPress={() => {
                                this.setState({ model_alert: true })
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                color: "#fff"
                            }}>
                                تأكيد
                            </Text>

                        </TouchableOpacity>
                    </View> */}

                </View>


                <Modal
                    animationType="slide"
                    transparent={true}

                    visible={this.state.model_alert}
                    onRequestClose={() => {
                        this.setState({ model_alert: false });
                    }}>
                    <View style={{ flex: 1 }}>
                        <View
                            style={styles.ViewModal}>
                            <View
                                style={styles.ViewModal2}>

                                <Animatable.Image
                                    animation='shake'
                                    iterationCount="infinite"
                                    easing={"ease-out-quad"}
                                    source={{ uri: "https://cdn3.iconfinder.com/data/icons/school-and-education-5-5/35/242-512.png" }}
                                    style={styles.Image} resizeMode={'stretch'}
                                />
                                <Text style={[styles.Text3, { alignSelf: "center" }]}>
                                    تم طلب الاوردر بنجاح
                                </Text>
                                <GeneralButton
                                    title="اكمل التسوق"
                                    bgcolor={COLORS.primary}
                                    onPress={() => {
                                        this.setState({ model_alert: false })
                                    }}
                                />

                                {/* <View style={{
                                    height: "20%",
                                    width: width,
                                    justifyContent: "center",
                                    alignSelf: "center"
                                }}>
                                    <TouchableOpacity style={{
                                        width: "50%",
                                        height: 75,
                                        backgroundColor: "#6f3589",
                                        alignSelf: "center",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 2
                                    }}
                                        onPress={() => {
                                            this.setState({ model_alert: false })
                                        }}>
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                color: '#fff',
                                                fontSize: 18,
                                            }}>
                                            اكمل التسوق
                                        </Text>
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"

                    visible={this.state.model_alert1}
                    onRequestClose={() => {
                        this.setState({ model_alert1: false });
                    }}>

                    <View
                        style={{
                            flex: 1,
                        }}>
                        <MapView

                            style={{
                                flex: 1,

                            }}
                            onRegionChangeComplete={region => this.onRegionChange(region)}
                            provider={PROVIDER_GOOGLE}
                            initialRegion={this.state.resion}>
                            {this.state.resion && (
                                <Marker
                                    coordinate={this.state.resion}
                                    style={{
                                        width: 28,
                                        height: 28,

                                    }}
                                    pinColor={COLORS.primary}
                                    title="My Loc"
                                />
                            )}


                        </MapView>
                        <TouchableOpacity
                            style={{
                                height: 60,
                                width: '100%',
                                backgroundColor: COLORS.primary,
                                alignSelf: 'center',
                                justifyContent: "center",
                                alignItems: "center"
                            }}

                            onPress={() => {
                                // alert(JSON.stringify(this.state.placeName))
                                this.setState({ model_alert1: false })
                            }}
                        >
                            <Text style={[styles.Text3, { color: COLORS.ButtonWhite }]}>
                                عرض العنوان
                            </Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </>

        )
    }
}
const styles = StyleSheet.create({
    Header: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    Header1:{
        justifyContent: "space-between",
        flexDirection: "row",
        height: RFValue(height / 13),
        width: RFValue(width),
alignItems:"center"
    },
    View1: {
        fontSize: FONTS.h3,
        color: COLORS.primary,
        fontWeight: "bold",
        padding: PADDING.smPadding
    },
    ViewModal: {
        height: RFValue(height),
        width: RFValue(width),
        alignContent: 'center',
        justifyContent: 'center',
    },
    ViewModal2: {
        alignSelf: 'center',
        justifyContent: "space-evenly",
        width: RFValue(width / 1.1),
        height: RFValue(height / 2),
        backgroundColor: COLORS.background,
        borderRadius: RADIUS.mdRadius,
        elevation: 5,
        paddingVertical: PADDING.smPadding,
        marginBottom: MARGIN.xsMargin,
    },
    View2: {
        width: RFValue(width / 1.05),
        height: RFValue(height / 12),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    View3: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: RFValue(width / 2),
        height: RFValue(height / 12),
        // backgroundColor:COLORS.black
    },
    Text: {
        fontSize: FONTS.h5,
        color: COLORS.grayFont,
        fontWeight: "bold",

    },
    TextMore: {
        fontSize: FONTS.h7,
        color: COLORS.grayFont,
        textDecorationLine: "underline"
    },
    Image: {
        width: RFValue(200),
        height: RFValue(200),
        alignSelf: "center"
    },
    Text1: {
        fontSize: FONTS.h8,
        color: COLORS.gray,
    },
    TextPrice: {
        fontSize: FONTS.h6,
        color: COLORS.primary
    },
    View4: {
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: RADIUS.smRadius,
        borderColor: COLORS.ButtonWhite,
        padding: PADDING.smPadding,
        borderWidth: 1
    },
    View5: {
        width: RFValue(width / 2.5),
        height: RFValue(height / 12),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        alignItems: "center",
        marginLeft: MARGIN.xxsMargin
    },
    View6: {
        flexDirection: "row",
        width: RFValue(width / 3),
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    TouchableOpacity: {
        width: RFValue(width / 1.05),
        borderRadius: RADIUS.smRadius,
        padding: PADDING.smPadding,
        borderWidth: 1,
        marginVertical: MARGIN.xxsMargin
    },
    Box: {
        marginTop: MARGIN.xxsMargin,
        width: RFValue(width / 1.05),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',

    },
    Text2: {
        color: COLORS.primary,
        fontSize: FONTS.h6
    },
    Text3: {
        fontSize: FONTS.h5,
        color: COLORS.grayFont,
        fontWeight: "bold",

    },
    Text4: {
        fontSize: FONTS.h5,
    },
    View7: {
        width: RFValue(width / 1.05),
        height: RFValue(height / 15),
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    ViewBox: {
        marginTop: MARGIN.xxsMargin,
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
    Text5: {
        fontSize: FONTS.h5,
        color: COLORS.primary
    }
})