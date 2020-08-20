// List pos tagger words of category choosed
import React from 'react';
import PropTypes from 'prop-types';
import {
	ListGroup,
	ListGroupItem,
	ListGroupItemText,
	ListGroupItemHeading,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { translatePosTagger as t } from '../lib';

const ListPTWords = ({
	data,
	idGroup,
	toggle,
}) => (
	<ListGroup>
		{data.map(({
			posTaggerType: type,
			words,
		}) => (
			<ListGroupItem key={type} action tag={Link} onClick={toggle} to={`/training/${idGroup}/${type}`}>
				<ListGroupItemHeading className="text-black">
					{t[type]}
				</ListGroupItemHeading>
				<ListGroupItemText>
					{`${words[0]}, ${words[1]}, ${words[2]} and `}<b>{words.length - 3}</b>{' other words ...'}
				</ListGroupItemText>
			</ListGroupItem>

		))}
	</ListGroup>
);

ListPTWords.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			posTaggerType: PropTypes.string,
			size: PropTypes.number,
		}),
	).isRequired,
	idGroup: PropTypes.string.isRequired,
	toggle: PropTypes.func.isRequired,
};

ListPTWords.defaultProps = {
};

export default ListPTWords;
