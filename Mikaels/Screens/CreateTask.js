import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {createTask} from '../ApiMiddleware/apiMiddleware';

export default function CreateTask({navigation}) {
  const [address, setAddress] = useState('');

  const CreateTaskapiCalling = () => {
    const addressObj = {
      raw_address: address,
    };
    createTask(addressObj)
      .then(res => {
        console.log(res);
        alert(address);
        navigation.navigate('MapPooling');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.mainContainner}>
      <TextInput
        style={styles.input}
        onChangeText={address => setAddress(address)}
        defaultValue={address}
        placeholder="Enter your Addresss"
      />
      <Button
        title="Save"
        onPress={() => {
          CreateTaskapiCalling();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 0.5,
  },
});
