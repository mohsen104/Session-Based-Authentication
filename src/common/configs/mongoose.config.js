import mongoose from "mongoose";

const ConnectedToMongodb = async (uri) => {
    try {
        if (mongoose.connections[0].readyState) {
            return false;
        }
        await mongoose.connect(uri);
        console.log("connected to mongodb");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default ConnectedToMongodb;