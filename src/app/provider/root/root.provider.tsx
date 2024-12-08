import type { PropsWithChildren } from 'react';
import Script from 'next/script';

export function RootProvider({ children }: Readonly<PropsWithChildren>) {
	return (
		<>
			{children}
			<Script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: `
						"@context": "http://schema.org/",
						"@type": "Organization",
						"name": "ТОРЭЛЕКТРО",
						"address": {
						"@type": "PostalAddress",
						"streetAddress": "деревня Торбеево, 48, городской округ Люберцы, Московская область",
						"addressLocality": "Москва",
						"addressRegion": "Россия, Московская область",
						"postalCode": "140008"
						},
						"telephone": "+7 916 083 39 30",
						"email": "tor@torelektro.ru"	  
	  `,
				}}
			/>
		</>
	);
}
