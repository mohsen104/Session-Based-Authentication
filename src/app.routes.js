import { Router } from "express";
import userRouter from './modules/auth/user.routes.js';
import devRouter from './modules/dev/dev.routes.js';

const router = Router();

router.use("/user", userRouter);
router.use("/dev", devRouter);

export default router;