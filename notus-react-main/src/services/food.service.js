import api from "../api";

const insertarComidaDiariaPorId = (id,comidas) => {
    return api.post("/api/user/insertFoodRegistration",{
      id,
      comidas
    });
  };

  const FoodService = {
    insertarComidaDiariaPorId,
  };

  export default FoodService;