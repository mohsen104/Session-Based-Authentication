import crypto from 'crypto';
import { configDotenv } from 'dotenv';
configDotenv();

export const loginMethod = (username) => {
    const regexMobile = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
    const regexEmail = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

    if (regexMobile.test(username)) return "otp";

    if (regexEmail.test(username)) return "password";

    return "nothing";
}

export const generateCodeOtp = () => {
    return crypto.randomInt(10000, 99999);
}

export const responseFormatter = ({ status, message = null, data = null }) => {
    let res = { status };
    if (message) res.message = message;
    if (data) res.data = data;
    return res;
}