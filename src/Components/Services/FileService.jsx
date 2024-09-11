// import axios from 'axios';

// // Base URL for the API
// const BASE_URL = 'http://localhost:8080/gpt'; // Adjust this to your server's base URL if different

// // Function to handle file uploads for OpenAPI file parsing
// export const uploadOpenAPIFile = async (file) => {
//   const formData = new FormData();
//   formData.append('file', file);

//   try {
//     const response = await axios.post(`${BASE_URL}/upload`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading OpenAPI file:', error);
//     throw error;
//   }
// };
