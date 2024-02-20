import axios, {AxiosError} from 'axios';

export const Login = async (
  username: string,
  password: String,
  token: String,
): Promise<Object> => {
  console.log('the user, passs, token is:');
  console.log(username, password, token);
  const url = '{}/entry_point';
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const data = {
    query: `
      query ($username: String!, $password: String!) {
        getUser(username: $username, password: $password)
      }
    `,
    variables: {
      username: username,
      password: password,
    },
    operation_name: 'Login',
  };

  try {
    console.log('Sending request...');
    const response = await axios.post(url, data, {headers});
    console.log('Response received:...');

    if (
      response &&
      response.data &&
      response.data.response &&
      response.data.response.getUser
    ) {
      const userData = response.data.response.getUser;
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
