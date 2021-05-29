import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

const AlertRefused = () => (
	<div className="pb-4">
		<UncontrolledAlert style={{ opacity: 1 }} color="danger">
			Ce service a été refusé par un un administrateur MYAUTONOMIE.
		</UncontrolledAlert>
	</div>
);

export default AlertRefused;
