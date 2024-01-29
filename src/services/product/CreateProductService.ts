import prismaClient from "../../prisma";
import { ProductProps } from "../../models/interfaces/product";
import { handleAmount } from '../../utils/convertString';

class CreateProductService {

    async execute({ name, banner, amount, description, price, category_id }: ProductProps) {

        

        if (!name) {
            throw new Error("Você precisa dar um nome ao produto!");
        }

        const productAlreadyExists = await prismaClient.product.findFirst({
            where: {
                name: name,
            }
        });

        if(productAlreadyExists){
            throw new Error("Este produto já existe!")
        }
        const amountInt = handleAmount(amount)
        const product = await prismaClient.product.create({
            data: {
                name: name,
                amount: amountInt,
                price: price,
                banner: banner,
                category_id: category_id,
                description: description,
            }
        });

        return product;
    }
}

export { CreateProductService };
