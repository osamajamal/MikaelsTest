import React, {useState, useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
export default function MapPooling() {
  const mapView = useRef(null);
  const [markers, setMarkers] = useState([
    {
      coordinate: {
        latitude: 37.298984,
        longitude: -122.050362,
      },
      title: 'Best Place',
      description: 'Description1',
      id: 1,
    },
    {
      coordinate: {
        latitude: 37.297803,
        longitude: -122.050037,
      },
      title: 'Best Place2',
      description: 'Description 2',
      id: 2,
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      const coords = markers.map(element => {
        console.log(element.coordinate.latitude);
        return {
          latitude: element.coordinate.latitude,
          longitude: element.coordinate.longitude,
        };
      });

      mapView.current.fitToCoordinates(coords, {
        edgePadding: {
          bottom: 200,
          right: 50,
          top: 150,
          left: 50,
        },
        animated: true,
      });
    }, 700);
  }, []);

  return (
    <MapView
      ref={mapView}
      style={{flex: 1, width: '100%'}}
      initialRegion={{
        latitude: 59.436962,
        longitude: 24.753574,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {markers.map((marker, index) => (
        <MapView.Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
}
