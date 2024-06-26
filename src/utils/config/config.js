// Centralized configuration file for Appwrite constants
const dataId = import.meta.env.VITE_APP_APPWRITE_DATABASE_ID;
const endpoint = import.meta.env.VITE_APP_APPWRITE_URL;
const projectId = import.meta.env.VITE_APP_APPWRITE_PROJECT_ID;


export const AppwriteConfig = {
    endpoint, projectId, dataId
};
