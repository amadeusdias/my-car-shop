import express from 'express';
import routerCar from './routes/CarRoutes';
import routeMotorcycles from './routes/MotorcycleRoutes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use('/cars', routerCar);
app.use('/motorcycles', routeMotorcycles);

app.use(ErrorHandler.handle);

export default app;
