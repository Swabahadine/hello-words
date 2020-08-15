import React from 'react';
import PropTypes from 'prop-types';
import {
	Label,
} from 'reactstrap';

const LayoutContentTitle = ({
	afterTitle,
	children,
	color,
	title,
	...props
}) => (
	<div {...props}>
		{title && (
			<div className="py-1">
				<Label>
					<span className={`font-weight-bold text-${color}`}>
						{title}&nbsp;
					</span>
					<br />
					<small>{afterTitle}</small>
				</Label>
			</div>
		)}
		{children}
	</div>
);

LayoutContentTitle.propTypes = {
	afterTitle: PropTypes.string,
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	title: PropTypes.node,
};

LayoutContentTitle.defaultProps = {
	afterTitle: '',
	color: 'dark',
	title: '',
};

export default React.memo(LayoutContentTitle);
