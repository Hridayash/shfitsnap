import   {Router ,Request, Response}from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv"

dotenv.config()
const router = Router()
const prisma = new PrismaClient();


interface jobBody  {
    job_id :number
    name :String
    hourly_rate :number
    user_id: number
}

router.post('')