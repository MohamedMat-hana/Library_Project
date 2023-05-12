import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ScrollView,
    Modal,Alert
} from 'react-native';


import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { Colors } from 'react-native-paper';
// const mapView = React.useRef();

export default class MapPage extends React.Component {


    constructor() {
        super()
        this.state = {
            address: '',
            resion:null,
            placeName: ''
        }
    }



    componentDidMount(){
      this.requestLocationPermision()
    }


  async  requestLocationPermision() {
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

                var addressComponent = json.results[0].formatted_address;
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
                        var addressComponent = json.results[0].formatted_address;

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

            <View
                style={{
                    flex: 1,
                }}
            >
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
                            pinColor={"#0f0"}
                            title="My Loc"
                        />
                    )}


                </MapView>
                <TouchableOpacity
                style={{
                    height:60, 
                    width :'100%', 
                    backgroundColor:Colors.blueGrey700, 
                    alignSelf:'center',
                    justifyContent:"center", 
                    alignItems:"center"
                }}

                onPress={()=>{
                    alert(JSON.stringify(this.state.resion))
                }}
                >
<Text>
    عرض العنوان
</Text>
                </TouchableOpacity>
            </View>

        )
    }
}