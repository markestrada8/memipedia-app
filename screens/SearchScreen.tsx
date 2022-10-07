import React from "react"
import { Text } from 'react-native'
import Container from "../components/layouts/Container"

interface ISearchScreenProps {
  navigation: {
    navigate: (arg: string) => null;
  }
}

export default (props: ISearchScreenProps) => {
  return (
    <Container navigate={props.navigation.navigate}>
      <Text>Search Screen</Text>
    </Container>
  )
}