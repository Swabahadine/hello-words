/* eslint-disable no-extra-boolean-cast */
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';

import {
	Container, Row, Col, Button, Alert,
} from 'reactstrap';
import clsx from 'clsx';

import { LayoutLoading } from '../components/uikit';

import {
	wordByCategory,
	// createCategory,
} from '../frontApi/groupApi';
import { translateTofrench } from '../frontApi/translateApi';

import {
	classNames,
	convertToArray,
	convertToSentence,
	filterDataByLevel,
	generateMultiUniqueNum,
	shuffleArray,
	SEPARATOR,
} from '../lib';

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

const { FLEX_CENTER } = classNames;

export default function Game({ match }) {
	const { category = 'informatique' } = match.params;
	const [word, setWord] = useState({
		focusWord: 'welcome',
		focusIndex: 0,
	});
	const [listWords, setListWords] = useState([]);
	const [listWordsTranslated, setListWordsTranslated] = useState([]);
	const [score, setScore] = useState(0);
	const [answer, setAnswer] = useState(null);

	const [mutate, infoTranslate] = useMutation(translateTofrench);

	const { isLoading, error, data } = useQuery('wordByCategory', wordByCategory(category));
	// const {
	// 	isLoading,
	// 	error,
	// 	data
	// } = useQuery('createCategory', createCategory('informatique', defaultUrls));

	useEffect(() => {
		if (infoTranslate?.data?.text && listWordsTranslated.length === 0) {
			const frenchText = infoTranslate.data.text;
			setListWordsTranslated(convertToArray(frenchText, SEPARATOR));
		}
	}, [infoTranslate, listWordsTranslated]);

	const level = 2;//parseInt(score / 10, 10) + 1;
	useEffect(() => {
		if (!!data) {
			const dataFiltered = data.words.filter(filterDataByLevel(level)).slice(0, 500);
			const listWordsString = convertToSentence(dataFiltered.map(({ name }) => name), SEPARATOR);
			mutate(listWordsString);
			setListWords(dataFiltered);
			setListWordsTranslated([]);
		}
	}, [data, level, mutate]);

	const handleChangeWord = useCallback(async () => {
		const indexWords = generateMultiUniqueNum(8, listWords.length);
		const index = indexWords[0];
		shuffleArray(indexWords);
		const wordSelected = listWords[index].name;
		setWord({ focusWord: wordSelected, focusIndex: index, indexsChoice: indexWords });
	}, [listWords]);

	if (error) return `An error has occurred: ${error.message}`;
	// console.log('listWords', listWords);
	// console.log('tr', infoTranslate?.data?.text);
	return (
		<LayoutLoading loading={isLoading}>
			<section className="vh-100 w-100">
				<Container className={clsx(FLEX_CENTER, 'flex-column h-100')}>
					<Row className={clsx(FLEX_CENTER, 'flex-column')}>
						<Col className={clsx(FLEX_CENTER, 'flex-column')}>
							<h1>Hello Words</h1>
							<span className="py-4">
								{word.focusWord}
							</span>
						</Col>
					</Row>
					<Row className={clsx(FLEX_CENTER, '')}>
						{word.indexsChoice ? word.indexsChoice.map((index) => (
							<Col key={index} xs="6" md="4" lg="3" className={clsx(FLEX_CENTER, 'flex-column')}>
								<Button
									color="link"
									onClick={
										() => {
											if (index === word.focusIndex) {
												setScore((prev) => prev + 1);
												setAnswer({ isGood: true, index: word.focusIndex });
											} else {
												setAnswer({ isGood: false, index: word.focusIndex });
											}
											handleChangeWord();
										}
									}
								>
									{listWordsTranslated[index]}
								</Button>
							</Col>
						)) : (
							<Col>
								<Button color="info" onClick={handleChangeWord}>
									Commencer
								</Button>
							</Col>
						)}
					</Row>
					<Row>
						<Col xs="12" className={clsx(FLEX_CENTER, 'flex-column')}>
							<span className="py-4">
								Ton score est : {score}
							</span>
						</Col>
						<Col>
							{ answer?.isGood && (
								<Alert color="success">
									<span>
										Bonne réponse !
									</span>
								</Alert>
							)}
							{ answer?.isGood === false && (
								<Alert color="danger">
									<span>
										Mauvaise réponse !<br />
										La traduction de {listWords[answer.index].name}{' '}
										est {listWordsTranslated[answer.index]}
									</span>
								</Alert>
							)}
						</Col>
					</Row>
				</Container>
			</section>
		</LayoutLoading>
	);
}

Game.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			category: PropTypes.string,
		}),
	}).isRequired,
};
