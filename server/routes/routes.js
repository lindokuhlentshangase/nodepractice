import { getTasks } from "../controller/controllers";
import express from "express";


const router=express.Router()

router.get("/tasks", getTasks);
router.post("/add",)

export {router}

