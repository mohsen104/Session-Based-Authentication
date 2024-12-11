import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv();
import ConnectedToMongodb from './src/common/configs/mongoose.config.js';
import SwaggerConfig from './src/common/configs/swagger.config.js';
import NotFoundHandler from './src/common/exceptions/not-found.handler.js';
import AllExceptionHandler from './src/common/exceptions/all-exception.handler.js';
import AllRoutes from './src/app.routes.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { redisClient, redisConfig } from './src/common/configs/redis.config.js';
import helmet from 'helmet';
import session from 'express-session';
import RedisStore from 'connect-redis';
import rateLimiter from './src/common/middlewares/rateLimiter.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const cookieParserSecretKey = process.env.COOKIE_PARSER_SECRET_KEY;
const sessionSecretKey = process.env.SESSION_SECRET_KEY;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(cookieParserSecretKey));
app.use(session({
    name: "session-id",
    store: new RedisStore({ client: redisClient }),
    secret: sessionSecretKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 1, // 1 hour
    },
}));

ConnectedToMongodb(uri);
redisConfig();

rateLimiter(app);

app.use("/api", AllRoutes);

SwaggerConfig(app);

NotFoundHandler(app);

AllExceptionHandler(app);

app.listen(port, () => {
    console.log(`server run on port : ${port}`);
});