import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

const AlertPending = ({ isPending }) => (isPending ? (
	<div className="pb-4">
		<UncontrolledAlert style={{ opacity: 1 }} color="info">
			Ce service est en cours de validation par un un administrateur MYAUTONOMIE. <br />
			Une fois la validation effective, vous aurez la possibilité de modifier ces informations.
		</UncontrolledAlert>
	</div>
) : null);


AlertPending.propTypes = {
	isPending: PropTypes.bool,
};
AlertPending.defaultProps = {
	isPending: false,
};

export default AlertPending;
