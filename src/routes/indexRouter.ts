import { Router } from "express"
import TextController from "../controllers/TextController";

const router = Router();

router.get('/text', TextController.getText)

export default router
