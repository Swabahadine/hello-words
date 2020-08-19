/* eslint-disable no-extra-boolean-cast */
import React, { useCallback, useState } from 'react';
import { useQuery, useMutation } from 'react-query';

import {
	Container,
	Row,
	Col,
	Button,
	Jumbotron,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import clsx from 'clsx';

import { useHistory } from 'react-router-dom';
import { LayoutLoading } from '../components/uikit';

import {
	findCategories,
	deleteCategory,
} from '../frontApi/sourcesApi';

import {
	classNames,
} from '../lib';
import ModalPTWords from '../components/ModalPTWords';

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

const { FLEX_CENTER, FLEX_AROUND, FLEX_BETWEEN } = classNames;

export default function Board() {
	const [idGroupWords, setIdGroupWords] = useState(undefined);
	// Modals
	const [modal, setModal] = useState(false);
	
	const toggle = useCallback(() => setModal(!modal), [modal]);


	const history = useHistory();
	const { isLoading, data, refetch } = useQuery('findCategories', findCategories());
	const [mutate, {
		// isError,
		isLoading: isLoadingMutate,
		// isSuccess,
	}] = useMutation((body) => deleteCategory(body));

	const onChooseCategory = useCallback((idGroup) => {
		history.push(`game/${idGroup}`);
	}, [history]);

	const onTrainingCategory = useCallback((idGroup) => {
		setIdGroupWords(idGroup);
		toggle();
	}, [toggle]);

	const onCreateCategory = useCallback(() => {
		history.push('sources/create');
	}, [history]);

	const onEditCategory = useCallback((id) => {
		history.push(`sources/edit/${id}`);
	}, [history]);

	const onDeleteCategory = useCallback(async (id) => {
		await mutate({ id });
		refetch();
	}, [mutate, refetch]);
	return (
		<LayoutLoading loading={isLoading || isLoadingMutate || !data}>
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
						{data?.map(({
							_id,
							category,
							infos = {},
							group,
						}) => (
							<Col key={_id} xs="12" md="6" lg="4" className={clsx('flex-column py-2')}>
								<Card>
									<CardHeader className={clsx(FLEX_BETWEEN)}>
										<b>{category}</b>
										<div>
											<Button onClick={() => onEditCategory(_id)} color="link">
												Modifier
											</Button>
											<Button onClick={() => onDeleteCategory(_id)} color="link">
												Supprimer
											</Button>
										</div>
									</CardHeader>
									<CardBody>
										<b>{infos.diffWords}</b> mots différents sur un total de <b>{infos.textSize}</b>
										{' '}mots provenant des sources.
									</CardBody>
									<CardFooter className={FLEX_BETWEEN}>
										<Button
											onClick={() => onChooseCategory(group)}
											key={_id}
											color="info"
											className=""
										>
											Jouer
										</Button>
										<Button
											onClick={() => onTrainingCategory(group)}
											key={_id}
											color="warning"
											className=""
										>
											s&apos;entrainer
										</Button>
									</CardFooter>
								</Card>
							</Col>
						))}

					</Row>
				</Container>
			</section>
			{modal && idGroupWords && (
				<ModalPTWords toggle={toggle} modal={modal} idGroup={idGroupWords} />
			)}
		</LayoutLoading>
	);
}
