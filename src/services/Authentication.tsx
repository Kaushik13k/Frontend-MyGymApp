import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';

export const GetAuthToken = async (username: string): Promise<string> => {
  const url = `http://${Config.API_BASE_URL}/api/v1/authentication`;

  const headers = {
    'Content-Type': 'application/json',
    'Operation-Type': 'token',
  };
  const data = {
    query: `
      query ($userAvailable: UserAvailable!) { token(userInput: $userAvailable) }
      `,
    variables: {
      userAvailable: {username: username},
    },
  };

  try {
    console.log('Sending request...');
    const response = await axios.post(url, data, {headers});
    console.log('Response received...');
    console.log('Data is:', response.data);

    if (response && response.data && response.data.data.token) {
      const token = response.data.data.token;
      return token;
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
