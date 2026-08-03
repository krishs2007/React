import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const user = await account.create({
//     userId: ID.unique(), 
//     email: 'email@example.com', 
//     password: 'password'
// });

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appWriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name);
           if(userAccount)
           {
                // call another Method
            }
            else return userAccount 
        } catch(error) {
            throw error;
        }
    }
    async login({email, password})
    {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default AuthService