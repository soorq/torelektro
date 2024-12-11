const $app = process.env.NEXT_PUBLIC_APP_URL;

export class MailService {
	static send = async ({ body, type }: { body: Record<string, string>; type: string }) => {
		return fetch(`${$app}/api/mail`, {
			method: 'POST',
			body: JSON.stringify({ ...body, type }),
		});
	};

	static consultation = async ({ dto }: { dto: Record<string, string> }) => {
		this.send({ body: dto, type: 'консультация' });
	};

	static presentation = async ({ dto }: { dto: Record<string, string> }) => {
		this.send({ body: dto, type: 'презентация' });
	};

	static order = async ({ dto }: { dto: Record<string, string> }) => {
		this.send({ body: dto, type: 'заказ' });
	};
}
