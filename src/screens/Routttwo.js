import * as React from 'react';
import { View, Text, StatusBar, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';


export default class Route2 extends React.Component {


  constructor() {
    super();
    this.state = {
      Arr: [
        {
          Text: "فن"
        },
        {
          Text: "موسيقي"
        },
        {
          Text: "رسم"
        },
        {
          Text: "لغات"
        },
        {
          Text: "برمجة"
        },
        {
          Text: "تاريخ"
        },
        {
          Text: "علوم"
        },
        {
          Text: "ثقافة"
        },
        {
          Text: "رومانسي"
        },
        {
          Text: "شعر"
        },
        {
          Text: "نفسي"
        },
        {
          Text: "جرافيك"
        },
        {
          Text: "اقتصاد"
        },
        {
          Text: "سياسه"
        },
        {
          Text: "طب"
        },
        {
          Text: "هندسه"
        },
        {
          Text: "أدب"
        },
        {
          Text: "رياضة"
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
            backgroundColor: "#fff",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          {this.state.Arr.map(item=>(
          <TouchableOpacity style={{
            width: "45%",
            height: "10%",
            borderColor: "#c1c1c1",
            borderWidth: 2,
            borderRadius: 8,
            justifyContent:"center",
            alignItems:"center",
            marginTop:5
          }}>
            <Text style={{
              fontSize: 17,
              color: "#6f3589",
              fontWeight:"bold"
            }}>
              {item.Text}
            </Text>


          </TouchableOpacity>

))}

        </View>




      </>

    )
  }
}
