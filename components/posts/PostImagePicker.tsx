import React, { useState } from 'react'
import { Button, Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

interface IPostImagePickerProps {
  setPostImage: (arg: any) => void
}

export default (props: IPostImagePickerProps) => {
  const [image, setImage] = useState('')

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri)
      props.setPostImage(result.uri)
    }
  };

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}