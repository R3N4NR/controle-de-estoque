import {Request, Response} from 'express';
import { ListProductByCategoryService } from '../../services/product/LIstProductByCategoryService';

class ListProductByCategoryController{

    async handle(req: Request, res: Response){
        const productId = req.category_id;
        const listProductService = new ListProductByCategoryService();

        const products = await listProductService.execute(productId)
        
        return res.json(products)
    }
}

export {ListProductByCategoryController}