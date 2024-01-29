import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";


class CreateProductController{
    async handle(req: Request, res: Response){

        const {name, amount, description, price, category_id} = req.body;
        const createProductService = new CreateProductService();
        
        
    try{
        if(!req.file){
            throw new Error("You must send a picture !")
        } else {
            const {originalname, filename: banner} = req.file;
            
            const product = await createProductService.execute({
                name,
                price,
                banner,
                category_id,
                amount,
                description
            })
            
            return res.json(product);
        }}catch(err){
            console.log(err)
        }
    }
}

export {CreateProductController};