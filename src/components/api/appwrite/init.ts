import { Client, Account } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("athesv");

export const account = new Account(client);
