import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
} from 'reactstrap';

const Dropdown = ({
	children,
	icon,
	color,
	className,
}) => (
	<div className="card-tr-actions">
		<UncontrolledDropdown className="card-tr-actions">
			<DropdownToggle color={color} className={clsx(className, 'p-0 border-0 no-caret')}>
				{ icon }
			</DropdownToggle>
			<DropdownMenu right className=" text-nowrap overflow-hidden px-2 pt-2 pb-0">
				{ children }
			</DropdownMenu>
		</UncontrolledDropdown>
	</div>
);

Dropdown.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.node,
	color: PropTypes.string,
};
Dropdown.defaultProps = {
	children: null,
	icon: <FontAwesomeIcon icon={['fas', 'ellipsis-h']} className="font-size-lg" />,
	color: 'link',
	className: '',
};

export default Dropdown;
