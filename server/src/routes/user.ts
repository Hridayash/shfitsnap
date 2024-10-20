import { Router , Request, Response  } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();
const router  = Router()
const prisma = new PrismaClient();

const Jwt = process.env.JWT_SECRET;

interface signupRequestBody{
     name :string;
     email :string;
     password: string;
}

router.post('/signup', async (req: Request<{}, {} , signupRequestBody>, res: Response) :Promise <any> => {
     try{
        const {name, email, password}  = req.body

        const existingUser = await prisma.user.findUnique({
          where :{
               email
          }
        })

        if (existingUser) {
         return res.status(400).json('email already in use')
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser =await prisma.user.create({
          data:{
               name,
               email,
               password: hashedPassword
          }
        })
       res.status(201).json({
          user_id : newUser.user_id,
          name: newUser.name,
          email: newUser.email
        })
              

     }catch(error){
               console.log(error)
     }
    
})
router.post('/login' , async(req:Request, res:Response) : Promise <any> =>{
     try{
          const {email , password } = req.body;

          const user = await prisma.user.findUnique({
               where : {
                    email: email
               }
          })
          if(!user){
               return res.status(400).json('user not found ');
               
          }
          const isPasswordValid =  await bcrypt.compare(password , user.password)
          if(!isPasswordValid){
               return res.status(401).json('wrong password')
          }
          if(!Jwt){
               return res.json("error on jwt")
          }
          const token = jwt.sign({id : user.user_id , email: user.email} , Jwt , {})
         return  res.status(200).json(token)
          
              
          
         


     }catch(err){
          console.log(err)
     }
})

console.log("test")

export default router;