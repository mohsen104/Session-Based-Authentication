import Joi from "joi";

export const authenticationSchema = Joi.object({
    username: Joi.string()
        .required()
        .messages({ 'any.only': "لطفا شماره موبایل یا ایمیل خود را برای ورود وارد نمایید !" })
})

export const loginOtpSchema = Joi.object({
    phone: Joi.string()
        .required()
        .messages({ 'any.only': "وارد کردن شماره موبایل اجباری می باشد !" }),
    otp: Joi.string()
        .required()
        .messages({ 'any.only': "لطفا کد تایید را وارد نمایید !" })
})

export const loginPasswordSchema = Joi.object({
    username: Joi.string()
        .required()
        .messages({ 'any.only': "لطفا شماره موبایل یا ایمیل خود را برای ورود وارد نمایید !" }),
    password: Joi.string()
        .required()
        .messages({ 'any.only': "لطفا رمز عبور را وارد نمایید !" }),
})

export const emailSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .message("ایمیل وارد شده معتبر نمی باشد !")
})

export const passwordSchema = Joi.object({
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .message("رمز عبور وارد شده معتبر نمی باشد !"),
    repeat_password: Joi.string()
        .valid(Joi.ref('password'))
        .messages({ 'any.only': "رمز عبور و تکرار آن برابر نیست !" })
})