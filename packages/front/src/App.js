import React from 'react';
import { useQuery } from 'react-query';

import { wordByCategory } from './frontApi/groupApi';

export default function App() {
	const { isLoading, error, data } = useQuery('repoData', wordByCategory('informatique'));

	if (isLoading) return 'Loading...';

	if (error) return `An error has occurred: ${error.message}`;
	return (
		<div>
			<h1>Hello Words</h1>
			<ul>
				{data.words.map(({ name, weight }) => (
					<li key={name}>
						{`${name} ${weight}`}
					</li>
				))}
			</ul>
		</div>
	);
}
