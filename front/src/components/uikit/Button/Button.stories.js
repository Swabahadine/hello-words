import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Button,
	ButtonGroup,
	Col,
	Row,
	UncontrolledTooltip,
} from 'reactstrap';
import LaddaButton, {
	EXPAND_LEFT,
	EXPAND_RIGHT,
	EXPAND_UP,
	EXPAND_DOWN,
	SLIDE_LEFT,
	SLIDE_RIGHT,
	SLIDE_UP,
	SLIDE_DOWN,
	ZOOM_IN,
	ZOOM_OUT,
} from 'react-ladda';
import MdFootball from 'react-ionicons/lib/MdFootball';
import MdUmbrella from 'react-ionicons/lib/MdUmbrella';
import MdHeart from 'react-ionicons/lib/MdHeart';
import MdOptions from 'react-ionicons/lib/MdOptions';
import MdAlarm from 'react-ionicons/lib/MdAlarm';

import ButtonIcon from './Icon';
import ButtonLabel from './Label';
import ButtonLoading from './Loading';

export default { title: 'Button' };

export const Basic = () => (
	<div>
		<Button color="primary" className="m-2">
			Button
		</Button>
		<Button color="primary" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'lightbulb']} />
			</ButtonIcon>
			<ButtonLabel>Left icon</ButtonLabel>
		</Button>
		<Button color="primary" className="m-2">
			<ButtonLabel>Right icon</ButtonLabel>
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'keyboard']} />
			</ButtonIcon>
		</Button>
		<Button color="primary" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fas', 'cog']} />
			</ButtonIcon>
		</Button>
		<div className="divider my-2" />
		<Button size="sm" color="primary" className="m-2">
			Button
		</Button>
		<Button color="primary" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'lightbulb']} />
			</ButtonIcon>
			<ButtonLabel>Left icon</ButtonLabel>
		</Button>
		<Button size="lg" color="primary" className="m-2">
			<ButtonLabel>Right icon</ButtonLabel>
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'keyboard']} />
			</ButtonIcon>
		</Button>
	</div>
);

export const Groups = () => (
	<div>
		<ButtonGroup>
			<Button color="primary">Left</Button>
			<Button active color="primary">
				Middle
			</Button>
			<Button color="primary">Right</Button>
		</ButtonGroup>
		<div className="divider my-2" />
		<ButtonGroup size="sm" className="m-2">
			<Button color="primary">Left</Button>
			<Button active color="primary">
				Middle
			</Button>
			<Button color="primary">Right</Button>
		</ButtonGroup>
		<div className="divider my-2" />
		<ButtonGroup size="lg" className="m-2">
			<Button color="primary">Left</Button>
			<Button active color="primary">
				Middle
			</Button>
			<Button color="primary">Right</Button>
		</ButtonGroup>
	</div>
);

export const Colors = () => (
	<div>
		<Button color="primary" className="m-2">
			Primary
		</Button>
		<Button className="m-2" color="secondary">
			Secondary
		</Button>
		<Button className="m-2" color="first">
			Primary Alt
		</Button>
		<Button className="m-2" color="second">
			Secondary Alt
		</Button>
		<Button className="m-2" color="info">
			Info
		</Button>
		<Button className="m-2" color="success">
			Success
		</Button>
		<Button className="m-2" color="warning">
			Warning
		</Button>
		<Button className="m-2" color="danger">
			Danger
		</Button>
		<Button className="m-2" color="dark">
			Dark
		</Button>
		<div className="divider my-2" />
		<Button className="m-2" color="neutral-primary">
			Primary
		</Button>
		<Button className="m-2" color="neutral-secondary">
			Secondary
		</Button>
		<Button className="m-2" color="neutral-first">
			Primary Alt
		</Button>
		<Button className="m-2" color="neutral-second">
			Secondary Alt
		</Button>
		<Button className="m-2" color="neutral-info">
			Info
		</Button>
		<Button className="m-2" color="neutral-success">
			Success
		</Button>
		<Button className="m-2" color="neutral-warning">
			Warning
		</Button>
		<Button className="m-2" color="neutral-danger">
			Danger
		</Button>
		<Button className="m-2" color="neutral-dark">
			Dark
		</Button>
	</div>
);

