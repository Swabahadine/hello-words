import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import FooterSocialLinks from './SocialLinks';
import LayoutMinimal from '../Layout/Minimal';

library.add(fab);

export default { title: 'FooterSocialLinks' };

export const Basic = () => (
	<LayoutMinimal>
		<div className="bg-first h-100 w-100 d-flex align-items-end justify-content-center">
			<FooterSocialLinks color="secondary" />
		</div>
	</LayoutMinimal>
);
