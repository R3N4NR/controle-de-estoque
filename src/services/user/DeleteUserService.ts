import prismaClient from "../../prisma";
import { Response, Request } from "express";
class DeleteUserService{

    async execute(user_id: string){

        const user = prismaClient.user.delete({
            where:{
                id: user_id
            }
        })
        return user
    }
}

export {DeleteUserService};