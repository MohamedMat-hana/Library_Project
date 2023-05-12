import * as React from 'react';
import {
    Text,
    StyleSheet,
    initialLayout,
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
    FlatList
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Input, GeneralButton } from '../../components';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    COLORS,
    MARGIN,
    ICONS,
    FONTS,
    RADIUS
} from '../../src/constants/Constants';
import { COLORICON } from '../../src/constants/Constants';
import { icons, images, SIZES } from '../../constants';


export default class LiberaryBooks extends React.Component {


    constructor() {
        super();
        this.state = {
            Book: []
        }
    }
    componentDidMount() {
        let data = this.props.route.params.name
        this.setState({ Book: data })
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

                        <Text style={styles.text}>
                            الكتب
                        </Text>
                        <View></View>
                    </View>
                    <View style={styles.UpScroll}>
                        {/* <FlatList 
data={this.state.Book}
renderItem={
    ({item,index})=>(
        
    )
}
/> */}
                        <ScrollView>
                            <View
                                style={{
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                }}
                            >

                                {this.state.Book.map((item, index) => (
                                    <>
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

                                    </>
                                ))}
                            </View>
                            <View style={{ height: 55 }}>

                            </View>

                        </ScrollView>

                    </View>

                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    UPheader: {
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
    text: {
        color: COLORS.primary,
        fontSize: FONTS.h3,
        fontWeight: "bold"
    },
    UpScroll: {
        width: RFValue(width),
        height: RFValue(height),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    TouchableOpacityMap: {
        width: RFValue(width / 2.2),
        alignItems: "center",
        margin: 5,
        marginHorizontal: MARGIN.xxsMargin,
        justifyContent: "center",
        backgroundColor: COLORS.background,
        padding: 5,
        borderRadius: 5
    },
    ViewImage: {
        marginHorizontal: MARGIN.xsMargin,
        alignItems: "center",
        alignSelf: "center",

    },
    Image: {
        width: RFValue(150),
        height: RFValue(200),
    },
    NameBook: {
        fontSize: FONTS.h3,
        color: COLORS.black,
        alignSelf: "center"

    },
    namewriter: {
        fontSize: FONTS.h6,
        color: COLORS.black,
        alignSelf: "center"

    },
    stars: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: RFValue(width / 5),
        alignSelf: "center"
    }



})