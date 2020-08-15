import React from 'react';
import PropTypes from 'prop-types';
import {
	FormGroup, Label, Input,
} from 'reactstrap';
import clsx from 'clsx';
import { Field } from 'react-jsonschema-form-validation';

const FieldChecked = ({
	border,
	name,
	data,
	value,
	hideInput,
	type,
	id,
	children,
}) => {
	const checked = data[name] === value;
	return (
		<FormGroup check>
			<Field
				checked={checked}
				id={(id && id) || value}
				className="form-check-input"
				component={Input}
				name={name}
				type={type}
				value={value}
				style={(hideInput && { opacity: 0 }) || {}}
			/>
			<Label
				htmlFor={(id && id) || value}
				className={clsx('d-flex align-items-center',
					{ 'border border-first': border && checked })}
			>
				{children}
			</Label>
		</FormGroup>
	);
};
FieldChecked.propTypes = {
	border: PropTypes.bool,
	name: PropTypes.string.isRequired,
	data: PropTypes.shape(PropTypes.string),
	value: PropTypes.string.isRequired,
	hideInput: PropTypes.bool,
	type: PropTypes.string.isRequired,
	id: PropTypes.string,
	children: PropTypes.node,
};
FieldChecked.defaultProps = {
	border: false,
	data: {},
	hideInput: false,
	id: '',
	children: null,
};

export default React.memo(FieldChecked);
