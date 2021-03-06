import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
	const router = useRouter();
	const { slug } = router.query;

	return <p className='font-bold'>Slug is: {slug}</p>;
};

export default Post;
