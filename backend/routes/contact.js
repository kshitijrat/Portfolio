const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill required fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
    });

    // 1. Admin Email (Tumhe milega)
    const adminMailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`, // Valid SMTP user
      replyTo: email, // Direct user ko reply karne ke liye!
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // 2. User Confirmation Email
    const userMailOptions = {
      from: `"Kshitij Ratnawat" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out!`,
      html: `
        <h3>Hi ${firstName},</h3>
        <p>Thank you for reaching out through my portfolio website.</p>
        <p>Your message regarding "<strong>${subject}</strong>" has been received, and I’ll get back to you as soon as possible.</p>
        <br />
        <p>Warm regards,<br/>Kshitij Ratnawat</p>
      `,
    };

    // Parallel processing (Faster response)
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

module.exports = router;