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
} from 'reactstrap';
import clsx from 'clsx';

import { useHistory } from 'react-router-dom';
import { LayoutLoading } from '../components/uikit';

import {
	findCategories,
	deleteCategory,
} from '../frontApi/categoryApi';

import {
	classNames,
} from '../lib';
import ModalPTWords from '../components/ModalPTWords';

const { FLEX_CENTER, FLEX_AROUND, FLEX_BETWEEN } = classNames;

export default function Board() {
	const [idCat, setIdCat] = useState(undefined);
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

	// const onChooseCategory = useCallback((idGroup) => {
	// 	history.push(`game/${idGroup}`);
	// }, [history]);

	const onTrainingCategory = useCallback((idGroup) => {
		setIdCat(idGroup);
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
			<section className="vh-100 w-100">
				<Jumbotron fluid className={clsx(FLEX_AROUND)} style={{ }}>
					<div>
						<h1 className="display-3">
							Hello Words
						</h1>
						<h5>Choisis une catégorie</h5>
					</div>
					<div>
						<Button color="dark" onClick={() => onCreateCategory()}>
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
						}) => (
							<Col key={_id} xs="12" md="12" lg="8" className={clsx('flex-column py-2')}>
								<Card color="light" className="">
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
										{/* <Button
											onClick={() => onChooseCategory(group)}
											color="info"
											className=""
										>
											Jouer
										</Button> */}
										<Button
											onClick={() => onTrainingCategory(_id)}
											color="info"
											className=""
										>
											Se connecter
										</Button>
									</CardFooter>
								</Card>
							</Col>
						))}

					</Row>
				</Container>
			</section>
			{modal && idCat && (
				<ModalPTWords toggle={toggle} modal={modal} id={idCat} />
			)}
		</LayoutLoading>
	);
}
