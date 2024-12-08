export type TProduct = {
	category: number;
	items: {
		title: string;
		description: string;
		mobiledescrip: string;
		grounding: boolean;
		isProfessional: boolean;
		category: number;
		socket: string;
		copper: string;
		variants: [
			{
				variant: number;
				options: {
					article: number;
					plugs: string;
					length: string;
					security: string;
					power: string;
					socket: string;
					grounding: boolean;
				}[];
			},
		];
		images: {
			main: string;
			gallery: Record<number, string>[];
		};
	}[];
};