export const Gradients = () => (
	<div>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-warm-flame">
			Warm Flame
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-night-fade">
			Night Fade
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-sunny-morning">
			Sunny Morning
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-tempting-azure">
			Tempting Azure
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-amy-crisp">
			Amy Crisp
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-heavy-rain">
			Heavy Rain
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-mean-fruit">
			Mean Fruit
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-malibu-beach">
			Malibu Beach
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-deep-blue">
			Deep Blue
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-ripe-malin">
			Ripe Malin
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-arielle-smile">
			Arielle Smile
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-plum-plate">
			Plum Plate
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none btn-gradient-inverse bg-happy-fisher">
			Happy Fisher
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-happy-itmeo">
			Happy Itmeo
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-mixed-hopes">
			Mixed Hopes
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-strong-bliss">
			Strong Bliss
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-grow-early">
			Grow Early
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-love-kiss">
			Love Kiss
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-premium-dark">
			Premium Dark
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-happy-green">
			Happy Green
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-vicious-stance">
			Vicious Stance
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-midnight-bloom">
			Midnight Bloom
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-night-sky">
			Night Sky
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-slick-carbon">
			Slick Carbon
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-royal">
			Royal
		</Button>
		<Button color="primary" className="m-2 btn-gradient shadow-none bg-asteroid">
			Asteroid
		</Button>
	</div>
);

