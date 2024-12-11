import { authenticationSchema, emailSchema, loginOtpSchema, loginPasswordSchema, passwordSchema } from "../../common/validations/user.validations.js";
import UserMessage from "./user.message.js";
import UserService from "./user.service.js";

const UserController = {
    authentication: async (req, res, next) => {
        try {
            const { username } = req.body;
            await authenticationSchema.validateAsync({ username });
            const response = await UserService.authentication({ username });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
    loginOtp: async (req, res, next) => {
        try {
            const { phone, otp } = req.body;
            await loginOtpSchema.validateAsync({ phone, otp });
            const response = await UserService.loginOtp({ phone, otp, res, req });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
    loginPassword: async (req, res, next) => {
        try {
            const { username, password } = req.body;
            await loginPasswordSchema.validateAsync({ username, password });
            const response = await UserService.loginPassword({ username, password, res, req });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
    emailUpdate: async (req, res, next) => {
        try {
            const { phone } = req.user;
            const { email } = req.body;
            await emailSchema.validateAsync({ email });
            const response = await UserService.emailUpdate({ phone, email });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
    passwordUpdate: async (req, res, next) => {
        try {
            const { phone, password: userPassword } = req.user;
            const { current_password, new_password, repeat_password } = req.body;
            await passwordSchema.validateAsync({ password: new_password, repeat_password });
            const response = await UserService.passwordUpdate({ phone, userPassword, current_password, new_password });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
    logout: async (req, res, next) => {
        try {
            UserService.logout(req, res);
            res.status(200).json({ message: UserMessage.Logout });
        } catch (error) {
            next(error);
        }
    },
}

export default UserController;