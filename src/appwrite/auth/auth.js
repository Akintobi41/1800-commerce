import { Client, Account, ID } from "appwrite";
import { AppwriteConfig } from "../../utils/config/config";

const { endpoint, projectId } = AppwriteConfig;

export class AuthService {
    client = new Client();

    constructor() {
        this.client.setEndpoint(endpoint).setProject(projectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                return this.login({})
            }
            else {
                return userAccount;
            }
        } catch (error) {
            error;
            throw error;
        }

    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            error;
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            "Appwrite service :: getCurrentUser() :: ", error;
        }
        return null;
    }
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            "Appwrite service :: logout() ::", error;
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService


