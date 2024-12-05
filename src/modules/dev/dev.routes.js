import { Router } from "express";
import DevController from './dev.controller.js';

const router = Router();

router.post("/loginMethod", DevController.loginMethod);
router.get("/generateCodeOtp", DevController.generateCodeOtp);

export default router;