import { Client, Account, ID } from "appwrite";
import { AppwriteConfig } from "../../utils/config/config";


interface AuthProps { 
    email: string,
    password: string,
    name?:string
}
const { endpoint, projectId } = AppwriteConfig;

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(endpoint).setProject(projectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }:AuthProps) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            error;
            throw error;
        }
    }

    async login({ email, password }:AuthProps) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            error;
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: ", error);
        }
        return null;
    }
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout() ::", error);
            throw error;
        }
    }
}


const authService = new AuthService();
export default authService


