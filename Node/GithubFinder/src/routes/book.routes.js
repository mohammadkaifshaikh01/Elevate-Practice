import express from "express"
import {addBook ,getBook} from "../controller/library.controller.js"


const bookRoute = express.Router()


bookRoute.post("/add-book" , addBook)
// bookRoute.get("/get-book" , getBook)
bookRoute.get("/get-book" , getBook)


export default  bookRoute