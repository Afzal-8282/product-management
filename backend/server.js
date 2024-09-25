import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db.js';
import path from 'path';
import productRoutes from './routes/product_route.js';

dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/api/products", productRoutes);


if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    
    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}



app.listen(process.env.PORT, () => {
    ConnectDB();
    console.log(`server started at http://localhost:${process.env.PORT}`)
});

// eSbwQFouoX3LMCmj
// Gd2!SuvJ$9xRd6#
