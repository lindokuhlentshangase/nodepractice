import express, { json } from "express";
import cors from "cors";
import { error } from "console";
import taskRoute from "./routes/routes"


const app = express();//initializing express
app.use(json());
app.use(cors());

app.use(taskRoute)

const port = process.env.PORT || 8000;



app.listen(port, () =>{
    console.log(`Server started at${port}.`);
})

