import api from "../api";

const register = (username, email, password, first_name ,second_name, dni, born_date, roles) => {
    return api.post("/api/auth/signup",{
      username,
      email,
      password,
      first_name,
      second_name, 
      dni,
      born_date, 
      roles,
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

  const isAuthenticated = () => {
    if (getCurrentUser() != null) return true;
    return false;
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    isAuthenticated,
  };
  export default AuthService;