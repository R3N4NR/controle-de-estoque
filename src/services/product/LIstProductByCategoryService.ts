import prismaClient from "../../prisma";

class ListProductByCategoryService{

    async execute(category_id:string){

        const categoryList = await  prismaClient.product.findMany({
            where:{
                category_id: category_id
            },
            select: {
                amount:true,
                name: true,
                category: true,
                price: true,
                create_at: true,
                updated_at: true,
                banner: true,
                description: true,
                id: true,
                category_id: true,
                items: true
            }
        })

        return categoryList
    }
}

export {ListProductByCategoryService};