import express from 'express'
import router from './routes/routes.js';
import cors from 'cors';
const app = express();
import DBConnection from './database/db.js';


app.use(cors());
app.use('/', router)

const Port = 8000;
DBConnection();

app.listen(Port,()=>console.log("server is running on 8000"));