export const Icons = () => (
	<div>
		<Button color="primary" className="m-2">
			<ButtonIcon>
				<MdFootball color="var(--light)" />
			</ButtonIcon>
			<ButtonLabel>Primary</ButtonLabel>
		</Button>
		<Button color="first" className="m-2">
			<ButtonLabel>Primary Alt</ButtonLabel>
			<ButtonIcon>
				<MdUmbrella color="var(--light)" />
			</ButtonIcon>
		</Button>
		<Button color="second" className="m-2">
			<ButtonIcon>
				<MdAlarm color="var(--light)" />
			</ButtonIcon>
			<ButtonLabel>Secondary Alt</ButtonLabel>
			<ButtonIcon>
				<MdHeart color="var(--light)" />
			</ButtonIcon>
		</Button>
		<Button color="info" className="m-2">
			<ButtonIcon>
				<MdOptions color="var(--light)" />
			</ButtonIcon>
		</Button>
		<div className="divider my-3" />
		<Button size="sm" color="primary" className="btn-pill m-2">
			<ButtonIcon className="font-size-md">
				<MdFootball color="var(--light)" />
			</ButtonIcon>
		</Button>
		<Button color="first" className="btn-pill m-2">
			<ButtonIcon className="font-size-lg">
				<MdUmbrella color="var(--light)" />
			</ButtonIcon>
		</Button>
		<Button size="lg" color="second" className="btn-pill m-2">
			<ButtonIcon className="font-size-xl">
				<MdHeart color="var(--light)" />
			</ButtonIcon>
		</Button>
		<div className="divider my-3" />
		<Button color="success" className="btn-pill d-40 p-0 m-2">
			<ButtonIcon>
				<MdFootball color="var(--light)" />
			</ButtonIcon>
		</Button>
		<Button color="danger" className="btn-pill d-50 p-0 m-2">
			<ButtonIcon>
				<MdUmbrella color="var(--light)" />
			</ButtonIcon>
		</Button>
		<Button color="warning" className="btn-pill d-60 p-0 m-2">
			<ButtonIcon>
				<MdHeart color="var(--light)" />
			</ButtonIcon>
		</Button>
		<Button color="info" className="btn-pill d-70 p-0 m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'building']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<Button color="dark" className="btn-pill d-80 p-0 m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'keyboard']} className="font-size-xl" />
			</ButtonIcon>
		</Button>
		<Button color="second" className="btn-pill d-90 p-0 m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'gem']} className="font-size-xxl" />
			</ButtonIcon>
		</Button>
		<div className="divider my-3" />
		<Button className="m-2" color="neutral-primary">
			<ButtonIcon>
				<MdFootball color="var(--primary)" />
			</ButtonIcon>
			<ButtonLabel>Primary</ButtonLabel>
		</Button>
		<Button className="m-2" color="neutral-first">
			<ButtonLabel>Primary Alt</ButtonLabel>
			<ButtonIcon>
				<MdUmbrella color="var(--first)" />
			</ButtonIcon>
		</Button>
		<Button className="m-2" color="neutral-second">
			<ButtonIcon>
				<MdAlarm color="var(--second)" />
			</ButtonIcon>
			<ButtonLabel>Secondary Alt</ButtonLabel>
			<ButtonIcon>
				<MdHeart color="var(--second)" />
			</ButtonIcon>
		</Button>
		<Button className="m-2" color="neutral-info">
			<ButtonIcon>
				<MdOptions color="var(--info)" />
			</ButtonIcon>
		</Button>
		<div className="divider my-3" />
		<Button size="sm" className="btn-pill m-2" color="neutral-primary">
			<ButtonIcon className="font-size-md">
				<MdFootball color="var(--primary)" />
			</ButtonIcon>
		</Button>
		<Button className="btn-pill m-2" color="neutral-first">
			<ButtonIcon className="font-size-lg">
				<MdUmbrella color="var(--first)" />
			</ButtonIcon>
		</Button>
		<Button size="lg" className="btn-pill m-2" color="neutral-second">
			<ButtonIcon className="font-size-xl">
				<MdHeart color="var(--second)" />
			</ButtonIcon>
		</Button>
		<div className="divider my-3" />
		<Button className="btn-pill d-40 p-0 m-2" color="neutral-success">
			<ButtonIcon>
				<MdFootball color="var(--success)" />
			</ButtonIcon>
		</Button>
		<Button className="d-50 p-0 m-2 btn-pill" color="neutral-danger">
			<ButtonIcon>
				<MdUmbrella color="var(--danger)" />
			</ButtonIcon>
		</Button>
		<Button className="btn-pill d-60 p-0 m-2" color="neutral-warning">
			<ButtonIcon>
				<MdHeart color="var(--warning)" />
			</ButtonIcon>
		</Button>
		<Button className="btn-pill d-70 p-0 m-2" color="neutral-info">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'building']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<Button className="btn-pill d-80 p-0 m-2" color="neutral-dark">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'keyboard']} className="font-size-xl" />
			</ButtonIcon>
		</Button>
		<Button color="neutral-second" className="btn-pill d-90 p-0 m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'gem']} className="font-size-xxl" />
			</ButtonIcon>
		</Button>
	</div>
);

export const IconsAnimated = () => (
	<div>
		<Button color="link" className="d-70 p-0 btn-animated-icon btn-animated-icon--info m-2 btn-pill">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'building']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<Button color="link" className="d-80 p-0 btn-animated-icon btn-animated-icon--dark m-2 btn-pill">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'keyboard']} className="font-size-xl" />
			</ButtonIcon>
		</Button>
		<Button color="link" className="d-90 p-0 btn-animated-icon btn-animated-icon--second m-2 btn-pill">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'gem']} className="font-size-xxl" />
			</ButtonIcon>
		</Button>
		<div className="divider my-3" />
		<Button color="neutral-success" className="d-40 p-0 btn-animated-icon btn-animated-icon--success m-2">
			<ButtonIcon>
				<MdFootball color="var(--success)" />
			</ButtonIcon>
		</Button>
		<Button color="neutral-danger" className="d-50 p-0 btn-animated-icon btn-animated-icon--danger m-2">
			<ButtonIcon>
				<MdUmbrella color="var(--danger)" />
			</ButtonIcon>
		</Button>
		<Button color="neutral-warning" className="d-60 p-0 btn-animated-icon btn-animated-icon--warning m-2">
			<ButtonIcon>
				<MdHeart color="var(--warning)" />
			</ButtonIcon>
		</Button>
		<Button color="neutral-info" className="d-70 p-0 btn-animated-icon btn-animated-icon--info m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'building']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<Button color="neutral-dark" className="d-80 p-0 btn-animated-icon btn-animated-icon--dark m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'keyboard']} className="font-size-xl" />
			</ButtonIcon>
		</Button>
		<Button color="neutral-second" className="d-90 p-0 btn-animated-icon btn-animated-icon--second m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['far', 'gem']} className="font-size-xxl" />
			</ButtonIcon>
		</Button>
	</div>
);

