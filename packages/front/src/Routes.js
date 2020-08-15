import React, { Suspense } from 'react';
import {
	Switch,
	Route,
	Redirect,
	HashRouter,
} from 'react-router-dom';

import LayoutSidebar from './components/LeftSidebar';

import PageBoard from './pages/Board';
import PageGame from './pages/Game';

const Routes = () => (
	<HashRouter>
		<Suspense fallback={<h1>Load ...</h1>}>
			<Switch>
				<Redirect exact from="/" to="/board" />
				<Route path={['/board', '/game/:category']}>
					<LayoutSidebar>
						<Switch>
							<Route path="/board" component={PageBoard} />
							<Route path="/game/:category" component={PageGame} />
						</Switch>
					</LayoutSidebar>
				</Route>
			</Switch>
		</Suspense>
	</HashRouter>
);

export default Routes;
