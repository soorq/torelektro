// @ts-nocheck

interface TSend<T extends object> {
	body: T;
}

const $api = process.env.NEXT_PUBLIC_APP_URL;

export class MailService {
	send<T>({ body }: TSend<T extends object ? T : unknown>) {
		return fetch(`${$api}/mail`, { method: 'POST', body: JSON.stringify(body) });
	}

	consultation({ dto }: { dto: string }) {
		this.send({ body: dto });
	}
}
