import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
  },
  card: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#bd93f9',
    padding: 7,
    backgroundColor: '#565967',
    color: 'black',
  },
  cardTextTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#bd93f9',
    fontSize: 15,
  },
  cardContent: {
    marginTop: 10,
  },
});
export default style;
