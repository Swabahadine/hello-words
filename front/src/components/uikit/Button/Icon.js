import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ButtonIcon = ({
	className,
	children,
}) => (
	<span className={clsx('btn-wrapper--icon', className)}>
		{children}
	</span>
);

ButtonIcon.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

ButtonIcon.defaultProps = {
	children: null,
	className: '',
};

export default ButtonIcon;
