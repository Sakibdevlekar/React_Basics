import config from "../conf/config";
import {Client, Databases, Storage, Query, ID} from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket

    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appDatabaseId,
                config.appCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw new Error(error)
        }
    }

    async updatedPost ({slug,title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appDatabaseId,
                config.appCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw new Error(error)
        }
    }


    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
                config.appDatabaseId,
                config.appCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    async getPost (slug){
        try {
            return await this.databases.getDocument(
                config.appDatabaseId,
                config.appCollectionId,
                slug
            )
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAllPosts(queries =  [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appDatabaseId,
                config.appCollectionId,
                queries
            )
        } catch (error) {
            throw new Error(error)
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            await this.bucket.createFile(
                config.apBucketId,
                ID.unique(),
                file
            );
            return true;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteFile(fileId){
        try {
            await this,this.bucket.deleteFile(fileId);
        } catch (error) {
            throw new Error(error);
            
        }    
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.apBucketId,
            fileId
            );
    }

}

const service = new Service();

export default service;