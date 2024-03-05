import express from "express";
import cors from "cors"
import hallRouter from "./Router/hall.router.js"
import bookRouter from "./Router/book.router.js"

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

app.use('/hallapi',hallRouter);
app.use('/bookapi',bookRouter)




app.get('/',(req,res) => {
    res.status(200).send('<h4>API Calls</h4>');
})

app.listen(PORT,()=>{
   console.log(`server is running in ${PORT}`); 
})