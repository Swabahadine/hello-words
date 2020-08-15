import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ButtonLabel = ({
	className,
	children,
}) => (
	<span className={clsx('btn-wrapper--label', className)}>
		{children}
	</span>
);

ButtonLabel.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

ButtonLabel.defaultProps = {
	children: null,
	className: '',
};

export default ButtonLabel;
