import * as React from 'react';
import { Text, StyleSheet, useWindowDimensions, View, Button, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput, Dimensions, } from 'react-native';
const { width, height } = Dimensions.get('window');

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Route1 extends React.Component {


  constructor() {
    super();
    this.state = {

      books: [
        {
          photo: "https://tse1.mm.bing.net/th?id=OIP.fEw2BYL2Lf02DgNE647wpgHaKb&pid=Api&P=0",
          namebook: "عقل بلا جسد",
          nameWriter: "احمد خالد توفيق",
          price:"155",
          pages:"156",
          rate:"4.5",
          
        },
        {
          photo: "https://i.pinimg.com/originals/a7/37/c8/a737c8bc1980bd631a2e5eebadc93fc2.jpg",
          namebook: "فن اللامبالاة",
          nameWriter: "مارك مانسون",
          price:"465",
          pages:"466",
          rate:"3.5",
        },
        {
          photo: "https://2.bp.blogspot.com/-baI7dNEUgI0/W736hzgWtMI/AAAAAAABVx0/ieoVQZ7J0wkPvnqs0MBdQYyFcjtvHtIpgCLcBGAs/s1600/01.jpg",
          namebook: "اسواق الذهب",
          nameWriter: "احمد شوقي",
          price:"755",
          pages:"156",
          rate:"4.7",


        },
        {
          photo: "https://shaqhaf.com/media/imgs/books/book26-07-2020-10-25-19.jpg",
          namebook: "الست هدى",
          nameWriter: "احمد شوقي",
          price:"200",
          pages:"150",
          rate:"3",


        },
        {
          photo: "https://books-library.net/files/books-library.online-1559416165-493.jpg",
          namebook: "انت لي",
          nameWriter: "مني المرشود",
          price:"75",
          pages:"116",
          rate:"3.5",


        },
        {
          photo: "https://books-library.net/files/books-library.net-1611580912-618.jpg",
          namebook: "ليطمئن قلبي",
          nameWriter: "ادهم شرقاوي",
          price:"145",
          pages:"556",
          rate:"4",


        },
        {
          photo: "https://books-library.net/files/s-books-library.online-09240213Vy9S8.jpg",
          namebook: "انا يوسف",
          nameWriter: "ايمن العتوم",
          price:"95",
          pages:"146",
          rate:"2",


        },
        {
          photo: "https://books-library.net/files/books-library.online-1573916515-953.jpg",
          namebook: "انتيخريستوس",
          nameWriter: "احمد خالد مصطفي",
          price:"185",
          pages:"176",
          rate:"3.2",

        },
        {
          photo: "https://books-library.net/files/s-books-library.net-07071725Wj1F7.jpg",
          namebook: "ياسمين العودة",
          nameWriter: "خولة حمدي",
          price:"150",
          pages:"146",
          rate:"4.5",

        },
        {
          photo: "https://books-library.net/files/s-books-library.net-11091003Te2F3.jpg",
          namebook: "موسم صيد الغزلان",
          nameWriter: "احمد مراد",
          price:"125",
          pages:"146",
          rate:"4.7",


        },


      ],
      sallary: [
        {
          photo: "https://books-library.net/files/s-books-library.net-11091003Te2F3.jpg",
          namebook: "موسم صيد الغزلان",
          nameWriter: "احمد مراد",
          price:"125",
          pages:"146",
          rate:"4.7",


        },
        {
          photo: "https://books-library.net/files/s-books-library.net-10201711Ja8B3.jpg",
          namebook: "رائد",
          nameWriter: "يوسف الشاطر",
          price:"165",
          pages:"176",
          rate:"4.9",


        },
        {
          photo: "https://books-library.net/files/s-books-library.net-12140257Xx1U9.jpg",
          namebook: "سر الغرفه207",
          nameWriter: "احمد خالد توفيق",
          price:"185",
          pages:"186",
          rate:"4",
        },

      ],
      show: [
        {
          photo: "https://i.pinimg.com/originals/a7/37/c8/a737c8bc1980bd631a2e5eebadc93fc2.jpg",
          namebook: "فن اللامبالاة",
          nameWriter: "مارك مانسون",
          price:"465",
          pages:"466",
          rate:"3.5",
        },
        {
          photo: "https://books-library.net/files/books-library.net-1611580912-618.jpg",
          namebook: "ليطمئن قلبي",
          nameWriter: "ادهم شرقاوي",
          price:"145",
          pages:"556",
          rate:"4",


        },
        {
          photo: "https://books-library.net/files/s-books-library.online-09240213Vy9S8.jpg",
          namebook: "انا يوسف",
          nameWriter: "ايمن العتوم",
          price:"95",
          pages:"146",
          rate:"2",


        },
        {
          photo: "https://books-library.net/files/books-library.online-1573916515-953.jpg",
          namebook: "انتيخريستوس",
          nameWriter: "احمد خالد مصطفي",
          price:"185",
          pages:"176",
          rate:"3.2",



        },

      ],
      New: [
        {
          photo: "https://books-library.net/files/s-books-library.net-10181718Jy7M2.jpg",
          namebook: "النهاية",
          nameWriter: "ممدوح نصرالله",
          price:"285",
          pages:"276",
          rate:"4.2",


        },
        {
          photo: "https://books-library.net/files/s-books-library.net-10101523Bi8V8.jpg",
          namebook: "لوكاندة بير الوطاويط",
          nameWriter: "احمد مراد",
          price:"265",
          pages:"246",
          rate:"3.2",


        },
        {
          photo: "https://books-library.net/files/s-books-library.net-07081317Vf9U8.jpg",
          namebook: "طعم البعاد",
          nameWriter: "عبد الباسط يوسف",
          price:"155",
          pages:"56",
          rate:"4.8",


        },
        {
          photo: "https://books-library.net/files/s-books-library.net-10241431Li3F9.jpg",
          namebook: "أكاشك",
          nameWriter: "شهيرة جلال",
          price:"185",
          pages:"156",
          rate:"2.5",

        },
        {
          photo: "https://books-library.net/files/s-books-library.net-09171746Sj7Q0.jpg",
          namebook: "المعركة الاخيرة",
          nameWriter: "جهاد الترباني",
          price:"123",
          pages:"156",
          rate:"3.2",


        }


      ],
      soon: [
        {
          photo: "https://books-library.net/files/s-books-library.net-10251726Mr9C0.jpg",
        },
        {
          photo: "https://books-library.net/files/s-books-library.net-11041550Ew8P6.jpg",
        },
        {
          photo: "https://books-library.net/files/s-books-library.net-11041201Vn7D6.jpg",
        },
        {
          photo: "https://books-library.net/files/s-books-library.net-09190637Oe1L8.jpg",
        },
        {
          photo: "https://books-library.net/files/s-books-library.net-09190806Dv4Q8.jpg",
        },
        {
          photo: "https://books-library.net/files/s-books-library.net-12081837Ro6M1.jpg",
        },
        {
          photo: "https://books-library.net/files/s-books-library.net-02241821Vb3A7.jpg",
        },
      ]




    }
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff"
          }}
        >
          <ScrollView>
            <View>
              <View style={{
                width: '97%',
                height: height / 13,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                alignSelf: "center"
              }}>
                <Text style={{
                  fontSize: 17,
                  color: "#d0e"
                }}>
                  المفضلة
                </Text>

                <Text style={{
                  fontSize: 13,
                  color: "#535357",
                  textDecorationLine: "underline"
                }}>
                  عرض المزيد
                </Text>
              </View>
              <View style={{
                width: width,
                height: height / 3,
                flexDirection: "row",
              }}
              >
                <ScrollView horizontal={true}>
                  {this.state.books.map(item => (
                    <TouchableOpacity style={{
                      width: 150,
                      alignItems: "center",
                      marginHorizontal: 2,
                      justifyContent: "center"
                    }}
                      onPress={() => {
                        this.props.navigation.navigate("Update", {
                          name: item
                        })
                      }}
                    >
                      <View style={{
                        marginHorizontal: 10,
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: "#0e0"

                      }}>
                        <Image source={{ uri: item.photo }}
                          style={{
                            width: 120,
                            height: 170,
                          }} resizeMode={'cover'}
                        />
                      </View>
                      <Text style={{
                        fontSize: 17,
                        color: "#535357"
                      }}>
                        {item.namebook}
                      </Text>
                      <Text style={{
                        fontSize: 13,
                        color: "#535357"
                      }}>
                        {item.nameWriter}
                      </Text>
                      <View style={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        width: "30%",
                        alignItems: "center"
                      }}>
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />

                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

              </View>
            </View>
            <View>
              <View style={{
                width: '97%',
                height: height / 13,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                alignSelf: "center"
              }}>
                <Text style={{
                  fontSize: 17,
                  color: "#8A3982"
                }}>
                  الاكثر مبيعاً
                </Text>

                <Text style={{
                  fontSize: 13,
                  color: "#535357",
                  textDecorationLine: "underline"
                }}>
                  عرض المزيد
                </Text>
              </View>
              <View style={{
                width: width,
                height: height / 3,
                flexDirection: "row",
              }}
              >
                <ScrollView horizontal={true}>
                  {this.state.sallary.map(item => (
                    <TouchableOpacity style={{
                      width: 150,
                      alignItems: "center",
                      marginHorizontal: 2,
                      justifyContent: "center"
                    }}
                    onPress={() => {
                      this.props.navigation.navigate("Update", {
                        name: item
                      })
                    }}
                  >

                      <View style={{
                        marginHorizontal: 10,
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: "#0e0"

                      }}>
                        <Image source={{ uri: item.photo }}
                          style={{
                            width: 120,
                            height: 170,
                          }} resizeMode={'cover'}
                        />
                      </View>
                      <Text style={{
                        fontSize: 17,
                        color: "#535357"
                      }}>
                        {item.namebook}
                      </Text>
                      <Text style={{
                        fontSize: 13,
                        color: "#535357"
                      }}>
                        {item.nameWriter}
                      </Text>
                      <View style={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        width: "30%",
                        alignItems: "center"
                      }}>
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />

                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

              </View>
            </View>
            <View>
              <View style={{
                width: '97%',
                height: height / 13,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                alignSelf: "center"
              }}>
                <Text style={{
                  fontSize: 17,
                  color: "#d0e"
                }}>
                  العروض
                </Text>

                <Text style={{
                  fontSize: 13,
                  color: "#535357",
                  textDecorationLine: "underline"
                }}>
                  عرض المزيد
                </Text>
              </View>
              <View style={{
                width: width,
                height: height / 3,
                flexDirection: "row",
              }}
              >
                <ScrollView horizontal={true}>
                  {this.state.show.map(item => (
                    <TouchableOpacity style={{
                      width: 150,
                      alignItems: "center",
                      marginHorizontal: 2,
                      justifyContent: "center"
                    }}
                    onPress={() => {
                      this.props.navigation.navigate("Update", {
                        name: item
                      })
                    }}
>
                      <View style={{
                        marginHorizontal: 10,
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: "#0e0"

                      }}>
                        <Image source={{ uri: item.photo }}
                          style={{
                            width: 120,
                            height: 170,
                          }} resizeMode={'cover'}
                        />
                      </View>
                      <Text style={{
                        fontSize: 17,
                        color: "#535357"
                      }}>
                        {item.namebook}
                      </Text>
                      <Text style={{
                        fontSize: 13,
                        color: "#535357"
                      }}>
                        {item.nameWriter}
                      </Text>
                      <View style={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        width: "30%",
                        alignItems: "center"
                      }}>
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />

                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

              </View>
            </View>
            <View>
              <View style={{
                width: '97%',
                height: height / 13,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                alignSelf: "center"
              }}>
                <Text style={{
                  fontSize: 17,
                  color: "#d0e"
                }}>
                  الاصدرات الجديدة
                </Text>

                <Text style={{
                  fontSize: 13,
                  color: "#535357",
                  textDecorationLine: "underline"
                }}>
                  عرض المزيد
                </Text>
              </View>
              <View style={{
                width: width,
                height: height / 3,
                flexDirection: "row",
              }}
              >
                <ScrollView horizontal={true}>
                  {this.state.New.map(item => (
                    <TouchableOpacity style={{
                      width: 150,
                      alignItems: "center",
                      marginHorizontal: 2,
                      justifyContent: "center"
                    }}
                    onPress={() => {
                      this.props.navigation.navigate("Update", {
                        name: item
                      })
                    }}
>
                      <View style={{
                        marginHorizontal: 10,
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: "#0e0"

                      }}>
                        <Image source={{ uri: item.photo }}
                          style={{
                            width: 120,
                            height: 170,
                          }} resizeMode={'cover'}
                        />
                      </View>
                      <Text style={{
                        fontSize: 17,
                        color: "#535357"
                      }}>
                        {item.namebook}
                      </Text>
                      <Text style={{
                        fontSize: 13,
                        color: "#535357"
                      }}>
                        {item.nameWriter}
                      </Text>
                      <View style={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        width: "30%",
                        alignItems: "center"
                      }}>
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />
                        <FontAwesome5 name='star' size={10} color={"#f3d752"} />

                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

              </View>
            </View>
            <View>
              <View style={{
                width: '97%',
                height: height / 13,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                alignSelf: "center"
              }}>
                <Text style={{
                  fontSize: 17,
                  color: "#d0e"
                }}>
                  سيتوفر قريباً

                </Text>

                <Text style={{
                  fontSize: 13,
                  color: "#535357",
                  textDecorationLine: "underline"
                }}>
                  عرض المزيد
                </Text>
              </View>
              <Text style={{
                fontSize: 13,
                color: "#535357",
                marginHorizontal: 5
              }}>
                يناير 2023
              </Text>
              <View style={{
                width: width,
                height: height / 3,
                flexDirection: "row",
              }}
              >
                <ScrollView horizontal={true}>
                  {this.state.soon.map(item => (
                    <View style={{
                      marginHorizontal: 10,
                      alignItems: "center",
                      alignSelf: "center",
                      backgroundColor: "#0e0"

                    }}>
                      <Image source={{ uri: item.photo }}
                        style={{
                          width: 120,
                          height: 170,
                        }} resizeMode={'cover'}
                      />
                    </View>
                  ))}
                </ScrollView>

              </View>
            </View>

          </ScrollView>
        </View>



      </>

    )
  }
}
