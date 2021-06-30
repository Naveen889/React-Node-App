import config from "./Config";
import axios from "axios"

const loginCall = {
    login: async (data) => {
        return await axios.post(config.Base_URL + "/user/login", data);
    }
}


export default loginCall