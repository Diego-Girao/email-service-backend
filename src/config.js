const dotenv = require("dotenv")
const path = require("path")

const envPath = path.resolve(__dirname, "../.env")

dotenv.config({
	path: envPath,
})

module.exports = {
	NODEMAILER_HOST: process.env.NODEMAILER_HOST,
	NODEMAILER_PORT: process.env.NODEMAILER_PORT,
	NODEMAILER_SECURE: process.env.NODEMAILER_SECURE,
	NODEMAILER_USER: process.env.NODEMAILER_USER,
	NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
	REDIS_HOST: process.env.REDIS_HOST,
	REDIS_PORT: process.env.REDIS_PORT,
	EMAIL_FROM: process.env.EMAIL_FROM,
}
