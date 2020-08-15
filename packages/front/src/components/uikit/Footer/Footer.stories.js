import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { boolean } from '@storybook/addon-knobs';
import { Nav, NavItem, NavLink } from 'reactstrap';

import Footer from './Footer';
import FooterSocialLinks from './SocialLinks';
import LayoutMinimal from '../Layout/Minimal';

library.add(fab);

export default { title: 'Footer' };

export const SocialLinks = () => (
	<LayoutMinimal>
		<div className="bg-first h-100 w-100 d-flex align-items-end justify-content-center">
			<FooterSocialLinks color="secondary" />
		</div>
	</LayoutMinimal>
);

export const Basic = () => {
	const shadow = boolean('Shadow', false);
	const transparent = boolean('Transparent', false);
	return (
		<LayoutMinimal>
			<div
				className={clsx(
					'h-100 d-flex align-items-end',
					transparent ? 'bg-first' : 'bg-light',
				)}
			>
				<Footer copyright="myautonomie.com" shadow={shadow} transparent={transparent}>
					<Nav>
						<NavItem>
							<NavLink tag={Link} to="/DashboardAnalytics" className="rounded-sm">
								Analytics
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/FormsWizard" className="rounded-sm">
								Wizards
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/DashboardCrmManager" className="rounded-sm">
								CRM Manager
							</NavLink>
						</NavItem>
					</Nav>
				</Footer>
			</div>
		</LayoutMinimal>
	);
};
