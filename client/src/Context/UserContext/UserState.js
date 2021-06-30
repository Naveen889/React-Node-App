import React, { useReducer } from 'react'
import UserContext from "./UserContext";
import UserReducer from './UserReducer';
import UserApiCall from "../../ApiCalls/UsersApiCall";

import UserActions from "./UserActions";


const UserState = (props) => {
    const initialState = {
        users: [],
    }
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const saveUser = (user) => {
        dispatch({
            type: UserActions.SAVE_USER,
            payload: user
        })
    }

    const getUser = (id) => {
        dispatch({
            type: UserActions.GET_USER,
            payload: id
        })
    }
    const deleteUser = (id) => {
        dispatch({
            type: UserActions.DELETE_USER,
            payload: id
        })
    }

    const getAllUsers = async () => {
        await UserApiCall.getAllUsers()
            .then(response => {
                dispatch({
                    type: UserActions.GET_ALL_USERS,
                    payload: response.data.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const updateUser = (user) => {
        dispatch({
            type: UserActions.UPDATE_USER,
            payload: user
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            saveUser,
            deleteUser,
            updateUser,
            getUser,
            getAllUsers
        }}>
            { props.children}
        </UserContext.Provider >
    )
}

export default UserState;
