/* eslint-disable no-extra-boolean-cast */
import React, { useState, useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';

import {
	Container, Row, Col, Button,
} from 'reactstrap';
import clsx from 'clsx';
import { wordByCategory, createCategory } from './frontApi/groupApi';

import { randInt } from './utils';

const defaultUrls = [
	'https://medium.com/@patarkf/synchronize-your-asynchronous-code-using-javascripts-async-await-5f3fa5b1366d',
	'https://www.deepl.com/en/docs-api/',
	'https://medium.com/@me_37286/19-ways-to-become-a-better-node-js-developer-in-2019-ffd3a8fbfe38',
	'https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e',
	'https://medium.com/@tkwebdev/vue-going-serverless-with-firebase-ad96398e43c8',
	'https://policy.medium.com/medium-privacy-policy-f03bf92035c9',
	'https://aws.amazon.com/terms/',
	'https://aws.amazon.com/terms/?nc1=f_pr',
	'https://seranking.com/blog/find-all-pages-on-a-website/',
];

const FLEX_CENTER = 'd-flex justify-content-center align-items-center';

export default function App() {
	const [word, setWord] = useState('welcome');
	const [listWords, setListWords] = useState([]);

	const { isLoading, error, data } = useQuery('wordByCategory', wordByCategory('informatique'));
	//const { isLoading, error, data } = useQuery('createCategory', createCategory('informatique', defaultUrls));
	useEffect(() => {
		if (!!data) {
			setListWords(data.words);
		}
	}, [data]);
	const handleChangeWord = useCallback(() => {
		const index = randInt(listWords.filter(({ weight }) => weight > 5 && weight < 30).length);
		console.log(listWords.filter(({ weight }) => weight > 5).length);
		setWord(listWords[index].name);
	}, [listWords]);
	if (isLoading) return 'Loading...';
	console.log(listWords);
	if (error) return `An error has occurred: ${error.message}`;

	return (
		<section className="vh-100">
			<Container className={clsx(FLEX_CENTER, 'h-100')}>
				<Row className={clsx(FLEX_CENTER, 'flex-column h-100')}>
					<Col className={clsx(FLEX_CENTER, 'flex-column h-100')}>
						<h1>Hello Words</h1>
						<span className="py-4">
							{word}
						</span>
						<Button color="info" onClick={handleChangeWord}>
							New word
						</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
