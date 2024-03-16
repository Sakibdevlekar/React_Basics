import config from "../conf/config";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                return this.login({email,password})
            }else{
            return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        // eslint-disable-next-line no-useless-catch
        try {
            const user = await this.account.get();
            if (user){
                return user;
            }else{
                return null
            }
        } catch (error) {
            throw error;
        }
    }
    async logout(){
        // eslint-disable-next-line no-useless-catch
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService