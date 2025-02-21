import {Router} from 'express';

const authRouter = Router();

authRouter.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to auth route"});
});


export default authRouter;