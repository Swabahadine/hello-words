import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	UncontrolledTooltip,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

const FooterSocialLinks = ({ color }) => (
	<Nav className={clsx(`nav-neutral-${color}`)} pills>
		<NavItem>
			<NavLink
				className="font-size-lg rounded-sm text-black-50"
				href="#/"
				onClick={(e) => e.preventDefault()}
				id="FacebookNavTooltip1"
			>
				<FontAwesomeIcon icon={['fab', 'facebook']} />
			</NavLink>
			<UncontrolledTooltip target="FacebookNavTooltip1">Facebook</UncontrolledTooltip>
		</NavItem>
		<NavItem>
			<NavLink
				className="font-size-lg rounded-sm text-black-50"
				href="#/"
				onClick={(e) => e.preventDefault()}
				id="btnTwitterTooltip"
			>
				<FontAwesomeIcon icon={['fab', 'twitter']} />
			</NavLink>
			<UncontrolledTooltip target="btnTwitterTooltip">Twitter</UncontrolledTooltip>
			<UncontrolledTooltip target="btnTwitterTooltip">Twitter</UncontrolledTooltip>
		</NavItem>
		<NavItem>
			<NavLink
				className="font-size-lg rounded-sm text-black-50"
				href="#/"
				onClick={(e) => e.preventDefault()}
				id="btnGoogleTooltip"
			>
				<FontAwesomeIcon icon={['fab', 'google']} />
			</NavLink>
			<UncontrolledTooltip target="btnGoogleTooltip">Google</UncontrolledTooltip>
		</NavItem>
		<NavItem>
			<NavLink
				className="font-size-lg rounded-sm text-black-50"
				href="#/"
				onClick={(e) => e.preventDefault()}
				id="btnInstagramTooltip"
			>
				<FontAwesomeIcon icon={['fab', 'instagram']} />
			</NavLink>
			<UncontrolledTooltip target="btnInstagramTooltip">Instagram</UncontrolledTooltip>
		</NavItem>
	</Nav>
);

FooterSocialLinks.propTypes = {
	color: PropTypes.oneOf(['first', 'secondary']),
};

FooterSocialLinks.defaultProps = {
	color: 'first',
};

export default FooterSocialLinks;
