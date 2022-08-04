import authHeader from "./auth-header";
import api from "../api";


const getRecomendacionesPaciente = (id) => {   
  return api.get("/api/user/getRecomendacionesDelPaciente",{params :{_id: id}}).then((response) => {
      return response.data;
    });
};


const marcarRecomendacionComoCompletada = (id,itemID) => {   
  return api.post("/api/user/marcarRecomendacionComoCompletada",{_id: id, idRec: itemID}).then((response) => {
      return response.data;
    });
};

const getInfoGamificacionPorId = (userID) => {   
  return api.get("/api/user/getInfoGamificacionPorId",{params :{_id: userID}}).then((response) => {
      return response.data;
    });
};

const getUltimosPesosUsuario = (userID) => {   
  return api.get("/api/user/getUltimosPesosUsuario",{params :{_id: userID}}).then((response) => {
      return response.data;
    });
};

const getRetosDiariosSegunNivel = (userID) => {   
  return api.get("/api/user/getRetosDiariosSegunNivel",{params :{_id: userID}}).then((response) => {
      return response.data;
    });
};

const sumarPuntuacionAUsuarioPorElemento = (id,_elemento) => {   
  return api.post("/api/user/sumarPuntuacionAUsuarioPorElemento",{_id: id, elemento: _elemento}).then((response) => {
      return response.data;
    });
};

const UserService = {
  getRecomendacionesPaciente,
  marcarRecomendacionComoCompletada,
  getInfoGamificacionPorId,
  getUltimosPesosUsuario,
  getRetosDiariosSegunNivel,
  sumarPuntuacionAUsuarioPorElemento
};
export default UserService;