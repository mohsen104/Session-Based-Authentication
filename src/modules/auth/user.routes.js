import { Router } from "express";
import UserController from './user.controller.js';
import AuthorizationGuard from "../../common/guard/Authorization.guard.js";

const router = Router();

router.post("/authentication", UserController.authentication);
router.post("/login/otp", UserController.loginOtp);
router.post("/login/password", UserController.loginPassword);
router.post("/email/update", AuthorizationGuard, UserController.emailUpdate);
router.post("/password/update", AuthorizationGuard, UserController.passwordUpdate);
router.get("/logout", AuthorizationGuard, UserController.logout);

export default router;