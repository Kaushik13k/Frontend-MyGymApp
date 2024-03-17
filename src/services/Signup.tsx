import axios, {AxiosError} from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';

export const Signup = async (
  username: string,
  password: String,
  email: String,
): Promise<Object> => {
  console.log('the user, passs, token is:');
  console.log(username, password, email);
  const url = `http://${Config.API_BASE_URL}/api/v1/authentication`;

  const headers = {
    'Content-Type': 'application/json',
    'Operation-Type': 'signup',
  };
  const data = {
    query: `
        mutation ($inputSignup: InputSignup!) { signup(userInput: $inputSignup) { username email } }
    `,
    variables: {
      inputSignup: {
        username: username,
        email: email,
        password: password,
      },
    },
  };

  try {
    console.log('Sending request...');
    const response = await axios.post(url, data, {headers});
    console.log('Response received:...');

    if (response && response.data && response.data.data.signup) {
      const userData = response.data.data.signup;
      return userData;
    } else {
      Alert.alert('Error', 'Invalid response from server');
      throw new Error('Invalid response from server');
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('Axios error:', axiosError.message);
      throw axiosError;
    } else {
      console.error('General error:', error.message);
      throw error;
    }
  }
};
