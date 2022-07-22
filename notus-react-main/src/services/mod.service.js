import api from "../api";

  const getRegistroComidaDePacientePorFecha = (id,_date) => {
    return api.get("/api/mod/getRegistroComidaDePacientePorFecha",{params :{_id: id, date:_date}}).then((response) => {
        return response.data;
      });
  };

  const getHistorialPesoPaciente = (id) => {
    
    return api.get("/api/mod/getHistorialPesoPaciente",{params :{_id: id}}).then((response) => {
        return response.data;
      });
  };

  const insertarPesoPacienteEnHistorial = (id,_weight) => {
    return api.post("/api/mod/insertarPesoPacienteEnHistorial",{_id: id, weight:_weight}).then((response) => {
        return response.data;
      });
  };

  const ModService = {
    getRegistroComidaDePacientePorFecha,
    getHistorialPesoPaciente,
    insertarPesoPacienteEnHistorial,
  };

  export default ModService;