import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { classNames } from '../lib';

// const { FLEX_CENTER } = classNames;

const LeftSidebar = ({ children, className, ...props }) => (
	<div style={{ overflowY: 'auto' }} {...props} className={clsx(className, 'min-vh-100 vw-100 d-flex')}>
		<div
			className="vh-100 bg-dark"
			style={{
				width: 100,
				left: 0,
			}}
		/>
		{children}
	</div>
);

LeftSidebar.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
LeftSidebar.defaultProps = {
	children: null,
	className: '',
};

export default LeftSidebar;
