import { Request, Response } from "express";
import db from "../database/connection";

export default class ConnectionsControler {
    async index(request: Request, response: Response){
        const totalconnections = await db('connections').count('* as total')
        const { total } = totalconnections[0]

        return response.json({total}).status(200)
    };
    
    async create(request: Request, response: Response){
        const { user_id } = request.body;
        try{
           
            await db('connections').insert({user_id});
            return response.status(201).json("Mandou bem");
        }catch(err){
            console.log(user_id)
            return response.status(400).json("Mandou mal")
        }
    };
}