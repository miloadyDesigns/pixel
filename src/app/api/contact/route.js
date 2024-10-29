import nodemailer from "nodemailer"


export async function POST(req) {
    const { name, email, service, phoneNumber, message } = await req.json()

    const transporter = nodemailer.createTransport({
        host: 'mail.yourdomain.com',
        port: 587, // Usually 587 for TLS
        secure: false,
        auth: {
            user: "abc@gmail.com",
            pass: "pass12345"
        }
    })
    const mailOptions = {
        from: "abc@gmail.com",
        to: "abc@gmail.com",
        cc: "hashmihamza846@gmail.com",
        subject: "Inquire from contact form pixel brain",
        text: `Full Name: ${name} <br/> Phone No: ${phoneNumber} <br/> Selected Service: ${service} <br/> Message: ${message}`,
        replyTo: email,

    }
    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Error sending message.' }), { status: 500 });
    }
}