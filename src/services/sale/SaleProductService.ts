import prismaClient from "../../prisma";
import { SaleProductProps } from "../../models/interfaces/sale/SaleProductProps";

class SaleProductService {

    async execute({product_id,amount}:SaleProductProps){

        if(!product_id || !amount){
            throw new Error("You must type all fields!")
        }

        const queryProduct = await prismaClient.product.findFirst({
            where:{
                id: product_id
            }
        })

        if(queryProduct?.amount > amount && amount > 0){
           const newAmount = (queryProduct?.amount - amount);
           const storeSale = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data:{
                amount: newAmount
            },
            select:{
                id: true,
                name: true,
                amount: true,
            }
           })
           return storeSale;
        } else {
            throw new Error('You cannot complete the sale, verify your stock !')
        }
        
    }

}

export {SaleProductService}