import redis from 'redis';

const redisClient = redis.createClient();

const redisConfig = async () => {
    try {
        await redisClient.connect();
        console.log("connected to redis");
    } catch (error) {
        console.log(error)
    }
}

export { redisConfig, redisClient };