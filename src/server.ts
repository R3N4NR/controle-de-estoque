import express, { Request, Response, NextFunction, response, request} from 'express'
import "express-async-errors";
import {router} from './routes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
import path from "path"

const port = 3333;
const app = express();

app.use(express.json());

app.use(cors());

app.use('/v1', router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/files', express.static(path.resolve(__dirname, "..", "tmp")))

app.get('/terms', (req: Request, res: Response) => {
    return res.json({
        message: "Termos de serviço"
    })
});

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,

        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server Error'
    })
})

app.listen(port, () => {
    console.log(`Server rodando port : (${port})`)
})