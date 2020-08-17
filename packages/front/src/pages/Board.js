/* eslint-disable no-extra-boolean-cast */
import React, { useState, useCallback, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';

import {
	Container, Row, Col, Button, ListGroup, Jumbotron, Card, ListGroupItem,
} from 'reactstrap';
import clsx from 'clsx';

import { useHistory } from 'react-router-dom';
import { LayoutLoading } from '../components/uikit';

import {
	findCategories,
	// createCategory,
} from '../frontApi/groupApi';

import {
	classNames,
} from '../lib';

// const defaultUrls = [
// 	'https://medium.com/@patarkf/synchronize-your-asynchronous-code-using-javascripts-async-await-5f3fa5b1366d',
// 	'https://www.deepl.com/en/docs-api/',
// 	'https://medium.com/@me_37286/19-ways-to-become-a-better-node-js-developer-in-2019-ffd3a8fbfe38',
// 	'https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e',
// 	'https://medium.com/@tkwebdev/vue-going-serverless-with-firebase-ad96398e43c8',
// 	'https://policy.medium.com/medium-privacy-policy-f03bf92035c9',
// 	'https://aws.amazon.com/terms/',
// 	'https://aws.amazon.com/terms/?nc1=f_pr',
// 	'https://seranking.com/blog/find-all-pages-on-a-website/',
// ];

const { FLEX_CENTER, FLEX_AROUND } = classNames;

export default function Board() {
	const history = useHistory();
	const { isLoading, data } = useQuery('findCategories', findCategories());

	const onChooseCategory = useCallback((category) => {
		history.push(`game/${category}`);
	}, [history]);

	const onCreateCategory = useCallback((category = 'add') => {
		history.push(`sources/${category}`);
	}, [history]);
	return (
		<LayoutLoading loading={isLoading}>
			<section style={{ overflowY: 'scroll' }} className="vh-100 w-100">
				<Jumbotron fluid className={clsx(FLEX_AROUND)} style={{ }}>
					<div>
						<h1 className="display-3">
							Hello Words
						</h1>
						<h5>Choisis une catégorie</h5>
					</div>
					<div>
						<Button color="danger" onClick={() => onCreateCategory()}>
							Creer une nouvelle categorie
						</Button>
					</div>
				</Jumbotron>
				<Container fluid className={clsx('flex-column h-100')}>
					<Row className={clsx(FLEX_CENTER, 'w-100')}>
						<Col xs="12" md="6" lg="10" className={clsx('flex-column')}>
							{data?.map(({ _id, category }) => (
								<Button
									onClick={() => onChooseCategory(category)}
									key={_id}
									color=""
									className=""
									block
									style={{
										height: 70,
										borderRadius: 0,
										textAlign: 'left',
										borderBottomWidth: 2,
										borderBottomColor: 'black',
									}}
								>
									<h4><b>{category}</b></h4>
								</Button>
							))}
						</Col>
					</Row>
				</Container>
			</section>
		</LayoutLoading>
	);
}
