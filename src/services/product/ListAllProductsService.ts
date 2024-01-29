import prismaClient from "../../prisma";

class ListAllProductsService{

    async execute(){

        const products = await prismaClient.product.findMany({
            select:{
                id: true,
                name: true,
                amount: true,
                banner: true,
                category: true,
                create_at: true,
                items: true,
                updated_at:true,
                description: true,
                price:true
            }
        })
        return products;
    }
}

export {ListAllProductsService}