import rateLimit from "express-rate-limit"
import { RedisStore } from 'rate-limit-redis'
import { redisClient } from "../configs/redis.config.js";

const rateLimiter = (app) => {
    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000,
        limit: 100,
        message: { message: "تعداد درخواست های شما بیشتر از حد مجاز می باشد، لطفا دقایقی دیگر دوباره امتحان نمایید ." },
        standardHeaders: 'draft-7',
        legacyHeaders: false,
        store: new RedisStore({
            sendCommand: (...args) => redisClient.sendCommand(args),
        }),
    });
    return app.use(limiter);
};

export default rateLimiter;