export const Social = () => (
	<div>
		<div className="heading-3 pt-3">With Fontawesome</div>
		<Button color="facebook" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'facebook']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Facebook</ButtonLabel>
		</Button>
		<Button color="twitter" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'twitter']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Twitter</ButtonLabel>
		</Button>
		<Button color="google" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'google']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Google</ButtonLabel>
		</Button>
		<Button color="instagram" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'instagram']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Instagram</ButtonLabel>
		</Button>
		<Button color="pinterest" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'pinterest']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Pinterest</ButtonLabel>
		</Button>
		<Button color="youtube" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'youtube']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Youtube</ButtonLabel>
		</Button>
		<Button color="slack" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'slack']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Slack</ButtonLabel>
		</Button>
		<Button color="dribbble" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'dribbble']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Dribbble</ButtonLabel>
		</Button>
		<Button color="github" className="m-2">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'github']} className="font-size-lg" />
			</ButtonIcon>
			<ButtonLabel>Github</ButtonLabel>
		</Button>
		<div className="divider my-3" />
		<Button color="facebook" className="btn-pill d-60 p-0 m-2" id="FacebookBtnTooltip1567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'facebook']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="FacebookBtnTooltip1567">Facebook</UncontrolledTooltip>
		<Button color="twitter" className="btn-pill d-60 p-0 m-2" id="btnTwitterTooltip567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'twitter']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="btnTwitterTooltip567">Twitter</UncontrolledTooltip>
		<Button color="google" className="btn-pill d-60 p-0 m-2" id="btnGoogleTooltip567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'google']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="btnGoogleTooltip567">Google</UncontrolledTooltip>
		<Button color="instagram" className="btn-pill d-60 p-0 m-2" id="btnInstagramTooltip567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'instagram']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="btnInstagramTooltip567">Instagram</UncontrolledTooltip>
		<Button color="pinterest" className="btn-pill d-60 p-0 m-2" id="PinterestTooltip1567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'pinterest']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="PinterestTooltip1567">Pinterest</UncontrolledTooltip>
		<Button color="youtube" className="btn-pill d-60 p-0 m-2" id="YoutubeTooltip1567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'youtube']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="YoutubeTooltip1567">Youtube</UncontrolledTooltip>
		<Button color="slack" className="btn-pill d-60 p-0 m-2" id="SlackTooltip1567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'slack']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="SlackTooltip1567">Slack</UncontrolledTooltip>
		<Button color="dribbble" className="btn-pill d-60 p-0 m-2" id="btnDribbbleTooltip567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'dribbble']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="btnDribbbleTooltip567">Dribbble</UncontrolledTooltip>
		<Button color="github" className="btn-pill d-60 p-0 m-2" id="btnGithubTooltip567">
			<ButtonIcon>
				<FontAwesomeIcon icon={['fab', 'github']} className="font-size-lg" />
			</ButtonIcon>
		</Button>
		<UncontrolledTooltip target="btnGithubTooltip567">Github</UncontrolledTooltip>
	</div>
);

