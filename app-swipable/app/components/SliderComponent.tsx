import 'setimmediate';

import { Dimensions, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

import AntDesign from '@expo/vector-icons/AntDesign';

import DataTable from './DataTable';
import Galerry from './Galerry';
import Products from './Products';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  buttonWrapperStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  paginationStyle: {
    marginRight: deviceWidth * 0.7,
    marginBottom: deviceHeight * 0.02
  },
  arrowBtnStyle: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: 'blue'
  },
  slide: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal: 30
  },
  img: {
    alignSelf: 'center',
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: deviceHeight * 0.5,
    width: deviceWidth * 0.9
  },
  title: {
    fontWeight: 'bold',
    color: '#0c0c0cff',
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 32
  },
  text: {
    color: '#0c0c0c7c',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10
  }
});

const ArrowBtn = ({ direction }: { direction: 'left' | 'right' }) => (
  <View style={styles.arrowBtnStyle}>
    <AntDesign
      name={direction === 'left' ? 'arrow-left' : 'arrow-right'}
      size={24}
      color='white'
    />
  </View>
);

export default function SliderComponent() {
  return (
    <Swiper
      buttonWrapperStyle={styles.buttonWrapperStyle}
      showsButtons={false}
      showsPagination={false}
      paginationStyle={styles.paginationStyle}
    >
      <View style={styles.slide}>
        <Products />
      </View>
      <View style={styles.slide}>
        <DataTable />
      </View>
      <View style={styles.slide}>
        <Galerry />
      </View>
    </Swiper>
  );
}
