import { useState } from 'react'
import { View, TextInput, ScrollView } from 'react-native'
import { Button } from '../components/Button'
import PostImagePicker from '../components/posts/PostImagePicker'
import * as SecureStore from 'expo-secure-store'
import API from '../utils/API'
import Container from '../components/layouts/Container'

import postFormStyles from '../styles/stacks/posts/postFormStyles'

interface IPostFormScreenProps {
  navigation: {
    navigate: (route: string, data: any) => null;
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
        if (response.data.memipedia_post) {
          props.navigation.navigate('PostDetail', { post: response.data.memipedia_post })
        } else {
          alert('There was an error creating your post')
        }
      })
      .catch(error => {
        console.log('Error creating post: ', error)
        setIsSubmitting(false)
      })
  }

  return (
    <Container navigate={props.navigation.navigate} >
      <ScrollView style={[postFormStyles.container, { backgroundColor: '#fff' }]} >
        <View style={postFormStyles.formGrid}>
          <PostImagePicker setPostImage={setPostImage} />
          <View style={postFormStyles.textInputContainer}>
            <TextInput
              placeholder='Name'
              value={name}
              onChangeText={val => setName(val)}
              style={postFormStyles.textInput}
            />
            <TextInput
              placeholder='Description'
              value={content}
              onChangeText={val => setContent(val)}
              multiline={true}
              style={[postFormStyles.textInput, postFormStyles.textArea]}
            />
          </View>
        </View>
        <View style={postFormStyles.buttonContainer}>
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

      </ScrollView>
    </Container>
  )
}