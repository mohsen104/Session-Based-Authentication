import { generateCodeOtp, loginMethod } from "../../common/utils/functions.js";

const UserController = {
    loginMethod: async (req, res, next) => {
        try {
            const { username } = req.body;
            const result = loginMethod(username);
            res.status(200).json({
                status: 200,
                result
            });
        } catch (error) {
            next(error);
        }
    },
    generateCodeOtp: async (req, res, next) => {
        try {
            const code = generateCodeOtp();
            res.status(200).json({
                status: 200,
                code
            });
        } catch (error) {
            next(error);
        }
    },
}

export default UserController;