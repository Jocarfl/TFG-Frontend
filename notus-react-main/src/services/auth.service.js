import api from "../api";

const register = (username, email, password) => {
    return api.post("/api/auth/signup" ,{
      username,
      email,
      password,
    });
  };

  const login = (username, password) => {
    return api.post("/api/auth/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
  };
  export default AuthService;