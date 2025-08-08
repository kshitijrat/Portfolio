const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  console.log("📩 Form Data Received:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Mail to You (Admin)
    const adminMailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from Portfolio Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    console.log("✅ Email received successfully");

    // 2. Confirmation Mail to User
    const userMailOptions = {
      from: `"Kshitij Ratnawat" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out!`,
      html: `
        <h3>Hi ${firstName},</h3>
        <p>Thank you for reaching out through my portfolio website.</p>
        <p>I’m currently dedicating my time to honing my skills and preparing for exciting opportunities ahead, and I’m always eager to connect with new people and explore potential collaborations.</p>
        <p>Your message regarding "<strong>${subject}</strong>" has been received, and I’ll make sure to get back to you as soon as possible.</p>
        <br />
        <p>Warm regards,<br/>Kshitij Ratnawat</p>
      `,
    };

    await transporter.sendMail(userMailOptions);
    console.log("✅ Confirmation email sent to user");

    res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

module.exports = router;
