/* eslint-disable no-extra-boolean-cast */
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAsyncCallback } from 'react-async-hook';
import { useQuery, useMutation } from 'react-query';

import {
	Container, Row, Col, Button, Jumbotron, FormGroup, Input,
} from 'reactstrap';
import clsx from 'clsx';

import { useHistory } from 'react-router-dom';
import { Form, Field, FieldError } from 'react-jsonschema-form-validation';
import {
	LayoutLoading, ContentTitle, ButtonLoading,
} from '../components/uikit';

import {
	findCategoryById,
	updateCategory,
} from '../frontApi/categoryApi';

import {
	classNames,
	errorMessages,
} from '../lib';

const defaultUrls = [
	'https://medium.com/@patarkf/synchronize-your-asynchronous-code-using-javascripts-async-await-5f3fa5b1366d',
	'https://www.deepl.com/en/docs-api/',
	'https://medium.com/@me_37286/19-ways-to-become-a-better-node-js-developer-in-2019-ffd3a8fbfe38',
	'https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e',
	'https://medium.com/@tkwebdev/vue-going-serverless-with-firebase-ad96398e43c8',
	'https://policy.medium.com/medium-privacy-policy-f03bf92035c9',
	'https://aws.amazon.com/terms/',
	'https://aws.amazon.com/terms/?nc1=f_pr',
	'https://seranking.com/blog/find-all-pages-on-a-website/',
];

const { FLEX_CENTER, FLEX_AROUND } = classNames;

const schema = {
	type: 'object',
	additionalProperties: false,
	properties: {
		urls: {
			type: 'array',
			items: {
				type: 'string',
				format: 'uri',
			},
		},
		category: {
			type: 'string',
		},
	},
	required: ['urls', 'category'],
};

const initialState = {
	urls: defaultUrls,
	category: '',
};

export default function SourceEdit({ match }) {
	const { idSource } = match.params;
	const { isLoading: load, data } = useQuery('findCategoryById', findCategoryById(idSource));
	const history = useHistory();
	const [isFetched, setIsFecthed] = useState(false);
	const [formData, setFormData] = useState(initialState);
	useEffect(() => {
		if (data && !isFetched) {
			const { urls, category } = data;
			setFormData({ urls, category });
			setIsFecthed(true);
		}
	}, [data, isFetched]);
	const [mutate, {
		// isError,
		isLoading,
		// isSuccess,
	}] = useMutation(updateCategory({ ...formData, id: idSource }));

	const handleChange = useCallback((newData) => {
		setFormData(newData);
	}, []);

	const handleDeleteAntenne = (index) => {
		setFormData((prev) => ({ ...prev, urls: prev.urls.filter((uri, uriIdx) => uriIdx !== index) }));
	};

	const handleSubmit = useCallback(async () => {
		await mutate();
		history.push('/board');
	}, [history, mutate]);

	const onUrlChange = useCallback(({ target: { value, id } }) => {
		setFormData((prev) => {
			prev.urls[id] = value;
			return { ...prev };
		});
	}, []);

	const handleClickAdd = useCallback(() => {
		setFormData((prev) => {
			prev.urls.push('');
			return { ...prev };
		});
	}, []);

	const handleSubmitAsync = useAsyncCallback(handleSubmit);
	// const { loading, error } = handleSubmitAsync;
	// const success = handleSubmitAsync.status === 'success';
	const { urls } = formData;
	return (
		<Form
			data={formData}
			errorMessages={errorMessages}
			onChange={handleChange}
			onSubmit={handleSubmitAsync.execute}
			schema={schema}
		>
			<LayoutLoading loading={load}>
				<section style={{ overflowY: 'scroll' }} className="vh-100 vw-100">
					<Jumbotron fluid className={clsx(FLEX_AROUND)} style={{ }}>
						<div>
							<h1 className="display-3">
								Hello Words
							</h1>
							<h5>Crée une nouvelle catégorie</h5>
						</div>
					</Jumbotron>
					<Container className={clsx('flex-column')}>
						<Row className={clsx(FLEX_CENTER, 'w-100')}>
							<Col xs="12" lg="10">
								<div className="w-100 text-right">
									<ButtonLoading
										className="text-nowrap"
										color="dark"
										loading={isLoading}
										type="submit"
										style={{
											top: 10,
											right: 30,
										}}
									>
										<span className="text-white d-xl-block">Mettre à jour</span>
									</ButtonLoading>
								</div>
								<ContentTitle title="Nom de la catégorie *">
									<FormGroup>
										<Field
											component={Input}
											placeholder="Catégorie"
											type="text"
											name="category"
											value={formData.category}
										/>
										<FieldError name="category" />
									</FormGroup>
								</ContentTitle>
							</Col>
							<Col xs="12" lg="10" className={clsx('flex-column')}>
								{urls.map((url, index) => (
									// eslint-disable-next-line react/no-array-index-key
									<ContentTitle key={`url${index}`} title={`Url ${index + 1} *`}>
										<FormGroup>
											<Field
												component={Input}
												onChange={onUrlChange}
												placeholder="Insérer une url"
												type="text"
												name={`urls.${index}`}
												id={index}
												value={url}
											/>
											<FieldError
												name={`urls.${index}`}
											/>
											{index > 0 && index === urls.length - 1 && (
												<div className="w-100 text-right py-2">
													<Button
														color="danger"
														onClick={() => handleDeleteAntenne(index)}
														style={{
															// width: 300,
															right: 0,
														}}
													>
														Supprimer
													</Button>
												</div>

											)}
										</FormGroup>
									</ContentTitle>
								))}
								<Button
									color="dark"
									onClick={handleClickAdd}
									block
								>
									Ajouter une autre url
								</Button>

							</Col>
						</Row>
					</Container>
					<div style={{ height: 100 }} />
				</section>
			</LayoutLoading>
		</Form>
	);
}

SourceEdit.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			idSource: PropTypes.string,
		}),
	}).isRequired,
};
