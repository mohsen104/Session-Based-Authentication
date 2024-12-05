import mongoose from "mongoose";
import pkg from "bcryptjs";
const { hash } = pkg;

const UserSchema = mongoose.Schema(
    {
        phone: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        verify: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true, versionKey: false },
);

UserSchema.pre('save', async function (next) {
    const hashedPassword = await hash(this.password, 10)
    this.password = hashedPassword;
    next()
})

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
