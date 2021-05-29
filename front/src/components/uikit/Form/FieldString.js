import React from 'react';
import { Field, FieldError } from 'react-jsonschema-form-validation';
import PropTypes from 'prop-types';
import {
	FormGroup,
	Input,
	Label,
} from 'reactstrap';

const FieldString = ({
	label,
	name,
	...props
}) => (
	<FormGroup>
		<Label>
			{label}
		</Label>
		<Field
			component={Input}
			name={name}
			type="text"
			{...props}
		/>
		<FieldError name={name} />
	</FormGroup>
);

FieldString.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

FieldString.defaultProps = {
};

export default React.memo(FieldString);
