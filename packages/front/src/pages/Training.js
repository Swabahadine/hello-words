/* eslint-disable no-extra-boolean-cast */
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';

import {
	Container, Row, Col, Button, Table,
} from 'reactstrap';
import clsx from 'clsx';

import { LayoutLoading } from '../components/uikit';

import {
	wordById,
} from '../frontApi/groupApi';
import { translateTofrench } from '../frontApi/translateApi';

import {
	classNames,
	convertToArray,
	convertToSentence,
	parseData,
	SEPARATOR,
	translatePosTagger as t,
} from '../lib';
import ModalPTWords from '../components/ModalPTWords';

const { FLEX_CENTER } = classNames;

export default function Training({ match }) {
	const { idGroup, posTag } = match.params;

	// Modals
	const [modal, setModal] = useState(false);
	const toggle = useCallback(() => setModal(!modal), [modal]);

	const [listWords, setListWords] = useState([]);
	const [listWordsTranslated, setListWordsTranslated] = useState([]);

	const [mutate, infoTranslate] = useMutation(translateTofrench);

	const { isLoading, error, data } = useQuery('wordByCategory', wordById(idGroup));

	useEffect(() => {
		if (infoTranslate?.data?.text && listWordsTranslated.length === 0) {
			const frenchText = infoTranslate.data.text;
			setListWordsTranslated(convertToArray(frenchText, SEPARATOR));
		}
	}, [infoTranslate, listWordsTranslated]);

	useEffect(() => {
		if (!!data) {
			const dataWords = parseData(data.words, [posTag]);
			const dataFiltered = dataWords.slice(0, 500).sort((a, b) => b.weight - a.weight);
			const listWordsString = convertToSentence(dataFiltered.map(({ name }) => name), SEPARATOR);
			mutate(listWordsString);
			setListWords(dataFiltered);
			setListWordsTranslated([]);
		}
	}, [data, mutate, posTag]);

	if (error) return `An error has occurred: ${error.message}`;
	// console.log('listWords', listWords);
	// console.log('tr', infoTranslate?.data?.text);
	return (
		<LayoutLoading loading={isLoading}>
			<Container className={clsx(FLEX_CENTER, ' flex-column h-100')}>
				<Row className={clsx(FLEX_CENTER, 'w-100')}>
					<Col xs="12" lg="5" className="py-4">
						<h3 className="py-4 text-info">{data?.category}</h3>
						<div className="py-2 w-100">
							<h2>Type : {t[posTag]}</h2>
							<span className="text-right w-100">
								{`${listWords.length} mots`}
							</span>
						</div>
						<Button color="info" onClick={toggle}>
							Changer de type
						</Button>
					</Col>
					<Col style={{ overflowY: 'auto' }} xs="12" lg="7" className={clsx(FLEX_CENTER, 'flex-column h-100')}>
						<div style={{ height: '500px', width: '100%' }}>
							<Table hover responsive bordered dark>
								<thead>
									<tr>
										<th>#</th>
										<th>Mot anglais</th>
										<th>Traduction</th>
										<th>Poids</th>
									</tr>
								</thead>
								<tbody>
									{listWords.map((w, index) => (
										<tr key={w.name}>
											<th scope="row">{index + 1}</th>
											<td>{w.name}</td>
											<td>{listWordsTranslated[index]}</td>
											<td>{w.weight}</td>
										</tr>
									)) }
								</tbody>
							</Table>
						</div>
					</Col>
				</Row>
			</Container>
			{modal && idGroup && (
				<ModalPTWords toggle={toggle} modal={modal} idGroup={idGroup} />
			)}
		</LayoutLoading>
	);
}

Training.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			idGroup: PropTypes.string,
			posTag: PropTypes.string,
		}),
	}).isRequired,
};
