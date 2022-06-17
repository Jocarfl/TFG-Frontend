import axios from "axios";
import authHeader from "./auth-header";
import api from "../api";

const getPublicContent = () => {
  return api.get("/api/test/all");
};
const getUserBoard = () => {
  return api.get("/api/test/user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return api.get("/api/test/mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return api.get("/api/test/admin", { headers: authHeader() });
};
const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
export default UserService;