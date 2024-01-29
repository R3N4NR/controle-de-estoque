import { CategoryProps } from "../../models/interfaces/category/category"
import prismaClient from "../../prisma"

class UpdateCategoryService{
    async execute({category_id, name}: CategoryProps){
        if(name === '' || category_id === ''){
            throw new Error('Empty fields are not allowed')
        } 
        const checkExistence =await prismaClient.category.findFirst({
            where:{
                name:name
            }
        })
        
        if(checkExistence){
            
            throw new Error("The entered category already exists")
            }
        
        
          
        try{
        const updateCategory = await prismaClient.category.update({
            where: {
                id: category_id,
            },
            data:{
                id: category_id,
                name: name,
            },
            
        })

        return updateCategory;
    } catch(err){
        console.log(err)
    }

    }
}

export {UpdateCategoryService}