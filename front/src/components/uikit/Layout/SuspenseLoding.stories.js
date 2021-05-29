import React from 'react';
import SuspenseLoading from './SuspenseLoading';

export default { title: 'SuspenseLoading' };

export const Default = () => (
	<div>
		<SuspenseLoading />
	</div>
);

export const WithSubText = () => (
	<div>
		<SuspenseLoading subText="merci de patienter quelques instants" />
	</div>
);
