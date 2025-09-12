import { Router } from "express";


const router = Router();
router.get("/", (req, res) => {
  res.send("Hello from Open Routes of server");
});

export default router;