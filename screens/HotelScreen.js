import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const HotelScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
    }, []);
    
  return (
    <SafeAreaView>
          <View>
              <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default HotelScreen