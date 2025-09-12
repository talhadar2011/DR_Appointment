import { loginUser, registerUser } from "../controllers/authController.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);


export default authRouter;

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMmJhMDg5N2FiYWZiNDI2MzE5YTllIiwibmFtZSI6IlRhbGhhIiwiZW1haWwiOiJ0YWxoYWRhcjIwMTFAZ21haWwuY29tIn0sImlhdCI6MTc1NzU5MjA3Mn0.QTC-xZiuNTe12KtBtBP5hi5f1cbEx74KqmzeP8YLtZE
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMmJhMDg5N2FiYWZiNDI2MzE5YTllIiwibmFtZSI6IlRhbGhhIiwiZW1haWwiOiJ0YWxoYWRhcjIwMTFAZ21haWwuY29tIn0sImlhdCI6MTc1NzU5MjI3OX0.dDXqzhDMw1WLSa3KvjN1VIhrfY-6Rv4KseXyNIGaYRA