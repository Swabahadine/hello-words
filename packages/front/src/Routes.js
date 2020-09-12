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
import PageSource from './pages/Source';
import PageTraining from './pages/Training';
import PageSourceEdit from './pages/SourceEdit';

const pathPage = (path, page) => ({ path, page });

const routerData = [
	pathPage('/board', PageBoard),
	pathPage('/game/:idCat', PageGame),
	pathPage('/sources/create', PageSource),
	pathPage('/sources/edit/:idSource', PageSourceEdit),
	pathPage('/training/:idCat/:posTag', PageTraining),
];
const Routes = () => (
	<HashRouter>
		<Suspense fallback={<h1>Load ...</h1>}>
			<Switch>
				<Redirect exact from="/" to="/board" />
				<Route path={routerData.map(({ path }) => path)}>
					<LayoutSidebar>
						<Switch>
							{routerData.map(({ path, page }) => (
								<Route key={path} path={path} component={page} />
							))}
						</Switch>
					</LayoutSidebar>
				</Route>
			</Switch>
		</Suspense>
	</HashRouter>
);

export default Routes;
