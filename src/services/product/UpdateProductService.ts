
import { ProductProps } from "../../models/interfaces/product";
import prismaClient from "../../prisma";
import { handleAmount } from "../../utils/convertString";


class UpdateProductService{

    async execute({product_id,amount,banner,category_id,description,name,price}:ProductProps){

        const amountConvert = handleAmount(amount)

        const checkExistence =await prismaClient.category.findFirst({
            where:{
                name:name
            }
        })

        if(checkExistence){
            throw new Error('Product already exists !')
        }

        const product = prismaClient.product.update({
            where:{
                id: product_id
            },
            data:{
                amount: amountConvert,
                category_id: category_id,
                name:name,
                price: price,
                description: description,
                banner: banner,
                
            }
        })
        return product;
    }

}

export {UpdateProductService};