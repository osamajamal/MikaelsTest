import React from 'react'
import { View, Text , TextInput , StyleSheet , Button} from 'react-native'

export default function CreateTask() {
    return (
        <View style={styles.mainContainner}>
        <TextInput
        style={styles.input}
        //onChangeText={onChangeNumber}
        //value={number}
        placeholder="Address" />
        <Button
        title="Save"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainner:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    input: {
      height: 40,
      width:"80%",
      margin: 12,
      borderWidth: 0.5,
    },
  });
