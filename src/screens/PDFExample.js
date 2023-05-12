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
  } from 'react-native';
  import Pdf from 'react-native-pdf';
  import { Value } from 'react-native-reanimated';
  const { width, height } = Dimensions.get('window');
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { Input, GeneralButton } from '../../components';
  import { RFValue } from 'react-native-responsive-fontsize';
  import { icons, pdf, SIZES } from '../../constants';

  import {
    COLORS,
    MARGIN,
    ICONS,
    FONTS,
    RADIUS
  } from '../constants/Constants';

export default class PDFExample extends React.Component {
 
    constructor() {
        super();
        this.state = {
            item:{},

        }
    }
    componentDidMount() {
        let data = this.props.route.params.book[0]
// alert(JSON.stringify(this.props.route.params.book[0]))
        this.setState({ item:   data  })
    }
// '../../assets/pdf/First.pdf'
    render() {
        // const source = { uri: 'https://docs.google.com/viewerng/viewer?url=https://www.4read.net/uploads/pdf/%25D9%2581%25D9%2586%2520%25D8%25A7%25D9%2584%25D9%2584%25D8%25A7%25D9%2585%25D8%25A8%25D8%25A7%25D9%2584%25D8%25A7%25D8%25A9%2520%25D9%2585%25D8%25A7%25D8%25B1%25D9%2583%2520%25D9%2585%25D8%25A7%25D9%2586%25D8%25B3%25D9%2588%25D9%2586%2520%2523%25D9%2581%25D9%2588%25D8%25B1_%25D8%25B1%25D9%258A%25D8%25AF.pdf', cache: true };
        const source =  '../../assets/pdf/First.pdf'  // ios only
        // const source = {uri:'bundle-assets://test.pdf' };
        // const source = {uri:'file:///C:/Users/User/Downloads/D8A3D986D8AAD98AD8AED8B1D98AD8B3D8AAD988D8B3__.pdf'};
        // const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        // const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        // const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

        return (
            <View style={styles.container}>
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
                    {this.state.item.namebook}
{/* knjk */}

                    </Text>
                    <View></View>
                </View>

                <Pdf
                    trustAllCerts={false}

                    source={require(source)}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: 25,
    },
    Header: {
        width: RFValue(width),
        height: RFValue(height / 20),
        flexDirection: "row",
        backgroundColor:COLORS.background,
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
    },

    text: {
        color: COLORS.black,
        fontSize: FONTS.h3,
        fontWeight: "bold"
    },

    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    }
});
// import React from 'react';
// import { StyleSheet, Dimensions, View } from 'react-native';
// import Pdf from 'react-native-pdf';

// export default class PDFExample extends React.Component {
//     render() {
//         const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
//         //const source = require('./test.pdf');  // ios only
//         //const source = {uri:'bundle-assets://test.pdf' };
//         //const source = {uri:'file:///sdcard/test.pdf'};
//         //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
//         //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
//         //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

//         return (
//             <View style={styles.container}>
//                 <Pdf
//                     source={source}
//                     onLoadComplete={(numberOfPages,filePath) => {
//                         console.log(`Number of pages: ${numberOfPages}`);
//                     }}
//                     onPageChanged={(page,numberOfPages) => {
//                         console.log(`Current page: ${page}`);
//                     }}
//                     onError={(error) => {
//                         console.log(error);
//                     }}
//                     onPressLink={(uri) => {
//                         console.log(`Link pressed: ${uri}`);
//                     }}
//                     style={styles.pdf}/>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         marginTop: 25,
//     },
//     pdf: {
//         flex:1,
//         width:Dimensions.get('window').width,
//         height:Dimensions.get('window').height,
//     }
// });
