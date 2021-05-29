import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Footer = ({
	children,
	className,
	copyright,
	shadow,
	transparent,
}) => {
	const year = new Date().getFullYear();

	return (
		<div
			className={clsx('app-footer text-black-50', {
				'app-footer--shadow': shadow,
				'app-footer--opacity-bg': transparent,
			}, className)}
		>
			<div className="app-footer--first">
				{children}
			</div>
			<div className="app-footer--second">
				<span>{copyright}</span> © {year}
			</div>
		</div>
	);
};

Footer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	copyright: PropTypes.string,
	shadow: PropTypes.bool,
	transparent: PropTypes.bool,
};

Footer.defaultProps = {
	children: null,
	className: '',
	copyright: '53JS',
	shadow: false,
	transparent: false,
};

export default Footer;
