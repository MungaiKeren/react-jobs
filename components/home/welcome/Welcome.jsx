import React, {useState} from 'react'
import 
{
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello John Doe!</Text>
        <Text style={styles.welcomeMessage}>Find your next job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            placeholder=''
            style={styles.searchInput}
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome