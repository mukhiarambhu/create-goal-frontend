import axios from "axios";

const API_URL = "localhost:8000/user";

//registeruser
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
//logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
};

export default authService;
