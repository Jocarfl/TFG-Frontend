import api from "../api";
import authHeader from "./auth-header";

  const getRegistroComidaDePacientePorFecha = (id,_date) => {
    return api.get("/api/mod/getRegistroComidaDePacientePorFecha",{params :{_id: id, date:_date}},{ headers: authHeader() }).then((response) => {
        return response.data;
      });
  };

  const getHistorialPesoPaciente = (id) => {
    
    return api.get("/api/mod/getHistorialPesoPaciente",{params :{_id: id}},{ headers: authHeader() }).then((response) => {
        return response.data;
      });
  };

  const insertarPesoPacienteEnHistorial = (id,_weight) => {
    return api.post("/api/mod/insertarPesoPacienteEnHistorial",{_id: id, weight:_weight},{ headers: authHeader() }).then((response) => {
        return response.data;
      });
  };

  const insertarRecomendacionPaciente = (id,_title,_description) => {
    return api.post("/api/mod/insertarRecomendacionPaciente",{_id: id, title: _title, description: _description},{ headers: authHeader() }).then((response) => {
        return response.data;
      });
  };

  const getRecomendacionesPaciente = (id) => {
    
    return api.get("/api/mod/getRecomendacionesDelPaciente",{params :{_id: id}},{ headers: authHeader() }).then((response) => {
        return response.data;
      });
  };

  const ModService = {
    getRegistroComidaDePacientePorFecha,
    getHistorialPesoPaciente,
    insertarPesoPacienteEnHistorial,
    insertarRecomendacionPaciente,
    getRecomendacionesPaciente,
  };

  export default ModService;