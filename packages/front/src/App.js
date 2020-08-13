/* eslint-disable no-extra-boolean-cast */
import React, { useState, useCallback, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';

import {
	Container, Row, Col, Button,
} from 'reactstrap';
import clsx from 'clsx';
import {
	wordByCategory,
	// createCategory,
} from './frontApi/groupApi';
import { translateTofrench } from './frontApi/translateApi';

import { randInt } from './utils';

// const defaultUrls = [
// 	'https://medium.com/@patarkf/synchronize-your-asynchronous-code-using-javascripts-async-await-5f3fa5b1366d',
// 	'https://www.deepl.com/en/docs-api/',
// 	'https://medium.com/@me_37286/19-ways-to-become-a-better-node-js-developer-in-2019-ffd3a8fbfe38',
// 	'https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e',
// 	'https://medium.com/@tkwebdev/vue-going-serverless-with-firebase-ad96398e43c8',
// 	'https://policy.medium.com/medium-privacy-policy-f03bf92035c9',
// 	'https://aws.amazon.com/terms/',
// 	'https://aws.amazon.com/terms/?nc1=f_pr',
// 	'https://seranking.com/blog/find-all-pages-on-a-website/',
// ];

const FLEX_CENTER = 'd-flex justify-content-center align-items-center';

const SEPARATOR = '.\n ';

const convertToSentence = (words) => {
	let sentence = '';
	words.forEach((w) => {
		sentence += `${w}${SEPARATOR}`;
	});
	return sentence;
};

const convertToArray = (words) => words.split(SEPARATOR);

export default function App() {
	const [word, setWord] = useState({
		en: 'welcome',
		fr: 'bienvenue',
	});
	const [listWords, setListWords] = useState([]);
	const [listWordsTranslated, setListWordsTranslated] = useState([]);
	const [mutate, infoTranslate] = useMutation(translateTofrench);

	const { isLoading, error, data } = useQuery('wordByCategory', wordByCategory('informatique'));
	// const {
	// 	isLoading,
	// 	error,
	// 	data
	// } = useQuery('createCategory', createCategory('informatique', defaultUrls));

	useEffect(() => {
		if (infoTranslate?.data?.text && listWordsTranslated.length === 0) {
			const frenchText = infoTranslate.data.text;
			setListWordsTranslated(convertToArray(frenchText));
		}
	}, [infoTranslate, listWordsTranslated]);

	useEffect(() => {
		if (!!data) {
			const dataFiltered = data.words.filter(({ weight }) => weight > 5 && weight < 30);
			const listWordsString = convertToSentence(dataFiltered.map(({ name }) => name));
			mutate(listWordsString);
			setListWords(dataFiltered);
		}
	}, [data, mutate]);

	const handleChangeWord = useCallback(async () => {
		const index = randInt(listWords.length);
		const wordSelected = listWords[index].name;
		const translateWordSelected = listWordsTranslated[index];
		setWord({ en: wordSelected, fr: translateWordSelected });
	}, [listWords, listWordsTranslated]);

	if (isLoading) return 'Loading...';
	if (error) return `An error has occurred: ${error.message}`;

	return (
		<section className="vh-100">
			<Container className={clsx(FLEX_CENTER, 'h-100')}>
				<Row className={clsx(FLEX_CENTER, 'flex-column h-100')}>
					<Col className={clsx(FLEX_CENTER, 'flex-column h-100')}>
						<h1>Hello Words</h1>
						<span className="py-4">
							{word.en} -&gt; {word.fr}
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
