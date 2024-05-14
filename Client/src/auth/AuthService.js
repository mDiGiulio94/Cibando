import axios from "axios";

const apiBaseUrl = "/api/users/";

//all'interno di questo si trova solo il metodo di login

export const login = async (email, password) => {
  try {
    const response = await axios.post(apiBaseUrl + "login", {
      email,
      password,
    });
    const userData = response.data;
    return { success: true, userData };
  } catch (error) {
    console.log("errore nel login", error);
    return { success: false };
  }
};

/*
GET i dati viaggiano nell'url

POST i dati sono nascosti nel codice

*/
