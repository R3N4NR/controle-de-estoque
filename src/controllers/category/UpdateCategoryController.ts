import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";
import { Request, Response } from "express";

class UpdateCategoryController{
    async handle(req: Request, res: Response){

        const { category_id, name}= req.body;

        const categoryService = new UpdateCategoryService();

        const categoryUpdate = await categoryService.execute({
            category_id,
            name,
        })

        return res.json(categoryUpdate)
    }
}

export{UpdateCategoryController};