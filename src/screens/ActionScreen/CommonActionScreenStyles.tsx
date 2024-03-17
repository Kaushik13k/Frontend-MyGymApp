import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#ffffff',
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 30,
    height: 60,
  },

  button: {
    backgroundColor: '#ffcc02',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  error: {
    borderColor: 'red',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ffcc02',
    borderRadius: 5,
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#ffcc02',
    borderColor: '#ffcc02',
  },
  checkboxLabel: {
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  asterisk: {
    color: 'red',
  },
});
