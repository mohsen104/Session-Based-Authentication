import UserMessage from '../../modules/auth/user.message.js';
import UserModel from '../../modules/auth/user.model.js';

const AuthorizationGuard = async (req, res, next) => {
    try {
        const userId = req?.session?.userId;
        if (userId) {
            const user = await UserModel.findOne({ _id: userId });
            if (user) {
                req.user = user;
                return next();
            }
        }
        res.status(401).json({ message: UserMessage.Unauthorized });
        return { access: false };
    } catch (error) {
        next(error);
    }
};

export default AuthorizationGuard;