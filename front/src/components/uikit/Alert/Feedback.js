import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const AlertFeedback = ({ success, error }) => {
	if (!error && !success) return null;
	return (
		<>
			{ success && (
				<Alert color="success py-2">
					Merci, votre avis a bien été envoyé.
				</Alert>
			)}
			{ error && (
				<Alert color="danger">
					<strong>Une erreur est survenue !</strong>
					<p className="mb-0">
						Merci de bien vouloir réessayer.<br />
						En cas de besoin, contactez notre service
						client à <u>service-clients@myautonomie.com.</u>
					</p>
				</Alert>
			)}
		</>
	);
};

AlertFeedback.propTypes = {
	success: PropTypes.bool,
	error: PropTypes.bool,
};
AlertFeedback.defaultProps = {
	error: false,
	success: false,
};

export default AlertFeedback;
