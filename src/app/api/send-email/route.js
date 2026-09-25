import nodemailer from "nodemailer";

export async function POST(request) {
  const { to, subject, text } = await request.json();

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");

    const info = await transporter.sendMail({
      from: "jankovazuzana0@gmail.com", // Sender's email
      to, // Recipient's email
      subject, // Email subject
      text, // Email body
    });

    console.log(info);
    return Response.json({ status: "OK" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

/**export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, text } = req.body;

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(
        {
          from: "jankovazuzana0@gmail.com", // Sender's email
          to, // Recipient's email
          subject, // Email subject
          text, // Email body
        },
        (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        },
      );
    });

    res.status(200).json({ status: "OK" });
  }
}*/
