import axios from 'axios';
axios.defaults.baseURL = `https://652e6fb00b8d8ddac0b1600f.mockapi.io`;

export const getQuizes = async () => {
  const response = await axios.get(`/quizes`);
  return response.data;
};

export const getQuizeById = async id => {
  const response = await axios.get(`/quizes/${id}`);
  return response.data;
};

export const addQuiz = async data => {
  const response = await axios.post(`/quizes`, data);
  return response.data;
};

export const dltQuiz = async id => {
  const response = await axios.delete(`/quizes/${id}`);
  return response.data;
};
