import config from "./Config";
import axios from "axios"

const TopicApiCall = {
    getAllTopics: async (data) => {
        return await axios.get(config.Base_URL + "/topic/getalltopics");
    }
}


export default TopicApiCall