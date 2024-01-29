import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import Authenticated from './middlewares/users/Authenticated';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController';
import { GetOneCategoryController } from './controllers/category/GetOneCategoryController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';
import multer from 'multer';
import uploadConfig from './config/multer'
import { CreateProductController } from './controllers/product/CreateProductController';
import { UpdateProductController } from './controllers/product/UpdateProductController';
import { ListProductByCategoryService } from './services/product/LIstProductByCategoryService';
import { ListProductByCategoryController } from './controllers/product/ListProductByCategoryController';
import { ListAllProductsController } from './controllers/product/ListAllProductsController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { SaleProductController } from './controllers/sale/SaleProductController';

export const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))
//PUBLIC ROUTES
router.post('/createuser', new CreateUserController().handle);

router.post('/auth', new AuthUserController().handle);

//PRIVATE ROUTES

//USER
router.get('/session', Authenticated, new DetailUserController().handle);

router.delete('/deleteuser', new DetailUserController(). handle)


//CATEGORY

router.post('/createcategory', Authenticated, new CreateCategoryController().handle);
router.put('/updatecategory', Authenticated, new UpdateCategoryController().handle);
router.get('/category', Authenticated, new GetOneCategoryController().handle);
router.delete('/deletecategory', Authenticated, new DeleteCategoryController().handle);

//PRODUCT

router.post('/createproduct', Authenticated, upload.single('file'), new CreateProductController().handle)
router.put('/updateproduct', Authenticated, upload.single('file'), new UpdateProductController().handle)
router.get('/products', Authenticated, new ListProductByCategoryController().handle)
router.get('/productslist', Authenticated, new ListAllProductsController().handle);
router.delete('/deleteproduct', Authenticated, new DeleteProductController().handle);

//SALE

router.put('/sale/product', Authenticated, new SaleProductController().handle);






/*
//Testa a autenticação
router.get('/teste', Authenticated, (req: Request, res:Response) => {
    const teste = req.body;
    console.log(teste)
    return(
        res.json({ 'ok': true})
    )
    
})*/