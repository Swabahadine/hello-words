import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// import { classNames as cl } from '../lib';

const LeftSidebar = ({ children, className, ...props }) => (
	<div style={{ overflowY: 'auto' }} {...props} className={clsx(className, 'min-vh-100 vw-100 d-flex')}>
		<Nav
			vertical
			className={clsx('vh-100 bg-dark py-4')}
			style={{
				// width: 100,
				left: 0,
			}}
		>
			<NavItem className="text-center w-100 py-2">
				<NavLink className="text-light" to="/"><small>Hello Words</small></NavLink>
			</NavItem>
			<NavItem className="text-center w-100 py-2">
				<NavLink className="text-light" to="/"><small>Acceuil</small></NavLink>
			</NavItem>
			<NavItem className="text-center w-100 py-2">
				<NavLink className="text-light" to="/sources/create"><small>Créer une catégorie</small></NavLink>
			</NavItem>
		</Nav>
		<div style={{ overflowY: 'scroll' }} className="vh-100 vw-100 bg-light">
			{children}
		</div>
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
