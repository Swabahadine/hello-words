import memoize from 'memoize-one';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Select from './CustomSelect';

class SelectSimple extends PureComponent {
	constructor(props) {
		super(props);

		this.getOptionValue = memoize((options, values, getOptionValue, isMulti) => {
			getOptionValue = getOptionValue || ((option) => option.value);
			const comparator = (value) => (option) => getOptionValue(option) === value;

			return values && (isMulti
				? values.map((value) => options.find(comparator(value)))
				: options.find(comparator(values)));
		});
	}

	render() {
		const {
			getOptionValue,
			isMulti,
			options,
			value,
			...props
		} = this.props;

		const optionValue = this.getOptionValue(options, value, getOptionValue, isMulti);

		return (
			<Select
				getOptionValue={getOptionValue}
				isMulti={isMulti}
				options={options}
				value={optionValue}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}
			/>
		);
	}
}

SelectSimple.propTypes = {
	getOptionValue: PropTypes.func,
	isMulti: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.shape({})),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

SelectSimple.defaultProps = {
	getOptionValue: undefined,
	isMulti: false,
	options: [],
	value: undefined,
};

export default React.memo(SelectSimple);
