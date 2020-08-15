import React, { useCallback } from 'react';
import {
	DropdownItem,
	ListGroup,
	ListGroupItem,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

import { Header, HeaderUserbox } from '../Header';

const LayoutHeader = ({ ...props }) => {
	const handleSignOut = useCallback(async () => {
	}, []);

	/* eslint-disable camelcase */
	const email = 'swabmed@gmail.com';
	const fullname = 'Swabahadine Abdallah';
	/* eslint-enable camelcase */

	return (
		<Header {...props} headerShadow>
			<HeaderUserbox fullname={fullname} email={email}>
				<ListGroup flush className="text-left bg-transparent">
					<ListGroupItem className="rounded-top">
						<Nav pills className="nav-neutral-primary flex-column">
							<NavItem>
								<NavLink href="#/my-account" tag={DropdownItem}>
									Gérer mon compte
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#/contact" tag={DropdownItem}>
									Contact
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#/cgu" tag={DropdownItem}>
									Conditions générales
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#/" tag={DropdownItem} onClick={handleSignOut}>
									Me déconnecter
								</NavLink>
							</NavItem>
						</Nav>
					</ListGroupItem>
				</ListGroup>
			</HeaderUserbox>
		</Header>
	);
};

export default React.memo(LayoutHeader);
