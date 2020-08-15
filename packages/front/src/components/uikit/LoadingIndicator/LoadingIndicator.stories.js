import React, { useState } from 'react';

import { Button, CardBody, Card, CardHeader, Col, Container, Row } from 'reactstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import BlockUi from 'react-block-ui';

import {
	BarLoader,
	HashLoader,
	BeatLoader,
	BounceLoader,
	CircleLoader,
	ClimbingBoxLoader,
	ClipLoader,
	ClockLoader,
	DotLoader,
	FadeLoader,
	GridLoader,
	MoonLoader,
	PacmanLoader,
	PropagateLoader,
	PulseLoader,
	RingLoader,
	RiseLoader,
	RotateLoader,
	ScaleLoader,
	SkewLoader,
	SquareLoader,
	SyncLoader,
} from 'react-spinners';

import LoadingIndicatorSpinner from './LoadingIndicatorSpinner';

export default { title: 'Loading' };

const colors = [undefined, 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light'];
export const Colors = () => (
	<div className="w-100 h-100 text-center">
		{colors.map(color => (
			<LoadingIndicatorSpinner className="m-2" color={color} key={color || 'notdefined'} />
		))}
		<div className="divider my-4" />
		{colors.map(color => (
			<LoadingIndicatorSpinner type="grow" className="m-2" color={color} key={color || 'notdefined'} />
		))}
		<div className="d-flex flex-row text-center flex-wrap justify-content-center">
			<div className="card rounded-sm card-box shadow-none p-2 m-2 align-items-center">
				<LoadingIndicatorSpinner size="sm" className="m-2" />
			</div>
			<div className="card rounded-sm card-box shadow-none p-2 m-2 align-items-center">
				<LoadingIndicatorSpinner type="grow" size="sm" className="m-2" />
			</div>
			{/**size xl */}
			<div className="card rounded-sm card-box shadow-none p-2 m-2 align-items-center">
				<LoadingIndicatorSpinner className="m-2" style={{ width: '3rem', height: '3rem' }} />
			</div>
			<div className="card rounded-sm card-box shadow-none p-2 m-2 align-items-center">
				<LoadingIndicatorSpinner className="m-2" type="grow" style={{ width: '3rem', height: '3rem' }} />
			</div>
		</div>
		<div className="divider my-4" />
		<Button className="m-2" color="primary" disabled>
			<LoadingIndicatorSpinner size="sm" />
		</Button>
		<Button className="m-2" color="primary" disabled>
			<LoadingIndicatorSpinner size="sm" />
			Loading...
		</Button>
		<Button className="m-2" color="primary" disabled>
			<LoadingIndicatorSpinner type="grow" size="sm" />
			Loading...
		</Button>
		<Button className="m-2" color="primary" disabled>
			<LoadingIndicatorSpinner type="grow" className="spinner-grow-sm" />
		</Button>
		<div className="divider my-4" />
		<div className="d-flex flex-row text-center flex-wrap justify-content-center">
			<Card className="rounded-sm card-box shadow-none p-3 m-3">
				<div
					className="d-flex align-items-center justify-content-center"
					style={{ width: '150px', height: '80px' }}
				>
					<BarLoader color="var(--danger)" loading />
				</div>
				<p className="mb-0 pt-3 text-black-50 text-center">Danger</p>
			</Card>
			<Card className="rounded-sm card-box shadow-none p-3 m-3">
				<div
					className="d-flex align-items-center justify-content-center"
					style={{ width: '150px', height: '80px' }}
				>
					<BeatLoader color="var(--first)" loading />
				</div>
				<p className="mb-0 pt-3 text-black-50 text-center">First</p>
			</Card>
			<Card className="rounded-sm card-box shadow-none p-3 m-3">
				<div
					className="d-flex align-items-center justify-content-center"
					style={{ width: '150px', height: '80px' }}
				>
					<BounceLoader color="var(--success)" loading />
				</div>
				<p className="mb-0 pt-3 text-black-50 text-center">Success</p>
			</Card>
			<Card className="rounded-sm card-box shadow-none p-3 m-3">
				<div
					className="d-flex align-items-center justify-content-center"
					style={{ width: '150px', height: '80px' }}
				>
					<CircleLoader color="var(--warning)" loading />
				</div>
				<p className="mb-0 pt-3 text-black-50 text-center">Warning</p>
			</Card>
			<Card className="rounded-sm card-box shadow-none p-3 m-3">
				<div
					className="d-flex align-items-center justify-content-center"
					style={{ width: '150px', height: '80px' }}
				>
					<ClimbingBoxLoader color="var(--info)" loading />
				</div>
				<p className="mb-0 pt-3 text-black-50 text-center">Info</p>
			</Card>
		</div>
	</div>
);

export const Basic = () => (
	<div className="d-flex flex-row text-center flex-wrap justify-content-center">
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<BarLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">BarLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<HashLoader color="#3c44b1" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">HashLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<BeatLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">BeatLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<BounceLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">BounceLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<CircleLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">CircleLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<ClimbingBoxLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">ClimbingBoxLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<ClipLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">ClipLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<ClockLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">ClockLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<DotLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">DotLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<FadeLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">FadeLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<GridLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">GridLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<MoonLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">MoonLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<PacmanLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">PacmanLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<PropagateLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">PropagateLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<PulseLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">PulseLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<RingLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">RingLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<RiseLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">RiseLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<RotateLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">RotateLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<ScaleLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">ScaleLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<SkewLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">SkewLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<SquareLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">SquareLoader</p>
		</Card>
		<Card className="rounded-sm card-box shadow-none p-3 m-3">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ width: '150px', height: '80px' }}
			>
				<SyncLoader color="var(--primary)" loading />
			</div>
			<p className="mb-0 pt-3 text-black-50 text-center">SyncLoader</p>
		</Card>
	</div>
);

