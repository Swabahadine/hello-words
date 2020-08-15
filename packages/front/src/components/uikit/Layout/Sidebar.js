/* eslint-disable import/no-duplicates */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/myautonomie/logo-myautonomie-long-white.png';
import {
	Sidebar as UikitSidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMetisMenu,
} from '../Sidebar';

const organisme = {
	label: 'Mon organisme',
	icon: 'pe-7s-portfolio',
	content: [
		{
			label: 'Identification',
			to: '/organisme/identification',
		},
		{
			label: 'Adresse',
			to: '/organisme/adresses',
		},
		{
			label: 'Contacts',
			to: '/organisme/contacts',
		},
		{
			label: 'Mes avis',
			to: '/organisme/review',
		},
	],
};

const teleassistance = {
	label: 'Téléassistance',
	icon: 'pe-7s-portfolio',
	content: [
		{
			label: 'Information',
			to: '/teleassistance/information',
		},
		{
			label: 'Conventionnement',
			to: '/teleassistance/conventionnement',
		},
		{
			label: 'Intervention',
			to: '/teleassistance/intervention',
		},
		{
			label: 'Services et tarifs',
			to: '/teleassistance/services-et-tarifs',
		},
		{
			label: 'Zones',
			to: '/teleassistance/zones',
		},
	],
};

const serviceDomicile = {
	label: 'Service à domicile',
	icon: 'pe-7s-portfolio',
	content: [
		{
			label: 'Information',
			to: '/service-a-domicile/information',
		},
		{
			label: 'Conventionnement',
			to: '/service-a-domicile/conventionnement',
		},
		{
			label: 'Intervention',
			to: '/service-a-domicile/intervention',
		},
		{
			label: 'Services et tarifs',
			to: '/service-a-domicile/services-et-tarifs',
		},
		{
			label: 'Zones',
			to: '/service-a-domicile/zones',
		},
	],
};

const board = {
	label: 'Tableau de bord',
	icon: 'pe-7s-safe',
	to: '/board',
};

const LayoutSidebar = ({
	sidebarToggleMobile,
	toggleSidebarMobile,
}) => {
	const [menu, setMenu] = useState([board]);
	return (
		<UikitSidebar
			sidebarToggleMobile={sidebarToggleMobile}
			toggleSidebarMobile={toggleSidebarMobile}
		>
			<SidebarHeader
				logo={<div className="d-flex justify-content-center"><img alt="logo" height="40px" src={logo} /></div>}
				sidebarToggleMobile={sidebarToggleMobile}
				title="myautonomie.com"
				toggleSidebarMobile={toggleSidebarMobile}
			/>
			<SidebarContent>
				<SidebarMenu>
					<SidebarMetisMenu content={menu} />
				</SidebarMenu>
			</SidebarContent>
		</UikitSidebar>
	);
};

LayoutSidebar.propTypes = {
	sidebarToggleMobile: PropTypes.bool.isRequired,
	toggleSidebarMobile: PropTypes.func.isRequired,
};

export default React.memo(LayoutSidebar);
