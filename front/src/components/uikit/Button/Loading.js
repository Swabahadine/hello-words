import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button } from 'reactstrap';

import ButtonIcon from './Icon';
import ButtonLabel from './Label';

const ButtonLoading = ({
	children,
	className,
	loading,
	...props
}) => (
	<Button
		className={clsx({ 'btn-spinner': loading, 'justify-content-center': loading }, className)}
		disabled={loading}
		{...props}
	>
		{loading ? (
			<>
				<ButtonIcon className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
				<ButtonLabel>Chargement...</ButtonLabel>
			</>
		) : children}
	</Button>
);

ButtonLoading.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	loading: PropTypes.bool,
};

ButtonLoading.defaultProps = {
	children: null,
	className: '',
	loading: false,
};

export default ButtonLoading;
