import { compare } from "bcryptjs";
import {sign} from 'jsonwebtoken'
import prismaClient from "../../prisma/index"
import { AuthRequest } from "../../models/interfaces/auth/AuthRequest";


class AuthUserService {

    async execute({ email, password }: AuthRequest) {
    
        //Valida o preenchimento do campo de e-mail.
        if (!email) {
            throw new Error("E-mail field must be filled!");
        }
        //Valida o preenchimento do campo de senha.
        if (!password) {
            throw new Error("Password field must be filled!");
        }

        //Valida se o e-mail informado existe, caso não exista devolve um erro.
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        
        if (!user) {
            throw new Error("Wrong username or password!");
        }

        // Verificar se a senha do usuário está correta
        const passwordMatch = await compare(password, user?.password)

        if (!passwordMatch) {
            throw new Error("Wrong username or password!");
        }

        const token = sign(
            {
                name: user?.name,
                email: user?.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: user?.id,
                expiresIn: "30d"
            }
        );

        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token
        }
    }
}

export { AuthUserService }