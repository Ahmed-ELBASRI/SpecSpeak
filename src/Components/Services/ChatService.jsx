import axios from 'axios';

const BASE_URL = 'http://localhost:8080/gpt';
 
const authHeader = () => {
  
  if (localStorage.getItem('token') !== null) {
      return { "Authorization": `Bearer ${localStorage.getItem('token')}`}
  } else {
      return {}
  }
}
const token =authHeader();

export const extractApiDetails = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await axios.post(`${BASE_URL}/extract`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', ...token
      },
    },);
    return response.data;
  } catch (error) {
    console.error('Error extracting API details:', error);
    throw error;
  }
}

export const analyzeAPI = async (apiDescription) => {
  try {
    const response = await axios.post(`${BASE_URL}/analyze`, {
      apiDescription,
    }, 
    {headers:token});
    console.log('Full Response:', response);
    return response.data; 
  } catch (error) {
    console.error('Error analyzing API:', error);
    throw error;
  }
};
export const analyzeSelectedEndpoints = async (selectedEndpoints) => {
  try {
    const response = await axios.post(`${BASE_URL}/analyze`, selectedEndpoints,{ headers: token });
    return response.data;
  } catch (error) {
    console.error('Error analyzing selected endpoints:', error);
    throw error;
  }
};
export const continueConversation = async (message) => {
  try {
    const response = await axios.post(`${BASE_URL}/continue`, {
      message,
    },
    {headers:token});
    return response.data;
  } catch (error) {
    console.error('Error continuing conversation:', error);
    throw error;
  }
};

export const executeAPI = async (apiEndpoint, method, body) => {
  try {
    const response = await axios.post(`${BASE_URL}/execute`, {
      apiEndpoint,
      method,
      body,
    },
    {headers:token});
    return response.data;
  } catch (error) {
    console.error('Error executing API:', error);
    throw error;
  }
};

