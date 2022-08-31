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
  return api.get("/api/user/getRetosDiariosDelUsuario",{params :{_id: userID}}).then((response) => {
      return response.data;
    });
};

const sumarPuntuacionAUsuarioPorElemento = (id,_elemento) => {   
  return api.post("/api/user/sumarPuntuacionAUsuarioPorElemento",{_id: id, elemento: _elemento}).then((response) => {
      return response.data;
    });
};

const getClasificacionPorPuntos = () => {   
  return api.get("/api/user/getClasificacionPorPuntos").then((response) => {
      return response.data;
    });
};

const getAllFood = () => {   
  return api.get("/api/user/getAllFood").then((response) => {
      return response.data;
    });
};

const getActividadesRecientes = () => {   
  return api.get("/api/user/getActividadesRecientes").then((response) => {
      return response.data;
    });
};

const marcarRetoComoCompletado = (id,itemID) => {   
  return api.post("/api/user/marcarRetoComoCompletado",{_id: id, idReto: itemID}).then((response) => {
      return response.data;
    });
};




const UserService = {
  getRecomendacionesPaciente,
  marcarRecomendacionComoCompletada,
  getInfoGamificacionPorId,
  getUltimosPesosUsuario,
  getRetosDiariosSegunNivel,
  sumarPuntuacionAUsuarioPorElemento,
  getClasificacionPorPuntos,
  getActividadesRecientes,
  marcarRetoComoCompletado,
  getAllFood
};
export default UserService;