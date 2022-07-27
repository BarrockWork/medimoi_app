import jwtHandler from "./jwtHandler";
import {Navigate, useLocation} from "react-router-dom";
import React, {useContext} from "react";
import apiAxios from "./axios";
import {AuthProvider} from "../contexts/AuthContext";
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const authApi = {
    // send username and password to the auth server and get back credentials
    login: ({ email, password }) => {
        return apiAxios.post('/auth/login', { email, password })
            .then((response) => {
                // console.log('response', response)
                const { token, infoUser } = response.data;
                // Save token
                jwtHandler.setToken(token)
                //Save user
                jwtHandler.setUserInfo(infoUser)
                //Save permissions
                jwtHandler.setPermission(infoUser.role);
                return Promise.resolve();
            }, (err) => {
                throw new Error(err.response.data.message);
            });

    },
    // remove local credentials and notify the auth server that the user logged out
    logout: () => {
        //Delete all localstrorage variables
        jwtHandler.ereaseAll();
        return Promise.resolve()
    },
    // when the dataProvider returns an error, check if this is an authentication error
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            jwtHandler.ereaseToken();
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // when the user navigates, make sure that their credentials are still valid
    checkAuth: () => {
        // return jwtHandler.getToken() ? Promise.resolve() : Promise.reject();
        const dashToken = jwtHandler.getToken();
        if(dashToken) {
            return true;
            // return Promise.resolve();
        } else {
            return false
            // return Promise.reject();
        }

    },
    // get the user's profile
    getUser: () => {
        const userInfo = jwtHandler.getUserInfo();
        return Promise.resolve(userInfo)
    },
    // get the user permissions (optional)
    getPermission: () => {
        const role = jwtHandler.getPermission();
        return role ? Promise.resolve(role) : Promise.reject();
    },
};

export default authApi;