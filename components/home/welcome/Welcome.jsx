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


const jobTypes = ["Full-Time", "Part-Time", "Freelance", "Internship"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello John Doe!</Text>
        <Text style={styles.welcomeMessage}>Find your next job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            placeholder='What are you looking for?'
            style={styles.searchInput}
            value=""
            onChange={()=>{}}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small / 2}}
        />
      </View>
    </View>
  )
}

export default Welcome