import axios from "axios";

const primaChiamata = () => {
    return axios.get('urlPrimaChiamata');
}
const secondaChiamata = () => {
  return axios.get("urlSecondaChiamata");
};


export { primaChiamata, secondaChiamata };