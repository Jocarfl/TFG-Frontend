import api from "../api";
import authHeader from './auth-header';

  const getTodosLosMedicos = () => {
    return api.get("/api/admin/getAllModerators",{ headers: authHeader() }).then((response) => {
        return response.data;
      });
  };

  const getPacientesVinculadosAlModerador = (id_mod) => {
    return api.get("/api/admin/getPacientesVinculadosAlModerador",{params :{_id: id_mod}},{ headers: authHeader() }).then((response) => {
        return response.data;
      });
  };

  const vincularUsuarioConMod = (dni,id_mod) => {
    return api.post("/api/admin/vincularUsuarioConMod" ,{dni,id_mod},{ headers: authHeader() });
  };

  const AdminService = {
    getTodosLosMedicos,
    vincularUsuarioConMod,
    getPacientesVinculadosAlModerador,
  };

  export default AdminService;