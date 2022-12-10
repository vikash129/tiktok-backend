import express from 'express'
import Cors from 'cors'
import router  from  "./api/routing.js";
import mongoose from 'mongoose'

//app config 
const app = express() 
const port = process.env.PORT || 8000

// middlewares
app.use(express.json()) ;
app.use(Cors())
app.use( (req , res , next) => {
    res.setHeader("Access-Control-Allow-Origin" , "*")
    res.setHeader("Access-Control-Allow-Headers"  , "*")
    next();
})

const pwd = '123'
const username = 'vikash'
const connection_url = `mongodb+srv://${username}:${pwd}@cluster0.mexmiqe.mongodb.net/?retryWrites=true&w=majority`


mongoose.set('strictQuery', true);

//DB config
mongoose.connect(connection_url , { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    //  serverApi: ServerApiVersion.v1 
    })

// api config
app.use("/", router);


//listen
app.listen(port , () => console.log(`listening  http://127.0.0.1:${port}`))

// Export the Express API
export default app;