declare namespace NodeJS {
	export interface ProcessEnv {
		NEXT_PUBLIC_APP_URL: string;
		SMTP_USER: string;
		SMTP_HOST: string;
		SMTP_PASS: string;
	}
}
