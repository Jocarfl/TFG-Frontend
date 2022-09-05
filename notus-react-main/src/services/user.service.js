import authHeader from "./auth-header";
import api from "../api";


const getRecomendacionesPaciente = (id) => {   
  return api.get("/api/user/getRecomendacionesDelPaciente",{params :{_id: id},headers: authHeader()}).then((response) => {
      return response.data;
    });
};

const marcarRecomendacionComoCompletada = (id,itemID) => {   
  return api.post("/api/user/marcarRecomendacionComoCompletada",{_id: id, idRec: itemID},{ headers: authHeader() }).then((response) => {
      return response.data;
    });
};

const getInfoGamificacionPorId = (userID) => {   
  return api.get("/api/user/getInfoGamificacionPorId",{params :{_id: userID},headers: authHeader()}).then((response) => {
      return response.data;
    });
};

const getUltimosPesosUsuario = (userID) => {   
  return api.get("/api/user/getUltimosPesosUsuario",{params :{_id: userID},headers: authHeader()}).then((response) => {
      return response.data;
    });
};

const getRetosDiariosSegunNivel = (userID) => {   
  return api.get("/api/user/getRetosDiariosDelUsuario",{params :{_id: userID},headers: authHeader()}).then((response) => {
      return response.data;
    });
};

const sumarPuntuacionAUsuarioPorElemento = (id,_elemento) => {   
  return api.post("/api/user/sumarPuntuacionAUsuarioPorElemento",{_id: id, elemento: _elemento},{ headers: authHeader() }).then((response) => {
      return response.data;
    });
};

const getClasificacionPorPuntos = () => {   
  return api.get("/api/user/getClasificacionPorPuntos",{ headers: authHeader() }).then((response) => {
      return response.data;
    });
};

const getAllFood = () => {   
  return api.get("/api/user/getAllFood",{ headers: authHeader() }).then((response) => {
      return response.data;
    });
};

const getActividadesRecientes = () => {   
  return api.get("/api/user/getActividadesRecientes",{ headers: authHeader() }).then((response) => {
      return response.data;
    });
};

const insertarComidaDiariaPorId = (id,comidas) => {
  return api.post("/api/user/insertFoodRegistration",{id,comidas },{ headers: authHeader() });
};

const marcarRetoComoCompletado = (id,itemID) => {   
  return api.post("/api/user/marcarRetoComoCompletado",{_id: id, idReto: itemID},{ headers: authHeader() }).then((response) => {
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
  getAllFood,
  insertarComidaDiariaPorId
};
export default UserService;