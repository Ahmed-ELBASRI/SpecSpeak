import axios from 'axios';

const BASE_URL = 'http://localhost:8080/gpt';
export const analyzeAPI = async (apiDescription) => {
  try {
    const response = await axios.post(`${BASE_URL}/analyze`, {
      apiDescription,
    });
    console.log('Full Response:', response); // Log the entire response
    return response.data; // This should be the raw string data from your backend
  } catch (error) {
    console.error('Error analyzing API:', error);
    throw error;
  }
};
export const analyzeSelectedEndpoints = async (selectedEndpoints) => {
  try {
    const response = await axios.post(`${BASE_URL}/analyze`, selectedEndpoints);
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
    });
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
    });
    return response.data;
  } catch (error) {
    console.error('Error executing API:', error);
    throw error;
  }
};
export const extractApiDetails = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${BASE_URL}/extract`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error extracting API details:', error);
    throw error;
  }
};
