import { useState } from "react"
import { View, TextInput, ActivityIndicator } from 'react-native'
import { Button } from "../components/Button"
import PostImagePicker from '../components/posts/PostImagePicker'
import * as SecureStore from "expo-secure-store"
import API from "../utils/API"
import Container from "../components/layouts/Container"

interface IPostFormScreenProps {
  navigation: {
    navigate: (arg: string) => null;
  }
}

export default (props: IPostFormScreenProps) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [postImage, setPostImage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const buildForm = () => {
    let formData = new FormData()


    const uriArray = postImage.split('.')
    const fileType = uriArray[uriArray.length - 1]

    formData.append('post[name]', name)
    formData.append('post[content]', content)
    formData.append('post[post_image]', {
      // @ts-ignore
      uri: postImage,
      name: `photo.${fileType}`,
      type: fileType
    })
    return formData
  }

  const handleSubmit = async () => {
    const token = await SecureStore.getItemAsync('memipedia_secure_token')
    const data = buildForm()
    setIsSubmitting(true)

    API.post('memipedia_posts', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        // console.log('Create post POST response: ', response.data)
        setIsSubmitting(false)
      })
      .catch(error => {
        console.log('Error creating post: ', error)
        setIsSubmitting(false)
      })
  }

  return (
    <Container navigate={props.navigation.navigate}>
      <View style={{ height: '100%' }}>
        <TextInput
          placeholder='Name'
          value={name}
          onChangeText={val => setName(val)}
        />
        <TextInput
          placeholder='Description'
          value={content}
          onChangeText={val => setContent(val)}
          style={{ borderWidth: 2, borderColor: 'black' }}
          multiline={true}
        />
        <View style={{ marginTop: 40, height: 100 }}>
          <PostImagePicker setPostImage={setPostImage} />
        </View>
        {isSubmitting ?
          <Button
            text={'Submitting...'}
            disabled={true}
          />
          :
          <Button
            text={'Submit'}
            onPress={handleSubmit}
          />
        }

      </View>
    </Container>
  )
}