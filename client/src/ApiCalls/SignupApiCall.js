import config from "./Config";
import axios from "axios";



const SignupApi = {

    signUp: async (data) => {
        return await axios.post(config.Base_URL + "/user/saveuser", data);
    }

}

export default SignupApi