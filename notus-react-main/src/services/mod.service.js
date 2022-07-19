import api from "../api";

  const getRegistroComidaDePacientePorFecha = (id,_date) => {
    return api.get("/api/mod/getRegistroComidaDePacientePorFecha",{params :{_id: id, date:_date}}).then((response) => {
        return response.data;
      });
  };

  const ModService = {
    getRegistroComidaDePacientePorFecha,
  };

  export default ModService;