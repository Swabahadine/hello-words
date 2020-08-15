import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

const AlertUpdate = ({ success, error }) => {
	if (!error && !success) return null;
	return (
		<>
			{ success && (
				<UncontrolledAlert color="success">
					Modifications enregistrées.
				</UncontrolledAlert>
			)}
			{ error && (
				<UncontrolledAlert color="danger">
					<strong>Une erreur est survenue !</strong>
					<p className="mb-0">
						Merci de bien vouloir réessayer.<br />
						En cas de besoin, contactez notre service
						client à <u>service-clients@myautonomie.com.</u>
					</p>
				</UncontrolledAlert>
			)}
		</>
	);
};

AlertUpdate.propTypes = {
	success: PropTypes.bool,
	error: PropTypes.bool,
};
AlertUpdate.defaultProps = {
	error: false,
	success: false,
};

export default AlertUpdate;
