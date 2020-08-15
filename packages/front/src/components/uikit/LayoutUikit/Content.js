import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const LayoutContent = ({
	children,
	className,
}) => (
	<section className={clsx('app-content', className)}>
		{children}
	</section>
);

LayoutContent.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

LayoutContent.defaultProps = {
	children: null,
	className: '',
};

export default LayoutContent;
