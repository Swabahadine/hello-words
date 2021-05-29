import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

import './CustomSelect.scss';

const customStyles = {
	//...styles,
	control: (base, state) => ({
		...base,
		//'&:hover': { borderColor: '#e4e7ea' }, // border style on hover
		//'&:focus': { borderColor: '#707e8a' }, // border style on hover
		//'&:active': { borderColor: '#e4e7ea' }, // border style on hover
		//border: '1px solid #e4e7ea', // default border color
		boxShadow: 'none', // no box-shadow
		borderColor: state.isFocused ? '#8ae9e2' : '#d1d2db',
		'&:hover': {
			borderColor: state.isFocused ? '#8ae9e2' : '#d1d2db',
		},
		minHeight: 'fit-content',
		height: 'fit-content',
	}),
	container: (provided) => ({
		...provided,
		padding: 0,
		height: 'fit-content',
	}),

	indicatorsContainer: (provided) => ({
		...provided,
		height: '29px',
	}),
	input: (provided) => ({
		...provided,
		height: '21px',
	}),
};

const CustomSelect = ({
	formatValue,
	isMulti,
	name,
	onChange,
	placeholder,
	styles,
	...props
}) => {
	const handleChange = (value) => {
		const event = {
			target: {
				name,
				value: isMulti
					? (value || []).map(formatValue)
					: formatValue(value),
			},
		};

		onChange(event);
	};
	return (
		<Select
			// eslint-disable-next-line react/jsx-props-no-spreading
			classNamePrefix="CustomSelect"
			onChange={handleChange}
			placeholder={placeholder}
			styles={{ ...styles, ...customStyles }}
			{...props}
		/>
	);
};

CustomSelect.propTypes = {
	formatValue: PropTypes.func,
	isMulti: PropTypes.bool,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	styles: PropTypes.shape({
		control: PropTypes.shape({}),
	}),
};

CustomSelect.defaultProps = {
	formatValue: (value) => value,
	isMulti: false,
	onChange: () => {},
	placeholder: 'Sélectionner',
	styles: {},
};

export default React.memo(CustomSelect);
