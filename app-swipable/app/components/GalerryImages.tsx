import { Dimensions, Image, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const imageUrls = [
  'https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
  'https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_1280.jpg'
];

const GalerryImages = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.row}>
            {imageUrls.map((url, index) => (
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_640.jpg'
                }}
                style={styles.image}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default GalerryImages;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.5
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    gap: 10
  },

  image: {
    width: width * 0.2,
    height: height * 0.2,
    borderRadius: 8,
    resizeMode: 'cover'
  }
});
