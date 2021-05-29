import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

const AlertCreate = ({ success, error }) => {
	if (!error && !success) return null;
	return (
		<>
			{ success && (
				<UncontrolledAlert color="success">
					La crétation à été effectuée avec success.
				</UncontrolledAlert>
			)}
			{ error && (
				<UncontrolledAlert color="danger">
					<strong>Une erreur est survenue !</strong>
					<p className="mb-0">
						Merci de bien vouloir réessayer.<br />
					</p>
				</UncontrolledAlert>
			)}
		</>
	);
};

AlertCreate.propTypes = {
	success: PropTypes.bool,
	error: PropTypes.bool,
};
AlertCreate.defaultProps = {
	error: false,
	success: false,
};

export default AlertCreate;
