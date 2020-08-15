import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ButtonLoading from '../Button/Loading';


const PageTitle = ({
	children,
	className,
	description,
	icon,
	loading,
	shadow,
	saveBtn,
	title,
}) => (
	<div
		className={clsx(
			'app-page-title',
			className,
			{ 'app-page-title--shadow': shadow },
		)}
	>
		<div className="app-page-title--first">
			{icon && (
				<div className="app-page-title--iconbox d-70">
					<div className="d-70 d-flex gradient-icon align-items-center justify-content-center">
						<i className="pe-7s-umbrella display-3 gradient-icon bg-ripe-malin" />
					</div>
				</div>
			)}
			<div className="app-page-title--heading">
				<h1>{title}</h1>
				{description && (
					<div className="app-page-title--description">{description}</div>
				)}
			</div>
		</div>
		{saveBtn && (
			<div className="d-flex align-items-center">
				<ButtonLoading
					className="text-nowrap"
					color="first"
					loading={loading}
					type="submit"
				>
					<span className="text-white d-xl-block">Enregistrer</span>
				</ButtonLoading>
			</div>
		)}
		{children}
	</div>
);

PageTitle.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.bool,
	loading: PropTypes.bool,
	saveBtn: PropTypes.bool,
	shadow: PropTypes.bool,
	title: PropTypes.string.isRequired,
};

PageTitle.defaultProps = {
	children: null,
	description: '',
	className: '',
	icon: false,
	loading: false,
	saveBtn: false,
	shadow: false,
};
export default React.memo(PageTitle);
