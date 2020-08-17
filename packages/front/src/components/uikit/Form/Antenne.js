import React from 'react';
import { Field, FieldError } from 'react-jsonschema-form-validation';
import PropTypes from 'prop-types';

import {
	FormGroup,
	Input,
} from 'reactstrap';

import LayoutContentTitle from '../Page/ContentTitle';

const Antenne = ({
	className,
	data,
	main,
	prefix,
	title,
}) => (
	<LayoutContentTitle title={title} className={className}>
		<FormGroup className="d-flex">
			<div className="d-flex flex-column w-100">
				<Field
					component={Input}
					name={`${prefix}.label`}
					placeholder="Libellé"
					type="text"
					value={data?.label}
				/>
				<FieldError name={`${prefix}.label`} />
			</div>
		</FormGroup>
	</LayoutContentTitle>
);
Antenne.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		label: PropTypes.string,
		street: PropTypes.string,
		precision: PropTypes.string,
		zip: PropTypes.string,
		city: PropTypes.string,
	}).isRequired,
	main: PropTypes.bool,
	title: PropTypes.string.isRequired,
	prefix: PropTypes.string.isRequired,
};

Antenne.defaultProps = {
	className: '',
	main: false,
};

export default React.memo(Antenne);
