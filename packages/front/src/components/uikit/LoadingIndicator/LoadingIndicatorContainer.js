import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicatorSpinner from './LoadingIndicatorSpinner';

const LoadingIndicatorContainer = ({
	className,
	children,
	color,
	loading,
	size,
	type,
	...props
}) => (
	<div className={className} {...props}>
		{ loading ? (
			<LoadingIndicatorSpinner
				className="mx-auto d-block"
				color={color}
				size={size}
				type={type}
			/>
		) : children }
	</div>
);

LoadingIndicatorContainer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	color: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	size: PropTypes.string,
	type: PropTypes.oneOf(['border', 'grow']),
};

LoadingIndicatorContainer.defaultProps = {
	className: '',
	children: null,
	color: null,
	size: null,
	type: 'border',
};

export default LoadingIndicatorContainer;