export const BlockLoading = () => {
	const [blocking, setBlocking] = useState(false);
	function toggleBlocking() {
		setBlocking(!blocking);
	}

	return (
		<Container fluid>
			<Row>
				<Col md="6" xl="4">
					<div className="text-center mb-3">
						<button onClick={toggleBlocking} className="btn btn-sm btn-outline-primary m-2" type="button">
							Toogle block loading
						</button>
					</div>
					<Card className="card-box mb-5 text-center overflow-hidden">
						<BlockUi
							className="p-5"
							tag="div"
							blocking={blocking}
							loader={<CircleLoader color="var(--first)" loading={blocking} />}
						>
							<div className="font-weight-bold font-size-lg mb-2"> Block loading example 1</div>
							<p className="text-black-50 mb-0">Click the Buttons above to see this loader in action.</p>
						</BlockUi>
					</Card>
				</Col>
				<Col md="6" xl="4">
					<div className="text-center mb-3">
						<button onClick={toggleBlocking} className="btn btn-sm btn-outline-primary m-2" type="button">
							Toogle block loading
						</button>
					</div>
					<Card className="card-box mb-5 text-center overflow-hidden">
						<BlockUi
							className="p-5"
							tag="div"
							blocking={blocking}
							loader={<ScaleLoader color="var(--success)" loading={blocking} />}
						>
							<div className="font-weight-bold font-size-lg mb-2"> Block loading example 2</div>
							<p className="text-black-50 mb-0">Click the Buttons above to see this loader in action.</p>
						</BlockUi>
					</Card>
				</Col>
				<Col md="6" xl="4">
					<div className="text-center mb-3">
						<button onClick={toggleBlocking} className="btn btn-sm btn-outline-primary m-2" type="button">
							Toogle block loading
						</button>
					</div>
					<Card className="card-box mb-5 text-center overflow-hidden">
						<BlockUi
							className="p-5"
							tag="div"
							blocking={blocking}
							loader={<BarLoader color="var(--danger)" loading={blocking} />}
						>
							<div className="font-weight-bold font-size-lg mb-2"> Block loading example 3</div>
							<p className="text-black-50 mb-0">Click the Buttons above to see this loader in action.</p>
						</BlockUi>
					</Card>
				</Col>
				<Col md="6" xl="4">
					<div className="text-center mb-3">
						<button onClick={toggleBlocking} className="btn btn-sm btn-outline-primary m-2" type="button">
							Toogle block loading
						</button>
					</div>
					<Card className="card-box mb-5 text-center overflow-hidden">
						<BlockUi
							className="p-5 block-loading-overlay-dark"
							tag="div"
							blocking={blocking}
							loader={<SyncLoader color="var(--white)" loading={blocking} />}
						>
							<div className="font-weight-bold font-size-lg mb-2"> Block loading example 4</div>
							<p className="text-black-50 mb-0">Click the Buttons above to see this loader in action.</p>
						</BlockUi>
					</Card>
				</Col>
				<Col md="6" xl="4">
					<div className="text-center mb-3">
						<button onClick={toggleBlocking} className="btn btn-sm btn-outline-primary m-2" type="button">
							Toogle block loading
						</button>
					</div>
					<Card className="card-box mb-5 text-center overflow-hidden">
						<BlockUi
							className="p-5 block-loading-overlay-dark"
							tag="div"
							blocking={blocking}
							loader={<ClimbingBoxLoader color="var(--white)" loading={blocking} />}
						>
							<div className="font-weight-bold font-size-lg mb-2"> Block loading example 5</div>
							<p className="text-black-50 mb-0">Click the Buttons above to see this loader in action.</p>
						</BlockUi>
					</Card>
				</Col>
				<Col md="6" xl="4">
					<div className="text-center mb-3">
						<button onClick={toggleBlocking} className="btn btn-sm btn-outline-primary m-2" type="button">
							Toogle block loading
						</button>
					</div>
					<Card className="card-box mb-5 text-center overflow-hidden">
						<BlockUi
							className="p-5 block-loading-overlay-dark"
							tag="div"
							blocking={blocking}
							loader={<DotLoader color="var(--white)" loading={blocking} />}
						>
							<div className="font-weight-bold font-size-lg mb-2"> Block loading example 6</div>
							<p className="text-black-50 mb-0">Click the Buttons above to see this loader in action.</p>
						</BlockUi>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export const SkeletonLoader = () => (
	<Container fluid>
		<Row>
			<Col xl="4">
				<Card className="card-box mb-5">
					<CardHeader>
						<div className="card-header--title">Line skeleton loading</div>
					</CardHeader>
					<CardBody>
						<Skeleton count={8} />
					</CardBody>
				</Card>
				<Card className="card-box mb-5">
					<CardHeader>
						<div className="card-header--title">Skeleton with custom colors</div>
					</CardHeader>
					<CardBody>
						<SkeletonTheme color="#f0f0f0" highlightColor="#fff">
							<p>
								<Skeleton duration={1} />
							</p>
							<p>
								<Skeleton duration={2} />
							</p>
							<p>
								<Skeleton duration={3} />
							</p>
							<p className="mb-0">
								<Skeleton duration={4} />
							</p>
						</SkeletonTheme>
					</CardBody>
				</Card>
			</Col>
			<Col xl="4">
				<Card className="card-box mb-5">
					<CardHeader>
						<div className="card-header--title">Custom settings skeleton</div>
					</CardHeader>
					<CardBody>
						<Skeleton count={4} height={32} />
					</CardBody>
				</Card>
				<Card className="card-box mb-5">
					<CardHeader>
						<div className="card-header--title">Custom circle skeleton</div>
					</CardHeader>
					<CardBody>
						<span className="p-1">
							<Skeleton circle height={80} width={80} />
						</span>
						<span className="p-1">
							<Skeleton circle height={80} width={80} />
						</span>
						<span className="p-1">
							<Skeleton circle height={80} width={80} />
						</span>
						<span className="p-1">
							<Skeleton circle height={80} width={80} />
						</span>
					</CardBody>
				</Card>
			</Col>
			<Col xl="4">
				<Card className="card-box mb-5">
					<CardHeader>
						<div className="card-header--title">Article skeleton example</div>
					</CardHeader>
					<CardBody>
						<p>
							<Skeleton circle height={84} width={84} />
						</p>
						<p className="mb-2">
							<Skeleton width={287} />
						</p>
						<p className="mb-2">
							<Skeleton width={295} />
						</p>
						<p className="mb-2">
							<Skeleton width={290} />
						</p>
						<p className="mb-2">
							<Skeleton width={305} />
						</p>
						<p className="mb-2">
							<Skeleton width={320} />
						</p>
					</CardBody>
				</Card>
				<Card className="card-box mb-5">
					<CardHeader>
						<div className="card-header--title">Circle skeleton loading</div>
					</CardHeader>
					<CardBody>
						<span className="p-1">
							<Skeleton circle height={38} width={38} />
						</span>
						<span className="p-1">
							<Skeleton circle height={38} width={38} />
						</span>
						<span className="p-1">
							<Skeleton circle height={38} width={38} />
						</span>
						<span className="p-1">
							<Skeleton circle height={38} width={38} />
						</span>
						<span className="p-1">
							<Skeleton circle height={38} width={38} />
						</span>
						<span className="p-1">
							<Skeleton circle height={38} width={38} />
						</span>
						<span className="p-1">
							<Skeleton circle height={38} width={38} />
						</span>
						<span className="p-1">
							<Skeleton circle height={38} width={38} />
						</span>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
);
