import { useState } from "react"
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import Container from "../components/layouts/Container"

interface ISearchScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  }
}

export default (props: ISearchScreenProps) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    console.log('Searching for: ', query)
  }

  const searchBar = (
    <View>
      <TextInput
        value={query}
        onChangeText={val => setQuery(val)}
        placeholderTextColor='white'
        placeholder='Search'
        onSubmitEditing={() => console.log('Searching...')}
      />
      <TouchableOpacity
        onPress={handleSearch}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: 'white' }}>Search</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <Container navigate={props.navigation.navigate}>
      <Text>Search Screen</Text>
      {searchBar}
    </Container>
  )
}