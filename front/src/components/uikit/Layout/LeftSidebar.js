import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import LayoutWrapper from './Wrapper';
import LayoutMain from './Main';
import LayoutContent from './Content';

const LayoutLeftSidebar = ({
	children,
	className,
	footer,
	header,
	sidebar,
	contentBackground,
	footerFixed,
	headerDrawerToggle,
	headerSearchHover,
	headerFixed,
	sidebarFixed,
	sidebarToggle,
	sidebarToggleMobile,
}) => (
	<LayoutWrapper
		className={clsx(
			className,
			contentBackground,
			{
				'header-drawer-open': headerDrawerToggle,
				'app-sidebar-collapsed': sidebarToggle,
				'app-sidebar-mobile-open': sidebarToggleMobile,
				'app-sidebar-fixed': sidebarFixed,
				'app-header-fixed': headerFixed,
				'app-footer-fixed': footerFixed,
				'search-wrapper-open': headerSearchHover,
			},
		)}
	>
		<div>{sidebar}</div>
		<LayoutMain>
			{header}
			<LayoutContent>
				<div className="app-content--inner">
					<div className="app-content--inner__wrapper">{children}</div>
				</div>
				{footer}
			</LayoutContent>
		</LayoutMain>
	</LayoutWrapper>
);

LayoutLeftSidebar.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	footer: PropTypes.node,
	header: PropTypes.node,
	sidebar: PropTypes.node,
	contentBackground: PropTypes.string,
	footerFixed: PropTypes.bool,
	headerDrawerToggle: PropTypes.bool,
	headerFixed: PropTypes.bool,
	headerSearchHover: PropTypes.bool,
	sidebarFixed: PropTypes.bool,
	sidebarToggle: PropTypes.bool,
	sidebarToggleMobile: PropTypes.bool,
};

LayoutLeftSidebar.defaultProps = {
	children: null,
	className: '',
	footer: null,
	header: null,
	sidebar: null,
	contentBackground: '',
	footerFixed: false,
	headerDrawerToggle: false,
	headerFixed: true,
	headerSearchHover: false,
	sidebarFixed: true,
	sidebarToggle: false,
	sidebarToggleMobile: false,
};

export default LayoutLeftSidebar;
