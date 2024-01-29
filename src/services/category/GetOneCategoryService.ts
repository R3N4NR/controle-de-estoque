import prismaClient from "../../prisma";

class GetOneCategoryService{

    async execute(category_id:string){
      
        const category = await prismaClient.category.findFirst({
            where: {
              id: category_id
            },
            select: {
              id: true,
              name: true,
              products: true
            }
          })
          return category;
}}

export {GetOneCategoryService}