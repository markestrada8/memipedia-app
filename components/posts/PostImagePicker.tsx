import React, { useState } from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import EIcons from 'react-native-vector-icons/EvilIcons'
import colors from '../../styles/colors'

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

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri)
      props.setPostImage(result.uri)
    }
  };

  return (

    <TouchableOpacity
      onPress={pickImage}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100
      }}
    >
      {image ?
        (<Image source={{ uri: image }} style={{ width: 100, height: 100 }} />)
        :
        (<EIcons name="camera" color={'#000'} size={42} />)
      }
    </TouchableOpacity>
  );
}