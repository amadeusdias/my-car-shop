import express from 'express';
import routerCar from './routes/CarRoutes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use('/cars', routerCar);
app.use(ErrorHandler.handle);

export default app;
