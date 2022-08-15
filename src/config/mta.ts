import nodemailer from 'nodemailer';
import { gmail, outlook } from './config'
import express from 'express';
import bodyParser from 'body-parser';
import Joi from "joi";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

 export const sendEmail = async (payload: any) => {

    let transporter: any = null;
    const { from, to, subject, text, html } = payload;

    const mailOptions = { from, to, subject, text, html };
    // mailOptions.from = ""

    const schema = Joi.object({
        from: Joi.string(),
        to: Joi.string().email().required(),
        subject: Joi.string().required(),
        text: Joi.string().required(),
        html: Joi.string()
    });

    const validation = schema.validate(payload);

    if (to.includes('@gmail')) {
        transporter = nodemailer.createTransport(gmail);
    } else {
        transporter = nodemailer.createTransport(outlook);
    }

    if (validation.error) {
        console.log(validation.error);
    } else {
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error: any, info: any) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log('Message sent: ' + info.response);
                    resolve(info);
                }
            });
        });
    }
}
