"use strict"
const nodemailer = require("nodemailer")

const {
	NODEMAILER_HOST,
	NODEMAILER_PORT,
	NODEMAILER_SECURE,
	NODEMAILER_USER,
	NODEMAILER_PASSWORD,
} = require("../config")

const transporter = nodemailer.createTransport({
	host: NODEMAILER_HOST,
	port: NODEMAILER_PORT,
	secure: NODEMAILER_SECURE,
	auth: {
		user: NODEMAILER_USER,
		pass: NODEMAILER_PASSWORD,
	},
})

// async..await is not allowed in global scope, must use a wrapper
async function main() {
	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: '"Fred Foo 👻" <diegodevpt@gmail.com>', // sender address
		to: ["diegodevpt@gmail.com", "priscillafumaux@gmail.com"], // list of receivers
		subject: "Hello ✔", // Subject line
		// text: "Hello world?", // plain text body
		html: "<b><mark>Hello world Nodejs?</mark></b>", // html body
	})

	console.log("Message sent: %s", info.messageId)
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error)

// const AWS = require("aws-sdk");

// /*
//   A linha abaixo é necessária para remover mensagem do pacote da AWS sugerindo a
//   migração da versão do pacote 'aws-sdk' para v3.
// */
// require('aws-sdk/lib/maintenance_mode_message').suppress = true;

// const {
//   AWS_ACCESS_KEY,
//   AWS_SECRET_ACCESS_KEY,
//   AWS_REGION,
//   AWS_API_VERSION,
// } = require("../config");

// class EmailService {
//   constructor() {
//     this.service = new AWS.SES({
//       region: AWS_REGION,
//       accessKeyId: AWS_ACCESS_KEY,
//       secretAccessKey: AWS_SECRET_ACCESS_KEY,
//       apiVersion: AWS_API_VERSION,
//     });
//   }

//   async send({ from, to, subject, text }) {
//     const params = {
//       Source: from,
//       Destination: {
//         ToAddresses: [to],
//       },
//       Message: {
//         Body: {
//           Text: {
//             Charset: "UTF-8",
//             Data: text,
//           },
//         },
//         Subject: {
//           Charset: "UTF-8",
//           Data: subject,
//         },
//       },
//     };

//     await this.service
//       .sendEmail(params)
//       .promise()
//       .then(() => {
//         console.log("E-mail enviado com sucesso!");
//       })
//       .catch(() => {
//         console.error("Falha no envio de e-mail!");
//       });
//   }
// }

// module.exports = new EmailService()
