import { GetOneCategoryService } from "../../services/category/GetOneCategoryService";
import { Request, Response } from "express";


class GetOneCategoryController{
    async handle(req: Request, res: Response){

        const category_id = req.category_id;

        const getService = new GetOneCategoryService();

        const findCategory = await getService.execute(category_id);

        return res.json(findCategory)
    }
}

export {GetOneCategoryController}