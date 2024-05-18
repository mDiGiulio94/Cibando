import axios from "axios";

const apiBaseUrl = "/api/users/";

async function insertUser(dati) {
  try {
    const response = await axios.post(apiBaseUrl + "signup", dati);
    console.log("risposta: ", response.data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const getDetail = async (email) => {

  try {
    const response = await axios.get(apiBaseUrl + "userDetail/" + email);
return response
} catch (error) {
  console.log(error)
  return error;
}
}




//Put

const modificaDetail = async (id, nuoviDati) => {
  try {
    const response = await axios.put(apiBaseUrl + id, nuoviDati)
    return response

  } catch (error) {
    console.log(error)
    return error
  }
}

const UserApi = {
  insertUser: insertUser,
  getDetail: getDetail,
  modificaDetail: modificaDetail
};

export default UserApi;

//Queste sono chiamate operazioni CRUD = CreateReadUpdateDelete

//lavorare come stiamo adesso si dice in STACK MERN (Mongo Express React Node) perché abbiamo utilizzato uno stack completo di backend e frontend

//la chiamata post ha necessità di un body come anche la put, il primo è per caricare dei dati il secondo per modificare dati già esistenti LE PUT oltre al body possono avere anche url params

//le get possono avere dei parametri URL (come id o altri parametri)

//delete necessità di url paramas

//i parametri urls servono a filtrare

/*se in una chiamata bisogna fare una post nonostante serva passare un corpo si può passare un oggetto vuoto 

async function insertUser(dati) {
    const corpo = {} 
    try {
        const response = await axios.post(apiBaseUrl + "signup", corpo)
}
}



*/
