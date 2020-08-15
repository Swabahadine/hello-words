import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const LayoutWrapper = ({
	children,
	className,
}) => (
	<div className={clsx('app-wrapper', className)}>
		{children}
	</div>
);

LayoutWrapper.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

LayoutWrapper.defaultProps = {
	children: null,
	className: '',
};

export default LayoutWrapper;
