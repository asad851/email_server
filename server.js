// require('dotenv').config();
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const USER = require('./config')

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());


// app.listen(3000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user:'siddiquiasad851@gmail.com' ,
//     pass: USER.password,
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// app.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "siddiquiasad851@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });