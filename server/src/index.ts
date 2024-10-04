//Importing all the required information

import express from "express"
import dotenv from "dotenv"
import UserRoute from './routes/user'

//initializing imports

dotenv.config()
const app = express()
app.use(express.json())


//routes 
//userRoute
app.use('/api/user' , UserRoute)





app.listen(process.env.PORT , ()=>{
    console.log(`server is running on ${process.env.PORT}`)
})

export default app; 