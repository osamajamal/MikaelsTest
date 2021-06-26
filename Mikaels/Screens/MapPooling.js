import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
export default function MapPooling() {
  return (
    <MapView
      style={{flex: 1, width: '100%'}}
      initialRegion={{
        latitude: 59.436962,
        longitude: 24.753574,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}
