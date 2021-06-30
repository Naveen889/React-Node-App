import QuestionActions from "./QuestionActions";

const QuestionsReducer = (state, action) => {
    switch (action.type) {
        case QuestionActions.SAVE_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.payload]
            }
        case QuestionActions.UPDATE_QUESTION:
            return {}
        case QuestionActions.DELETE_QUESTION:
            return {}
        case QuestionActions.GET_QUESTION: {
            return {}
        }
        case QuestionActions.GET_ALL_QUESTIONS: {
            return {
                ...state,
                questions: action.payload
            }
        }
        default:
            return state;

    }
}

export default QuestionsReducer;