// List pos tagger words of category choosed
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	Modal,
	ModalHeader,
	ModalBody,
} from 'reactstrap';

import { useQuery } from 'react-query';

import { LayoutLoading } from './uikit';
import {
	wordById,
	// createCategory,
} from '../frontApi/groupApi';
import ListPTWords from './ListPTWords';
import { unsedTags, shuffleArray } from '../lib';

const parseData = (data = {}) => {
	const res = [];
	Object.keys(data).forEach((posTaggerType) => {
		if (!unsedTags.includes(posTaggerType)) {
			const words = Object.keys(data[posTaggerType]);
			shuffleArray(words);
			const size = words.length;
			if (words.length > 3) {
				res.push({
					posTaggerType,
					size,
					words,
				});
			}
		}
	});
	return res;
};

const ModalPTWords = ({
	toggle,
	modal,
	idGroup,
}) => {
	const [dataParsed, setDataParsed] = useState([]);
	const { isLoading, data } = useQuery('wordByCategory', wordById(idGroup));
	const title = `${data?.category} - choisis la catégorie que tu souhaites apprendre`;
	useEffect(() => {
		if (data?.words) setDataParsed(parseData(data.words));
	}, [data]);
	return (
		<Modal size="lg" isOpen={modal} toggle={toggle}>
			<ModalHeader toggle={toggle}>{title}</ModalHeader>
			<LayoutLoading loading={isLoading}>
				<ModalBody>
					<ListPTWords data={dataParsed} />
				</ModalBody>
			</LayoutLoading>
		</Modal>
	);
};

ModalPTWords.propTypes = {
	toggle: PropTypes.func.isRequired,
	modal: PropTypes.bool.isRequired,
	idGroup: PropTypes.string.isRequired,
};

ModalPTWords.defaultProps = {
};

export default ModalPTWords;
