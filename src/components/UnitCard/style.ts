import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginTop: 26,
    marginHorizontal: 2,
    borderRadius: 5,
    height: 90,
    position: 'relative',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.3,
  },
  image: {
    width: 60,
    height: 65,
  },
  damaged: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 60,
    zIndex: 100,
    opacity: 0.4,
    flexDirection: 'column',
  },
});

export default styles;
