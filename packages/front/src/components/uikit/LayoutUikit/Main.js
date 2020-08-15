import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const LayoutMain = ({
	children,
	className,
}) => (
	<main className={clsx('app-main', className)}>
		{children}
	</main>
);

LayoutMain.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

LayoutMain.defaultProps = {
	children: null,
	className: '',
};

export default LayoutMain;
