import { ListAllProductsService } from "../../services/product/ListAllProductsService";
import {Request, Response} from 'express'
class ListAllProductsController{
    async handle(req: Request, res: Response){
        
        const productsService = new ListAllProductsService();

        const products = await productsService.execute();

        return res.json(products)
    }
}

export {ListAllProductsController};