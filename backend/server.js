const express=require("express");
const nodemailer = require('nodemailer');
const cors = require("cors");
require("dotenv").config();

const app=express();

app.use(express.json()); // To parse JSON request bodies
app.use(cors());

app.use(express.urlencoded({extended:true}));

const PORT=process.env.PORT || 8000;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.email,
      pass: process.env.password, // App password
    },
  });

app.post("/",async(req,res)=>{
   const{name,email,message}=req.body;
    // Prepare the email content
  const mailOptions = {
    from: {
      name: "Portolio Contact",
      address: process.env.email,
    },
    to: process.env.email,  // Hardcoded recipient email to match sender
    subject: `New Message Received through ur Portfolio`,
    text: ` Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    // Send feedback email
    await transporter.sendMail(mailOptions);
    console.log('email sent successfully');
    return res.redirect("http://localhost:3000/thank-you");

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send("Failed to send message. Please try again later.");
  }

});

app.listen(PORT,()=>console.log("server started"));