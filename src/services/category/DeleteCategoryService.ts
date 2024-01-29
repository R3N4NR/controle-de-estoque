import { CategoryProps } from '../../models/interfaces/category/category';
import prismaClient from '../../prisma/index';

class DeleteCategoryService{

    async execute(category_id:string){

        const categorySelect = await prismaClient.category.delete({
            where:{
                id: category_id,
            }
        })

        return categorySelect;
    }
}

export {DeleteCategoryService};