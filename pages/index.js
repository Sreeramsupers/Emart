import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>E mart</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='mx-4 bg-red-400'>Hi</div>
		</div>
	);
}
