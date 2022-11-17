const nodemailer = require("nodemailer");

const sendEmail = (options, callback) => {
  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // const handlebarOptions = {
  //   viewEngine: {
  //     extName: ".handlebars",
  //     partialsDir: path.resolve('./views'),
  //     defaultLayout: false,
  //   },
  //   viewPath: path.resolve('./views'),
  //   extName: ".handlebars",
  // }

  //transporter.use('compile', hbs(handlebarOptions));

  var mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
    // context: {
    //   name: options.name,
    //   title: options.title,
    //   text: options.text,
    //   text2: options.text2,
    // }
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Email gagal dikirim" + error);
      callback(false);
    } else {
      console.log("Email sent: " + info.response);
      callback(true);
    }
  });
};
module.exports = sendEmail;
