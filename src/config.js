const dotenv = require("dotenv")
const path = require("path")

const envPath = path.resolve(__dirname, "../.env")

dotenv.config({
	path: envPath,
})

module.exports = {
	SMTP_HOST: process.env.SMTP_HOST,
	SMTP_PORT: process.env.SMTP_PORT,
	SMTP_SECURE: process.env.SMTP_SECURE,
	SMTP_USER: process.env.SMTP_USER,
	SMTP_PASS: process.env.SMTP_PASS,
	REDIS_HOST: process.env.REDIS_HOST,
	REDIS_PORT: process.env.REDIS_PORT,
	EMAIL_FROM: process.env.EMAIL_FROM,
}
