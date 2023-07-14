import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import seedRouter from './Routes/seedRoutes.js';
import productRouter from './Routes/productRoutes.js';
import userRouter from './Routes/userRoutes.js';
import orderRouter from './Routes/orderRoutes.js';
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log('error');
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message });
// });
const port = 8000;
app.listen(port, () => {
  console.log(`listening to ${port}`);
});
