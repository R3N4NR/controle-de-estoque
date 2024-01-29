import { CategoryProps } from "../../models/interfaces/category/category";
import prismaClient from "../../prisma";

class CreateCategoryService{
    async execute({name}: CategoryProps){
        if(!name){
            throw new Error("Category Name field must be filled !")
        }

        const categoryExists = await prismaClient.category.findFirst({
            where:{
                name:name
            }
        })

        if(categoryExists){
            throw new Error("The category already exists !")
        }

        try{
            const category = await prismaClient.category.create({
                data:{
                    name: name
                },
                select:{
                    id: true,
                    name: true,
                    create_at: true,
                }
            })
            return category;
        }catch(err){
            console.log('Erro: ' , err)
        }
    }
}

export {CreateCategoryService};