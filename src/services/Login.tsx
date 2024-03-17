import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';

export const Login = async (
  username: string,
  password: String,
  token: String,
): Promise<Object> => {
  console.log('the user, passs, token is:');
  console.log(username, password, token);
  const url = `http://${Config.API_BASE_URL}/api/v1/authentication`;

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Operation-Type': 'login',
  };
  const data = {
    query: `
        query ($login: Login!) { login(userInput: $login) { user { username, email }, token } }
    `,
    variables: {
      login: {
        username: username,
        password: password,
      },
    },
  };

  try {
    console.log('Sending request...');
    const response = await axios.post(url, data, {headers});
    console.log('Response received:...');

    if (
      response &&
      response.data &&
      response.data.data.login &&
      response.data.data.login.user &&
      response.data.data.login.token
    ) {
      const userData = response.data.data.login;
      console.log(typeof userData);
      return userData;
    } else {
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
