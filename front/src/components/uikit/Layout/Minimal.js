import React from 'react';
import PropTypes from 'prop-types';

import LayoutWrapper from './Wrapper';
import LayoutMain from './Main';

const LayoutMinimal = ({ children, className }) => (
	<LayoutWrapper className={className}>
		<LayoutMain>{children}</LayoutMain>
	</LayoutWrapper>
);

LayoutMinimal.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

LayoutMinimal.defaultProps = {
	className: '',
};

export default LayoutMinimal;
