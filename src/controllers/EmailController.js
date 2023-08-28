const MailQueue = require("../queue/MailQueue")
const link = "https://github.com/Diego-Girao/email-service-frontend"

async function sendEmail(request, reply) {
	const { email, firstName, lastName } = request.body

	const template = `
        Olá <strong>${firstName} ${lastName}</strong>, sua assinatura foi confirmada!
        <br>Acesse seus recursos exclusivos, clique <a href="${link}">aqui</a>`

	try {
		await MailQueue.add({
			to: email,
			from: process.env.EMAIL_FROM,
			subject: "Assinatura Confirmada",
			html: template,
		})
		return reply.code(200).send()
	} catch {
		return reply.code(500).send("Internal Server Error")
	}
}

module.exports = {
	sendEmail,
}
