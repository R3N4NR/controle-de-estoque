import prismaClient from "../../prisma";

class DeleteProductService {
    async execute(product_id:string){

        const product = await prismaClient.product.delete({
            where:{
                id: product_id
            }
        })

        return product
    }
}

export {DeleteProductService};