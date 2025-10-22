import 'setimmediate';

import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly'
  },
  img: {
    alignSelf: 'center',
    height: 75,
    width: 75,
    borderRadius: 100
  }
});

export default function GalerrySlider() {
  return (
    <Swiper showsButtons={true} showsPagination={true}>
      <View style={styles.slide}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_640.jpg'
          }}
          style={styles.img}
        />
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_640.jpg'
          }}
          style={styles.img}
        />
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_640.jpg'
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_640.jpg'
          }}
          style={styles.img}
        />
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_640.jpg'
          }}
          style={styles.img}
        />
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_640.jpg'
          }}
          style={styles.img}
        />
      </View>
    </Swiper>
  );
}
