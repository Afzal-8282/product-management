import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db.js';
import cors from 'cors';
import productRoutes from './routes/product_route.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: [""],
    methods: []
}))

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/api/products", productRoutes);





app.listen(process.env.PORT, () => {
    ConnectDB();
    console.log(`server started at http://localhost:${process.env.PORT}`)
});

// eSbwQFouoX3LMCmj
// Gd2!SuvJ$9xRd6#
