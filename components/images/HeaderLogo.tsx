import { Image } from 'react-native'

const logoImagePath = require('../../assets/book-logo.png');

export default () => {
  return <Image style={{ height: 30, width: 29 }} source={logoImagePath} />
}

