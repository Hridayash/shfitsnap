//Importing all the required information

import express from "express"
import dotenv from "dotenv"
import UserRoute from './routes/user'
import cors from "cors"

//initializing imports

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


//routes 
//userRoute
app.use('/api/user' , UserRoute)





app.listen(process.env.PORT , ()=>{
    console.log(`server is running on ${process.env.PORT}`)
})

export default app; 