import { Client, Account, ID } from "appwrite";
import { AppwriteConfig } from "../../utils/config/config";

const { endpoint, projectId } = AppwriteConfig;

export class AuthService {
    client = new Client();
    account;
    // why is account initialized here;

    constructor() {
        this.client.setEndpoint(endpoint).setProject(projectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email,password})
            }
            else {
                console.log(userAccount)
                return userAccount;
            }
        } catch (error) {
            error;
            throw error;
        }
    }

    async login({ email, password }) {
        console.log(email,password)
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            error;
            console.log(error)
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


