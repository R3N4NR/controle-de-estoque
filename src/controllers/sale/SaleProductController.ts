import { Request, Response } from "express";
import { SaleProductService } from "../../services/sale/SaleProductService";
import { SaleProductProps } from "../../models/interfaces/sale/SaleProductProps";

class SaleProductController{

    async handle(req:Request, res: Response){

        const product_id = req.query.product_id as string;

        const {amount}:SaleProductProps = req.body

        const saleProductService = new SaleProductService();

        const saleProduct = await saleProductService.execute({
            product_id,
            amount
        })

        return res.json(saleProduct)
    }
}

export {SaleProductController};