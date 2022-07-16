import api from "../api";

const getTodosLosMedicos = () => {
    return api.get("/api/admin/getAllModerators").then((response) => {
        return response.data;
      });
  };

  const vincularUsuarioConMod = (dni,id_mod) => {
    return api.post("/api/admin/vincularUsuarioConMod",{dni,id_mod});
  };

  const AdminService = {
    getTodosLosMedicos,
    vincularUsuarioConMod,
  };

  export default AdminService;