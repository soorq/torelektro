import { type NextRequest, NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
	const { email, name, message } = await request.json();

	console.log(process.env.SMTP_HOST, process.env.SMTP_PASS, process.env.SMTP_USER);

	const transport = nodemailer.createTransport({
		service: 'yandex',
		host: process.env.SMTP_HOST,
		port: 587,
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	const mailOptions: Mail.Options = {
		from: process.env.SMTP_USER,
		to: process.env.SMTP_USER,
		subject: `Message from ${name} (${email})`,
		text: message,
	};

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve('Успешно отправлено!');
				} else {
					reject(err.message);
				}
			});
		});

	try {
		await sendMailPromise();
		return NextResponse.json({ message: 'Успешно отправлено!' });
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}
