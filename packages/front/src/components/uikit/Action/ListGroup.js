import React from 'react';
import PropTypes from 'prop-types';
import {
	ListGroup, ListGroupItem,
} from 'reactstrap';

const ActionListGroup = ({ items, ...props }) => (
	<ListGroup flush className="text-left bg-transparent" {...props}>
		{items.map((node, id) => {
			const key = `ListGroup ${id}`;
			return (
				<ListGroupItem key={key}>
					{node}
				</ListGroupItem>
			);
		})}
	</ListGroup>
);

ActionListGroup.propTypes = {
	items: PropTypes.arrayOf(PropTypes.node).isRequired,
};
ActionListGroup.defaultProps = {
};

export default ActionListGroup;
