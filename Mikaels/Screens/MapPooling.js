import React, {useState, useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
import {getlistTask} from '../ApiMiddleware/apiMiddleware';
import MapView from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
export default function MapPooling() {
  const mapView = useRef(null);
  const dispatch = useDispatch();
  const listTask = useSelector(state => {
    return state.listTask;
  });

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
    dispatch(getlistTask());

    setTimeout(() => {
      console.log(listTask);

      const coords = markers.map(element => {
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
    }, 900);
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
