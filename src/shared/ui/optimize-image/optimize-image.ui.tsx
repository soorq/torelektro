'use client';

import { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	priority?: boolean;
	className?: string;
}

export function OptimizedImage({
	src,
	alt,
	width,
	height,
	priority = false,
	className,
}: OptimizedImageProps) {
	const [isLoading, setLoading] = useState(true);

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			priority={priority}
			quality={90}
			className={`image ${isLoading ? 'image__loading' : ''} ${className ? className : ''}`}
			onLoadingComplete={() => setLoading(false)}
			sizes='(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               100vw'
		/>
	);
}
