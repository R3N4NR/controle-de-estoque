import { DeleteProductService } from "../../services/product/DeleteProductService";
import { Request, Response } from "express";

class DeleteProductController{
    async handle(req: Request, res: Response){

        const productId = req.body.product_id as string;

        const productService = new DeleteProductService();

        const product = await productService.execute(productId);

        return res.json(product);

    }
}

export {DeleteProductController};