export const Links = () => (
	<>
		<Button color="link" className="m-2 btn-link-primary">
			<span>Primary</span>
		</Button>
		<Button color="link" className="m-2 btn-link-first">
			<span>Primary Alt</span>
		</Button>
		<Button color="link" className="m-2 btn-link-second">
			<span>Secondary Alt</span>
		</Button>

		<Button color="link" className="m-2 btn-link-info">
			<span>Info</span>
		</Button>
		<Button color="link" className="m-2 btn-link-success">
			<span>Success</span>
		</Button>
		<Button color="link" className="m-2 btn-link-warning">
			<span>Warning</span>
		</Button>
		<Button color="link" className="m-2 btn-link-danger">
			<span>Danger</span>
		</Button>
		<Button color="link" className="m-2 btn-link-dark">
			<span>Dark</span>
		</Button>
	</>
);

export const Loading = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [expLeft, setExpLeft] = useState(false);
	const [expRight, setExpRight] = useState(false);
	const [expUp, setExpUp] = useState(false);
	const [expDown, setExpDown] = useState(false);
	const [expSlideLeft, setExpSlideLeft] = useState(false);
	const [expSlideRight, setExpSlideRight] = useState(false);
	const [expSlideUp, setExpSlideUp] = useState(false);
	const [expSlideDown, setExpSlideDown] = useState(false);
	const [expZoomIn, setExpZoomIn] = useState(false);
	const [expZoomOut, setExpZoomOut] = useState(false);

	return (
		<>
			<div
				className="m-2"
				onClick={() => setIsLoading((state) => !state)}
			>
				<ButtonLoading
					color="primary"
					loading={isLoading}
				>
					Valider
				</ButtonLoading>
			</div>
			<div className="divider my-2" />
			<Button color="primary" className="m-2 btn-spinner" disabled>
				<ButtonIcon className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
				<span className="sr-only">Loading...</span>
			</Button>
			<Button color="primary" className="m-2 btn-spinner" disabled>
				<ButtonIcon className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
				<span className="sr-only">Loading...</span>
			</Button>
			<Button color="primary" className="m-2 btn-spinner" disabled>
				<ButtonIcon className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
				<ButtonLabel>Loading...</ButtonLabel>
			</Button>
			<Button color="primary" className="m-2 btn-spinner" disabled>
				<ButtonIcon className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
				<ButtonLabel>Loading...</ButtonLabel>
			</Button>
			<div className="divider my-2" />
			<Row className="text-center">
				<Col md="3">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expLeft}
						onClick={() => setExpLeft({ expLeft: true })}
						data-style={EXPAND_LEFT}
					>
						Expand Left
					</LaddaButton>
				</Col>
				<Col md="3">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expRight}
						onClick={() => setExpRight({ expRight: true })}
						data-style={EXPAND_RIGHT}
					>
						Expand Right
					</LaddaButton>
				</Col>
				<Col md="3">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expZoomIn}
						onClick={() => setExpZoomIn({ expZoomIn: true })}
						data-style={ZOOM_IN}
					>
						Zoom In
					</LaddaButton>
				</Col>
				<Col md="3">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expZoomOut}
						onClick={() => setExpZoomOut({ expZoomOut: true })}
						data-style={ZOOM_OUT}
					>
						Zoom Out
					</LaddaButton>
				</Col>
			</Row>
			<div className="divider my-2" />
			<Row className="text-center">
				<Col md="3">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expSlideLeft}
						onClick={() => setExpSlideLeft({ expSlideLeft: true })}
						data-style={SLIDE_LEFT}
					>
						Slide Left
					</LaddaButton>
				</Col>
				<Col md="3">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expSlideRight}
						onClick={() => setExpSlideRight({ expSlideRight: true })}
						data-style={SLIDE_RIGHT}
					>
						Slide Right
					</LaddaButton>
				</Col>
				<Col md="3">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expSlideUp}
						onClick={() => setExpSlideUp({ expSlideUp: true })}
						data-style={SLIDE_UP}
					>
						Slide Up
					</LaddaButton>
				</Col>
				<Col md="3">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expSlideDown}
						onClick={() => setExpSlideDown({ expSlideDown: true })}
						data-style={SLIDE_DOWN}
					>
						Slide Down
					</LaddaButton>
				</Col>
			</Row>
			<div className="divider my-2" />
			<Row className="text-center">
				<Col md="6">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expUp}
						onClick={() => setExpUp({ expUp: true })}
						data-style={EXPAND_UP}
					>
						Expand Up
					</LaddaButton>
				</Col>
				<Col md="6">
					<LaddaButton
						className="m-2 btn btn-primary"
						loading={expDown}
						onClick={() => setExpDown({ expDown: true })}
						data-style={EXPAND_DOWN}
					>
						Expand Down
					</LaddaButton>
				</Col>
			</Row>
		</>
	);
};

