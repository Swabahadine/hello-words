import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import LayoutWrapper from './Wrapper';
import LayoutMain from './Main';
import LayoutContent from './Content';

const NoSideBar = ({
	children,
	className,
	footer,
	header,
	contentBackground,
	footerFixed,
	headerDrawerToggle,
	headerSearchHover,
	headerFixed,
}) => (
	<LayoutWrapper
		className={clsx(
			className,
			contentBackground,
			{
				'header-drawer-open': headerDrawerToggle,
				'app-header-fixed': headerFixed,
				'app-footer-fixed': footerFixed,
				//'search-wrapper-open': headerSearchHover,
			},
		)}
	>
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

NoSideBar.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	footer: PropTypes.node,
	header: PropTypes.node,
	contentBackground: PropTypes.string,
	footerFixed: PropTypes.bool,
	headerDrawerToggle: PropTypes.bool,
	headerFixed: PropTypes.bool,
	headerSearchHover: PropTypes.bool,
};

NoSideBar.defaultProps = {
	children: null,
	className: '',
	footer: null,
	header: null,
	contentBackground: '',
	footerFixed: false,
	headerDrawerToggle: false,
	headerFixed: true,
	headerSearchHover: false,
};

export default NoSideBar;
