import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const LoadingIndicatorSpinner = ({
	className,
	children,
	color,
	size,
	type,
	...props
}) => (
	<div
		className={clsx(`spinner-${type}`,
			{
				[`text-${color}`]: color,
				[`spinner-${type}-${size}`]: size,
			},
			className)}
		{...props}
	>
		{children}
	</div>
);

LoadingIndicatorSpinner.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	color: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.oneOf(['border', 'grow']),
};

LoadingIndicatorSpinner.defaultProps = {
	className: '',
	children: null,
	color: null,
	size: null,
	type: 'border',
};

export default LoadingIndicatorSpinner;
