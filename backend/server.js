const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contact Form API",
      version: "1.0.0",
      description: "API to handle contact form submissions and send emails",
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: ["./server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const generateEmailTemplate = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
              text-align: center;
          }
          .container {
              background-color: #ffffff;
              padding: 30px;
              border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
              max-width: 600px;
              margin: auto;
              border: 1px solid #009688;
          }
          h1 {
              color: #00796b;
              font-size: 24px;
              margin-bottom: 20px;
          }
          p {
              color: #555;
              line-height: 1.6;
              font-size: 16px;
          }
          .highlight {
              background-color: #c8e6c9;
              padding: 10px;
              border-radius: 8px;
              margin: 10px 0;
              font-weight: bold;
          }
          .message {
              background-color: #ffe0b2;
              padding: 10px;
              border-radius: 8px;
              margin: 10px 0;
              border-left: 5px solid #ff9800;
          }
          .footer {
              margin-top: 30px;
              font-size: 0.9em;
              color: #00796b;
              text-align: center;
              border-top: 1px solid #009688;
              padding-top: 10px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Incoming Contact Form Submission</h1>
          <p class="highlight"><strong>First Name:</strong> ${data.firstName}</p>
          <p class="highlight"><strong>Last Name:</strong> ${data.lastName}</p>
          <p class="highlight"><strong>Email:</strong> ${data.email}</p>
          <p class="message"><strong>Message:</strong><br>${data.message}</p>
      </div>
      <div class="footer">
          <p>Thank you for reaching out!</p>
          <p><strong>Willows Springs Capital</strong></p>
      </div>
  </body>
  </html>
  `;
};

/**
 * @swagger
 * /send-mail:
 *   post:
 *     summary: Send an email from the contact form
 *     description: Accepts user input and sends an email with the given details.
 *     tags:
 *       - Contact Form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *               message:
 *                 type: string
 *                 example: Hello, I would like to connect.
 *     responses:
 *       200:
 *         description: Email sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: Email sent successfully!
 *       400:
 *         description: Missing or invalid input
 *       500:
 *         description: Internal server error
 */


app.post("/send-mail", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "therealmarvin04@gmail.com",
      subject: "New Contact Form Submission",
      html: generateEmailTemplate({ firstName, lastName, email, message }),
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Email sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at: http://localhost:${PORT}/api-docs`);
});
