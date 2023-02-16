import { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import Container from '../components/layouts/Container'
import * as SecureStore from 'expo-secure-store'
import API from '../utils/API'
import PostList from '../components/posts/PostList'

import AntIcon from 'react-native-vector-icons/AntDesign'
import searchStyles from '../styles/stacks/posts/searchStyles'

interface ISearchScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  }
}

export default (props: ISearchScreenProps) => {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [emptyQuery, setEmptyQuery] = useState(false)

  const handleSearch = async () => {
    const token = await SecureStore.getItemAsync('memipedia_secure_token')
    setIsLoading(true)
    setEmptyQuery(false)
    setPosts([])

    const params = {
      query: query
    }

    const headers = {
      Authorization: `Bearer ${token}`
    }

    API.get('memipedia_queries', {
      params: params,
      headers: headers
    })
      .then(response => {
        // console.log('Response from query GET: ', response.data)
        if (response.data.memipedia_posts.length === 0) {
          setEmptyQuery(true)
          setIsLoading(false)
        } else {
          setPosts(response.data.memipedia_posts)
          setIsLoading(false)
        }
      })
      .catch(error => {
        alert('Error on search.')
        setIsLoading(false)
      })
  }

  const renderQueries = () => {
    if (emptyQuery) {
      return (
        <View style={searchStyles.noResultsContainer}>
          <Text style={searchStyles.noResultsText}>No search results.</Text>
        </View>)
    } else if (posts && posts.length > 0) {
      return (
        <PostList
          posts={posts}
          navigate={props.navigation.navigate}
          getPosts={handleSearch}
          isLoading={isLoading}
        />)
    } else {
      return null
    }
  }

  const searchBar = (
    <View style={searchStyles.searchFormContainer}>
      <TextInput
        value={query}
        onChangeText={val => setQuery(val)}
        placeholder='Search'
        onSubmitEditing={() => console.log('Searching...')}
        style={searchStyles.searchTextInput}
      />
      <TouchableOpacity
        onPress={handleSearch}
        style={searchStyles.searchIcon}
      >
        <AntIcon name="search1" size={35} color="#fff" />

      </TouchableOpacity>
    </View>
  )

  return (
    <Container navigate={props.navigation.navigate}>
      {searchBar}
      {renderQueries()}
    </Container>
  )
}