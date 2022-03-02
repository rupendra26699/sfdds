import apiCaller from "./apiCaller";

import {
  VIEW_PROJECT_LIST_URL,
  FETCH_ALL_PROJECTS_QUERY_KEY,
  VIEW_ACCOUNT_LIST_URL,
  FETCH_ALL_ACCOUNTS_QUERY_KEY,
} from "../Constants/apiConstants";

async function getAllProjects() {
  let allProjects = await apiCaller.get(VIEW_PROJECT_LIST_URL);
  return allProjects;
}

async function getAllAccounts() {
  let allAccounts = await apiCaller.get(VIEW_ACCOUNT_LIST_URL);
  return allAccounts;
}

const apiQueries = {
  [FETCH_ALL_PROJECTS_QUERY_KEY]: getAllProjects,
  [FETCH_ALL_ACCOUNTS_QUERY_KEY]: getAllAccounts,
};

export default apiQueries;
