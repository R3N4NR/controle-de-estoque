import { CategoryProps } from "../../models/interfaces/category/category";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { Request, Response } from "express";

class CreateCategoryController{

    async handle(req: Request, res: Response){

        const {name}:CategoryProps = req.body;

        const createCategory = new CreateCategoryService();

        const category = await createCategory.execute({
            name})
        return res.json(category)
    }
}

export {CreateCategoryController};