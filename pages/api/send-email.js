import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, text, senderEmail, note } = req.body;

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoner.com", // Replace with your SMTP host
      port: 465, // Replace with your SMTP port (587 for TLS, 465 for SSL)
      secure: true, // Set to true for port 465
      auth: {
        user: process.env.EMAIL_USER, // SMTP username (your email address)
        pass: process.env.EMAIL_PASS, // SMTP password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"Your Name" <${process.env.EMAIL_USER}>`, // Sender's email
        to, // Recipient's email
        subject, // Email subject
        text, // Email body
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ message: "Failed to send email", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
