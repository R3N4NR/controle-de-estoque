import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController{

    async handle(req: Request, res: Response){
        const categoryId = req.query.category_id as string;

        const deleteCategory = new DeleteCategoryService();

        const category = await deleteCategory.execute(categoryId)
    
        return res.json(category);
    }
}

export {DeleteCategoryController};