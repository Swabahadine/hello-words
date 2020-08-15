import React from 'react';
import PropTypes from 'prop-types';
import {
	FormGroup, CustomInput,
} from 'reactstrap';
import { Field } from 'react-jsonschema-form-validation';

const FieldCheckbox = ({
	name,
	label,
	data,
	id,
	value,
	...props
}) => (
	<FormGroup {...props} check>
		<Field
			className="form-check-input"
			component={CustomInput}
			id={id}
			type="checkbox"
			label={label}
			name={name}
			onChange={() => {
				data[name][id] = !data[name][id];
			}}
			value={data[name][id]}
		/>
	</FormGroup>
);
FieldCheckbox.propTypes = {
	data: PropTypes.shape(PropTypes.string),
	value: PropTypes.bool,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
FieldCheckbox.defaultProps = {
	data: {},
	value: false,
};

export default React.memo(FieldCheckbox);
