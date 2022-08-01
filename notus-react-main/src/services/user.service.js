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
};;

const UserService = {
  getRecomendacionesPaciente,
  marcarRecomendacionComoCompletada
};
export default UserService;