import api from "../api";

  const getTodosLosMedicos = () => {
    return api.get("/api/admin/getAllModerators").then((response) => {
        return response.data;
      });
  };

  const getPacientesVinculadosAlModerador = (id_mod) => {
    return api.get("/api/admin/getPacientesVinculadosAlModerador",{params :{_id: id_mod}}).then((response) => {
        return response.data;
      });
  };

  const vincularUsuarioConMod = (dni,id_mod) => {
    return api.post("/api/admin/vincularUsuarioConMod",{dni,id_mod});
  };

  const AdminService = {
    getTodosLosMedicos,
    vincularUsuarioConMod,
    getPacientesVinculadosAlModerador,
  };

  export default AdminService;