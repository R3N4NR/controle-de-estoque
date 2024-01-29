import {Request, Response} from 'express';
import { UpdateProductService } from '../../services/product/UpdateProductService';

class UpdateProductController{

    async handle(req: Request, res: Response){

        const {product_id, name, banner, amount, description, price, category_id  } = req.body

        const productService = new UpdateProductService();
        
        const productUpdate = await productService.execute({
                product_id,
                name,
                price,
                banner,
                category_id,
                amount,
                description,
                

        })
        return res.json(productUpdate);
    }
}

export {UpdateProductController};
