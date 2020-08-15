import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

const LayoutLoading = ({
	children,
	loading,
}) => (
	<>
		{loading ? (
			<div className="d-flex justify-content-center align-items-center vh-100 vw-100">
				<Spinner />
			</div>
		) : (
			children
		)}
	</>
);

LayoutLoading.propTypes = {
	children: PropTypes.node,
	loading: PropTypes.bool,
};

LayoutLoading.defaultProps = {
	children: null,
	loading: false,
};

export default LayoutLoading;
