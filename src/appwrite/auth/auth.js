import { Client, Account, ID } from "appwrite";
import { AppwriteConfig } from "../../utils/config/config";

const { endpoint, projectId } = AppwriteConfig;
const client = new Client()
    .setEndpoint(endpoint) // Your API Endpoint
    .setProject(projectId); // Your project ID
const account = new Account(client);






