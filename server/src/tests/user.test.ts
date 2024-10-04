
import { describe } from "node:test"
import request from 'supertest'
import app from "../index"



describe('Signup the user'  , ()=>{
    test('should respond with status 201 and message sign in success'  , async()=>{
        const newUser = {name: "hridesh" , email : "a@b.cdef" , password :"test"}
        const response = (await request(app).post('/api/user/signup').send(newUser))

        expect(response.statusCode).toBe(201);
      
    });
})

describe("login the user"  ,()=>{
    it("should response with status 200 " , async()=>{
        const user = {email : "a@b.cdef" , password : "test"}
        const response = (await request(app).post('/api/user/login').send(user))
        

        expect(response.statusCode).toBe(200)
    })
})