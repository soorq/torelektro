import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/screens/policy/policy-page.ui').then(p => p.PolicyPage));

export default function PolicyPage() {
	return <Page />;
}
