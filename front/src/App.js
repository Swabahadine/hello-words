import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import uuid from 'react-uuid';

import Routes from './Routes';

import ContextCookie from './ContextCookie';

export default function App() { 
	const [cookies, setCookie] = useCookies(['hello-words-identificator']);
	if (!cookies.uuid) {
		const date = new Date();
		const dateAfter6Month = new Date(date.setMonth(date.getMonth() + 6));
		setCookie('uuid', uuid(), {
			expires: dateAfter6Month,
		});
	}
	const [state, setState] = useState({
		id: 12345,
	});
	return (
		<ContextCookie.Provider value={[state, setState]}>
			<Routes />
		</ContextCookie.Provider>
	);
}
