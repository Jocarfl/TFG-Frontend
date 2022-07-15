import api from "../api";

const getTodosLosMedicos = () => {
    return api.get("/api/admin/getAllModerators").then((response) => {
        console.log(response.data);
        return response.data;
      });
  };

  const AdminService = {
    getTodosLosMedicos,
  };

  export default AdminService;