export const Outline = () => (
	<>
		<Button className="m-2" outline color="primary">
			Primary
		</Button>
		<Button className="m-2" outline color="first">
			Primary Alt
		</Button>
		<Button className="m-2" outline color="second">
			Secondary Alt
		</Button>
		<Button className="m-2" outline color="info">
			Info
		</Button>
		<Button className="m-2" outline color="success">
			Success
		</Button>
		<Button className="m-2" outline color="warning">
			Warning
		</Button>
		<Button className="m-2" outline color="danger">
			Danger
		</Button>
		<Button className="m-2" outline color="dark">
			Dark
		</Button>
	</>
);

export const Pills = () => (
	<>
		<Button className="btn-pill m-2" color="primary">
			Primary
		</Button>
		<Button className="btn-pill m-2" color="secondary">
			Secondary
		</Button>
		<Button className="btn-pill m-2" color="first">
			Primary Alt
		</Button>
		<Button className="btn-pill m-2" color="second">
			Secondary Alt
		</Button>
		<Button className="btn-pill m-2" color="info">
			Info
		</Button>
		<Button className="btn-pill m-2" color="success">
			Success
		</Button>
		<Button className="btn-pill m-2" color="warning">
			Warning
		</Button>
		<Button className="btn-pill m-2" color="danger">
			Danger
		</Button>
		<Button className="btn-pill m-2" color="dark">
			Dark
		</Button>
		<div className="divider my-3" />
		<Button outline className="btn-pill m-2" color="primary">
			Primary
		</Button>
		<Button outline className="btn-pill m-2" color="first">
			Primary Alt
		</Button>
		<Button outline className="btn-pill m-2" color="second">
			Secondary Alt
		</Button>
		<Button outline className="btn-pill m-2" color="info">
			Info
		</Button>
		<Button outline className="btn-pill m-2" color="success">
			Success
		</Button>
		<Button outline className="btn-pill m-2" color="warning">
			Warning
		</Button>
		<Button outline className="btn-pill m-2" color="danger">
			Danger
		</Button>
		<Button outline className="btn-pill m-2" color="dark">
			Dark
		</Button>
	</>
);

export const Square = () => (
	<>
		<Button className="m-2 btn-square" color="primary">
			Primary
		</Button>
		<Button className="m-2 btn-square" color="secondary">
			Secondary
		</Button>
		<Button className="m-2 btn-square" color="first">
			Primary Alt
		</Button>
		<Button className="m-2 btn-square" color="second">
			Secondary Alt
		</Button>
		<Button className="m-2 btn-square" color="info">
			Info
		</Button>
		<Button className="m-2 btn-square" color="success">
			Success
		</Button>
		<Button className="m-2 btn-square" color="warning">
			Warning
		</Button>
		<Button className="m-2 btn-square" color="danger">
			Danger
		</Button>
		<Button className="m-2 btn-square" color="dark">
			Dark
		</Button>
	</>
);
