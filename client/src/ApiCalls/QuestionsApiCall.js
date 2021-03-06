import axios from "axios";
import GetAuthToken from "../Utils/GetAuthToken";
import config from "./Config";

const QuestionsApiCall = {

    saveQuestion: async (data) => {
        const token = await GetAuthToken();
        return await axios.post(config.Base_URL + "/question/savequestion", data, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
    },
    getAllQuestions: async () => {
        const token = await GetAuthToken();
        return await axios.get("/question/getallquestions", {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
    },
    getAllQuestionsByTopicId: async (id) => {
        const token = await GetAuthToken();
        return await axios.get(config.Base_URL + `/question/getquestionsbytopicid?id=${id}`, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
    },
    getQuestionById: async (id) => {
        const token = await GetAuthToken();
        return await axios.get(config.Base_URL + `/question/getquestion?id=${id}`, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
    },
    updateQuestion: async (data) => {
        const token = await GetAuthToken();
        return await axios.post(config.Base_URL + "/question/updatequestion", data, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
    },
    deleteQuestion: async (QuestionId) => {
        const token = await GetAuthToken();
        return axios.delete(config.Base_URL + `/question/deletequestion?id=${QuestionId}`, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
    }

}

export default QuestionsApiCall