import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  footerContent: {
    width: '70%',
  },
  footerHeading: {
    marginLeft: '5%',
    marginTop: '5%',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  footerSummary: {
    marginLeft: '5%',
    marginTop: '5%',
    color: 'white',
  },
  footerRightIcon: {
    borderWidth: 4,
    borderColor: '#ffcc02',
    height: 150,
    width: 35,
    marginLeft: 30,
    marginTop: -50,
  },
});
