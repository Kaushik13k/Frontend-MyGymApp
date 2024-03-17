import Toast from 'react-native-toast-message';

const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateUsername = username => {
  return username.length > 8;
};

const validatePassword = password => {
  return password.length >= 8;
};

export const handleEmailChange = (text: string) => {
  const isValid = validateEmail(text);
  if (!isValid) {
    Toast.show({
      type: 'error',
      position: 'top',
      topOffset: 100,
      text1: 'Email Error',
      text2: 'Invalid email address',
    });
  }
  return isValid;
};

export const handleUsernameChange = (text: string) => {
  const isValid = validateUsername(text);
  if (!isValid) {
    Toast.show({
      type: 'error',
      position: 'top',
      topOffset: 100,
      text1: 'Username Error',
      text2: 'Username must be longer than 8 characters',
    });
  }
  return isValid;
};

export const handlePasswordChange = (text: string) => {
  const isValid = validatePassword(text);
  if (!isValid) {
    Toast.show({
      type: 'error',
      position: 'top',
      topOffset: 100,
      text1: 'Password Error',
      text2: 'Password must be at least 8 characters long',
    });
  }
  return isValid;
};
