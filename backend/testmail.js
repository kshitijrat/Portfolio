const nodemailer = require('nodemailer');
require('dotenv').config();

async function testMail() {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `"Test" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: "Test Mail",
    text: "This is a test mail",
  });

  console.log("Message sent: %s", info.messageId);
}

testMail().catch(console.error);
