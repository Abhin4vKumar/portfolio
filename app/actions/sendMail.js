"use server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        type:'OAuth2',
        user:process.env.EMAIL,
        clientId:process.env.clientId,
        clientSecret:process.env.clientSecret,
        refreshToken:process.env.refreshToken,
        accessToken:process.env.accessToken,
    }
})

const sendMail = async (formdata)=>{
    //firstname ,lastname ,email ,phone ,subject ,message
    const text = `Hello World`;
    const html = `<b>${text}</b>`;
    const info = await transporter.sendMail({
        from:`"Contact Page" <${process.env.EMAIL}>`,
        to:process.env.EMAIL,
        subject:formdata.get("subject"),
        text:text,
        html:html,
    });

    console.log(`Message sent: ${info.messageId}`);
}

export default sendMail;