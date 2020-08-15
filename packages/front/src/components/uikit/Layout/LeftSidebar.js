import React, { useCallback, useState } from 'react';

import {
	LayoutLeftSidebar as UikitLayoutLeftSidebar,
} from '../LayoutUikit';

import LayoutHeader from './Header';
import LayoutSidebar from './Sidebar';

export const LayoutLeftSidebar = ({ ...props }) => {
	const [sidebarToggleMobile, setSidebarToggleMobile] = useState(false);
	const toggleSidebarMobile = useCallback(() => setSidebarToggleMobile((state) => !state), []);

	return (
		<UikitLayoutLeftSidebar
			//footer={<Footer copyright="myautonomie.com" />}
			header={(
				<LayoutHeader
					sidebarToggleMobile={sidebarToggleMobile}
					toggleSidebarMobile={toggleSidebarMobile}
				/>
			)}
			sidebar={(
				<LayoutSidebar
					sidebarToggleMobile={sidebarToggleMobile}
					toggleSidebarMobile={toggleSidebarMobile}
				/>
			)}
			sidebarFixed
			sidebarToggleMobile={sidebarToggleMobile}
			{...props}
		/>
	);
};

export default React.memo(LayoutLeftSidebar);
