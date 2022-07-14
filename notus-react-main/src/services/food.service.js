import api from "../api";

const insertarComidaDiariaPorId = (id,data) => {
    return api.post("/api/food/insertFoodRegistration",{
      id,
      data
    });
  };

  const FoodService = {
    insertarComidaDiariaPorId,
  };

  export default FoodService;