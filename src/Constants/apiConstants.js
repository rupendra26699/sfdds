
export const BASE_URL = process.env.REACT_APP_API_SERVER;

export const API_VERSION = "api"

export const LOGIN_URL = `/auth/login/userlogin`;

export const PASSWORD_RESET_URL = `/auth/reset/password`;

export const CHANGE_PASSWORD_URL = `/auth/change/password`;

export const FORGET_PASSWORD_URL = `/auth/forget/password`

// Project Service

export const VIEW_PROJECT_LIST_URL = `/project/get/all`;

export const CREATE_PROJECT_URL = `/project/createProject`;

export const SEARCH_PROJECT_URL = `/project/searchProject`;

export const UPDATE_PROJECT_URL = `/project/updateProject`;



export const FETCH_ALL_PROJECTS_QUERY_KEY = "viewProjects";

//accounts  service 

export const VIEW_ACCOUNT_LIST_URL = `/accounts/get/all`;


export const CREATE_ACCOUNT_URL = `/accounts/createAccount`;

export const EDIT_ACCOUNT_URL = `/accounts/editAccount`;

export const FETCH_ALL_ACCOUNTS_QUERY_KEY = "viewAccounts";

export const CREATE_ACCOUNT_QUERY_KEY = "createAccount";