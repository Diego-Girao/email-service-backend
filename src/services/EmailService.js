const nodemailer = require("nodemailer")

const {
	SMTP_HOST,
	SMTP_PORT,
	SMTP_SECURE,
	SMTP_USER,
	SMTP_PASS,
} = require("../config")

class EmailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: SMTP_HOST,
			port: SMTP_PORT,
			secure: SMTP_SECURE, // true for 465, false for other ports
			auth: {
				user: SMTP_USER,
				pass: SMTP_PASS,
			},
		})
	}

	async send({ from, to, subject, html }) {
		const mailOptions = {
			from,
			to,
			subject,
			html,
		}

		try {
			await this.transporter.sendMail(mailOptions)
			console.log("E-mail enviado com sucesso!")
		} catch (error) {
			console.error("Falha no envio de e-mail:", error)
		}
	}
}

module.exports = new EmailService()
