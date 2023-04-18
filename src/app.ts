import express from 'express';
import routerCar from './routes/CarRoutes';

const app = express();
app.use(express.json());
app.use('/cars', routerCar);

export default app;
