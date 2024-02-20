import axios, {AxiosError} from 'axios';

export const GetAuthToken = async (username: string): Promise<string> => {
  const url = '{}/entry_point';
  const headers = {
    'Content-Type': 'application/json',
    'Operation-name': 'Token',
  };
  const data = {
    query: `
      query ($username: String!) { getToken(username: $username) }
      `,
    variables: {
      username: username,
    },
    operation_name: 'Token',
  };

  try {
    console.log('Sending request...');
    const response = await axios.post(url, data, {headers});
    console.log('Response received...');

    if (
      response &&
      response.data &&
      response.data.response &&
      response.data.response.getToken
    ) {
      const {token} = response.data.response.getToken;
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
