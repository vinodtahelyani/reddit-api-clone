import express from 'express';

// controller imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import PostController from './controllers/postController';
import postController from './controllers/postController';


const routes = express();
//basic routes
routes.get('/app',basicController.get);

// user routes
routes.post('/signup',userController.post);

// post routes
routes.post('/post',postController.post);
routes.get('/posts',postController.getAll);
routes.get('/posts/:userId',postController.getByUserId);

export default routes;